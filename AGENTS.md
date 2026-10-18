# AGENTS.md — LLM Wiki Universal Agent Constitution (공통 마크다운 헌법)

> **호환 에이전트**: Antigravity (Gemini 4 Argon High / Gemini CLI) · Claude Code · Cursor · Windsurf · Codex CLI
> **아키텍처 기반**: Andrej Karpathy의 `LLM Wiki` 3계층 패턴 (`raw/` → `wiki/` → `AGENTS.md`)

이 저장소는 흩어진 비정형 메모·회의록·스크랩(`raw/`)을 에이전트가 직접 읽고, 요약·교차 검증하여 상호 연결된 마크다운 지식 위키(`wiki/`)로 컴파일(Compile)하고 유지보수하는 **'제2의 뇌(Second Brain)' 스타터 킷**입니다.

특정 AI 도구 하나에 종속되지 않도록 **공통 헌법(`AGENTS.md`)**을 단일 출처(Single Source of Truth)로 삼으며, `GEMINI.md`(Antigravity/Gemini용)와 `CLAUDE.md`(Claude Code용)가 모두 이 규칙을 따릅니다.

---

## 1. 3계층 폴더 구조 및 불변 규칙 (3-Layer Architecture)

```text
llm-wiki-starter/
├── AGENTS.md                 # [계층 3] 전 에이전트 공통 위키 헌법 (단일 출처)
├── GEMINI.md                 # [계층 3] Antigravity / Gemini 전용 진입점
├── CLAUDE.md                 # [계층 3] Claude Code 전용 진입점
├── raw/                      # [계층 1] 비정형 원자료 폴더 (읽기 전용 · 불변)
│   └── YYYY-MM-DD_*.md       # 회의록, 기사 스크랩, 실험 메모, 정책 요약 등
├── wiki/                     # [계층 2] 에이전트가 컴파일·유지보수하는 위키 폴더
│   ├── index.md              # 전체 위키 목차 · 카테고리 분류 · 원자료 매핑표
│   ├── log.md                # 컴파일 소요 시간 · 변경 이력 · 무결성 감사 로그
│   └── <concept-slug>.md     # 개념별 위키 문서 ([[위키링크]] 교차 연결)
├── scripts/
│   └── wiki_tool.py          # 위키 인덱스 빌드 · 그래프 데이터 추출 · /lint 무결성 검사기
└── viewer/
    ├── index.html            # 브라우저 단독 실행 다크모드 지식 그래프 & 비교 뷰어
    └── graph_data.js         # wiki_tool.py가 생성한 노드·엣지·본문 번들
```

### 핵심 운영 원칙 4가지
1. **`raw/` 불변 원칙 (Immutable Raw Sources)**: 에이전트는 `raw/` 폴더 안의 원본 파일을 절대 수정하거나 삭제하지 않습니다. 원자료는 오직 읽기 전용 근거로만 참조합니다.
2. **근거 등급 분리 (`✔` vs `△`)**:
   - `✔` (1차 근거): 직접 실험·측정한 수치, 공식 문서·법령·약관 원문, 재현 가능한 로그.
   - `△` (2차 추정): 외부 언론 보도, 커뮤니티 반응, 추정치. 위키 본문과 표에서 반드시 구분해 표기합니다.
3. **고립 문서 금지 (Zero Orphans)**: 모든 `wiki/<concept-slug>.md` 문서는 최소 2개 이상의 다른 위키 문서로 나가는 `[[위키링크]]`와 최소 1개 이상의 `raw/` 출처 파일을 명시해야 합니다.
4. **수익·성과 과장 금지**: 사실과 측정된 숫자(시간, 비용, 파일 수, 링크 수)만 기록하며 과장된 수식어를 배제합니다.

---

## 2. 위키 문서 표준 스키마 (`wiki/<concept-slug>.md`)

모든 개념 위키 문서는 아래 YAML 프론트매터와 섹션 구조를 반드시 포함해야 합니다.

```markdown
---
title: "문서 제목"
id: "concept-slug"
category: "architecture | workflow | production | compliance"
updated: "2026-10-16"
sources:
  - "raw/2026-10-12_karpathy_llm_wiki_clipping.md"
tags:
  - "llm-wiki"
  - "knowledge-graph"
---

# 문서 제목

> **한 줄 요약**: 이 개념의 핵심 정의와 실무적 역할을 한 문장으로 요약합니다.

## 1. 핵심 개념 및 배경
...본문 및 [[다른-위키-문서-id]] 연결...

## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)
| 항목 | 기준값 / 규칙 | 근거 등급 | 원자료 출처 |
|---|---|---|---|

## 3. 연결된 위키 문서 (Related Concepts)
- [[연결-문서-1]] — 연결 맥락 설명
- [[연결-문서-2]] — 연결 맥락 설명
```

---

## 3. 3대 표준 워크플로우 (`/ingest` · `/compile` · `/lint`)

사용자가 자연어 또는 슬래시 명령어로 지시하면 에이전트는 아래 절차대로 실행합니다.

### ① `/ingest` (원자료 수집 및 분류)
1. `raw/` 폴더의 모든 `.md` 파일을 스캔하여 새로 추가되거나 아직 `wiki/`에 반영되지 않은 원자료를 식별합니다.
2. 각 원자료에서 핵심 주장, 수치(`✔`/`△`), 도구 규격, 해결한 문제를 추출합니다.
3. 추출 결과를 바탕으로 새로 만들거나 업데이트할 `wiki/<concept-slug>.md` 목록을 제안하고 반영합니다.

### ② `/compile` (위키 교차 컴파일 및 뷰어 갱신)
1. `wiki/` 내 개념 문서들 사이의 연관성을 분석하여 본문과 하단 섹션에 양방향 `[[위키링크]]`를 촘촘하게 연결합니다.
2. `python3 scripts/wiki_tool.py build` 명령을 실행하여:
   - `wiki/index.md` (전체 카테고리 목차, 문서별 링크 통계, 원자료↔위키 매핑 매트릭스) 자동 갱신
   - `wiki/log.md` (컴파일 시각, 처리 파일 수, 링크 수, 소요 시간) 기록 추가
   - `viewer/graph_data.js` (인터랙티브 지식 그래프 뷰어 데이터) 자동 갱신

### ③ `/lint` (무결성 감사 및 자동 복구)
1. `python3 scripts/wiki_tool.py lint` 명령을 실행하여 다음 6개 항목을 전수 검사합니다:
   - `[Check 1]` 프론트매터 필수 키(`title`, `id`, `category`, `updated`, `sources`, `tags`) 누락 0건
   - `[Check 2]` 끊어진 `[[위키링크]]` (Dead Link) 0건
   - `[Check 3]` 고립된 위키 문서 (Orphan Node, 인바운드/아웃바운드 링크 부족) 0건
   - `[Check 4]` `raw/` 원자료 누락 (모든 `raw/` 파일이 최소 2개 이상의 위키 문서에 인용됨)
   - `[Check 5]` 근거 표기(`✔`/`△`) 누락 0건
   - `[Check 6]` 개인정보·내부 경로 노출 0건
2. 만약 실패 항목이 발견되면 에이전트가 즉시 해당 마크다운 문서를 수정한 뒤 재검사를 통과시킵니다.

---

## 4. 최초 클론 및 자동 셋업 프로토콜 (Agent Bootstrap Protocol)

사용자가 `"이 깃허브 저장소를 클론하고 사용할 수 있게 셋팅해줘"`라고 요청하면, 에이전트(Claude Code · Codex · Antigravity)는 아래 절차를 자동 수행합니다:

1. `python3 scripts/wiki_tool.py status && python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint`를 실행해 `6/6 PASS`를 확인합니다.
2. OS에 맞는 명령어(`open viewer/index.html` / `start viewer/index.html` / `xdg-open viewer/index.html`)로 로컬 지식 그래프 뷰어를 브라우저에 띄웁니다.
3. 사용자에게 ① 정리하고 싶은 메모 주제, ② 지금 바로 `raw/`에 투입할 메모 유무, ③ 샘플 데이터 유지 여부를 질문하여 즉시 맞춤형 위키 구축을 시작합니다.

