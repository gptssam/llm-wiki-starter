---
title: "1인 크리에이터 반자동 검수 게이트와 1차 원문 판정"
id: "semi-automated-qa-gate"
category: "workflow"
updated: "2026-10-16"
sources:
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
  - "raw/2026-10-11_ai_video_workflow_memo.md"
  - "raw/2026-10-14_tts_voice_comparison_notes.md"
tags:
  - "qa-gate"
  - "fact-check"
  - "semi-automated"
  - "lint"
---

# 1인 크리에이터 반자동 검수 게이트와 1차 원문 판정

> **한 줄 요약**: 100% 무인 자동화 공장이 겪는 환각·품질 붕괴를 막기 위해, 반복 작업 90%는 에이전트와 스크립트로 자동화하되 '1차 원문(`✔`) 대조 · 360p 사전 검수 · 오디오/링크 무결성 검사' 3곳에 명확한 검수 게이트를 두는 운영 원칙입니다.

## 1. 핵심 개념 및 배경

외부에서 흔히 바이럴되는 '무인 자동화 쇼츠 공장(시트 한 줄 입력 → 대본·영상·업로드 전자동)'을 실제로 구동해 보면, ① 2차 언론 보도의 오보를 사실로 단정하는 환각, ② 영상 클립 내 개수 오류 및 기괴한 영어 잡음 유입, ③ 플랫폼 정책 위반으로 인한 채널 제재 위험이 발생합니다 (`raw/2026-10-13_solo_creator_automation_meeting.md` `✔`).

따라서 지속 가능한 1인 미디어 및 [[llm-wiki-architecture]] 운영의 핵심은 **"무엇을 에이전트에게 맡기고, 어느 관문(Gate)을 결정론적 스크립트와 사람이 판정할 것인가"**를 설계하는 데 있습니다.

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 검수 게이트 단계 | 대상 공정 | 자동화 영역 (에이전트 · 스크립트) | 필수 통과 기준 (Pass Criteria) | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|---|
| **Gate 1: 팩트 및 위키 무결성** | 리서치 · 대본 · 위키 컴파일 | `wiki_tool.py lint` 6대 항목 자동 검사 | 1차 원문(`✔`)과 2차 보도(`△`) 분리 표기 · 끊어진 `[[위키링크]]` 0건 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |
| **Gate 2: 영상 360p 사전 검증** | [[ai-video-production-pipeline]] | 프롬프트 배치 생성 · 해상도/프레임 차 측정 | 9:16 비율 확인 · 첫 프레임 움직임(≥1.86px) · 360p(4cr) 통과 후 720p 제출 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |
| **Gate 3: 전사 Diff 및 음향** | [[voice-tts-and-audio-mastering]] | Whisper 전사 대조 · `tighten` 0.3/0.22초 압축 | 숫자·약어 오독 0건 · 클립 내 영어 잡음 무음 처리 · `-14.7 LUFS` | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **Gate 4: 배포 및 정책 고지** | [[creator-compliance-and-platform-policy]] | 금칙어 grep · 파일명 일치 대조 | 수익 보장 문구 0건 · 플랫폼 AI 생성 라벨 ON · 개인정보 노출 0건 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[llm-wiki-architecture]] — `/lint` 검수 게이트가 적용되는 3계층 위키 구조
- [[agent-harness-portability]] — Antigravity(Gemini)와 Claude Code 양쪽에서 동일하게 실행되는 `wiki_tool.py lint`
- [[ai-video-production-pipeline]] — 57크레딧 손실을 막아주는 9:16 저장 및 360p→720p 2단계 제출 게이트
- [[voice-tts-and-audio-mastering]] — TTS 합성 직후 Whisper 전사 대조와 무음·숨소리 정밀 편집 게이트
- [[creator-compliance-and-platform-policy]] — 표시광고법 준수 및 플랫폼 AI 라벨 의무화 점검 게이트
