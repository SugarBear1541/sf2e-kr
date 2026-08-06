/**
 * SF2e-KR 0.9.7 — Babele registration and targeted embedded-item repair.
 */
const SF2E_KR_ID = "sf2e-kr";
let sf2eKrCommonItemTranslations = null;

Hooks.once("init", () => {
  if (typeof game.babele === "undefined") {
    console.error("SF2e-KR | Babele 모듈을 찾지 못했습니다.");
    return;
  }

  game.babele.register({
    module: SF2E_KR_ID,
    lang: "ko",
    dir: "compendium/ko"
  });

  console.log("SF2e-KR | Babele 번역 디렉터리를 등록했습니다.");
});

async function sf2eKrLoadCommonItemTranslations() {
  if (sf2eKrCommonItemTranslations) return sf2eKrCommonItemTranslations;
  try {
    const response = await fetch(`modules/${SF2E_KR_ID}/compendium/ko/sf2e.equipment.json`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    sf2eKrCommonItemTranslations = {
      UPB: data.entries?.UPB,
      Credstick: data.entries?.Credstick
    };
  } catch (error) {
    console.error("SF2e-KR | 공용 아이템 번역을 불러오지 못했습니다.", error);
    sf2eKrCommonItemTranslations = {};
  }
  return sf2eKrCommonItemTranslations;
}

async function sf2eKrRepairEmbeddedItems(actor) {
  if (!game.user?.isGM || !actor?.items) return;
  const translations = await sf2eKrLoadCommonItemTranslations();
  const updates = [];

  for (const item of actor.items) {
    const englishKey = item.name === "UPB" || item.name === "범용 중합체 기반재(UPB)"
      ? "UPB"
      : item.name === "Credstick" || item.name === "크레드스틱(Credstick)"
        ? "Credstick"
        : null;
    if (!englishKey) continue;

    const translated = translations[englishKey];
    if (!translated?.name || !translated?.description) continue;
    const currentDescription = foundry.utils.getProperty(item, "system.description.value") ?? "";
    const update = { _id: item.id };
    let changed = false;

    if (item.name !== translated.name) {
      update.name = translated.name;
      changed = true;
    }
    if (currentDescription !== translated.description) {
      update["system.description.value"] = translated.description;
      changed = true;
    }
    if (changed) updates.push(update);
  }

  if (updates.length) {
    await actor.updateEmbeddedDocuments("Item", updates, { sf2eKrMigration: true });
    console.log(`SF2e-KR | ${actor.name}: UPB/크레드스틱 ${updates.length}개를 교정했습니다.`);
  }
}

Hooks.once("ready", async () => {
  if (!game.user?.isGM) return;
  for (const actor of game.actors ?? []) {
    try { await sf2eKrRepairEmbeddedItems(actor); }
    catch (error) { console.error(`SF2e-KR | ${actor.name} 아이템 교정 실패`, error); }
  }
});

Hooks.on("createActor", (actor) => {
  if (game.user?.isGM) queueMicrotask(() => sf2eKrRepairEmbeddedItems(actor));
});

Hooks.on("createItem", (item, _options, userId) => {
  if (game.user?.isGM && userId === game.user.id && item.parent?.documentName === "Actor") {
    queueMicrotask(() => sf2eKrRepairEmbeddedItems(item.parent));
  }
});

Hooks.on("canvasReady", async () => {
  if (!game.user?.isGM) return;
  const syntheticActors = new Map();
  for (const token of canvas.tokens?.placeables ?? []) {
    if (token.actor && !token.document.actorLink) syntheticActors.set(token.actor.uuid, token.actor);
  }
  for (const actor of syntheticActors.values()) {
    try { await sf2eKrRepairEmbeddedItems(actor); }
    catch (error) { console.error(`SF2e-KR | 합성 액터 ${actor.name} 아이템 교정 실패`, error); }
  }
});
