---
name: llm-wiki
description: Andrej Karpathy의 LLM Wiki 3계층 아키텍처에 따라 raw/ 폴더의 비정형 메모를 wiki/ 마크다운 문서와 [[위키링크]]로 컴파일하고, 6대 무결성 감사(lint) 및 인터랙티브 지식 그래프 뷰어(viewer/index.html)를 갱신하는 스킬입니다. 사용자가 메모 정리, 위키 컴파일, 제2의 뇌 구축, 지식 그래프 생성, 또는 셋업을 요청할 때 사용하세요.
---

# LLM Wiki Skill (Claude Code · Codex · Antigravity 공통)

이 스킬은 [`AGENTS.md`](../../../AGENTS.md) 헌법을 기반으로 작동합니다.

## 1. 최초 클론 및 자동 셋업 (Bootstrap Protocol)

사용자가 저장소를 클론하거나 `"사용할 수 있게 셋팅해줘"`라고 요청하면 아래 4단계를 순서대로 자동 실행하세요:

1. **다운로드(`git` 미설치 시 자동 우회) 및 빌드**:
   - 만약 아직 클론 전이고 사용자 PC에 `git`이 없다면 `curl -sL https://github.com/gptssam/llm-wiki-starter/archive/refs/heads/main.tar.gz | tar -xz && mv llm-wiki-starter-main llm-wiki-starter`로 다운로드합니다.
   ```bash
   python3 scripts/wiki_tool.py status
   python3 scripts/wiki_tool.py build
   ```
2. **6대 무결성 감사 (`/lint`)**:
   ```bash
   python3 scripts/wiki_tool.py lint
   ```
3. **인터랙티브 지식 그래프 뷰어 실행**:
   - macOS: `open viewer/index.html`
   - Windows: `start viewer/index.html`
   - Linux: `xdg-open viewer/index.html`
4. **사용자 맞춤 온보딩 역질문 (3가지)**:
   셋업 완료 결과를 짧게 브리핑한 뒤, 사용자가 본인만의 위키를 바로 시작할 수 있도록 아래 3가지를 질문하세요:
   - ① 어떤 주제나 업무의 메모(`raw/`)를 정리하고 싶으신가요? (예: AI 영상 제작, 프로젝트 회의록, 논문/아티클 스크랩 등)
   - ② 지금 바로 `raw/` 폴더에 넣어볼 메모 텍스트나 파일이 있으신가요? *(아직 준비된 메모 파일이 없다면 평소 관심 있는 키워드 한 단어만 말씀해 달라고 안내하세요. 에이전트가 즉석에서 맞춤 샘플 메모를 `raw/`에 생성해 위키 그래프에 연결해 줍니다!)*
   - ③ 기존 샘플 데이터(원자료 5건·위키 7건)를 유지한 채 추가할까요, 아니면 샘플을 백업하고 빈 위키로 새로 시작할까요?

## 2. 3대 핵심 워크플로우

- **`/ingest` (원자료 투입)**: `raw/` 폴더의 신규 `.md` 메모를 분석해 `wiki/<concept-slug>.md` 문서를 생성·갱신하고 출처(`sources:`)와 근거 등급(`✔` 1차 확인 / `△` 2차 추정)을 명시합니다. (`raw/` 원본은 절대 수정하지 않습니다.)
- **`/compile` (위키 컴파일)**: `wiki/` 문서 간 최소 2개 이상의 양방향 `[[위키링크]]`를 연결하고 `python3 scripts/wiki_tool.py build`를 실행해 `wiki/index.md`, `wiki/log.md`, `viewer/graph_data.js`를 갱신합니다.
- **`/lint` (무결성 검증)**: `python3 scripts/wiki_tool.py lint`를 실행해 6대 검사 항목(프론트매터·데드링크·고립노드·원자료 커버리지·근거표기·민감정보)이 모두 `PASS (6/6)`인지 확인합니다.
