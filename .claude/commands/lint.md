---
description: 위키 문서의 프론트매터, 끊어진 [[위키링크]], 고립 노드, 원자료 매핑, 개인정보 노출 여부를 검사합니다.
---

1. 터미널에서 `python3 scripts/wiki_tool.py lint`를 실행합니다.
2. 6대 무결성 검사(프론트매터, Dead Link, Orphan Node, 원자료 커버리지, 근거 등급 표기, 민감정보 0건) 결과를 확인합니다.
3. 위반 사항이 있으면 해당 `wiki/*.md` 문서를 즉시 수정하고 `python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint`를 다시 실행해 `ALL CHECKS PASSED`를 확인합니다.
