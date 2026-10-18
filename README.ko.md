# 🧠 LLM Wiki 스타터 킷 — Karpathy 3계층 '제2의 뇌'

🌐 **Language**: [**English**](./README.md) | [**简体中文**](./README.zh-CN.md) | [**日本語**](./README.ja.md) | [**한국어**](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Agent Compatible](https://img.shields.io/badge/Agents-Claude%20Code%20%7C%20Codex%20%7C%20Antigravity-purple)](./AGENTS.md)
[![Lint Status](https://img.shields.io/badge/Wiki%20Lint-6%2F6%20PASSED-brightgreen)](./wiki/log.md)
[![Interactive Course Lab](https://img.shields.io/badge/Course%20Lab-ainewground.com-0e7a5a)](https://ainewground.com/ko/courses/llm-wiki/)

> **"질문할 때마다 문서를 조각내서 검색하고 채팅창을 닫으면 다 잊어버리는 기존 RAG 대신, AI 에이전트가 내 로컬 마크다운 위키(`wiki/`)를 직접 컴파일하고 `[[위키링크]]`로 엮어 지식이 복리(Compounding)로 쌓이게 만드세요."**
> — Andrej Karpathy의 **LLM Wiki** 아키텍처 실전 재현 스타터 킷 (`github.com/gptssam/llm-wiki-starter`)

---

## ⚡ 10초 시작: AI 에이전트 복붙용 프롬프트 (Claude Code · Codex · Antigravity)

터미널 명령어를 직접 칠 필요 없이, 사용 중인 AI 에이전트(**Claude Code**, **OpenAI Codex**, **Antigravity**) 채팅창에 아래 문장을 그대로 복사해 붙여넣으세요:

```text
https://github.com/gptssam/llm-wiki-starter

이 깃허브 저장소를 현재 폴더에 클론하고, AGENTS.md 규칙에 따라 사용할 수 있게 셋팅해줘.
```

### 🤖 에이전트용 자동 셋업 안내 (For AI Agents)

사용자가 위 프롬프트를 입력해 이 저장소를 열었거나 셋업을 요청했다면, 에이전트(Claude Code / Codex / Antigravity)는 **질문 없이 즉시 아래 4단계를 순서대로 실행**하세요:

1. **저장소 클론 및 상태 확인**:
   ```bash
   git clone https://github.com/gptssam/llm-wiki-starter.git
   cd llm-wiki-starter
   python3 scripts/wiki_tool.py status
   ```
   *(이미 클론된 폴더 내부라면 `git clone`은 건너뛰고 `status`부터 실행합니다.)*
2. **위키 인덱스·그래프 번들 컴파일 및 6대 무결성 감사 (`/lint`)**:
   ```bash
   python3 scripts/wiki_tool.py build
   python3 scripts/wiki_tool.py lint
   ```
   *(외부 pip 패키지 설치 불필요 — Python 3 표준 라이브러리만으로 0.01초 내 완료됩니다.)*
3. **인터랙티브 다크모드 지식 그래프 뷰어 실행**:
   - **macOS**: `open viewer/index.html`
   - **Windows**: `start viewer/index.html`
   - **Linux**: `xdg-open viewer/index.html`
4. **셋업 완료 보고 및 사용자 맞춤 온보딩 질문 (3가지)**:
   `6/6 PASS` 검증 결과와 함께 브라우저에 열린 지식 그래프 뷰어(원자료 5건 · 위키 9건 · `[[위키링크]]` 30개)를 안내한 뒤, 사용자가 본인만의 위키를 바로 만들 수 있도록 아래 3가지를 질문하세요:
   - ① **어떤 주제나 업무의 메모(`raw/`)를 정리하고 싶으신가요?** (예: AI 영상 제작, 업무 회의록, 리서치 스크랩, 코딩 노트 등)
   - ② **지금 바로 `raw/` 폴더에 넣어볼 메모 텍스트나 파일이 있으신가요?** (채팅창에 바로 붙여넣어 주셔도 됩니다)
   - ③ **기존 샘플 데이터(원자료 5건·위키 7건)를 유지한 채 추가할까요, 아니면 샘플을 백업하고 빈 위키로 새로 시작할까요?**

---

## ✨ 왜 이 스타터 킷인가요? (3대 핵심 특징)

1. **특정 AI 도구에 종속되지 않는 3중 마크다운 헌법 (`AGENTS.md` · `CLAUDE.md` · `GEMINI.md`)**
   - Claude Code를 쓰다가 주간 한도(Weekly Limit)에 도달하더라도 작업을 멈출 필요가 없습니다.
   - **Claude Code**, **OpenAI Codex**, **Antigravity (Gemini)** 어느 도구에서 폴더를 열어도 동일한 마크다운 헌법([`AGENTS.md`](./AGENTS.md))과 전용 스킬(`.claude/skills/`, `.codex/skills/`, `.agents/skills/`) 및 검증기([`scripts/wiki_tool.py`](./scripts/wiki_tool.py))가 1분 만에 이어 달립니다.
2. **옵시디언 설치 없이도 더블클릭 즉시 열리는 다크모드 지식 그래프 뷰어 (`viewer/index.html`)**
   - 별도의 프로그램이나 서버 설치 없이 `viewer/index.html`을 브라우저로 열면 **`raw/` 원자료 5건 ↔ `wiki/` 문서 9건의 노드·엣지 그래프**와 **Before(`raw/`) vs After(`wiki/`) 나란히 비교 화면**을 즉시 탐색할 수 있습니다.
   - 물론 폴더 전체를 **Obsidian Vault**로 바로 열어도 100% 호환됩니다.
3. **환각과 링크 끊어짐을 막는 결정론적 `/lint` 무결성 게이트 (`scripts/wiki_tool.py`)**
   - AI가 만든 위키를 눈대중으로 믿지 않고, ① 프론트매터 스키마 ② 끊어진 `[[위키링크]]` 0건 ③ 고립 문서(Orphan) 0건 ④ 원자료 커버리지 ⑤ 1차(`✔`)/2차(`△`) 근거 표기 ⑥ 민감정보 노출 0건을 0.01초 만에 검사합니다.

---

## 📂 폴더 구조 (Repository Layout)

```text
llm-wiki-starter/
├── AGENTS.md                 # [헌법] 전 에이전트 공통 위키 관리 헌법 (단일 출처)
├── CLAUDE.md                 # [헌법] Claude Code 설정
├── GEMINI.md                 # [헌법] Antigravity (Gemini) 설정
├── README.md                 # 영문 안내서 (English Default)
├── README.zh-CN.md           # 중문 간체 안내서 (简体中文)
├── README.ja.md              # 일문 안내서 (日本語)
├── README.ko.md              # 한국어 안내서 (한국어)
├── LICENSE                   # MIT 라이선스
├── .claude/                  # Claude Code 전용 커맨드(.claude/commands/) 및 스킬(.claude/skills/)
├── .codex/                   # OpenAI Codex 전용 스킬(.codex/skills/llm-wiki/SKILL.md)
├── .agents/                  # Antigravity 워크플로우(.agents/workflows/) 및 공통 스킬(.agents/skills/)
├── raw/                      # [1계층] 비정형 날것 원자료 5건 (읽기 전용 · 불변)
├── wiki/                     # [2계층] 에이전트가 컴파일한 지식 위키 문서 9건
├── scripts/
│   └── wiki_tool.py          # 인덱스/그래프 빌더 및 6대 무결성 검사기 (외부 패키지 불필요)
└── viewer/
    ├── index.html            # 단독 실행 인터랙티브 다크모드 지식 그래프 & 비교 뷰어
    └── graph_data.js         # wiki_tool.py build가 자동 생성한 그래프 데이터 번들
```

---

## 🛠️ 터미널 수동 실행 가이드 (Manual Quickstart)

```bash
git clone https://github.com/gptssam/llm-wiki-starter.git
cd llm-wiki-starter

python3 scripts/wiki_tool.py status
python3 scripts/wiki_tool.py build
python3 scripts/wiki_tool.py lint

# macOS: open / Windows: start
open viewer/index.html
```

---

## 📊 기본 포함 샘플 실행 측정표 (`✔` 실측치)

| 측정 항목 | 수치 (`✔` 실측) | 비고 |
|---|---|---|
| **투입 원자료 (`raw/`)** | **5개 파일** (총 8,615자 / 141줄) | AI 영상·위키·회의록·TTS·정책 메모 |
| **컴파일된 위키 (`wiki/`)** | **9개 파일** (개념 7건 + `index.md` + `log.md`, 총 23,659자 / 404줄) | 카테고리 4종 분류 완료 |
| **교차 `[[위키링크]]` 수** | **30개** (개념 문서당 평균 4.3개 연결) | 고립 노드(Orphan) 0건 |
| **원자료 → 위키 인용 수** | **16회** (원자료당 평균 3.2회 교차 인용) | 미반영 원자료 0건 |
| **에이전트 초기 합성 시간** | **약 1분 42초** (`init` 12.4s + `ingest` 38.2s + `compile` 51.0s) | 실전 측정 기준 |
| **`wiki_tool.py` 빌드·검증 시간** | **약 9.5 ms** (`0.01초` 미만) | 로컬 Python 3 표준 라이브러리 |

---

## 🔗 온라인 웹 실습실 & 커뮤니티

- **온라인 웹 실습실 (영상 강의 + 내장 지식 그래프 뷰어)**: [https://ainewground.com/ko/courses/llm-wiki/](https://ainewground.com/ko/courses/llm-wiki/)
- **카카오톡 오픈채팅방 (실습 질문 · 프롬프트 공유)**: [https://gptssam.com/openchat](https://gptssam.com/openchat)
- **지피티쌤 소개 및 뉴스레터**: [https://gptssam.com](https://gptssam.com)

---

## 📜 라이선스 및 고지 사항

- 본 저장소는 **MIT License** 하에 무료로 배포됩니다.
- 본 템플릿과 강의는 특정 수익이나 조회수를 보장하지 않으며, 직접 실험하고 검증한 워크플로우와 측정 기록을 투명하게 공유하기 위해 제작되었습니다.
