---
description: wiki/ 문서 간 양방향 [[위키링크]]를 교차 연결하고 index.md, log.md, viewer/graph_data.js를 컴파일합니다.
---

1. `wiki/` 폴더 내 모든 개념 문서(`index.md`, `log.md` 제외)를 스캔합니다.
2. 문서 간 연관 개념에 양방향 `[[위키링크]]`가 촘촘히 연결되어 있는지 확인하고 보강합니다.
3. 터미널에서 `python3 scripts/wiki_tool.py build`를 실행하여 `wiki/index.md`, `wiki/log.md`, `viewer/graph_data.js`를 생성합니다.
4. 이어서 `python3 scripts/wiki_tool.py lint`를 실행해 무결성 검사를 통과하는지 확인합니다.
