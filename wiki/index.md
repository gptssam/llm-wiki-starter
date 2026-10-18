# 📚 LLM Wiki 전체 목차 및 지식 그래프 색인 (Index)

> **자동 생성 파일**: `python3 scripts/wiki_tool.py build`에 의해 컴파일되었습니다.
> **최종 업데이트**: `2026-10-16` | **원자료(`raw/`)**: `5건 (8,615자)` | **개념 위키(`wiki/`)**: `7건 (17,079자)` | **교차 `[[위키링크]]`**: `30개` | **원자료 인용**: `16회`

---

## 1. 카테고리별 개념 위키 문서 일람

### 🏛️ 아키텍처 & 에이전트 헌법 (Architecture & Harness)

| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |
|---|---|---|---:|---:|---:|
| [[agent-harness-portability]] | **멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)** | 위키 헌법을 `AGENTS.md`(공통), `GEMINI.md`(Antigravity용), `CLAUDE.md`(Claude Code용) 3중 구조로 설계하고 결정론적 파이썬 검사기(`wiki_tool.py`)를 결합하면, 특정 AI 도구의 주간 한도가 차도 1분 만에 다른 에이전트로 갈아끼워 똑같은 품질로 위키를 운영할 수 있습니다. | 4 | 4 | 2 |
| [[knowledge-compounding-vs-rag]] | **복리형 위키 컴파일 vs 조각 검색형 RAG 비교** | 질문할 때마다 문서를 잘게 쪼개 검색하고 휘발시키는 기존 RAG와 달리, LLM Wiki는 새로운 메모가 들어올 때마다 기존 지식 문서를 갱신하고 `[[위키링크]]`를 확장하여 지식이 복리(Compounding)로 쌓이게 만듭니다. | 4 | 3 | 2 |
| [[llm-wiki-architecture]] | **Karpathy LLM Wiki 3계층 아키텍처** | 비정형 원자료(`raw/`)를 불변으로 보존하고, AI 에이전트가 마크다운 헌법(`AGENTS.md`)에 따라 상호 연결된 지식 위키(`wiki/`)를 직접 컴파일·유지보수하는 3계층 '제2의 뇌' 아키텍처입니다. | 4 | 5 | 2 |

### ⚙️ 반자동 검수 & 운영 워크플로우 (Workflow & QA Gates)

| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |
|---|---|---|---:|---:|---:|
| [[semi-automated-qa-gate]] | **1인 크리에이터 반자동 검수 게이트와 1차 원문 판정** | 100% 무인 자동화 공장이 겪는 환각·품질 붕괴를 막기 위해, 반복 작업 90%는 에이전트와 스크립트로 자동화하되 '1차 원문(`✔`) 대조 · 360p 사전 검수 · 오디오/링크 무결성 검사' 3곳에 명확한 검수 게이트를 두는 운영 원칙입니다. | 5 | 6 | 3 |

### 🎬 AI 영상 · 보이스 제작 공정 (Video & Audio Production)

| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |
|---|---|---|---:|---:|---:|
| [[ai-video-production-pipeline]] | **AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출** | AI 영상 제작 시 '9:16 비율 저장 → 360p 시험(4cr) → 720p 본 제출(7~12cr)'의 2단계 공정과 `exactly N` 개수 고정 문법으로 크레딧 낭비를 막고, 강의형 영상에서는 1200×1200 투명 PNG 캐릭터 스탠딩 교체(0cr)로 일관성과 가독성을 동시에 확보합니다. | 4 | 4 | 2 |
| [[voice-tts-and-audio-mastering]] | **AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격** | 얼굴 없는(Faceless) 콘텐츠의 몰입도를 좌우하는 나레이션 품질을 위해 메인 강사('필재')와 질문자('은경')의 화법을 분리하고, 합성 직후 Whisper 전사 대조·무음 압축(`0.3s → 0.22s`)·`-14.7 LUFS` 마스터링을 거치는 표준 오디오 공정입니다. | 4 | 3 | 3 |

### ⚖️ 플랫폼 정책 · 표시 의무 & 본진 전략 (Compliance & Strategy)

| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |
|---|---|---|---:|---:|---:|
| [[creator-compliance-and-platform-policy]] | **AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략** | AI 생성 라벨 표시와 '수익 보장 문구 금지(표시광고법 준수)'를 철저히 지키고, 단일 플랫폼 제재 리스크를 넘어 로컬 마크다운 위키·GitHub 오픈소스·자체 매체 사이트로 '내 땅(Owned Media)'을 구축하는 전략입니다. | 5 | 5 | 2 |

---

## 2. 원자료(`raw/`) ↔ 위키 문서(`wiki/`) 추적 매트릭스 (Traceability Matrix)

| 원자료 파일 (`raw/`) | 작성일 | 분량 | 추출·연결된 위키 문서 (`wiki/`) | 인용 횟수 |
|---|---|---:|---|---:|
| `raw/2026-10-11_ai_video_workflow_memo.md` | 2026-10-11 | 1,637자 (24줄) | [[ai-video-production-pipeline]], [[semi-automated-qa-gate]] | 2회 |
| `raw/2026-10-12_karpathy_llm_wiki_clipping.md` | 2026-10-12 | 1,713자 (34줄) | [[agent-harness-portability]], [[knowledge-compounding-vs-rag]], [[llm-wiki-architecture]] | 3회 |
| `raw/2026-10-13_solo_creator_automation_meeting.md` | 2026-10-13 | 1,781자 (28줄) | [[agent-harness-portability]], [[ai-video-production-pipeline]], [[creator-compliance-and-platform-policy]], [[knowledge-compounding-vs-rag]], [[llm-wiki-architecture]], [[semi-automated-qa-gate]], [[voice-tts-and-audio-mastering]] | 7회 |
| `raw/2026-10-14_tts_voice_comparison_notes.md` | 2026-10-14 | 1,707자 (23줄) | [[semi-automated-qa-gate]], [[voice-tts-and-audio-mastering]] | 2회 |
| `raw/2026-10-15_platform_ai_disclosure_policy.md` | 2026-10-15 | 1,777자 (32줄) | [[creator-compliance-and-platform-policy]], [[voice-tts-and-audio-mastering]] | 2회 |

---

## 3. 에이전트 실행 및 뷰어 안내

- **Antigravity (Gemini 4 Argon High)**: `GEMINI.md` 및 `AGENTS.md` 자동 인식
- **Claude Code CLI**: `CLAUDE.md` 및 `.claude/commands/` (`/ingest`, `/compile`, `/lint`) 지원
- **인터랙티브 지식 그래프 뷰어**: 브라우저에서 `viewer/index.html` 파일을 열면 전체 노드·엣지 그래프와 Before(`raw/`) vs After(`wiki/`) 비교 화면을 탐색할 수 있습니다.
