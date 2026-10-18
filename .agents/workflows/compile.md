---
description: wiki/ 문서를 교차 연결하고 index.md, log.md, viewer/graph_data.js를 컴파일합니다 (Antigravity 워크플로우).
---

1. `wiki/` 폴더의 개념 문서들을 읽고 교차 `[[위키링크]]`를 연결합니다.
2. `python3 scripts/wiki_tool.py build`를 실행해 `wiki/index.md`, `wiki/log.md`, `viewer/graph_data.js`를 최신화합니다.
3. `python3 scripts/wiki_tool.py lint`로 무결성을 검증합니다.
