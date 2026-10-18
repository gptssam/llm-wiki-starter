---
title: "멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)"
id: "agent-harness-portability"
category: "architecture"
updated: "2026-10-16"
sources:
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
  - "raw/2026-10-12_karpathy_llm_wiki_clipping.md"
tags:
  - "antigravity"
  - "gemini"
  - "claude-code"
  - "harness-engineering"
  - "agents-md"
---

# 멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)

> **한 줄 요약**: 위키 헌법을 `AGENTS.md`(공통), `GEMINI.md`(Antigravity용), `CLAUDE.md`(Claude Code용) 3중 구조로 설계하고 결정론적 파이썬 검사기(`wiki_tool.py`)를 결합하면, 특정 AI 도구의 주간 한도가 차도 1분 만에 다른 에이전트로 갈아끼워 똑같은 품질로 위키를 운영할 수 있습니다.

## 1. 핵심 개념 및 배경

1인 크리에이터나 리서처가 AI 에이전트로 실무 파이프라인을 돌릴 때 가장 흔히 겪는 병목은 **단일 도구의 사용량 한도(Usage Limit) 도달**입니다 (`✔`). 실제로 본 스타터 킷을 구축하는 과정에서도 집중적인 리서치 직후 Claude Code의 주간 한도에 도달하는 상황이 발생했습니다 (`raw/2026-10-13_solo_creator_automation_meeting.md` `✔`).

만약 위키 관리 규칙이 특정 툴의 클라우드 설정이나 독점 플러그인에 묶여 있었다면 작업이 전면 중단되었겠지만, [[llm-wiki-architecture]]는 다음 두 가지 **하네스 엔지니어링(Harness Engineering)** 장치 덕분에 **Antigravity (Gemini 4 Argon High)**로 즉시 전환하여 중단 없이 컴파일을 마쳤습니다 (`✔`):

1. **마크다운 헌법 라우팅 (`AGENTS.md` 단일 출처)**:
   - 모든 위키 스키마와 `/ingest`, `/compile`, `/lint` 규칙은 `AGENTS.md`에 정의합니다.
   - Antigravity(Gemini)는 `GEMINI.md`와 `.agents/workflows/`를 통해, Claude Code는 `CLAUDE.md`와 `.claude/commands/`를 통해 동일한 `AGENTS.md` 헌법을 읽어들입니다.
2. **모델 독립적 결정론적 검증기 (`scripts/wiki_tool.py`)**:
   - 에이전트가 바뀌어도 최종 품질 판정은 AI의 주관적 느낌에 맡기지 않고, 파이썬 스크립트가 실행하는 6대 `/lint` 규칙([[semi-automated-qa-gate]])으로 동일하게 검증합니다.

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 에이전트 환경 | 자동 로드 헌법 파일 | 워크플로우 경로 | 검증 명령어 (공통) | 전환 소요 시간 (`✔` 실측) | 원자료 출처 |
|---|---|---|---|---|---|
| **Antigravity (Gemini 4 Argon High)** | `GEMINI.md` → `AGENTS.md` | `.agents/workflows/*.md` | `python3 scripts/wiki_tool.py lint` | **1분 미만** (폴더 열기 즉시) | `raw/2026-10-13_solo_creator_automation_meeting.md` |
| **Claude Code CLI** | `CLAUDE.md` → `AGENTS.md` | `.claude/commands/*.md` | `python3 scripts/wiki_tool.py lint` | **1분 미만** (`claude` 실행 즉시) | `raw/2026-10-13_solo_creator_automation_meeting.md` |
| **단독 Python CLI (오프라인)** | `AGENTS.md` 스키마 기준 | `scripts/wiki_tool.py` | `python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint` | **0.1초 이내** (API 토큰 0 소모) | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[llm-wiki-architecture]] — 에이전트 헌법이 작동하는 3계층 폴더 구조
- [[knowledge-compounding-vs-rag]] — 특정 SaaS나 벡터 DB에 종속되지 않는 로컬 마크다운 지식 자산화
- [[semi-automated-qa-gate]] — 에이전트가 바뀌어도 일관된 품질을 강제하는 `/lint` 및 1차 원문 검수 게이트
- [[creator-compliance-and-platform-policy]] — 특정 플랫폼이나 단일 AI 도구에 종속되지 않는 크리에이터 생존 전략
