# SF2e-KR

> **별들 사이의 모험을 한국어로.**

[![Release](https://img.shields.io/github/v/release/SugarBear1541/sf2e-kr?label=최신%20버전)](https://github.com/SugarBear1541/sf2e-kr/releases/latest)
![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v14-orange)
![Language](https://img.shields.io/badge/언어-한국어-blue)
![Status](https://img.shields.io/badge/상태-공개%20베타-yellow)

**SF2e-KR**은 Foundry Virtual Tabletop의  
**Starfinder Second Edition 시스템과 컴펜디엄을 한국어로 이용하기 위한 비공식 팬 번역 모듈**입니다.

전체 원문 데이터를 먼저 기계 번역하여 기본 한국어 데이터를 구성한 뒤,  
패스파인더 2판과 스타파인더 2판의 규칙 용어를 기준으로 항목별 손검수와 교정을 진행하고 있습니다.

행동명, 기술명, 상태명, 자동화 문구와 채팅 출력처럼 실제 플레이에 직접 영향을 주는 부분을 중심으로  
기계 번역에서 발생한 오역과 부자연스러운 표현을 지속적으로 수정하고 있습니다.

---

## 현재 번역 범위

- 캐릭터 시트와 주요 시스템 UI
- 종족, 유산, 배경
- 클래스와 클래스 기능
- 일반 피트, 기술 피트, 클래스 피트, 종족 피트
- 주문과 포커스 주문
- 무기, 방어구, 소모품 및 각종 장비
- 기본 행동과 기술 행동
- 상태, 특성 및 피해 유형
- NPC와 크리처 데이터
- 컴펜디엄 폴더와 채팅 카드 출력

전체 데이터에 기본 한국어 번역이 적용되어 있지만,  
사용 빈도가 낮은 항목이나 동적으로 생성되는 문구에는 기계 번역 표현 또는 어색한 문장이 일부 남아 있을 수 있습니다.

---

## 현재 버전

### SF2e-KR 1.0.5

주요 교정 사항:

- 행동명과 기술명의 잘못된 혼용 수정
- 약점, 면역, 저항 표시 문구 정리
- 범위, 사거리, 도달 거리의 `ft` 표기 통일
- 시트와 채팅 카드의 기계 번역 문구 수정
- 규칙 용어집에 따른 명칭 통일

전체 변경사항은 [Releases](https://github.com/CacaoBear/sf2e-kr/releases)에서 확인할 수 있습니다.

---

## 요구 사항

- **Foundry Virtual Tabletop 14**
- **Starfinder Second Edition 시스템**
- **Babele 모듈**

SF2e-KR은 독립적인 게임 시스템이 아닙니다.  
기존 Starfinder Second Edition 시스템 위에서 작동하는 한국어 번역 모듈입니다.

---

## 설치 방법

### Manifest URL로 설치

Foundry VTT의 **애드온 모듈 설치** 화면에서 아래 주소를 입력합니다.

```text
https://github.com/CacaoBear/sf2e-kr/releases/latest/download/module.json
```

설치가 끝나면 사용할 월드에서 다음 모듈을 활성화합니다.

1. Babele
2. SF2e 한국어 번역

이후 Foundry VTT의 언어 설정에서 한국어를 선택합니다.

### 수동 설치

[Releases](https://github.com/CacaoBear/sf2e-kr/releases)에서  
`sf2e-kr.zip`을 내려받아 압축을 푼 뒤 Foundry 사용자 데이터의 `Data/modules` 폴더에 넣습니다.

최종 경로는 다음과 같아야 합니다.

```text
Data/modules/sf2e-kr/module.json
```

---

## 번역 및 검수 방식

- 전체 원문 데이터를 먼저 기계 번역하여 기본 한국어 데이터를 구성합니다.
- 이후 각 항목을 직접 확인하며 오역, 누락, 부자연스러운 문장과 용어 혼용을 손검수합니다.
- 행동명, 기술명, 상태명처럼 서로 다른 규칙 요소를 명확히 구분합니다.
- UUID, 슬러그, 판정식, 피해식 등 Foundry 내부 식별자는 번역하지 않습니다.
- 동일한 규칙 요소는 시트, 컴펜디엄, 링크와 채팅 출력에서 같은 명칭을 사용합니다.
- 패스파인더 2판과 공유하는 규칙은 기존 한국어 용어와의 호환성을 고려합니다.
- 스타파인더 고유 규칙과 설정 용어는 별도로 구분하고 정리합니다.
- 실제 화면 출력과 자동화 작동 여부를 확인하며 오류를 교정합니다.

---

## 오류 제보

번역 오류나 비정상적인 출력이 발견되면  
[GitHub Issues](https://github.com/CacaoBear/sf2e-kr/issues)에 제보해 주세요.

다음 내용을 함께 적어주시면 확인에 도움이 됩니다.

- 문제가 발생한 항목 이름
- 현재 표시되는 문구
- 올바르다고 생각하는 문구
- 가능하다면 화면 캡처
- Foundry VTT와 SF2e 시스템 버전

---

## 프로젝트 상태

현재 버전은 실제 캠페인에서 사용할 수 있는 **공개 베타** 단계입니다.

전체 데이터에는 기계 번역이 적용되어 있으며,  
현재 항목별 손검수와 규칙 용어 통일 작업을 계속 진행하고 있습니다.

핵심 플레이 영역은 대부분 직접 검수했지만,  
사용 빈도가 낮은 피트, 주문, NPC 능력과 동적으로 생성되는 문구에는  
기계 번역 표현이나 어색한 문장이 일부 남아 있을 수 있습니다.

실제 플레이 중 발견되는 문제를 바탕으로 번역 품질과 출력 오류를 지속적으로 수정하고 있습니다.

---

## 비공식 프로젝트 고지

SF2e-KR은 Paizo Inc., Foundry Gaming LLC 또는  
Starfinder Second Edition 시스템 개발진이 제작하거나 승인한 공식 번역물이 아닙니다.

Starfinder, Pathfinder 및 관련 명칭과 설정의 권리는 각 권리자에게 있습니다.

이 저장소는 한국어 사용자의 비상업적 게임 이용을 돕기 위해 제작된 팬 번역 프로젝트입니다.

---

## 제작 및 관리

**SugarBear**

기계 번역 데이터 구성, 손검수, 용어 통일, Foundry VTT 적용 및 유지보수
