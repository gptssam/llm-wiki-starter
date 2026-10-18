---
title: "Karpathy LLM Wiki 3계층 아키텍처"
id: "llm-wiki-architecture"
category: "architecture"
updated: "2026-10-16"
sources:
  - "raw/2026-10-12_karpathy_llm_wiki_clipping.md"
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
tags:
  - "llm-wiki"
  - "architecture"
  - "second-brain"
  - "karpathy"
---

# Karpathy LLM Wiki 3계층 아키텍처

> **한 줄 요약**: 비정형 원자료(`raw/`)를 불변으로 보존하고, AI 에이전트가 마크다운 헌법(`AGENTS.md`)에 따라 상호 연결된 지식 위키(`wiki/`)를 직접 컴파일·유지보수하는 3계층 '제2의 뇌' 아키텍처입니다.

## 1. 핵심 개념 및 배경

Andrej Karpathy가 제안한 **LLM Wiki** 패턴은 AI를 일회성 질의응답 챗봇이 아니라 **'내 로컬 지식 베이스를 상시 편집하고 무결성을 관리하는 전담 위키 사서(Maintainer)'**로 정의합니다 (`△`). 기존 벡터 검색 방식의 한계는 [[knowledge-compounding-vs-rag]] 문서에서 자세히 다루며, 특정 모델의 사용량 한도에 구애받지 않는 구조는 [[agent-harness-portability]]와 직결됩니다.

3계층 아키텍처는 역할이 엄격히 분리된 세 영역으로 구성됩니다 (`✔`):

1. **계층 1 — `raw/` (불변 원자료 계층)**:
   - 회의록, 기사 스크랩, 실험 노트, 정책 요약 등 날것의 메모를 던져 넣는 폴더입니다.
   - 에이전트는 `raw/` 파일을 절대 수정하거나 삭제하지 않으며, 오직 사실 확인(`✔`/`△`)의 출처로만 참조합니다.
2. **계층 2 — `wiki/` (에이전트 컴파일 지식 계층)**:
   - 에이전트가 `raw/`의 파편화된 정보를 주제별로 통합하여 생성한 마크다운 문서들과 전체 목차(`index.md`), 컴파일 기록(`log.md`)이 위치합니다.
   - 모든 개념 문서는 `[[위키링크]]`로 상호 연결되며, [[semi-automated-qa-gate]] 원칙에 따라 `/lint` 무결성 검사를 통과해야 합니다.
3. **계층 3 — `AGENTS.md` · `GEMINI.md` · `CLAUDE.md` (에이전트 헌법 계층)**:
   - 위키 문서의 스키마, 근거 표기 규칙(`✔` 1차 원문 / `△` 2차 추정), 그리고 3대 워크플로우(`/ingest`, `/compile`, `/lint`)를 정의하는 지침서입니다.

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 계층 구분 | 폴더 / 파일 경로 | 수정 권한 | 핵심 검증 규칙 (`scripts/wiki_tool.py`) | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|---|
| **계층 1 (원자료)** | `raw/*.md` | 인간 전용 (에이전트 읽기 전용) | 최소 2개 이상의 `wiki/` 문서에서 출처로 인용될 것 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |
| **계층 2 (위키)** | `wiki/*.md` | 에이전트 컴파일 · 유지보수 | 끊어진 `[[위키링크]]` 0건, 고립 노드 0건, 프론트매터 완비 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |
| **계층 3 (헌법)** | `AGENTS.md` / `GEMINI.md` / `CLAUDE.md` | 인간 + 에이전트 합의 개정 | Antigravity(Gemini) 및 Claude Code 양쪽에서 동일 동작 보장 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |
| **시각화 계층** | `viewer/index.html` | `wiki_tool.py build` 자동 갱신 | 옵시디언 미설치 환경에서도 브라우저 더블클릭 즉시 그래프 탐색 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[knowledge-compounding-vs-rag]] — 조각 검색(RAG) 대신 위키 컴파일 방식이 지식을 복리로 축적하는 원리
- [[agent-harness-portability]] — `AGENTS.md`, `GEMINI.md`, `CLAUDE.md`를 통한 멀티 에이전트 무중단 전환 구조
- [[semi-automated-qa-gate]] — 에이전트 자동 컴파일과 인간의 1차 원문(`✔`) 검수를 결합하는 품질 관리 게이트
- [[creator-compliance-and-platform-policy]] — 로컬 마크다운 위키와 GitHub 저장소를 크리에이터 본진 자산으로 활용하는 전략
