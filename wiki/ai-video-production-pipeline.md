---
title: "AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출"
id: "ai-video-production-pipeline"
category: "production"
updated: "2026-10-16"
sources:
  - "raw/2026-10-11_ai_video_workflow_memo.md"
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
tags:
  - "ai-video"
  - "veo"
  - "flow"
  - "character-sprite"
  - "cost-optimization"
---

# AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출

> **한 줄 요약**: AI 영상 제작 시 '9:16 비율 저장 → 360p 시험(4cr) → 720p 본 제출(7~12cr)'의 2단계 공정과 `exactly N` 개수 고정 문법으로 크레딧 낭비를 막고, 강의형 영상에서는 1200×1200 투명 PNG 캐릭터 스탠딩 교체(0cr)로 일관성과 가독성을 동시에 확보합니다.

## 1. 핵심 개념 및 배경

AI 비디오 모델(Google Flow / Veo 3.1, Kling 3.0 등)을 실무에 도입할 때 가장 큰 리스크는 **초기 설정 실수와 무분별한 재뽑기로 인한 크레딧 증발**입니다 (`✔`). 실제로 새 프로젝트의 기본 해상도 비율(16:9)을 바꾸지 않고 제출해 한 번에 57크레딧을 손실한 현장 기록(`raw/2026-10-11_ai_video_workflow_memo.md` `✔`)은 [[semi-automated-qa-gate]]의 중요성을 잘 보여줍니다.

이를 해결하기 위해 쇼츠·광고 클립에는 **2단계 해상도 제출 공정**을 적용하고, 10분 이상의 16:9 기술 강의에는 AI 비디오 재생성 대신 **고해상도 투명 PNG 캐릭터 상태 스왑(Swap) + 오디오 볼륨 연동 입모양 합성** 방식을 결합합니다 (`✔`).

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 공정 단계 / 항목 | 표준 규격 및 프롬프트 규칙 | 크레딧 / 비용 (`✔` 실측) | 방어하는 주요 실패 유형 | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|---|
| **0단계: 프로젝트 초기화** | 생성 전 `9:16`(쇼츠) 또는 `16:9`(강의) 비율 및 `x1` 저장 확인 | 미확인 시 **57cr 손실** 발생 | 기본값(16:9) 오제출로 인한 전 컷 폐기 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |
| **1단계: 360p 시험 제출** | 첫 컷·복잡한 사건 컷 360p 사전 검증 (광류 ≥ 1.86px/frame) | 4초 **4cr** / 6초 **5cr** / 8초 **6cr** | 첫 프레임 정지, 깨진 텍스트 유입, 카메라 역방향 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |
| **2단계: 720p 본 제출** | 360p 통과 컷만 720p 제출 (10초 오인식 카드 즉시 거부) | 4초 **7cr** / 6초 **10cr** / 8초 **12cr** | 10초 카드 버그(15cr+) 및 불량 프롬프트 고비용 소모 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |
| **물리 개수 고정 규칙** | `exactly N ... no more and no fewer` 영문 구문 명시 + 키워드 자막 보완 | 재뽑기 횟수 5회 → 1~2회 단축 | 층수·사물 개수가 3개나 6개로 틀리는 현상 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |
| **강의용 캐릭터 연출** | 1200×1200 투명 PNG 7종 상태 스왑 + 고밀도 코드 화면 페이드아웃 | 추가 비디오 생성 **0cr** | 캐릭터 얼굴·이마 한글 텍스트 깨짐 및 코드 가림 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[semi-automated-qa-gate]] — 360p 시험 제출과 Whisper 오디오 검사를 결합한 반자동 품질 게이트
- [[voice-tts-and-audio-mastering]] — 캐릭터 스탠딩 입모양(RMS 4단계)과 결합되는 나레이션 합성·마스터링 공정
- [[creator-compliance-and-platform-policy]] — Google Flow(Veo) 약관 준수(SynthID 보존, 클립 낱개 재판매 금지) 및 AI 표시 의무
- [[knowledge-compounding-vs-rag]] — 현장의 57cr 실패 메모가 재사용 가능한 표준 공정 문서로 컴파일되는 과정
