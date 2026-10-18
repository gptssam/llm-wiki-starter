---
description: raw/ 폴더의 비정형 원자료를 분석하여 wiki/ 개념 문서로 추출·통합합니다 (Antigravity 워크플로우).
---

1. `AGENTS.md` 및 `GEMINI.md`의 규칙을 읽습니다.
2. `raw/` 폴더의 모든 `.md` 파일을 스캔하여 핵심 사실(`✔`)과 추정(`△`), 개념 키워드를 추출합니다.
3. `wiki/<concept-slug>.md` 문서를 생성·갱신하고 양방향 `[[위키링크]]`를 연결합니다.
4. `python3 scripts/wiki_tool.py build`와 `python3 scripts/wiki_tool.py lint`를 실행하여 결과를 검증합니다.
