# CLAUDE.md — Claude Code Agent Configuration

> **적용 환경**: Claude Code CLI (`claude`) 및 Claude Desktop / IDE 확장
> **상위 헌법**: 반드시 같은 폴더의 [`AGENTS.md`](./AGENTS.md)를 먼저 읽고 100% 준수하세요.

---

## 1. 멀티 에이전트 상호운용성 (Claude Code ↔ Antigravity Gemini)

이 프로젝트는 [`AGENTS.md`](./AGENTS.md)를 단일 헌법으로 공유합니다.
- **Claude Code** 사용 시: `CLAUDE.md`와 `.claude/commands/` 슬래시 커맨드(`/ingest`, `/compile`, `/lint`)가 작동합니다.
- **Antigravity (Gemini)** 사용 시: `GEMINI.md`와 `.agents/workflows/` 워크플로우가 동일하게 작동합니다.
- 어느 에이전트에서 작업하든 결과물은 `python3 scripts/wiki_tool.py lint`의 동일한 결정론적(Deterministic) 검증 기준을 통과해야 합니다.

## 2. Claude Code 슬래시 커맨드 및 CLI 명령어

- `/ingest` : `raw/` 폴더의 신규 비정형 메모를 읽어 `wiki/` 개념 문서로 추출·통합합니다.
- `/compile` : `wiki/` 문서 간 양방향 `[[위키링크]]`를 엮고 `python3 scripts/wiki_tool.py build`로 `wiki/index.md`, `wiki/log.md`, `viewer/graph_data.js`를 갱신합니다.
- `/lint` : `python3 scripts/wiki_tool.py lint`를 실행해 끊어진 링크·고립 노드·프론트매터·개인정보 노출 0건을 검증합니다.

## 3. 작업 완료 전 필수 검증 명령어

```bash
python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint
```
