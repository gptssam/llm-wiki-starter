---
description: 위키 무결성 감사(끊어진 링크, 고립 노드, 원자료 커버리지, 민감정보 0건)를 실행합니다 (Antigravity 워크플로우).
---

1. `python3 scripts/wiki_tool.py lint`를 실행합니다.
2. 오류가 발견되면 해당 마크다운 파일을 수정한 뒤 `python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint`로 재검증합니다.
