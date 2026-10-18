---
title: "복리형 위키 컴파일 vs 조각 검색형 RAG 비교"
id: "knowledge-compounding-vs-rag"
category: "architecture"
updated: "2026-10-16"
sources:
  - "raw/2026-10-12_karpathy_llm_wiki_clipping.md"
  - "raw/2026-10-13_solo_creator_automation_meeting.md"
tags:
  - "rag"
  - "knowledge-compounding"
  - "llm-wiki"
  - "comparison"
---

# 복리형 위키 컴파일 vs 조각 검색형 RAG 비교

> **한 줄 요약**: 질문할 때마다 문서를 잘게 쪼개 검색하고 휘발시키는 기존 RAG와 달리, LLM Wiki는 새로운 메모가 들어올 때마다 기존 지식 문서를 갱신하고 `[[위키링크]]`를 확장하여 지식이 복리(Compounding)로 쌓이게 만듭니다.

## 1. 핵심 개념 및 배경

많은 개인과 팀이 노션이나 구글 드라이브 문서를 벡터 DB에 임베딩하는 **기존 RAG(Retrieval-Augmented Generation)**를 시도하지만, 실무 지식 관리에서는 두 가지 구조적 한계에 부딪힙니다 (`△`):

1. **문맥 단절 (Stateless Chunking)**: 문서를 500자 단위로 기계적으로 자르기 때문에, [[ai-video-production-pipeline]]의 크레딧 손실 기록과 [[semi-automated-qa-gate]]의 검수 규칙처럼 서로 다른 날짜의 메모에 흩어진 인과관계를 한눈에 연결하지 못합니다.
2. **추론 결과의 휘발 (Zero Persistence)**: 채팅창에서 AI와 30분 동안 문서를 분석해 도출한 결론이 채팅 종료와 함께 사라집니다.

반면 [[llm-wiki-architecture]]가 채택한 **위키 컴파일(Wiki Compilation)** 방식은 에이전트가 `raw/` 폴더의 새 메모를 읽을 때마다 `wiki/` 폴더의 정식 마크다운 문서를 직접 고쳐 쓰고(`compile`), 문서 간 모순이나 끊어진 링크를 `/lint`로 잡아냅니다 (`✔`).

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)

| 비교 항목 | 기존 조각 검색형 RAG (Vector DB) | Karpathy 식 LLM Wiki (`raw/` → `wiki/`) | 근거 등급 | 원자료 출처 |
|---|---|---|---|---|
| **지식 저장 단위** | 500자 내외 임의 텍스트 조각 (Chunk) | 완결된 주제의 마크다운 문서 + `[[위키링크]]` 그래프 | `△` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |
| **추론 결과 보존** | 일회성 채팅 응답 후 휘발 (재질문 시 재계산) | `wiki/*.md` 및 `wiki/index.md`에 영구 누적 (복리 효과) | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |
| **출처 및 사실 검증** | 유사도 점수만 반환 (1차/2차 원문 구분 불가) | 프론트매터 `sources:` 및 `✔`(1차)/`△`(2차) 등급 강제 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |
| **인프라 및 비용** | 별도 벡터 DB · 임베딩 파이프라인 구축 필요 | 로컬 폴더 마크다운 + 기본 Python 스크립트 (유지비 0원) | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |
| **도구 이식성** | 특정 SaaS/DB 포맷에 종속 (Lock-in) | [[agent-harness-portability]]로 에이전트 즉시 교체 가능 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |

## 3. 연결된 위키 문서 (Related Concepts)

- [[llm-wiki-architecture]] — `raw/`, `wiki/`, `AGENTS.md`로 구성되는 3계층 위키의 전체 구조
- [[agent-harness-portability]] — 벡터 DB 없이 순수 마크다운만으로 Antigravity와 Claude Code를 오가는 방법
- [[semi-automated-qa-gate]] — 에이전트가 컴파일한 지식의 환각을 막는 1차 원문(`✔`) 대조 및 `/lint` 감사
- [[ai-video-production-pipeline]] — 흩어진 현장 실패 메모가 위키 문서의 표준 공정으로 컴파일된 실제 사례
