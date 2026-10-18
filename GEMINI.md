# GEMINI.md — Antigravity & Gemini Agent Configuration

> **적용 환경**: Antigravity IDE (Gemini 4 Argon High / Gemini 2.5 Pro) 및 Gemini CLI
> **상위 헌법**: 반드시 같은 폴더의 [`AGENTS.md`](./AGENTS.md)를 먼저 읽고 100% 준수하세요.

---

## 1. 왜 Antigravity (Gemini)에서도 똑같이 작동하는가?

Andrej Karpathy의 **LLM Wiki** 패턴의 핵심은 **"지식과 규칙이 특정 AI 모델의 서버 메모리가 아니라, 내 로컬 폴더의 마크다운 파일(`raw/`, `wiki/`, `AGENTS.md`)에 저장된다"**는 점입니다.

따라서 Claude Code의 주간 사용 한도(Weekly Limit)에 도달하더라도, **Antigravity (Gemini 4 Argon High)**에서 이 폴더를 열면 `GEMINI.md` → `AGENTS.md`를 즉시 읽어들여 단 1줄의 설정 변경 없이 동일한 위키 컴파일러와 무결성 검사기(`scripts/wiki_tool.py`)를 실행합니다.

## 2. Antigravity (Gemini) 실행 명령어

채팅창 또는 터미널 에이전트에게 아래와 같이 자연어로 지시하세요:

1. **전체 위키 컴파일 및 그래프 갱신**:
   > "`AGENTS.md` 규칙에 따라 `raw/` 폴더의 원자료들을 분석해서 `wiki/` 문서를 업데이트하고, `python3 scripts/wiki_tool.py build`와 `python3 scripts/wiki_tool.py lint`를 실행해 결과를 보고해줘."
2. **새 메모 추가 후 증분 반영 (`/ingest`)**:
   > "`raw/`에 새로 추가된 메모를 읽고 관련 `wiki/` 문서들과 `[[위키링크]]`를 연결한 뒤 뷰어를 갱신해줘."
3. **무결성 점검 (`/lint`)**:
   > "`python3 scripts/wiki_tool.py lint`를 실행해서 끊어진 위키링크나 고립된 문서가 없는지 검증해줘."

## 3. 작업 완료 전 필수 검증 (Verification Gate)

Antigravity 에이전트는 위키 문서를 수정한 뒤 반드시 터미널 도구(`run_command`)로 아래 명령을 실행하여 `PASS`를 확인한 후에만 완료 보고를 해야 합니다:

```bash
python3 scripts/wiki_tool.py build
python3 scripts/wiki_tool.py lint
```
