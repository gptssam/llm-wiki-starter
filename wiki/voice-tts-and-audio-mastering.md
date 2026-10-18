---
title: "AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격"
id: "voice-tts-and-audio-mastering"
category: "production"
updated: "2026-10-16"
sources:
  - "raw/2026-10-14_tts_voice_comparison_notes.md"
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
  - "raw/2026-10-15_platform_ai_disclosure_policy.md"
tags:
  - "tts"
  - "audio-mastering"
  - "whisper"
  - "typecast"
  - "lufs"
---

# AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격

> **한 줄 요약**: 얼굴 없는(Faceless) 콘텐츠의 몰입도를 좌우하는 나레이션 품질을 위해 메인 강사('필재')와 질문자('은경')의 화법을 분리하고, 합성 직후 Whisper 전사 대조·무음 압축(`0.3s → 0.22s`)·`-14.7 LUFS` 마스터링을 거치는 표준 오디오 공정입니다.

## 1. 핵심 개념 및 배경

카메라 없이 화면 녹화와 캐릭터 일러스트([[ai-video-production-pipeline]])로 진행하는 강의·쇼츠에서는 오디오의 호흡이 시청 지속시간을 결정합니다 (`✔`). TTS 원본 파일을 후처리 없이 그대로 쓰면 문장 사이의 긴 침묵, 어미 늘어짐, 들숨 소리, 그리고 영문 약어 오독 때문에 시청자가 피로감을 느끼고 이탈합니다 (`raw/2026-10-14_tts_voice_comparison_notes.md` `✔`).

이를 방지하기 위해 ① **화자 분리(메인 설명 `~습니다`체 vs 초보자 질문 `~요`체)**, ② **합성 직후 Whisper 전사 Diff 검수**([[semi-automated-qa-gate]]), ③ **무음·숨소리 정밀 압축 및 최종 MP4 True Peak 리미팅**의 3단계 파이프라인을 적용합니다 (`✔`).

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 공정 항목 | 적용 도구 / 보이스 | 정량 기준 및 파라미터 | 실측 효과 / 주의사항 | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|---|
| **메인 강사 음성** | 타입캐스트 「필재」 (1.0x) / 영문 Peter | `~습니다`체 설명 전담 · 단가 **0.495원/cr** | 차분한 중저음 톤, 영문 약어는 한글 발음 표기 후 투입 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **보조 질문자 음성** | 타입캐스트 「은경」 (1.0x) / 영문 Maisie | `~요`체 · 1회 **20자 안팎 (5초 이내)** · 강당 3~4회 | 수강생이 막힐 지점을 대신 질문 (가짜 칭찬·추천 금지) | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **오픈소스 로컬 TTS** | Qwen3-TTS / Kokoro-82M | Apple Silicon 로컬 구동 · API 비용 **0원** | 다국어 실험용 적합, 한국어 숫자 억양은 상용 대비 보완 필요 | `△` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **무음 및 호흡 압축** | `tighten_audio` & `trim_gaps` | 무음 `>0.30s → 0.22s` 압축 · 어미 `1.8x` · 숨소리 `0.16s` | 190.50초 원본을 **175.46초**로 단축해 텐션 유지 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **최종 음향 마스터링** | FFmpeg Loudnorm & 4x Limiter | 나레이션 **-14.7 LUFS**, 룸톤 **-42~-38dB**, Peak **≤ -1.0dBTP** | 기계적 합성 효과음 금지 · AAC 인코딩 후 피크 튐 방지 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |
| **배포 라이선스 준수** | 강의 자료 패키징 규칙 | `.wav` 원본 음성 파일 단독 배포 금지 → 대본 `.txt`만 배포 | 타입캐스트 상업 이용 약관 준수 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[ai-video-production-pipeline]] — 오디오 볼륨(RMS)에 맞춰 입모양이 움직이는 캐릭터 스탠딩 연출과의 결합
- [[semi-automated-qa-gate]] — Whisper 전사 Diff 대조 및 비디오 클립 내 불필요한 영어 음성 제거 게이트
- [[creator-compliance-and-platform-policy]] — TTS `.wav` 단독 재배포 금지 약관 및 가상인물 추천·보증 표시 지침 준수
- [[llm-wiki-architecture]] — 오디오 엔지니어링 파라미터와 실패 사례를 위키로 구조화해 재사용하는 체계
