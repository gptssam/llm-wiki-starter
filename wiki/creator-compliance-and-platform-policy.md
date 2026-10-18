---
title: "AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략"
id: "creator-compliance-and-platform-policy"
category: "compliance"
updated: "2026-10-16"
sources:
  - "raw/2026-10-15_platform_ai_disclosure_policy.md"
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
tags:
  - "compliance"
  - "ai-disclosure"
  - "platform-policy"
  - "owned-media"
---

# AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략

> **한 줄 요약**: AI 생성 라벨 표시와 '수익 보장 문구 금지(표시광고법 준수)'를 철저히 지키고, 단일 플랫폼 제재 리스크를 넘어 로컬 마크다운 위키·GitHub 오픈소스·자체 매체 사이트로 '내 땅(Owned Media)'을 구축하는 전략입니다.

## 1. 핵심 개념 및 배경

AI 기술을 활용한 콘텐츠와 강의 시장이 급성장하면서 각 플랫폼(유튜브·인스타·틱톡)의 **AI 생성물 표시 의무**와 규제 당국(공정거래위원회 표시광고법·추천보증 심사지침)의 **허위·과장 광고 단속**이 한층 강화되었습니다 (`raw/2026-10-15_platform_ai_disclosure_policy.md` `✔`).

특히 "월 ○○만 원 자동 수익 보장" 같은 자극적 문구나 무분별한 공장형 업로드(`raw/2026-10-13_solo_creator_automation_meeting.md`)는 소비자 피해와 계정 해지를 부릅니다. 대신 **우리가 직접 재현·측정한 데이터(`✔`)와 MIT 오픈소스 템플릿(`github.com/gptssam`)을 투명하게 공개**하는 정직성 원칙이 가장 강력한 신뢰 자산이 됩니다.

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 영역 | 필수 준수 규칙 (Compliance Rule) | 금지 행위 (Red Line) | 검증 및 실행 방법 | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|---|
| **플랫폼 AI 라벨** | 업로드 시 AI 생성 콘텐츠 토글 상시 ON (인스타·스레드·틱톡·유튜브) | AI 생성물을 실제 촬영물·실존 인물처럼 기만 | 게시 전 체크리스트 및 스레드 1번 글 AI 레이블 확인 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |
| **표시광고법 준수** | 소요 시간·비용·파일 구조·실패 기록만 사실대로 제시 | "월 N만원 보장", "원클릭 자동 돈 복사", 가짜 수강 후기 | 대본·소개글 배포 전 금칙어 grep 검사 (`0건` 필수) | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |
| **도구 약관 준수** | 완성 편집본 + 프롬프트 규격서 + 순수 대본(`.txt`) 배포 | Flow 클립 낱개 재판매 · 타입캐스트 `.wav` 단독 배포 | 배포 폴더(`llm-wiki-starter`) 내 미디어 원파일 제외 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |
| **탈플랫폼 3중 본진** | ① 로컬 마크다운 위키([[llm-wiki-architecture]]) ② GitHub 무료 배포 ③ 자체 사이트·뉴스레터 | 단일 SNS/동영상 플랫폼 하나에만 100% 의존 | [[agent-harness-portability]] 기반 로컬 자산화 상시 유지 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[llm-wiki-architecture]] — 플랫폼이 사라져도 내 로컬 폴더에 100% 남는 마크다운 지식 베이스
- [[agent-harness-portability]] — 특정 빅테크 AI 모델 한도나 정책 변경에도 흔들리지 않는 멀티 에이전트 구조
- [[semi-automated-qa-gate]] — 업로드 전 금칙어·근거 등급(`✔`/`△`)·AI 라벨을 점검하는 4단계 게이트
- [[ai-video-production-pipeline]] — Google Flow(Veo) 약관 준수 및 크레딧 0원 캐릭터 스프라이트 연출법
- [[voice-tts-and-audio-mastering]] — 타입캐스트 `.wav` 재배포 금지 약관 준수 및 질문 캐릭터('프롬이') 운영 수칙
