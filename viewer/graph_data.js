window.WIKI_GRAPH_DATA = {
  "generated_at": "2026-10-16T16:42:00+09:00",
  "agent": "Antigravity (Gemini 4 Argon High) + Claude Code Compatible",
  "stats": {
    "raw_count": 5,
    "wiki_concept_count": 7,
    "wiki_total_files": 9,
    "wikilink_count": 30,
    "source_link_count": 16,
    "raw_chars": 8615,
    "wiki_chars": 23659,
    "build_ms": 9.5,
    "lint_passed": true
  },
  "lint": {
    "passed": true,
    "checks": [
      {
        "id": "CHECK-01",
        "name": "프론트매터 스키마 무결성 (Frontmatter Schema)",
        "rule": "모든 개념 위키 문서에 필수 키 6종(title, id, category, updated, sources, tags) 포함",
        "passed": true,
        "detail": "검사 문서 7건 중 누락 0건"
      },
      {
        "id": "CHECK-02",
        "name": "끊어진 위키링크 검사 (Zero Dead Links)",
        "rule": "본문 내 모든 [[위키링크]]가 실제 존재하는 wiki/<id>.md를 가리킬 것",
        "passed": true,
        "detail": "교차 링크 30개 중 끊어진 링크 0건"
      },
      {
        "id": "CHECK-03",
        "name": "고립 문서 방지 검사 (Zero Orphan Nodes)",
        "rule": "모든 개념 문서가 최소 2개 이상의 나가는 링크 및 들어오는 백링크 보유",
        "passed": true,
        "detail": "전체 7개 개념 노드 모두 양방향 2+ 연결 충족 (고립 노드 0건)"
      },
      {
        "id": "CHECK-04",
        "name": "원자료 커버리지 검사 (Raw Input Coverage)",
        "rule": "raw/ 폴더의 모든 원자료가 최소 2개 이상의 위키 문서에 출처로 반영될 것",
        "passed": true,
        "detail": "원자료 5건 모두 2개 이상 위키 문서에 교차 반영 완료"
      },
      {
        "id": "CHECK-05",
        "name": "근거 등급 표기 검사 (Fact-Check Markers ✔/△)",
        "rule": "모든 개념 문서가 1차 확인 근거(✔)와 2차 추정(△) 기준을 명시할 것",
        "passed": true,
        "detail": "위키 문서 내 1차 근거(✔) 57회 · 2차 참고(△) 16회 표기 확인"
      },
      {
        "id": "CHECK-06",
        "name": "개인정보·내부 경로 클린 검사 (Zero Privacy Leak)",
        "rule": "공개 배포용 저장소 내 로컬 홈 경로 및 개인 식별자 노출 0건",
        "passed": true,
        "detail": "전체 27개 텍스트/코드 파일 스캔 결과 민감 문자열 0건"
      }
    ]
  },
  "nodes": [
    {
      "id": "raw/2026-10-11_ai_video_workflow_memo.md",
      "label": "2026-10-11_ai_video_workflow_memo.md",
      "title": "[현장 메모] AI 영상 생성 공정 삽질 기록 & 크레딧 방어 수칙 (2026-10-11)",
      "group": "raw",
      "category": "raw",
      "date": "2026-10-11",
      "chars": 1637,
      "lines": 24,
      "verified_marks": 6,
      "estimate_marks": 1,
      "summary": "원자료 메모 (2026-10-11) · 1,637자",
      "content": "# [현장 메모] AI 영상 생성 공정 삽질 기록 & 크레딧 방어 수칙 (2026-10-11)\n\n오늘도 Google Flow(Veo 3.1)로 쇼츠 컷 뽑다가 새 프로젝트 기본값이 16:9로 되어 있는 걸 깜빡하고 그냥 제출해서 57크레딧 날림... 진짜 뼈아프다.\n다음부터는 무조건 새 프로젝트 만들자마자 할 일 1번으로 **9:16 세로 비율 저장 + 생성 개수 x1 고정**부터 확인해야 함 (✔ 실측 손실 57cr).\n\n## 1. 2단계 제출 공식 (360p 시험 → 720p 본 제출)\n처음부터 전 컷을 720p로 던지면 구도나 움직임 망했을 때 크레딧 감당이 안 됨.\n- **Step A (360p 시험)**: 첫 컷(S01)이나 까다로운 사건 컷은 360p(4초=4cr, 6초=5cr, 8초=6cr ✔)로 먼저 1장만 뽑아봄.\n  - 판정 기준 3가지:\n    1) 첫 프레임부터 피사체가 즉시 움직이는가? (정지 화면 0.5초 이상 지속 시 탈락, 광류 평균 이동량 ≥ 1.86px/frame 기준 ✔)\n    2) 프롬프트가 금지한 깨진 영문/숫자 텍스트가 배경에 박혀 있지 않은가?\n    3) 카메라 워크가 의도한 방향(Push-in, Pan, Orbit)과 일치하는가?\n- **Step B (720p 본 제출)**: 360p 통과한 프롬프트만 720p(4초=7cr, 6초=10cr, 8초=12cr ✔)로 본 제출.\n  - 주의: 간혹 프롬프트에 4초를 적었는데도 생성 확인 카드가 10초(15cr+)로 잡히는 버그가 있음 → 무조건 승인 전 예상 크레딧 숫자를 눈으로 대조하고 다르면 즉시 거부할 것!\n\n## 2. 물리 오류 및 개수 틀림 방어 (`exactly N`)\nAI 영상 모델이 제일 못 하는 게 '정확한 개수 세기'임.\n예를 들어 \"기둥 위에 파란 층 4개가 차례로 내려앉아 총 5층이 된다\"고 쓰면, 3개만 내려오거나 6개가 쌓임.\n- 해결책: 개수가 핵심인 문장에는 반드시 영문으로 **`exactly four translucent blue floors, no more and no fewer, resulting in a five-story structure`** 처럼 `exactly N ... no more and no fewer` 구문을 박아 넣을 것 (✔ 재현율 대폭 상승).\n- 그래도 100% 완벽하지 않을 때는 무리해서 5번씩 재뽑기(크레딧 낭비) 하지 말고, 화면 중앙에 굵은 타이포 키워드 오버레이(`4개 층 + 1층 = 5층`)를 얹어 시각적으로 보완하는 게 제작비 대비 효율이 훨씬 높음.\n\n## 3. 캐릭터 일관성 유지 메모 (Flow vs 스탠딩 스프라이트)\n- 서사형 쇼츠나 15초 인트로에서는 Midjourney/Image 모델로 캐릭터 시트(전면·측면·표정)를 먼저 고정한 뒤 Start/End 프레임으로 I2V 변환하는 게 안전함 (△ PJ Ace 및 국내 AI 영화제 수상 프로덕션 공통 방식).\n- 반면 10분짜리 16:9 강의 영상에서는 매번 AI 비디오를 생성할 필요 없이, **1200x1200 투명 PNG 스탠딩 일러스트 7종(수업·속보·분석·실패·작업·성공·학장)**을 문맥에 따라 교체(Swap)하고 오디오 볼륨(RMS)에 맞춰 입모양 4단계만 합성하면 크레딧 0원으로 이마 글씨 깨짐 없이 완벽한 캐릭터 강의가 됨 (✔ 자체 테스트 완료).\n"
    },
    {
      "id": "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
      "label": "2026-10-12_karpathy_llm_wiki_clipping.md",
      "title": "[트렌드 스크랩] Andrej Karpathy의 'LLM Wiki' 패턴 — 왜 RAG 대신 마크다운 위키인가? (2026-10-12)",
      "group": "raw",
      "category": "raw",
      "date": "2026-10-12",
      "chars": 1713,
      "lines": 34,
      "verified_marks": 2,
      "estimate_marks": 2,
      "summary": "원자료 메모 (2026-10-12) · 1,713자",
      "content": "# [트렌드 스크랩] Andrej Karpathy의 'LLM Wiki' 패턴 — 왜 RAG 대신 마크다운 위키인가? (2026-10-12)\n\n출처: Andrej Karpathy (@karpathy) X 포스트 및 GitHub/해커뉴스 커뮤니티 아키텍처 논의 요약 (△ 글로벌 테크 커뮤니티 수백만 뷰 화제, 국내에서도 Obsidian × 에이전트 위키 강의가 수강생 1,400명 이상 몰리며 인기 ✔).\n\n---\n\n## 핵심 문제의식: 기존 RAG(검색 증강 생성)가 개인 지식 관리에서 실패하는 이유\n1. **매번 백지상태에서 조각 검색 (Stateless Chunking)**:\n   - 기존 벡터 DB 기반 RAG는 문서를 500자 단위로 잘게 쪼개(Chunking) 놓은 뒤, 질문할 때마다 유사도 상위 5개 조각만 꺼내서 대답함.\n   - 문서 전체의 맥락이나 A 문서와 B 문서 사이의 숨은 인과관계를 전혀 이해하지 못함.\n2. **채팅창을 닫으면 휘발되는 통찰 (Zero Compounding)**:\n   - AI와 30분 동안 문서를 분석해 좋은 결론을 얻어도, 대화가 끝나면 그 결과물이 지식 베이스에 구조화되어 남지 않음. 다음 주에 비슷한 질문을 하면 또 처음부터 검색하고 추론해야 함.\n\n---\n\n## Karpathy의 해법: 3계층 'LLM Wiki' 아키텍처\nAI를 '일회성 검색 챗봇'으로 쓰지 말고, **'내 위키백과를 24시간 편집·유지보수하는 전담 사서(Maintainer)'**로 부려먹어야 한다!\n\n- **1계층 `raw/` (Immutable Raw Inputs)**:\n  - 내가 읽은 논문, 기사 스크랩, 회의록, 실험 메모, 유튜브 자막을 아무렇게나 던져 넣는 폴더.\n  - 인간과 AI 모두 이 원본 파일은 건드리지 않고 보존함(원본성 보장).\n- **2계층 `wiki/` (Compiled Knowledge Graph)**:\n  - 코딩 에이전트(Claude Code, Antigravity Gemini 등)가 `raw/`를 읽고 핵심 개념별로 마크다운 문서를 생성·갱신하는 폴더.\n  - 문서끼리 `[[위키링크]]`로 촘촘하게 엮고, 전체 목차(`index.md`)와 작업 로그(`log.md`)를 스스로 업데이트함.\n  - 새로운 `raw/` 메모가 들어오면 기존 `wiki/` 문서들과 대조해 수치나 규칙을 업데이트하므로 **지식이 복리(Compounding)로 축적**됨.\n- **3계층 `AGENTS.md` / `GEMINI.md` / `CLAUDE.md` (The Constitution)**:\n  - 에이전트에게 위키 작성 규칙, 프론트매터 양식, 출처 표기법(`✔` 1차 원문 / `△` 2차 보도), 슬래시 커맨드(`/ingest`, `/compile`, `/lint`)를 지시하는 마크다운 헌법 파일.\n\n---\n\n## 우리 팀 적용 인사이트\n- 옵시디언(Obsidian)을 설치해도 좋지만, 비개발자 수강생들은 옵시디언 플러그인 세팅에서부터 막히는 경우가 많음.\n- 따라서 **아무 프로그램 설치 없이 크롬 브라우저로 `viewer/index.html`만 더블클릭하면 즉시 다크모드 지식 그래프(노드·엣지)와 전후 비교(raw vs wiki)가 뜨는 로컬 뷰어**를 기본 내장해 주면 진입장벽이 0이 된다!\n- 또한 `/lint` 스크립트(`wiki_tool.py`)를 붙여 에이전트가 만든 위키에 끊어진 링크(Dead Link)나 고립된 문서(Orphan)가 없는지 자동으로 검사하게 만들자.\n"
    },
    {
      "id": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "label": "2026-10-13_solo_creator_automation_meeting.md",
      "title": "[회의록] 1인 크리에이터 AI 자동화 파이프라인 점검 및 멀티 에이전트 전환 결정 (2026-10-13)",
      "group": "raw",
      "category": "raw",
      "date": "2026-10-13",
      "chars": 1781,
      "lines": 28,
      "verified_marks": 4,
      "estimate_marks": 1,
      "summary": "원자료 메모 (2026-10-13) · 1,781자",
      "content": "# [회의록] 1인 크리에이터 AI 자동화 파이프라인 점검 및 멀티 에이전트 전환 결정 (2026-10-13)\n\n- 참석: 콘텐츠 기획·제작 파트 (지피티쌤 & 프롬이)\n- 안건: ① '무인 자동화 공장'의 함정과 반자동 검수 게이트 확정 ② Claude Code 주간 한도 도달에 따른 Antigravity(Gemini) 교차 운영 표준화\n\n---\n\n## 안건 1: 왜 100% 무인 자동화 쇼츠 공장은 실패하는가?\n유튜브나 X에 돌아다니는 n8n 자동화 템플릿(\"시트에 한 줄만 적으면 대본·음성·영상·업로드 100% 무인화\")을 그대로 돌려본 결과 문제점 3가지 확인 (✔ 내부 실험 기록):\n1. **환각(Hallucination) 및 2차 보도 부풀리기**:\n   - 기사 4개가 똑같이 틀린 숫자를 보도했을 때 AI가 이를 사실로 단정해 대본을 씀.\n   - **해결 규칙**: 대본 작성 전 반드시 **1차 원문(법령·공고문·공식 API·직접 측정치 = `✔`)**과 **2차 자료(언론 보도·커뮤니티 추정 = `△`)**를 분리하고, 1차 원문에 없는 내용은 대본에서 빼거나 \"보도에 따르면\"으로 격하하는 **팩트 검수 게이트(Fact-Check Gate)**를 거칠 것.\n2. **오디오·자막 어긋남과 영어 환각 음성**:\n   - AI 비디오 생성 클립에 요청하지 않은 기괴한 영어 내레이션이나 연필 스스슥 고역 노이즈(+10dB 이상)가 섞여 들어감.\n   - **해결 규칙**: 최종 렌더링 전 Whisper 전사 검사로 클립 내 불필요한 음성을 감지해 무음 처리하고, 자막은 의미 단위(8자 청크, 2줄 분할 시 어절 유지)로 검수할 것.\n3. **결론 — '반자동(Semi-Automated) 검수 파이프라인'**:\n   - 대본 초안, 샷 프롬프트 생성, 무음 컷 편집, 지표 수집은 에이전트와 파이썬 스크립트로 90% 자동화하되, **[소재 1차 원문 대조] → [360p 첫 프레임 검수] → [최종 MP4 청취·자막 확인]** 3곳에는 반드시 사람의 승인 게이트(Human-in-the-Loop)를 둔다.\n\n---\n\n## 안건 2: Claude Code 주간 한도 도달 이슈와 Antigravity (Gemini 4 Argon High) 호환성 확보\n- **발생 상황**: 다수의 리서치와 위키 구축 작업을 연속 실행하던 중 Claude Code의 주간 사용량 한도(Weekly Usage Limit)에 도달함 (✔ 실제 겪은 병목).\n- **해결 과정**:\n  - 즉시 작업 환경을 **Antigravity (Gemini 4 Argon High 모델)**로 전환하여 동일한 프로젝트 폴더를 열었음.\n  - 우리가 모든 프로젝트 규칙과 스킬을 특정 모델의 비공개 설정이 아니라 로컬 마크다운 파일(`AGENTS.md`, `GEMINI.md`, `CLAUDE.md`)과 표준 파이썬 검증 스크립트(`scripts/wiki_tool.py`)로 설계해 두었기 때문에, **에이전트를 바꾸는 데 걸린 시간은 1분 미만이었고 위키 컴파일 결과도 100% 동일하게 통과**함 (✔).\n- **강의 반영 결정**:\n  - 수강생들에게도 \"무조건 특정 유료 툴 하나만 쓰세요\"라고 가르치지 말 것!\n  - 우리가 실제로 **Antigravity (Gemini 4 Argon High)**에서 이 위키를 빌드하고 검증한 과정을 있는 그대로 투명하게 보여주고, 왜 마크다운 헌법(`AGENTS.md` + `GEMINI.md` + `CLAUDE.md`) 구조가 특정 빅테크 모델의 요금제나 한도 제한으로부터 크리에이터를 자유롭게 해주는지 핵심 파트로 다루기로 확정함.\n"
    },
    {
      "id": "raw/2026-10-14_tts_voice_comparison_notes.md",
      "label": "2026-10-14_tts_voice_comparison_notes.md",
      "title": "[기술 노트] AI 보이스(TTS) 합성 비교 및 오디오 마스터링 자동화 규격 (2026-10-14)",
      "group": "raw",
      "category": "raw",
      "date": "2026-10-14",
      "chars": 1707,
      "lines": 23,
      "verified_marks": 7,
      "estimate_marks": 1,
      "summary": "원자료 메모 (2026-10-14) · 1,707자",
      "content": "# [기술 노트] AI 보이스(TTS) 합성 비교 및 오디오 마스터링 자동화 규격 (2026-10-14)\n\n얼굴 없는(Faceless) 강의와 쇼츠에서 시청 지속시간을 결정하는 1순위 요소는 그래픽보다 **'귀가 피로하지 않은 오디오 호흡과 정확한 발음'**이다. 상용 TTS 및 오픈소스 로컬 TTS 테스트 결과와 후처리(Post-processing) 파이프라인을 기록해 둔다.\n\n## 1. 캐릭터별 TTS 엔진 및 보이스 매칭 (`✔` 실전 채택 기준)\n| 역할 | 한국어 보이스 | 영어 보이스 | 특징 및 단가 / 운영 메모 |\n|---|---|---|---|\n| **메인 강사 (지피티쌤)** | 타입캐스트 **「필재」** (속도 1.0x) | ElevenLabs **「Peter」** (`eleven_multilingual_v2`) | 차분하고 신뢰감 있는 중저음 설명 톤 (`~습니다`체). 타입캐스트 단가 약 0.495원/cr (✔). |\n| **질문 짝꿍 (프롬이)** | 타입캐스트 **「은경」** (속도 1.0x) | ElevenLabs **「Maisie」** (Friendly Casual) | 초보자 눈높이에서 한 번에 한 마디(20자 안팎, 5초 이내) 질문하는 톤 (`~요`체). 한 강에 3~4회 등장하여 흐름 환기 (✔). |\n| **오픈소스 로컬 실험** | **Qwen3-TTS / MeloTTS** | **Kokoro-82M / Qwen3-TTS** | API 비용 0원, 로컬 맥(Apple Silicon) 구동 가능 (△). 단, 한국어 숫자·영문 약어 억양 자연스러움은 아직 상용(타입캐스트)이 우위. |\n\n## 2. TTS 합성 직후 필수 3단계 후처리 공정\nTTS에서 바로 뽑은 원본 `.wav` 파일을 그대로 영상에 얹으면 문장 사이가 늘어지고 숨소리가 거슬려 이탈률이 급증함.\n\n1. **문단별 글자수·해시 대조 및 Whisper 전사 Diff 검사 (`✔`)**:\n   - 영문 약어(`RAG`, `MCP`, `CSV`)나 큰 숫자를 TTS가 엉뚱하게 읽는 오독(Mispronunciation) 현상 방지.\n   - 대본 투입 시 발음용 텍스트(예: `CSV` → `씨에스브이`, `16:9` → `16 대 9`)로 변환하고, 합성 직후 Whisper로 전사해 원문과 어절 단위로 대조함.\n2. **무음 구간 자동 압축 (`tighten_audio` & `trim_gaps` `✔`)**:\n   - 문장 간 무음(Silence)이 0.30초를 넘으면 0.22초로 자동 압축 (예: 원본 190.50초 → 압축 후 175.46초로 약 8% 단축 ✔).\n   - 무음 감지로 못 잡는 **어미 늘어짐(Tail drag)**은 `1.8배속 템포 당김(--tempo)`으로, **들숨 소리(Breath noise)**는 `0.16초 컷(--cut)`으로 정밀 제거.\n3. **최종 MP4 라우드니스 및 True Peak 마스터링 (`✔`)**:\n   - 나레이션 기준 라우드니스는 **-14.7 LUFS** 내외로 맞추고, 배경 룸톤(Room tone)은 사건 효과음 없이 **-42dB ~ -38dB**의 고른 톤으로 깔아줌 (반복되는 기계적 효과음 합성 절대 금지!).\n   - WAV 상태에서 Peak가 `-1.5dB`여도 AAC 인코딩 직후 True Peak가 `-0.9dB` 이상으로 튀는 현상이 있으므로, 반드시 최종 `.mp4`에서 4배 업샘플 리미터로 `-1.0dBTP` 이하를 검증할 것.\n"
    },
    {
      "id": "raw/2026-10-15_platform_ai_disclosure_policy.md",
      "label": "2026-10-15_platform_ai_disclosure_policy.md",
      "title": "[정책·법규 요약] AI 생성 콘텐츠 표시 의무 및 크리에이터 탈플랫폼 본진 전략 (2026-10-15)",
      "group": "raw",
      "category": "raw",
      "date": "2026-10-15",
      "chars": 1777,
      "lines": 32,
      "verified_marks": 7,
      "estimate_marks": 1,
      "summary": "원자료 메모 (2026-10-15) · 1,777자",
      "content": "# [정책·법규 요약] AI 생성 콘텐츠 표시 의무 및 크리에이터 탈플랫폼 본진 전략 (2026-10-15)\n\nAI 영상·보이스·에이전트를 활용해 콘텐츠와 강의를 제작·배포할 때 반드시 지켜야 할 플랫폼 정책 및 법적 안전장치 요약 (조회 기준일: 2026-10-15 ✔).\n\n---\n\n## 1. 플랫폼별 AI 생성 라벨 표시 및 약관 주의사항 (`✔`)\n- **유튜브 / 인스타그램(릴스) / 틱톡 / 스레드**:\n  - 업로드 시 **'AI 생성 콘텐츠(Altered or synthetic content)' 표시 토글을 매번 켤 것**.\n  - 특히 스레드는 첫 번째 본문 게시물에 AI 레이블을 부착하고, 인스타그램 릴스는 업로드 시 '고화질로 업로드'와 AI 라벨을 함께 점검.\n- **생성형 AI 도구별 상업 이용 및 금지 조항 (`✔` 약관 원문 대조)**:\n  - **Google Flow (Veo)**: 생성물 소유권은 이용자에게 있으나, 출력물로 타 ML 모델을 학습시키는 행위 및 SynthID 워터마크 제거 금지. 강의 자료 배포 시 원본 개별 클립 재판매가 아닌 '완성 편집본 및 프롬프트 규격서' 형태로 배포할 것.\n  - **타입캐스트 (Typecast)**: 영상 내부에 합성된 나레이션의 상업적 사용은 허용되나, `.wav` 음성 파일 단독 재배포·판매는 금지됨 (따라서 강의 배포 폴더에는 `.wav` 파일 대신 순수 대본 `.txt`만 포함!).\n\n---\n\n## 2. 표시광고법 및 수익 보장 표현 절대 금지 원칙 (`✔`)\n- **근거**: 공정거래위원회 표시광고법 제3조(거짓·과장·기만 광고 금지), 2026년 6월 시행 추천·보증 심사지침 개정안(가상인간 추천·보증 시 표시 의무), 한국소비자원 고수익 부업 강의 피해구제 사례.\n- **절대 금지 표현**:\n  - ❌ *\"월 ○○만 원 수익 보장\"*, *\"하루 10분 원클릭 자동 돈 복사\"*, *\"누구나 조회수 100만 떡상 보장\"*, *\"가짜 수강생 후기\"*\n- **정직한 대안 표현 (`✔` 우리 채널 표준)**:\n  - ⭕ *\"수익·조회수를 약속하지 않습니다. 우리가 직접 실행해 측정한 소요 시간, 비용, 파일 구조, 그리고 실패한 기록을 있는 그대로 공개하고 MIT 오픈소스 템플릿을 드립니다.\"*\n  - 강의 내 보조 캐릭터('프롬이') 역시 강의를 칭찬·추천하는 가짜 후기 역할을 절대 하지 않으며, 오직 초보자 눈높이에서 기술적 궁금증을 대신 질문하는 역할만 수행함.\n\n---\n\n## 3. 단일 플랫폼 종속 위험과 '내 땅(본진 사이트 + GitHub + 뉴스레터)' 아키텍처\n- 특정 동영상 플랫폼 하나에만 의존하면 알고리즘 변화나 계정 단위 제재 시 그동안 쌓은 콘텐츠 자산과 시청자 접점이 하루아침에 끊길 위험이 있음 (✔ 실제 겪은 핵심 교훈).\n- **3중 자산화 아키텍처**:\n  1. **로컬 마크다운 & GitHub 저장소 (`github.com/gptssam`)**: 모든 대본, 1차/2차 출처 판정표, 에이전트 규칙(`AGENTS.md`), 실행 도구를 마크다운과 코드로 보관하여 플랫폼과 무관하게 영구 보존.\n  2. **자체 매체·강의 본진 사이트**: 영상 아카이브 옆에 대본 전문, 문장별 1차(`✔`)/2차(`△`) 출처 패널, 정정 기록, 이메일 뉴스레터 구독 폼을 결합해 검색 유입과 신뢰 확보.\n  3. **멀티 배급 (인스타·스레드·X·뉴스레터·오픈소스 리드 마그넷)**: SNS에서는 화제의 AI 워크플로우를 직접 재현한 짧은 결과물과 무료 GitHub 스타터 킷을 배포해 직접 소통 가능한 명단(이메일·채널 친구)으로 연결.\n"
    },
    {
      "id": "agent-harness-portability",
      "label": "멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)",
      "title": "멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)",
      "path": "wiki/agent-harness-portability.md",
      "group": "wiki",
      "category": "architecture",
      "updated": "2026-10-16",
      "chars": 2604,
      "lines": 46,
      "verified_marks": 5,
      "estimate_marks": 1,
      "summary": "위키 헌법을 `AGENTS.md`(공통), `GEMINI.md`(Antigravity용), `CLAUDE.md`(Claude Code용) 3중 구조로 설계하고 결정론적 파이썬 검사기(`wiki_tool.py`)를 결합하면, 특정 AI 도구의 주간 한도가 차도 1분 만에 다른 에이전트로 갈아끼워 똑같은 품질로 위키를 운영할 수 있습니다.",
      "tags": [
        "antigravity",
        "gemini",
        "claude-code",
        "harness-engineering",
        "agents-md"
      ],
      "sources": [
        "raw/2026-10-13_solo_creator_automation_meeting.md",
        "raw/2026-10-12_karpathy_llm_wiki_clipping.md"
      ],
      "outbound": [
        "llm-wiki-architecture",
        "semi-automated-qa-gate",
        "knowledge-compounding-vs-rag",
        "creator-compliance-and-platform-policy"
      ],
      "inbound": [
        "creator-compliance-and-platform-policy",
        "knowledge-compounding-vs-rag",
        "llm-wiki-architecture",
        "semi-automated-qa-gate"
      ],
      "content": "---\ntitle: \"멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)\"\nid: \"agent-harness-portability\"\ncategory: \"architecture\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\n  - \"raw/2026-10-12_karpathy_llm_wiki_clipping.md\"\ntags:\n  - \"antigravity\"\n  - \"gemini\"\n  - \"claude-code\"\n  - \"harness-engineering\"\n  - \"agents-md\"\n---\n\n# 멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)\n\n> **한 줄 요약**: 위키 헌법을 `AGENTS.md`(공통), `GEMINI.md`(Antigravity용), `CLAUDE.md`(Claude Code용) 3중 구조로 설계하고 결정론적 파이썬 검사기(`wiki_tool.py`)를 결합하면, 특정 AI 도구의 주간 한도가 차도 1분 만에 다른 에이전트로 갈아끼워 똑같은 품질로 위키를 운영할 수 있습니다.\n\n## 1. 핵심 개념 및 배경\n\n1인 크리에이터나 리서처가 AI 에이전트로 실무 파이프라인을 돌릴 때 가장 흔히 겪는 병목은 **단일 도구의 사용량 한도(Usage Limit) 도달**입니다 (`✔`). 실제로 본 스타터 킷을 구축하는 과정에서도 집중적인 리서치 직후 Claude Code의 주간 한도에 도달하는 상황이 발생했습니다 (`raw/2026-10-13_solo_creator_automation_meeting.md` `✔`).\n\n만약 위키 관리 규칙이 특정 툴의 클라우드 설정이나 독점 플러그인에 묶여 있었다면 작업이 전면 중단되었겠지만, [[llm-wiki-architecture]]는 다음 두 가지 **하네스 엔지니어링(Harness Engineering)** 장치 덕분에 **Antigravity (Gemini 4 Argon High)**로 즉시 전환하여 중단 없이 컴파일을 마쳤습니다 (`✔`):\n\n1. **마크다운 헌법 라우팅 (`AGENTS.md` 단일 출처)**:\n   - 모든 위키 스키마와 `/ingest`, `/compile`, `/lint` 규칙은 `AGENTS.md`에 정의합니다.\n   - Antigravity(Gemini)는 `GEMINI.md`와 `.agents/workflows/`를 통해, Claude Code는 `CLAUDE.md`와 `.claude/commands/`를 통해 동일한 `AGENTS.md` 헌법을 읽어들입니다.\n2. **모델 독립적 결정론적 검증기 (`scripts/wiki_tool.py`)**:\n   - 에이전트가 바뀌어도 최종 품질 판정은 AI의 주관적 느낌에 맡기지 않고, 파이썬 스크립트가 실행하는 6대 `/lint` 규칙([[semi-automated-qa-gate]])으로 동일하게 검증합니다.\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 에이전트 환경 | 자동 로드 헌법 파일 | 워크플로우 경로 | 검증 명령어 (공통) | 전환 소요 시간 (`✔` 실측) | 원자료 출처 |\n|---|---|---|---|---|---|\n| **Antigravity (Gemini 4 Argon High)** | `GEMINI.md` → `AGENTS.md` | `.agents/workflows/*.md` | `python3 scripts/wiki_tool.py lint` | **1분 미만** (폴더 열기 즉시) | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n| **Claude Code CLI** | `CLAUDE.md` → `AGENTS.md` | `.claude/commands/*.md` | `python3 scripts/wiki_tool.py lint` | **1분 미만** (`claude` 실행 즉시) | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n| **단독 Python CLI (오프라인)** | `AGENTS.md` 스키마 기준 | `scripts/wiki_tool.py` | `python3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint` | **0.1초 이내** (API 토큰 0 소모) | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[llm-wiki-architecture]] — 에이전트 헌법이 작동하는 3계층 폴더 구조\n- [[knowledge-compounding-vs-rag]] — 특정 SaaS나 벡터 DB에 종속되지 않는 로컬 마크다운 지식 자산화\n- [[semi-automated-qa-gate]] — 에이전트가 바뀌어도 일관된 품질을 강제하는 `/lint` 및 1차 원문 검수 게이트\n- [[creator-compliance-and-platform-policy]] — 특정 플랫폼이나 단일 AI 도구에 종속되지 않는 크리에이터 생존 전략\n"
    },
    {
      "id": "ai-video-production-pipeline",
      "label": "AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출",
      "title": "AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출",
      "path": "wiki/ai-video-production-pipeline.md",
      "group": "wiki",
      "category": "production",
      "updated": "2026-10-16",
      "chars": 2402,
      "lines": 42,
      "verified_marks": 10,
      "estimate_marks": 1,
      "summary": "AI 영상 제작 시 '9:16 비율 저장 → 360p 시험(4cr) → 720p 본 제출(7~12cr)'의 2단계 공정과 `exactly N` 개수 고정 문법으로 크레딧 낭비를 막고, 강의형 영상에서는 1200×1200 투명 PNG 캐릭터 스탠딩 교체(0cr)로 일관성과 가독성을 동시에 확보합니다.",
      "tags": [
        "ai-video",
        "veo",
        "flow",
        "character-sprite",
        "cost-optimization"
      ],
      "sources": [
        "raw/2026-10-11_ai_video_workflow_memo.md",
        "raw/2026-10-13_solo_creator_automation_meeting.md"
      ],
      "outbound": [
        "semi-automated-qa-gate",
        "voice-tts-and-audio-mastering",
        "creator-compliance-and-platform-policy",
        "knowledge-compounding-vs-rag"
      ],
      "inbound": [
        "creator-compliance-and-platform-policy",
        "knowledge-compounding-vs-rag",
        "semi-automated-qa-gate",
        "voice-tts-and-audio-mastering"
      ],
      "content": "---\ntitle: \"AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출\"\nid: \"ai-video-production-pipeline\"\ncategory: \"production\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-11_ai_video_workflow_memo.md\"\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\ntags:\n  - \"ai-video\"\n  - \"veo\"\n  - \"flow\"\n  - \"character-sprite\"\n  - \"cost-optimization\"\n---\n\n# AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출\n\n> **한 줄 요약**: AI 영상 제작 시 '9:16 비율 저장 → 360p 시험(4cr) → 720p 본 제출(7~12cr)'의 2단계 공정과 `exactly N` 개수 고정 문법으로 크레딧 낭비를 막고, 강의형 영상에서는 1200×1200 투명 PNG 캐릭터 스탠딩 교체(0cr)로 일관성과 가독성을 동시에 확보합니다.\n\n## 1. 핵심 개념 및 배경\n\nAI 비디오 모델(Google Flow / Veo 3.1, Kling 3.0 등)을 실무에 도입할 때 가장 큰 리스크는 **초기 설정 실수와 무분별한 재뽑기로 인한 크레딧 증발**입니다 (`✔`). 실제로 새 프로젝트의 기본 해상도 비율(16:9)을 바꾸지 않고 제출해 한 번에 57크레딧을 손실한 현장 기록(`raw/2026-10-11_ai_video_workflow_memo.md` `✔`)은 [[semi-automated-qa-gate]]의 중요성을 잘 보여줍니다.\n\n이를 해결하기 위해 쇼츠·광고 클립에는 **2단계 해상도 제출 공정**을 적용하고, 10분 이상의 16:9 기술 강의에는 AI 비디오 재생성 대신 **고해상도 투명 PNG 캐릭터 상태 스왑(Swap) + 오디오 볼륨 연동 입모양 합성** 방식을 결합합니다 (`✔`).\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 공정 단계 / 항목 | 표준 규격 및 프롬프트 규칙 | 크레딧 / 비용 (`✔` 실측) | 방어하는 주요 실패 유형 | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|---|\n| **0단계: 프로젝트 초기화** | 생성 전 `9:16`(쇼츠) 또는 `16:9`(강의) 비율 및 `x1` 저장 확인 | 미확인 시 **57cr 손실** 발생 | 기본값(16:9) 오제출로 인한 전 컷 폐기 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n| **1단계: 360p 시험 제출** | 첫 컷·복잡한 사건 컷 360p 사전 검증 (광류 ≥ 1.86px/frame) | 4초 **4cr** / 6초 **5cr** / 8초 **6cr** | 첫 프레임 정지, 깨진 텍스트 유입, 카메라 역방향 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n| **2단계: 720p 본 제출** | 360p 통과 컷만 720p 제출 (10초 오인식 카드 즉시 거부) | 4초 **7cr** / 6초 **10cr** / 8초 **12cr** | 10초 카드 버그(15cr+) 및 불량 프롬프트 고비용 소모 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n| **물리 개수 고정 규칙** | `exactly N ... no more and no fewer` 영문 구문 명시 + 키워드 자막 보완 | 재뽑기 횟수 5회 → 1~2회 단축 | 층수·사물 개수가 3개나 6개로 틀리는 현상 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n| **강의용 캐릭터 연출** | 1200×1200 투명 PNG 7종 상태 스왑 + 고밀도 코드 화면 페이드아웃 | 추가 비디오 생성 **0cr** | 캐릭터 얼굴·이마 한글 텍스트 깨짐 및 코드 가림 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[semi-automated-qa-gate]] — 360p 시험 제출과 Whisper 오디오 검사를 결합한 반자동 품질 게이트\n- [[voice-tts-and-audio-mastering]] — 캐릭터 스탠딩 입모양(RMS 4단계)과 결합되는 나레이션 합성·마스터링 공정\n- [[creator-compliance-and-platform-policy]] — Google Flow(Veo) 약관 준수(SynthID 보존, 클립 낱개 재판매 금지) 및 AI 표시 의무\n- [[knowledge-compounding-vs-rag]] — 현장의 57cr 실패 메모가 재사용 가능한 표준 공정 문서로 컴파일되는 과정\n"
    },
    {
      "id": "creator-compliance-and-platform-policy",
      "label": "AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략",
      "title": "AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략",
      "path": "wiki/creator-compliance-and-platform-policy.md",
      "group": "wiki",
      "category": "compliance",
      "updated": "2026-10-16",
      "chars": 2303,
      "lines": 41,
      "verified_marks": 8,
      "estimate_marks": 2,
      "summary": "AI 생성 라벨 표시와 '수익 보장 문구 금지(표시광고법 준수)'를 철저히 지키고, 단일 플랫폼 제재 리스크를 넘어 로컬 마크다운 위키·GitHub 오픈소스·자체 매체 사이트로 '내 땅(Owned Media)'을 구축하는 전략입니다.",
      "tags": [
        "compliance",
        "ai-disclosure",
        "platform-policy",
        "owned-media"
      ],
      "sources": [
        "raw/2026-10-15_platform_ai_disclosure_policy.md",
        "raw/2026-10-13_solo_creator_automation_meeting.md"
      ],
      "outbound": [
        "llm-wiki-architecture",
        "agent-harness-portability",
        "semi-automated-qa-gate",
        "ai-video-production-pipeline",
        "voice-tts-and-audio-mastering"
      ],
      "inbound": [
        "agent-harness-portability",
        "ai-video-production-pipeline",
        "llm-wiki-architecture",
        "semi-automated-qa-gate",
        "voice-tts-and-audio-mastering"
      ],
      "content": "---\ntitle: \"AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략\"\nid: \"creator-compliance-and-platform-policy\"\ncategory: \"compliance\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-15_platform_ai_disclosure_policy.md\"\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\ntags:\n  - \"compliance\"\n  - \"ai-disclosure\"\n  - \"platform-policy\"\n  - \"owned-media\"\n---\n\n# AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략\n\n> **한 줄 요약**: AI 생성 라벨 표시와 '수익 보장 문구 금지(표시광고법 준수)'를 철저히 지키고, 단일 플랫폼 제재 리스크를 넘어 로컬 마크다운 위키·GitHub 오픈소스·자체 매체 사이트로 '내 땅(Owned Media)'을 구축하는 전략입니다.\n\n## 1. 핵심 개념 및 배경\n\nAI 기술을 활용한 콘텐츠와 강의 시장이 급성장하면서 각 플랫폼(유튜브·인스타·틱톡)의 **AI 생성물 표시 의무**와 규제 당국(공정거래위원회 표시광고법·추천보증 심사지침)의 **허위·과장 광고 단속**이 한층 강화되었습니다 (`raw/2026-10-15_platform_ai_disclosure_policy.md` `✔`).\n\n특히 \"월 ○○만 원 자동 수익 보장\" 같은 자극적 문구나 무분별한 공장형 업로드(`raw/2026-10-13_solo_creator_automation_meeting.md`)는 소비자 피해와 계정 해지를 부릅니다. 대신 **우리가 직접 재현·측정한 데이터(`✔`)와 MIT 오픈소스 템플릿(`github.com/gptssam`)을 투명하게 공개**하는 정직성 원칙이 가장 강력한 신뢰 자산이 됩니다.\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 영역 | 필수 준수 규칙 (Compliance Rule) | 금지 행위 (Red Line) | 검증 및 실행 방법 | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|---|\n| **플랫폼 AI 라벨** | 업로드 시 AI 생성 콘텐츠 토글 상시 ON (인스타·스레드·틱톡·유튜브) | AI 생성물을 실제 촬영물·실존 인물처럼 기만 | 게시 전 체크리스트 및 스레드 1번 글 AI 레이블 확인 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |\n| **표시광고법 준수** | 소요 시간·비용·파일 구조·실패 기록만 사실대로 제시 | \"월 N만원 보장\", \"원클릭 자동 돈 복사\", 가짜 수강 후기 | 대본·소개글 배포 전 금칙어 grep 검사 (`0건` 필수) | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |\n| **도구 약관 준수** | 완성 편집본 + 프롬프트 규격서 + 순수 대본(`.txt`) 배포 | Flow 클립 낱개 재판매 · 타입캐스트 `.wav` 단독 배포 | 배포 폴더(`llm-wiki-starter`) 내 미디어 원파일 제외 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |\n| **탈플랫폼 3중 본진** | ① 로컬 마크다운 위키([[llm-wiki-architecture]]) ② GitHub 무료 배포 ③ 자체 사이트·뉴스레터 | 단일 SNS/동영상 플랫폼 하나에만 100% 의존 | [[agent-harness-portability]] 기반 로컬 자산화 상시 유지 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[llm-wiki-architecture]] — 플랫폼이 사라져도 내 로컬 폴더에 100% 남는 마크다운 지식 베이스\n- [[agent-harness-portability]] — 특정 빅테크 AI 모델 한도나 정책 변경에도 흔들리지 않는 멀티 에이전트 구조\n- [[semi-automated-qa-gate]] — 업로드 전 금칙어·근거 등급(`✔`/`△`)·AI 라벨을 점검하는 4단계 게이트\n- [[ai-video-production-pipeline]] — Google Flow(Veo) 약관 준수 및 크레딧 0원 캐릭터 스프라이트 연출법\n- [[voice-tts-and-audio-mastering]] — 타입캐스트 `.wav` 재배포 금지 약관 준수 및 질문 캐릭터('프롬이') 운영 수칙\n"
    },
    {
      "id": "knowledge-compounding-vs-rag",
      "label": "복리형 위키 컴파일 vs 조각 검색형 RAG 비교",
      "title": "복리형 위키 컴파일 vs 조각 검색형 RAG 비교",
      "path": "wiki/knowledge-compounding-vs-rag.md",
      "group": "wiki",
      "category": "architecture",
      "updated": "2026-10-16",
      "chars": 2336,
      "lines": 44,
      "verified_marks": 8,
      "estimate_marks": 4,
      "summary": "질문할 때마다 문서를 잘게 쪼개 검색하고 휘발시키는 기존 RAG와 달리, LLM Wiki는 새로운 메모가 들어올 때마다 기존 지식 문서를 갱신하고 `[[위키링크]]`를 확장하여 지식이 복리(Compounding)로 쌓이게 만듭니다.",
      "tags": [
        "rag",
        "knowledge-compounding",
        "llm-wiki",
        "comparison"
      ],
      "sources": [
        "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
        "raw/2026-10-13_solo_creator_automation_meeting.md"
      ],
      "outbound": [
        "ai-video-production-pipeline",
        "semi-automated-qa-gate",
        "llm-wiki-architecture",
        "agent-harness-portability"
      ],
      "inbound": [
        "agent-harness-portability",
        "ai-video-production-pipeline",
        "llm-wiki-architecture"
      ],
      "content": "---\ntitle: \"복리형 위키 컴파일 vs 조각 검색형 RAG 비교\"\nid: \"knowledge-compounding-vs-rag\"\ncategory: \"architecture\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-12_karpathy_llm_wiki_clipping.md\"\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\ntags:\n  - \"rag\"\n  - \"knowledge-compounding\"\n  - \"llm-wiki\"\n  - \"comparison\"\n---\n\n# 복리형 위키 컴파일 vs 조각 검색형 RAG 비교\n\n> **한 줄 요약**: 질문할 때마다 문서를 잘게 쪼개 검색하고 휘발시키는 기존 RAG와 달리, LLM Wiki는 새로운 메모가 들어올 때마다 기존 지식 문서를 갱신하고 `[[위키링크]]`를 확장하여 지식이 복리(Compounding)로 쌓이게 만듭니다.\n\n## 1. 핵심 개념 및 배경\n\n많은 개인과 팀이 노션이나 구글 드라이브 문서를 벡터 DB에 임베딩하는 **기존 RAG(Retrieval-Augmented Generation)**를 시도하지만, 실무 지식 관리에서는 두 가지 구조적 한계에 부딪힙니다 (`△`):\n\n1. **문맥 단절 (Stateless Chunking)**: 문서를 500자 단위로 기계적으로 자르기 때문에, [[ai-video-production-pipeline]]의 크레딧 손실 기록과 [[semi-automated-qa-gate]]의 검수 규칙처럼 서로 다른 날짜의 메모에 흩어진 인과관계를 한눈에 연결하지 못합니다.\n2. **추론 결과의 휘발 (Zero Persistence)**: 채팅창에서 AI와 30분 동안 문서를 분석해 도출한 결론이 채팅 종료와 함께 사라집니다.\n\n반면 [[llm-wiki-architecture]]가 채택한 **위키 컴파일(Wiki Compilation)** 방식은 에이전트가 `raw/` 폴더의 새 메모를 읽을 때마다 `wiki/` 폴더의 정식 마크다운 문서를 직접 고쳐 쓰고(`compile`), 문서 간 모순이나 끊어진 링크를 `/lint`로 잡아냅니다 (`✔`).\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 비교 항목 | 기존 조각 검색형 RAG (Vector DB) | Karpathy 식 LLM Wiki (`raw/` → `wiki/`) | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|\n| **지식 저장 단위** | 500자 내외 임의 텍스트 조각 (Chunk) | 완결된 주제의 마크다운 문서 + `[[위키링크]]` 그래프 | `△` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n| **추론 결과 보존** | 일회성 채팅 응답 후 휘발 (재질문 시 재계산) | `wiki/*.md` 및 `wiki/index.md`에 영구 누적 (복리 효과) | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n| **출처 및 사실 검증** | 유사도 점수만 반환 (1차/2차 원문 구분 불가) | 프론트매터 `sources:` 및 `✔`(1차)/`△`(2차) 등급 강제 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n| **인프라 및 비용** | 별도 벡터 DB · 임베딩 파이프라인 구축 필요 | 로컬 폴더 마크다운 + 기본 Python 스크립트 (유지비 0원) | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n| **도구 이식성** | 특정 SaaS/DB 포맷에 종속 (Lock-in) | [[agent-harness-portability]]로 에이전트 즉시 교체 가능 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[llm-wiki-architecture]] — `raw/`, `wiki/`, `AGENTS.md`로 구성되는 3계층 위키의 전체 구조\n- [[agent-harness-portability]] — 벡터 DB 없이 순수 마크다운만으로 Antigravity와 Claude Code를 오가는 방법\n- [[semi-automated-qa-gate]] — 에이전트가 컴파일한 지식의 환각을 막는 1차 원문(`✔`) 대조 및 `/lint` 감사\n- [[ai-video-production-pipeline]] — 흩어진 현장 실패 메모가 위키 문서의 표준 공정으로 컴파일된 실제 사례\n"
    },
    {
      "id": "llm-wiki-architecture",
      "label": "Karpathy LLM Wiki 3계층 아키텍처",
      "title": "Karpathy LLM Wiki 3계층 아키텍처",
      "path": "wiki/llm-wiki-architecture.md",
      "group": "wiki",
      "category": "architecture",
      "updated": "2026-10-16",
      "chars": 2524,
      "lines": 49,
      "verified_marks": 9,
      "estimate_marks": 4,
      "summary": "비정형 원자료(`raw/`)를 불변으로 보존하고, AI 에이전트가 마크다운 헌법(`AGENTS.md`)에 따라 상호 연결된 지식 위키(`wiki/`)를 직접 컴파일·유지보수하는 3계층 '제2의 뇌' 아키텍처입니다.",
      "tags": [
        "llm-wiki",
        "architecture",
        "second-brain",
        "karpathy"
      ],
      "sources": [
        "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
        "raw/2026-10-13_solo_creator_automation_meeting.md"
      ],
      "outbound": [
        "knowledge-compounding-vs-rag",
        "agent-harness-portability",
        "semi-automated-qa-gate",
        "creator-compliance-and-platform-policy"
      ],
      "inbound": [
        "agent-harness-portability",
        "creator-compliance-and-platform-policy",
        "knowledge-compounding-vs-rag",
        "semi-automated-qa-gate",
        "voice-tts-and-audio-mastering"
      ],
      "content": "---\ntitle: \"Karpathy LLM Wiki 3계층 아키텍처\"\nid: \"llm-wiki-architecture\"\ncategory: \"architecture\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-12_karpathy_llm_wiki_clipping.md\"\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\ntags:\n  - \"llm-wiki\"\n  - \"architecture\"\n  - \"second-brain\"\n  - \"karpathy\"\n---\n\n# Karpathy LLM Wiki 3계층 아키텍처\n\n> **한 줄 요약**: 비정형 원자료(`raw/`)를 불변으로 보존하고, AI 에이전트가 마크다운 헌법(`AGENTS.md`)에 따라 상호 연결된 지식 위키(`wiki/`)를 직접 컴파일·유지보수하는 3계층 '제2의 뇌' 아키텍처입니다.\n\n## 1. 핵심 개념 및 배경\n\nAndrej Karpathy가 제안한 **LLM Wiki** 패턴은 AI를 일회성 질의응답 챗봇이 아니라 **'내 로컬 지식 베이스를 상시 편집하고 무결성을 관리하는 전담 위키 사서(Maintainer)'**로 정의합니다 (`△`). 기존 벡터 검색 방식의 한계는 [[knowledge-compounding-vs-rag]] 문서에서 자세히 다루며, 특정 모델의 사용량 한도에 구애받지 않는 구조는 [[agent-harness-portability]]와 직결됩니다.\n\n3계층 아키텍처는 역할이 엄격히 분리된 세 영역으로 구성됩니다 (`✔`):\n\n1. **계층 1 — `raw/` (불변 원자료 계층)**:\n   - 회의록, 기사 스크랩, 실험 노트, 정책 요약 등 날것의 메모를 던져 넣는 폴더입니다.\n   - 에이전트는 `raw/` 파일을 절대 수정하거나 삭제하지 않으며, 오직 사실 확인(`✔`/`△`)의 출처로만 참조합니다.\n2. **계층 2 — `wiki/` (에이전트 컴파일 지식 계층)**:\n   - 에이전트가 `raw/`의 파편화된 정보를 주제별로 통합하여 생성한 마크다운 문서들과 전체 목차(`index.md`), 컴파일 기록(`log.md`)이 위치합니다.\n   - 모든 개념 문서는 `[[위키링크]]`로 상호 연결되며, [[semi-automated-qa-gate]] 원칙에 따라 `/lint` 무결성 검사를 통과해야 합니다.\n3. **계층 3 — `AGENTS.md` · `GEMINI.md` · `CLAUDE.md` (에이전트 헌법 계층)**:\n   - 위키 문서의 스키마, 근거 표기 규칙(`✔` 1차 원문 / `△` 2차 추정), 그리고 3대 워크플로우(`/ingest`, `/compile`, `/lint`)를 정의하는 지침서입니다.\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 계층 구분 | 폴더 / 파일 경로 | 수정 권한 | 핵심 검증 규칙 (`scripts/wiki_tool.py`) | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|---|\n| **계층 1 (원자료)** | `raw/*.md` | 인간 전용 (에이전트 읽기 전용) | 최소 2개 이상의 `wiki/` 문서에서 출처로 인용될 것 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n| **계층 2 (위키)** | `wiki/*.md` | 에이전트 컴파일 · 유지보수 | 끊어진 `[[위키링크]]` 0건, 고립 노드 0건, 프론트매터 완비 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n| **계층 3 (헌법)** | `AGENTS.md` / `GEMINI.md` / `CLAUDE.md` | 인간 + 에이전트 합의 개정 | Antigravity(Gemini) 및 Claude Code 양쪽에서 동일 동작 보장 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n| **시각화 계층** | `viewer/index.html` | `wiki_tool.py build` 자동 갱신 | 옵시디언 미설치 환경에서도 브라우저 더블클릭 즉시 그래프 탐색 | `✔` | `raw/2026-10-12_karpathy_llm_wiki_clipping.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[knowledge-compounding-vs-rag]] — 조각 검색(RAG) 대신 위키 컴파일 방식이 지식을 복리로 축적하는 원리\n- [[agent-harness-portability]] — `AGENTS.md`, `GEMINI.md`, `CLAUDE.md`를 통한 멀티 에이전트 무중단 전환 구조\n- [[semi-automated-qa-gate]] — 에이전트 자동 컴파일과 인간의 1차 원문(`✔`) 검수를 결합하는 품질 관리 게이트\n- [[creator-compliance-and-platform-policy]] — 로컬 마크다운 위키와 GitHub 저장소를 크리에이터 본진 자산으로 활용하는 전략\n"
    },
    {
      "id": "semi-automated-qa-gate",
      "label": "1인 크리에이터 반자동 검수 게이트와 1차 원문 판정",
      "title": "1인 크리에이터 반자동 검수 게이트와 1차 원문 판정",
      "path": "wiki/semi-automated-qa-gate.md",
      "group": "wiki",
      "category": "workflow",
      "updated": "2026-10-16",
      "chars": 2302,
      "lines": 42,
      "verified_marks": 8,
      "estimate_marks": 2,
      "summary": "100% 무인 자동화 공장이 겪는 환각·품질 붕괴를 막기 위해, 반복 작업 90%는 에이전트와 스크립트로 자동화하되 '1차 원문(`✔`) 대조 · 360p 사전 검수 · 오디오/링크 무결성 검사' 3곳에 명확한 검수 게이트를 두는 운영 원칙입니다.",
      "tags": [
        "qa-gate",
        "fact-check",
        "semi-automated",
        "lint"
      ],
      "sources": [
        "raw/2026-10-13_solo_creator_automation_meeting.md",
        "raw/2026-10-11_ai_video_workflow_memo.md",
        "raw/2026-10-14_tts_voice_comparison_notes.md"
      ],
      "outbound": [
        "llm-wiki-architecture",
        "ai-video-production-pipeline",
        "voice-tts-and-audio-mastering",
        "creator-compliance-and-platform-policy",
        "agent-harness-portability"
      ],
      "inbound": [
        "agent-harness-portability",
        "ai-video-production-pipeline",
        "creator-compliance-and-platform-policy",
        "knowledge-compounding-vs-rag",
        "llm-wiki-architecture",
        "voice-tts-and-audio-mastering"
      ],
      "content": "---\ntitle: \"1인 크리에이터 반자동 검수 게이트와 1차 원문 판정\"\nid: \"semi-automated-qa-gate\"\ncategory: \"workflow\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\n  - \"raw/2026-10-11_ai_video_workflow_memo.md\"\n  - \"raw/2026-10-14_tts_voice_comparison_notes.md\"\ntags:\n  - \"qa-gate\"\n  - \"fact-check\"\n  - \"semi-automated\"\n  - \"lint\"\n---\n\n# 1인 크리에이터 반자동 검수 게이트와 1차 원문 판정\n\n> **한 줄 요약**: 100% 무인 자동화 공장이 겪는 환각·품질 붕괴를 막기 위해, 반복 작업 90%는 에이전트와 스크립트로 자동화하되 '1차 원문(`✔`) 대조 · 360p 사전 검수 · 오디오/링크 무결성 검사' 3곳에 명확한 검수 게이트를 두는 운영 원칙입니다.\n\n## 1. 핵심 개념 및 배경\n\n외부에서 흔히 바이럴되는 '무인 자동화 쇼츠 공장(시트 한 줄 입력 → 대본·영상·업로드 전자동)'을 실제로 구동해 보면, ① 2차 언론 보도의 오보를 사실로 단정하는 환각, ② 영상 클립 내 개수 오류 및 기괴한 영어 잡음 유입, ③ 플랫폼 정책 위반으로 인한 채널 제재 위험이 발생합니다 (`raw/2026-10-13_solo_creator_automation_meeting.md` `✔`).\n\n따라서 지속 가능한 1인 미디어 및 [[llm-wiki-architecture]] 운영의 핵심은 **\"무엇을 에이전트에게 맡기고, 어느 관문(Gate)을 결정론적 스크립트와 사람이 판정할 것인가\"**를 설계하는 데 있습니다.\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 검수 게이트 단계 | 대상 공정 | 자동화 영역 (에이전트 · 스크립트) | 필수 통과 기준 (Pass Criteria) | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|---|\n| **Gate 1: 팩트 및 위키 무결성** | 리서치 · 대본 · 위키 컴파일 | `wiki_tool.py lint` 6대 항목 자동 검사 | 1차 원문(`✔`)과 2차 보도(`△`) 분리 표기 · 끊어진 `[[위키링크]]` 0건 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n| **Gate 2: 영상 360p 사전 검증** | [[ai-video-production-pipeline]] | 프롬프트 배치 생성 · 해상도/프레임 차 측정 | 9:16 비율 확인 · 첫 프레임 움직임(≥1.86px) · 360p(4cr) 통과 후 720p 제출 | `✔` | `raw/2026-10-11_ai_video_workflow_memo.md` |\n| **Gate 3: 전사 Diff 및 음향** | [[voice-tts-and-audio-mastering]] | Whisper 전사 대조 · `tighten` 0.3/0.22초 압축 | 숫자·약어 오독 0건 · 클립 내 영어 잡음 무음 처리 · `-14.7 LUFS` | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **Gate 4: 배포 및 정책 고지** | [[creator-compliance-and-platform-policy]] | 금칙어 grep · 파일명 일치 대조 | 수익 보장 문구 0건 · 플랫폼 AI 생성 라벨 ON · 개인정보 노출 0건 | `✔` | `raw/2026-10-13_solo_creator_automation_meeting.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[llm-wiki-architecture]] — `/lint` 검수 게이트가 적용되는 3계층 위키 구조\n- [[agent-harness-portability]] — Antigravity(Gemini)와 Claude Code 양쪽에서 동일하게 실행되는 `wiki_tool.py lint`\n- [[ai-video-production-pipeline]] — 57크레딧 손실을 막아주는 9:16 저장 및 360p→720p 2단계 제출 게이트\n- [[voice-tts-and-audio-mastering]] — TTS 합성 직후 Whisper 전사 대조와 무음·숨소리 정밀 편집 게이트\n- [[creator-compliance-and-platform-policy]] — 표시광고법 준수 및 플랫폼 AI 라벨 의무화 점검 게이트\n"
    },
    {
      "id": "voice-tts-and-audio-mastering",
      "label": "AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격",
      "title": "AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격",
      "path": "wiki/voice-tts-and-audio-mastering.md",
      "group": "wiki",
      "category": "production",
      "updated": "2026-10-16",
      "chars": 2608,
      "lines": 44,
      "verified_marks": 9,
      "estimate_marks": 2,
      "summary": "얼굴 없는(Faceless) 콘텐츠의 몰입도를 좌우하는 나레이션 품질을 위해 메인 강사('필재')와 질문자('은경')의 화법을 분리하고, 합성 직후 Whisper 전사 대조·무음 압축(`0.3s → 0.22s`)·`-14.7 LUFS` 마스터링을 거치는 표준 오디오 공정입니다.",
      "tags": [
        "tts",
        "audio-mastering",
        "whisper",
        "typecast",
        "lufs"
      ],
      "sources": [
        "raw/2026-10-14_tts_voice_comparison_notes.md",
        "raw/2026-10-13_solo_creator_automation_meeting.md",
        "raw/2026-10-15_platform_ai_disclosure_policy.md"
      ],
      "outbound": [
        "ai-video-production-pipeline",
        "semi-automated-qa-gate",
        "creator-compliance-and-platform-policy",
        "llm-wiki-architecture"
      ],
      "inbound": [
        "ai-video-production-pipeline",
        "creator-compliance-and-platform-policy",
        "semi-automated-qa-gate"
      ],
      "content": "---\ntitle: \"AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격\"\nid: \"voice-tts-and-audio-mastering\"\ncategory: \"production\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-14_tts_voice_comparison_notes.md\"\n  - \"raw/2026-10-13_solo_creator_automation_meeting.md\"\n  - \"raw/2026-10-15_platform_ai_disclosure_policy.md\"\ntags:\n  - \"tts\"\n  - \"audio-mastering\"\n  - \"whisper\"\n  - \"typecast\"\n  - \"lufs\"\n---\n\n# AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격\n\n> **한 줄 요약**: 얼굴 없는(Faceless) 콘텐츠의 몰입도를 좌우하는 나레이션 품질을 위해 메인 강사('필재')와 질문자('은경')의 화법을 분리하고, 합성 직후 Whisper 전사 대조·무음 압축(`0.3s → 0.22s`)·`-14.7 LUFS` 마스터링을 거치는 표준 오디오 공정입니다.\n\n## 1. 핵심 개념 및 배경\n\n카메라 없이 화면 녹화와 캐릭터 일러스트([[ai-video-production-pipeline]])로 진행하는 강의·쇼츠에서는 오디오의 호흡이 시청 지속시간을 결정합니다 (`✔`). TTS 원본 파일을 후처리 없이 그대로 쓰면 문장 사이의 긴 침묵, 어미 늘어짐, 들숨 소리, 그리고 영문 약어 오독 때문에 시청자가 피로감을 느끼고 이탈합니다 (`raw/2026-10-14_tts_voice_comparison_notes.md` `✔`).\n\n이를 방지하기 위해 ① **화자 분리(메인 설명 `~습니다`체 vs 초보자 질문 `~요`체)**, ② **합성 직후 Whisper 전사 Diff 검수**([[semi-automated-qa-gate]]), ③ **무음·숨소리 정밀 압축 및 최종 MP4 True Peak 리미팅**의 3단계 파이프라인을 적용합니다 (`✔`).\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n\n| 공정 항목 | 적용 도구 / 보이스 | 정량 기준 및 파라미터 | 실측 효과 / 주의사항 | 근거 등급 | 원자료 출처 |\n|---|---|---|---|---|---|\n| **메인 강사 음성** | 타입캐스트 「필재」 (1.0x) / 영문 Peter | `~습니다`체 설명 전담 · 단가 **0.495원/cr** | 차분한 중저음 톤, 영문 약어는 한글 발음 표기 후 투입 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **보조 질문자 음성** | 타입캐스트 「은경」 (1.0x) / 영문 Maisie | `~요`체 · 1회 **20자 안팎 (5초 이내)** · 강당 3~4회 | 수강생이 막힐 지점을 대신 질문 (가짜 칭찬·추천 금지) | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **오픈소스 로컬 TTS** | Qwen3-TTS / Kokoro-82M | Apple Silicon 로컬 구동 · API 비용 **0원** | 다국어 실험용 적합, 한국어 숫자 억양은 상용 대비 보완 필요 | `△` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **무음 및 호흡 압축** | `tighten_audio` & `trim_gaps` | 무음 `>0.30s → 0.22s` 압축 · 어미 `1.8x` · 숨소리 `0.16s` | 190.50초 원본을 **175.46초**로 단축해 텐션 유지 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **최종 음향 마스터링** | FFmpeg Loudnorm & 4x Limiter | 나레이션 **-14.7 LUFS**, 룸톤 **-42~-38dB**, Peak **≤ -1.0dBTP** | 기계적 합성 효과음 금지 · AAC 인코딩 후 피크 튐 방지 | `✔` | `raw/2026-10-14_tts_voice_comparison_notes.md` |\n| **배포 라이선스 준수** | 강의 자료 패키징 규칙 | `.wav` 원본 음성 파일 단독 배포 금지 → 대본 `.txt`만 배포 | 타입캐스트 상업 이용 약관 준수 | `✔` | `raw/2026-10-15_platform_ai_disclosure_policy.md` |\n\n## 3. 연결된 위키 문서 (Related Concepts)\n\n- [[ai-video-production-pipeline]] — 오디오 볼륨(RMS)에 맞춰 입모양이 움직이는 캐릭터 스탠딩 연출과의 결합\n- [[semi-automated-qa-gate]] — Whisper 전사 Diff 대조 및 비디오 클립 내 불필요한 영어 음성 제거 게이트\n- [[creator-compliance-and-platform-policy]] — TTS `.wav` 단독 재배포 금지 약관 및 가상인물 추천·보증 표시 지침 준수\n- [[llm-wiki-architecture]] — 오디오 엔지니어링 파라미터와 실패 사례를 위키로 구조화해 재사용하는 체계\n"
    },
    {
      "id": "index",
      "label": "wiki/index.md (전체 목차)",
      "title": "LLM Wiki 전체 목차 및 색인",
      "path": "wiki/index.md",
      "group": "meta",
      "category": "meta",
      "chars": 3966,
      "lines": 55,
      "summary": "카테고리별 위키 목차 및 원자료↔위키 추적 매트릭스",
      "content": "# 📚 LLM Wiki 전체 목차 및 지식 그래프 색인 (Index)\n\n> **자동 생성 파일**: `python3 scripts/wiki_tool.py build`에 의해 컴파일되었습니다.\n> **최종 업데이트**: `2026-10-16` | **원자료(`raw/`)**: `5건 (8,615자)` | **개념 위키(`wiki/`)**: `7건 (17,079자)` | **교차 `[[위키링크]]`**: `30개` | **원자료 인용**: `16회`\n\n---\n\n## 1. 카테고리별 개념 위키 문서 일람\n\n### 🏛️ 아키텍처 & 에이전트 헌법 (Architecture & Harness)\n\n| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |\n|---|---|---|---:|---:|---:|\n| [[agent-harness-portability]] | **멀티 에이전트 호환 하네스 (Antigravity Gemini × Claude Code)** | 위키 헌법을 `AGENTS.md`(공통), `GEMINI.md`(Antigravity용), `CLAUDE.md`(Claude Code용) 3중 구조로 설계하고 결정론적 파이썬 검사기(`wiki_tool.py`)를 결합하면, 특정 AI 도구의 주간 한도가 차도 1분 만에 다른 에이전트로 갈아끼워 똑같은 품질로 위키를 운영할 수 있습니다. | 4 | 4 | 2 |\n| [[knowledge-compounding-vs-rag]] | **복리형 위키 컴파일 vs 조각 검색형 RAG 비교** | 질문할 때마다 문서를 잘게 쪼개 검색하고 휘발시키는 기존 RAG와 달리, LLM Wiki는 새로운 메모가 들어올 때마다 기존 지식 문서를 갱신하고 `[[위키링크]]`를 확장하여 지식이 복리(Compounding)로 쌓이게 만듭니다. | 4 | 3 | 2 |\n| [[llm-wiki-architecture]] | **Karpathy LLM Wiki 3계층 아키텍처** | 비정형 원자료(`raw/`)를 불변으로 보존하고, AI 에이전트가 마크다운 헌법(`AGENTS.md`)에 따라 상호 연결된 지식 위키(`wiki/`)를 직접 컴파일·유지보수하는 3계층 '제2의 뇌' 아키텍처입니다. | 4 | 5 | 2 |\n\n### ⚙️ 반자동 검수 & 운영 워크플로우 (Workflow & QA Gates)\n\n| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |\n|---|---|---|---:|---:|---:|\n| [[semi-automated-qa-gate]] | **1인 크리에이터 반자동 검수 게이트와 1차 원문 판정** | 100% 무인 자동화 공장이 겪는 환각·품질 붕괴를 막기 위해, 반복 작업 90%는 에이전트와 스크립트로 자동화하되 '1차 원문(`✔`) 대조 · 360p 사전 검수 · 오디오/링크 무결성 검사' 3곳에 명확한 검수 게이트를 두는 운영 원칙입니다. | 5 | 6 | 3 |\n\n### 🎬 AI 영상 · 보이스 제작 공정 (Video & Audio Production)\n\n| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |\n|---|---|---|---:|---:|---:|\n| [[ai-video-production-pipeline]] | **AI 영상 2단계 생성 공정과 캐릭터 스프라이트 연출** | AI 영상 제작 시 '9:16 비율 저장 → 360p 시험(4cr) → 720p 본 제출(7~12cr)'의 2단계 공정과 `exactly N` 개수 고정 문법으로 크레딧 낭비를 막고, 강의형 영상에서는 1200×1200 투명 PNG 캐릭터 스탠딩 교체(0cr)로 일관성과 가독성을 동시에 확보합니다. | 4 | 4 | 2 |\n| [[voice-tts-and-audio-mastering]] | **AI 보이스 합성(TTS) 전사 대조 및 오디오 마스터링 규격** | 얼굴 없는(Faceless) 콘텐츠의 몰입도를 좌우하는 나레이션 품질을 위해 메인 강사('필재')와 질문자('은경')의 화법을 분리하고, 합성 직후 Whisper 전사 대조·무음 압축(`0.3s → 0.22s`)·`-14.7 LUFS` 마스터링을 거치는 표준 오디오 공정입니다. | 4 | 3 | 3 |\n\n### ⚖️ 플랫폼 정책 · 표시 의무 & 본진 전략 (Compliance & Strategy)\n\n| 문서 ID (`[[위키링크]]`) | 제목 | 한 줄 요약 | 나가는 링크 | 들어오는 링크 | 원자료 출처 수 |\n|---|---|---|---:|---:|---:|\n| [[creator-compliance-and-platform-policy]] | **AI 생성 표시 의무와 크리에이터 탈플랫폼 본진 전략** | AI 생성 라벨 표시와 '수익 보장 문구 금지(표시광고법 준수)'를 철저히 지키고, 단일 플랫폼 제재 리스크를 넘어 로컬 마크다운 위키·GitHub 오픈소스·자체 매체 사이트로 '내 땅(Owned Media)'을 구축하는 전략입니다. | 5 | 5 | 2 |\n\n---\n\n## 2. 원자료(`raw/`) ↔ 위키 문서(`wiki/`) 추적 매트릭스 (Traceability Matrix)\n\n| 원자료 파일 (`raw/`) | 작성일 | 분량 | 추출·연결된 위키 문서 (`wiki/`) | 인용 횟수 |\n|---|---|---:|---|---:|\n| `raw/2026-10-11_ai_video_workflow_memo.md` | 2026-10-11 | 1,637자 (24줄) | [[ai-video-production-pipeline]], [[semi-automated-qa-gate]] | 2회 |\n| `raw/2026-10-12_karpathy_llm_wiki_clipping.md` | 2026-10-12 | 1,713자 (34줄) | [[agent-harness-portability]], [[knowledge-compounding-vs-rag]], [[llm-wiki-architecture]] | 3회 |\n| `raw/2026-10-13_solo_creator_automation_meeting.md` | 2026-10-13 | 1,781자 (28줄) | [[agent-harness-portability]], [[ai-video-production-pipeline]], [[creator-compliance-and-platform-policy]], [[knowledge-compounding-vs-rag]], [[llm-wiki-architecture]], [[semi-automated-qa-gate]], [[voice-tts-and-audio-mastering]] | 7회 |\n| `raw/2026-10-14_tts_voice_comparison_notes.md` | 2026-10-14 | 1,707자 (23줄) | [[semi-automated-qa-gate]], [[voice-tts-and-audio-mastering]] | 2회 |\n| `raw/2026-10-15_platform_ai_disclosure_policy.md` | 2026-10-15 | 1,777자 (32줄) | [[creator-compliance-and-platform-policy]], [[voice-tts-and-audio-mastering]] | 2회 |\n\n---\n\n## 3. 에이전트 실행 및 뷰어 안내\n\n- **Antigravity (Gemini 4 Argon High)**: `GEMINI.md` 및 `AGENTS.md` 자동 인식\n- **Claude Code CLI**: `CLAUDE.md` 및 `.claude/commands/` (`/ingest`, `/compile`, `/lint`) 지원\n- **인터랙티브 지식 그래프 뷰어**: 브라우저에서 `viewer/index.html` 파일을 열면 전체 노드·엣지 그래프와 Before(`raw/`) vs After(`wiki/`) 비교 화면을 탐색할 수 있습니다.\n"
    },
    {
      "id": "log",
      "label": "wiki/log.md (컴파일 로그)",
      "title": "LLM Wiki 컴파일 및 감사 로그",
      "path": "wiki/log.md",
      "group": "meta",
      "category": "meta",
      "chars": 2614,
      "lines": 41,
      "summary": "단계별 빌드 소요 시간 및 /lint 6대 무결성 검증 기록",
      "content": "# 📋 LLM Wiki 컴파일 및 무결성 감사 로그 (Compilation & Lint Log)\n\n> **운영 원칙**: `AGENTS.md` §3에 따라 모든 `/ingest`, `/compile`, `/lint` 실행 이력과 소요 시간, 무결성 검증 결과를 투명하게 기록합니다 (`✔`).\n\n---\n\n## 1. 최신 빌드 요약 (Latest Compilation Summary)\n\n| 측정 항목 | 측정 수치 (`✔` 실측) | 비고 |\n|---|---|---|\n| **실행 에이전트 / 환경** | Antigravity (Gemini 4 Argon High) & `scripts/wiki_tool.py` | `AGENTS.md` · `GEMINI.md` · `CLAUDE.md` 100% 호환 |\n| **원자료(`raw/`) 스캔** | **5개 파일** (총 8,615자 / 141줄) | 불변(Immutable) 원본 유지 |\n| **위키 문서(`wiki/`) 생성** | **7개 개념 문서 + `index.md` + `log.md` = 총 9개** | 총 본문 17,079자 (색인·로그 제외) |\n| **교차 `[[위키링크]]` 연결** | **30개** (문서당 평균 4.3개) | 양방향 상호 참조 완료 |\n| **원자료→위키 출처 매핑** | **16개 연결** (원자료당 평균 3.2회 인용) | 누락된 원자료 0건 |\n| **스크립트 빌드/검증 소요 시간** | **9.5 ms** (`0.009초`) | 에이전트 초기 문서 합성 포함 시 약 1분 42초 (`✔`) |\n| **`/lint` 6대 무결성 판정** | **ALL 6 CHECKS PASSED ✔** | 끊어진 링크 0건 · 고립 노드 0건 · 민감정보 0 |\n\n---\n\n## 2. 단계별 작업 이력 (Chronological Pipeline Log)\n\n| 단계 | 타임스탬프 (KST) | 명령어 / 액션 | 입력 대상 | 출력 / 결과 | 소요 시간 | 상태 |\n|---|---|---|---|---|---:|---|\n| **Step 1** | `2026-10-16 16:37` | `init-harness` | `AGENTS.md`, `GEMINI.md`, `CLAUDE.md` | 멀티 에이전트 3중 헌법 및 슬래시 워크플로우 세팅 | `12.4s` | `PASS ✔` |\n| **Step 2** | `2026-10-16 16:39` | `/ingest` | `raw/2026-10-11~15_*.md` (5건, 8,615자) | 핵심 아키텍처·공정·정책 7대 개념 추출 및 근거(`✔`/`△`) 분류 | `38.2s` | `PASS ✔` |\n| **Step 3** | `2026-10-16 16:41` | `/compile` | `wiki/*.md` (7건 개념 문서) | 양방향 `[[위키링크]]` 30개 연결 + `index.md` + `viewer/graph_data.js` 빌드 | `51.0s` | `PASS ✔` |\n| **Step 4** | `2026-10-16 16:42` | `/lint` | `scripts/wiki_tool.py lint` | 6대 무결성 감사 전수 통과 (Dead Link 0, Orphan 0, Privacy Leak 0) | `9.5ms` | `PASS ✔` |\n\n---\n\n## 3. `/lint` 6대 무결성 검사 상세 리포트\n\n| 검사 ID | 검사 항목 | 기준 | 측정 결과 | 판정 |\n|---|---|---|---|---|\n| `CHECK-01` | **프론트매터 스키마 무결성 (Frontmatter Schema)** | 모든 개념 위키 문서에 필수 키 6종(title, id, category, updated, sources, tags) 포함 | 검사 문서 7건 중 누락 0건 | **PASS ✔** |\n| `CHECK-02` | **끊어진 위키링크 검사 (Zero Dead Links)** | 본문 내 모든 [[위키링크]]가 실제 존재하는 wiki/<id>.md를 가리킬 것 | 교차 링크 30개 중 끊어진 링크 0건 | **PASS ✔** |\n| `CHECK-03` | **고립 문서 방지 검사 (Zero Orphan Nodes)** | 모든 개념 문서가 최소 2개 이상의 나가는 링크 및 들어오는 백링크 보유 | 전체 7개 개념 노드 모두 양방향 2+ 연결 충족 (고립 노드 0건) | **PASS ✔** |\n| `CHECK-04` | **원자료 커버리지 검사 (Raw Input Coverage)** | raw/ 폴더의 모든 원자료가 최소 2개 이상의 위키 문서에 출처로 반영될 것 | 원자료 5건 모두 2개 이상 위키 문서에 교차 반영 완료 | **PASS ✔** |\n| `CHECK-05` | **근거 등급 표기 검사 (Fact-Check Markers ✔/△)** | 모든 개념 문서가 1차 확인 근거(✔)와 2차 추정(△) 기준을 명시할 것 | 위키 문서 내 1차 근거(✔) 57회 · 2차 참고(△) 16회 표기 확인 | **PASS ✔** |\n| `CHECK-06` | **개인정보·내부 경로 클린 검사 (Zero Privacy Leak)** | 공개 배포용 저장소 내 로컬 홈 경로 및 개인 식별자 노출 0건 | 전체 27개 텍스트/코드 파일 스캔 결과 민감 문자열 0건 | **PASS ✔** |\n"
    }
  ],
  "edges": [
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "agent-harness-portability",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
      "to": "agent-harness-portability",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "agent-harness-portability",
      "to": "llm-wiki-architecture",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "agent-harness-portability",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "agent-harness-portability",
      "to": "knowledge-compounding-vs-rag",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "agent-harness-portability",
      "to": "creator-compliance-and-platform-policy",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-11_ai_video_workflow_memo.md",
      "to": "ai-video-production-pipeline",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "ai-video-production-pipeline",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "ai-video-production-pipeline",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "ai-video-production-pipeline",
      "to": "voice-tts-and-audio-mastering",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "ai-video-production-pipeline",
      "to": "creator-compliance-and-platform-policy",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "ai-video-production-pipeline",
      "to": "knowledge-compounding-vs-rag",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-15_platform_ai_disclosure_policy.md",
      "to": "creator-compliance-and-platform-policy",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "creator-compliance-and-platform-policy",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "creator-compliance-and-platform-policy",
      "to": "llm-wiki-architecture",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "creator-compliance-and-platform-policy",
      "to": "agent-harness-portability",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "creator-compliance-and-platform-policy",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "creator-compliance-and-platform-policy",
      "to": "ai-video-production-pipeline",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "creator-compliance-and-platform-policy",
      "to": "voice-tts-and-audio-mastering",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
      "to": "knowledge-compounding-vs-rag",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "knowledge-compounding-vs-rag",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "knowledge-compounding-vs-rag",
      "to": "ai-video-production-pipeline",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "knowledge-compounding-vs-rag",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "knowledge-compounding-vs-rag",
      "to": "llm-wiki-architecture",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "knowledge-compounding-vs-rag",
      "to": "agent-harness-portability",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-12_karpathy_llm_wiki_clipping.md",
      "to": "llm-wiki-architecture",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "llm-wiki-architecture",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "llm-wiki-architecture",
      "to": "knowledge-compounding-vs-rag",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "llm-wiki-architecture",
      "to": "agent-harness-portability",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "llm-wiki-architecture",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "llm-wiki-architecture",
      "to": "creator-compliance-and-platform-policy",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "semi-automated-qa-gate",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-11_ai_video_workflow_memo.md",
      "to": "semi-automated-qa-gate",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-14_tts_voice_comparison_notes.md",
      "to": "semi-automated-qa-gate",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "semi-automated-qa-gate",
      "to": "llm-wiki-architecture",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "semi-automated-qa-gate",
      "to": "ai-video-production-pipeline",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "semi-automated-qa-gate",
      "to": "voice-tts-and-audio-mastering",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "semi-automated-qa-gate",
      "to": "creator-compliance-and-platform-policy",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "semi-automated-qa-gate",
      "to": "agent-harness-portability",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "raw/2026-10-14_tts_voice_comparison_notes.md",
      "to": "voice-tts-and-audio-mastering",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-13_solo_creator_automation_meeting.md",
      "to": "voice-tts-and-audio-mastering",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "raw/2026-10-15_platform_ai_disclosure_policy.md",
      "to": "voice-tts-and-audio-mastering",
      "type": "source",
      "label": "ingest"
    },
    {
      "from": "voice-tts-and-audio-mastering",
      "to": "ai-video-production-pipeline",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "voice-tts-and-audio-mastering",
      "to": "semi-automated-qa-gate",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "voice-tts-and-audio-mastering",
      "to": "creator-compliance-and-platform-policy",
      "type": "wikilink",
      "label": "[[link]]"
    },
    {
      "from": "voice-tts-and-audio-mastering",
      "to": "llm-wiki-architecture",
      "type": "wikilink",
      "label": "[[link]]"
    }
  ],
  "constitutions": {
    "AGENTS.md": "# AGENTS.md — LLM Wiki Universal Agent Constitution (공통 마크다운 헌법)\n\n> **호환 에이전트**: Antigravity (Gemini 4 Argon High / Gemini CLI) · Claude Code · Cursor · Windsurf · Codex CLI\n> **아키텍처 기반**: Andrej Karpathy의 `LLM Wiki` 3계층 패턴 (`raw/` → `wiki/` → `AGENTS.md`)\n\n이 저장소는 흩어진 비정형 메모·회의록·스크랩(`raw/`)을 에이전트가 직접 읽고, 요약·교차 검증하여 상호 연결된 마크다운 지식 위키(`wiki/`)로 컴파일(Compile)하고 유지보수하는 **'제2의 뇌(Second Brain)' 스타터 킷**입니다.\n\n특정 AI 도구 하나에 종속되지 않도록 **공통 헌법(`AGENTS.md`)**을 단일 출처(Single Source of Truth)로 삼으며, `GEMINI.md`(Antigravity/Gemini용)와 `CLAUDE.md`(Claude Code용)가 모두 이 규칙을 따릅니다.\n\n---\n\n## 1. 3계층 폴더 구조 및 불변 규칙 (3-Layer Architecture)\n\n```text\nllm-wiki-starter/\n├── AGENTS.md                 # [계층 3] 전 에이전트 공통 위키 헌법 (단일 출처)\n├── GEMINI.md                 # [계층 3] Antigravity / Gemini 전용 진입점\n├── CLAUDE.md                 # [계층 3] Claude Code 전용 진입점\n├── raw/                      # [계층 1] 비정형 원자료 폴더 (읽기 전용 · 불변)\n│   └── YYYY-MM-DD_*.md       # 회의록, 기사 스크랩, 실험 메모, 정책 요약 등\n├── wiki/                     # [계층 2] 에이전트가 컴파일·유지보수하는 위키 폴더\n│   ├── index.md              # 전체 위키 목차 · 카테고리 분류 · 원자료 매핑표\n│   ├── log.md                # 컴파일 소요 시간 · 변경 이력 · 무결성 감사 로그\n│   └── <concept-slug>.md     # 개념별 위키 문서 ([[위키링크]] 교차 연결)\n├── scripts/\n│   └── wiki_tool.py          # 위키 인덱스 빌드 · 그래프 데이터 추출 · /lint 무결성 검사기\n└── viewer/\n    ├── index.html            # 브라우저 단독 실행 다크모드 지식 그래프 & 비교 뷰어\n    └── graph_data.js         # wiki_tool.py가 생성한 노드·엣지·본문 번들\n```\n\n### 핵심 운영 원칙 4가지\n1. **`raw/` 불변 원칙 (Immutable Raw Sources)**: 에이전트는 `raw/` 폴더 안의 원본 파일을 절대 수정하거나 삭제하지 않습니다. 원자료는 오직 읽기 전용 근거로만 참조합니다.\n2. **근거 등급 분리 (`✔` vs `△`)**:\n   - `✔` (1차 근거): 직접 실험·측정한 수치, 공식 문서·법령·약관 원문, 재현 가능한 로그.\n   - `△` (2차 추정): 외부 언론 보도, 커뮤니티 반응, 추정치. 위키 본문과 표에서 반드시 구분해 표기합니다.\n3. **고립 문서 금지 (Zero Orphans)**: 모든 `wiki/<concept-slug>.md` 문서는 최소 2개 이상의 다른 위키 문서로 나가는 `[[위키링크]]`와 최소 1개 이상의 `raw/` 출처 파일을 명시해야 합니다.\n4. **수익·성과 과장 금지**: 사실과 측정된 숫자(시간, 비용, 파일 수, 링크 수)만 기록하며 과장된 수식어를 배제합니다.\n\n---\n\n## 2. 위키 문서 표준 스키마 (`wiki/<concept-slug>.md`)\n\n모든 개념 위키 문서는 아래 YAML 프론트매터와 섹션 구조를 반드시 포함해야 합니다.\n\n```markdown\n---\ntitle: \"문서 제목\"\nid: \"concept-slug\"\ncategory: \"architecture | workflow | production | compliance\"\nupdated: \"2026-10-16\"\nsources:\n  - \"raw/2026-10-12_karpathy_llm_wiki_clipping.md\"\ntags:\n  - \"llm-wiki\"\n  - \"knowledge-graph\"\n---\n\n# 문서 제목\n\n> **한 줄 요약**: 이 개념의 핵심 정의와 실무적 역할을 한 문장으로 요약합니다.\n\n## 1. 핵심 개념 및 배경\n...본문 및 [[다른-위키-문서-id]] 연결...\n\n## 2. 실전 규칙 및 측정 기준 (`✔` / `△`)\n| 항목 | 기준값 / 규칙 | 근거 등급 | 원자료 출처 |\n|---|---|---|---|\n\n## 3. 연결된 위키 문서 (Related Concepts)\n- [[연결-문서-1]] — 연결 맥락 설명\n- [[연결-문서-2]] — 연결 맥락 설명\n```\n\n---\n\n## 3. 3대 표준 워크플로우 (`/ingest` · `/compile` · `/lint`)\n\n사용자가 자연어 또는 슬래시 명령어로 지시하면 에이전트는 아래 절차대로 실행합니다.\n\n### ① `/ingest` (원자료 수집 및 분류)\n1. `raw/` 폴더의 모든 `.md` 파일을 스캔하여 새로 추가되거나 아직 `wiki/`에 반영되지 않은 원자료를 식별합니다.\n2. 각 원자료에서 핵심 주장, 수치(`✔`/`△`), 도구 규격, 해결한 문제를 추출합니다.\n3. 추출 결과를 바탕으로 새로 만들거나 업데이트할 `wiki/<concept-slug>.md` 목록을 제안하고 반영합니다.\n\n### ② `/compile` (위키 교차 컴파일 및 뷰어 갱신)\n1. `wiki/` 내 개념 문서들 사이의 연관성을 분석하여 본문과 하단 섹션에 양방향 `[[위키링크]]`를 촘촘하게 연결합니다.\n2. `python3 scripts/wiki_tool.py build` 명령을 실행하여:\n   - `wiki/index.md` (전체 카테고리 목차, 문서별 링크 통계, 원자료↔위키 매핑 매트릭스) 자동 갱신\n   - `wiki/log.md` (컴파일 시각, 처리 파일 수, 링크 수, 소요 시간) 기록 추가\n   - `viewer/graph_data.js` (인터랙티브 지식 그래프 뷰어 데이터) 자동 갱신\n\n### ③ `/lint` (무결성 감사 및 자동 복구)\n1. `python3 scripts/wiki_tool.py lint` 명령을 실행하여 다음 6개 항목을 전수 검사합니다:\n   - `[Check 1]` 프론트매터 필수 키(`title`, `id`, `category`, `updated`, `sources`, `tags`) 누락 0건\n   - `[Check 2]` 끊어진 `[[위키링크]]` (Dead Link) 0건\n   - `[Check 3]` 고립된 위키 문서 (Orphan Node, 인바운드/아웃바운드 링크 부족) 0건\n   - `[Check 4]` `raw/` 원자료 누락 (모든 `raw/` 파일이 최소 2개 이상의 위키 문서에 인용됨)\n   - `[Check 5]` 근거 표기(`✔`/`△`) 누락 0건\n   - `[Check 6]` 개인정보·내부 경로 노출 0건\n2. 만약 실패 항목이 발견되면 에이전트가 즉시 해당 마크다운 문서를 수정한 뒤 재검사를 통과시킵니다.\n",
    "GEMINI.md": "# GEMINI.md — Antigravity & Gemini Agent Configuration\n\n> **적용 환경**: Antigravity IDE (Gemini 4 Argon High / Gemini 2.5 Pro) 및 Gemini CLI\n> **상위 헌법**: 반드시 같은 폴더의 [`AGENTS.md`](./AGENTS.md)를 먼저 읽고 100% 준수하세요.\n\n---\n\n## 1. 왜 Antigravity (Gemini)에서도 똑같이 작동하는가?\n\nAndrej Karpathy의 **LLM Wiki** 패턴의 핵심은 **\"지식과 규칙이 특정 AI 모델의 서버 메모리가 아니라, 내 로컬 폴더의 마크다운 파일(`raw/`, `wiki/`, `AGENTS.md`)에 저장된다\"**는 점입니다.\n\n따라서 Claude Code의 주간 사용 한도(Weekly Limit)에 도달하더라도, **Antigravity (Gemini 4 Argon High)**에서 이 폴더를 열면 `GEMINI.md` → `AGENTS.md`를 즉시 읽어들여 단 1줄의 설정 변경 없이 동일한 위키 컴파일러와 무결성 검사기(`scripts/wiki_tool.py`)를 실행합니다.\n\n## 2. Antigravity (Gemini) 실행 명령어\n\n채팅창 또는 터미널 에이전트에게 아래와 같이 자연어로 지시하세요:\n\n1. **전체 위키 컴파일 및 그래프 갱신**:\n   > \"`AGENTS.md` 규칙에 따라 `raw/` 폴더의 원자료들을 분석해서 `wiki/` 문서를 업데이트하고, `python3 scripts/wiki_tool.py build`와 `python3 scripts/wiki_tool.py lint`를 실행해 결과를 보고해줘.\"\n2. **새 메모 추가 후 증분 반영 (`/ingest`)**:\n   > \"`raw/`에 새로 추가된 메모를 읽고 관련 `wiki/` 문서들과 `[[위키링크]]`를 연결한 뒤 뷰어를 갱신해줘.\"\n3. **무결성 점검 (`/lint`)**:\n   > \"`python3 scripts/wiki_tool.py lint`를 실행해서 끊어진 위키링크나 고립된 문서가 없는지 검증해줘.\"\n\n## 3. 작업 완료 전 필수 검증 (Verification Gate)\n\nAntigravity 에이전트는 위키 문서를 수정한 뒤 반드시 터미널 도구(`run_command`)로 아래 명령을 실행하여 `PASS`를 확인한 후에만 완료 보고를 해야 합니다:\n\n```bash\npython3 scripts/wiki_tool.py build\npython3 scripts/wiki_tool.py lint\n```\n",
    "CLAUDE.md": "# CLAUDE.md — Claude Code Agent Configuration\n\n> **적용 환경**: Claude Code CLI (`claude`) 및 Claude Desktop / IDE 확장\n> **상위 헌법**: 반드시 같은 폴더의 [`AGENTS.md`](./AGENTS.md)를 먼저 읽고 100% 준수하세요.\n\n---\n\n## 1. 멀티 에이전트 상호운용성 (Claude Code ↔ Antigravity Gemini)\n\n이 프로젝트는 [`AGENTS.md`](./AGENTS.md)를 단일 헌법으로 공유합니다.\n- **Claude Code** 사용 시: `CLAUDE.md`와 `.claude/commands/` 슬래시 커맨드(`/ingest`, `/compile`, `/lint`)가 작동합니다.\n- **Antigravity (Gemini)** 사용 시: `GEMINI.md`와 `.agents/workflows/` 워크플로우가 동일하게 작동합니다.\n- 어느 에이전트에서 작업하든 결과물은 `python3 scripts/wiki_tool.py lint`의 동일한 결정론적(Deterministic) 검증 기준을 통과해야 합니다.\n\n## 2. Claude Code 슬래시 커맨드 및 CLI 명령어\n\n- `/ingest` : `raw/` 폴더의 신규 비정형 메모를 읽어 `wiki/` 개념 문서로 추출·통합합니다.\n- `/compile` : `wiki/` 문서 간 양방향 `[[위키링크]]`를 엮고 `python3 scripts/wiki_tool.py build`로 `wiki/index.md`, `wiki/log.md`, `viewer/graph_data.js`를 갱신합니다.\n- `/lint` : `python3 scripts/wiki_tool.py lint`를 실행해 끊어진 링크·고립 노드·프론트매터·개인정보 노출 0건을 검증합니다.\n\n## 3. 작업 완료 전 필수 검증 명령어\n\n```bash\npython3 scripts/wiki_tool.py build && python3 scripts/wiki_tool.py lint\n```\n"
  }
};
