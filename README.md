# 🧠 LLM Wiki Starter Kit — Karpathy 3-Layer 'Second Brain'

🌐 **Language**: [**English**](./README.md) | [**简体中文**](./README.zh-CN.md) | [**日本語**](./README.ja.md) | [**한국어**](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Agent Compatible](https://img.shields.io/badge/Agents-Claude%20Code%20%7C%20Codex%20%7C%20Antigravity-purple)](./AGENTS.md)
[![Lint Status](https://img.shields.io/badge/Wiki%20Lint-6%2F6%20PASSED-brightgreen)](./wiki/log.md)
[![Interactive Course Lab](https://img.shields.io/badge/Course%20Lab-ainewground.com-0e7a5a)](https://ainewground.com/en/courses/llm-wiki/)

> **"Instead of traditional RAG that chunks documents on the fly and forgets everything the moment you close the chat window, let your AI agent compile and maintain a persistent local Markdown wiki (`wiki/`) interlinked with `[[wikilinks]]` so your knowledge compounds over time."**
> — Hands-on reproduction starter kit for Andrej Karpathy's **LLM Wiki** architecture (`github.com/gptssam/llm-wiki-starter`)

---

## ⚡ 10-Second Start: Copy-Paste Prompt for AI Agents (Claude Code · Codex · Antigravity)

You do not need to run terminal commands manually. Copy and paste the prompt below into **Claude Code**, **OpenAI Codex**, or **Antigravity**:

**English Prompt:**
```text
https://github.com/gptssam/llm-wiki-starter

Clone this GitHub repository into the current folder and set it up following the rules in AGENTS.md.
```

**한국어 프롬프트 ([한국어 전체 문서 보기 →](./README.ko.md)):**
```text
https://github.com/gptssam/llm-wiki-starter

이 깃허브 저장소를 현재 폴더에 클론하고, AGENTS.md 규칙에 따라 사용할 수 있게 셋팅해줘.
```

### 🤖 For AI Agents (Automated Bootstrap Instructions)

When a user provides the prompt above or asks to set up this repository, the AI agent (**Claude Code**, **Codex**, or **Antigravity**) should **immediately execute the following 4 steps in order without asking for confirmation first**:

1. **Clone (with automatic fallback if `git` is not installed) & Inspect Status**:
   ```bash
   # Standard git clone (or if git is not installed, automatically fallback to downloading the tarball):
   git clone https://github.com/gptssam/llm-wiki-starter.git || (curl -sL https://github.com/gptssam/llm-wiki-starter/archive/refs/heads/main.tar.gz | tar -xz && mv llm-wiki-starter-main llm-wiki-starter)
   cd llm-wiki-starter
   python3 scripts/wiki_tool.py status
   ```
   *(If you are already inside the cloned repository directory, skip cloning and start with `status`.)*
2. **Compile Wiki Index & Graph Bundle + Run 6-Point Integrity Audit (`/lint`)**:
   ```bash
   python3 scripts/wiki_tool.py build
   python3 scripts/wiki_tool.py lint
   ```
   *(Zero external pip dependencies — runs in `<0.01s` using the Python 3 standard library.)*
3. **Launch the Interactive Dark-Mode Knowledge Graph Viewer**:
   - **macOS**: `open viewer/index.html`
   - **Windows**: `start viewer/index.html`
   - **Linux**: `xdg-open viewer/index.html`
4. **Report Verification Results & Ask 3 Onboarding Questions (in the user's language)**:
   Briefly report the `6/6 PASS` audit result and confirm that the interactive knowledge graph viewer (`16 nodes`, `30 [[wikilinks]]`) is open in the browser. Then ask the user these 3 questions to customize their own wiki:
   - ① **What topic or workflow notes (`raw/`) would you like to organize first?** (e.g., AI video production, meeting notes, research clippings, engineering logs)
   - ② **Do you have a raw note or file to drop into `raw/` right now?** *(Tip: Tell the user that if they don't have a note ready yet, they can just reply with a single keyword of interest and you will generate a custom sample note in `raw/` and compile it into their graph immediately!)*
   - ③ **Would you like to keep the 5 sample notes and add yours alongside them, or archive the samples and start with a clean slate?**

---

## ✨ Why This Starter Kit? (3 Key Features)

1. **Vendor-Neutral Triple Markdown Constitution (`AGENTS.md` · `CLAUDE.md` · `GEMINI.md`)**
   - Never get blocked when one AI tool hits a weekly rate limit.
   - Open this folder in **Claude Code**, **OpenAI Codex**, or **Antigravity (Gemini)** and the exact same Markdown constitution ([`AGENTS.md`](./AGENTS.md)), native skills (`.claude/skills/`, `.codex/skills/`, `.agents/skills/`), and deterministic verifier ([`scripts/wiki_tool.py`](./scripts/wiki_tool.py)) resume seamlessly within 1 minute.
2. **Zero-Install Local Dark-Mode Knowledge Graph Viewer (`viewer/index.html`)**
   - Double-click `viewer/index.html` in any browser to explore the interactive force-directed graph (**5 `raw/` sources ↔ 9 `wiki/` documents & 30 `[[wikilinks]]`**) and a **Before (`raw/`) vs. After (`wiki/`) Side-by-Side Split View** — no Obsidian or local web server required.
   - 100% compatible if you also open the folder as an **Obsidian Vault**.
3. **Deterministic 6-Point `/lint` Integrity Gate (`scripts/wiki_tool.py`)**
   - Don't trust LLM outputs blindly. In `<0.01s`, `wiki_tool.py lint` verifies: (1) YAML frontmatter schema, (2) zero dead `[[wikilinks]]`, (3) zero orphan nodes, (4) full `raw/` source coverage, (5) primary (`✔`) vs. secondary (`△`) evidence markers, and (6) zero personal path leaks.

---

## 📂 Repository Layout

```text
llm-wiki-starter/
├── AGENTS.md                 # [Constitution] Universal agent rules (Single Source of Truth)
├── CLAUDE.md                 # [Constitution] Claude Code entry point
├── GEMINI.md                 # [Constitution] Antigravity (Gemini) entry point
├── README.md                 # English documentation (Default)
├── README.zh-CN.md           # Simplified Chinese documentation (简体中文)
├── README.ja.md              # Japanese documentation (日本語)
├── README.ko.md              # Korean documentation (한국어)
├── LICENSE                   # MIT License
├── .claude/                  # Claude Code slash commands (.claude/commands/) & skill (.claude/skills/)
├── .codex/                   # OpenAI Codex skill (.codex/skills/llm-wiki/SKILL.md)
├── .agents/                  # Antigravity workflows (.agents/workflows/) & shared skill (.agents/skills/)
├── raw/                      # [Layer 1] 5 unstructured raw notes (Read-only · Immutable)
│   ├── 2026-10-11_ai_video_workflow_memo.md
│   ├── 2026-10-12_karpathy_llm_wiki_clipping.md
│   ├── 2026-10-13_solo_creator_automation_meeting.md
│   ├── 2026-10-14_tts_voice_comparison_notes.md
│   └── 2026-10-15_platform_ai_disclosure_policy.md
├── wiki/                     # [Layer 2] 9 agent-compiled wiki documents
│   ├── index.md              # Master category index & raw-to-wiki traceability matrix
│   ├── log.md                # Compile timing logs & 6-point /lint audit report
│   ├── llm-wiki-architecture.md
│   ├── knowledge-compounding-vs-rag.md
│   ├── agent-harness-portability.md
│   ├── semi-automated-qa-gate.md
│   ├── ai-video-production-pipeline.md
│   ├── voice-tts-and-audio-mastering.md
│   └── creator-compliance-and-platform-policy.md
├── scripts/
│   └── wiki_tool.py          # Deterministic index/graph builder & 6-point linter (Python 3 stdlib)
└── viewer/
    ├── index.html            # Standalone interactive dark-mode knowledge graph & split viewer
    └── graph_data.js         # Auto-generated node/edge/document bundle from wiki_tool.py build
```

---

## 🛠️ Manual Terminal Quickstart

If you prefer running commands directly in your terminal:

```bash
# 1) Clone repository
git clone https://github.com/gptssam/llm-wiki-starter.git
cd llm-wiki-starter

# 2) Check current raw/ and wiki/ status
python3 scripts/wiki_tool.py status

# 3) Compile wiki/index.md, wiki/log.md, and viewer/graph_data.js
python3 scripts/wiki_tool.py build

# 4) Run the 6-point integrity audit (/lint)
python3 scripts/wiki_tool.py lint

# 5) Open the interactive knowledge graph viewer (macOS: open / Windows: start)
open viewer/index.html
```

---

## 📊 Measured Sample Benchmarks (`✔` Verified)

| Metric | Measured Value (`✔`) | Notes |
|---|---|---|
| **Raw Sources (`raw/`)** | **5 files** (8,615 chars / 141 lines) | Video workflow, Karpathy clipping, meeting notes, TTS, policy |
| **Compiled Wiki (`wiki/`)** | **9 files** (7 concepts + `index.md` + `log.md`, 23,659 chars / 404 lines) | Organized into 4 categories |
| **Cross `[[wikilinks]]`** | **30 links** (avg. 4.3 outgoing links per concept doc) | Zero orphan nodes |
| **Raw → Wiki Citations** | **16 citations** (avg. 3.2 citations per raw file) | 100% raw file coverage |
| **Initial Agent Synthesis** | **~1m 42s** (`init` 12.4s + `ingest` 38.2s + `compile` 51.0s) | End-to-end compilation |
| **`wiki_tool.py` Build & Lint** | **~9.5 ms** (`<0.01s`) | Python 3 standard library only |

---

## 🔗 Interactive Web Lab & Community (4 Languages)

- **Interactive Course Lab (EN)**: [https://ainewground.com/en/courses/llm-wiki/](https://ainewground.com/en/courses/llm-wiki/)
- **Interactive Course Lab (KO)**: [https://ainewground.com/ko/courses/llm-wiki/](https://ainewground.com/ko/courses/llm-wiki/)
- **Interactive Course Lab (JA)**: [https://ainewground.com/ja/courses/llm-wiki/](https://ainewground.com/ja/courses/llm-wiki/)
- **Interactive Course Lab (ZH)**: [https://ainewground.com/zh-hans/courses/llm-wiki/](https://ainewground.com/zh-hans/courses/llm-wiki/)
- **KakaoTalk OpenChat Community**: [https://gptssam.com/openchat](https://gptssam.com/openchat)
- **Instructor Profile & Newsletter**: [https://gptssam.com](https://gptssam.com)

---

## 📜 License & Disclaimer

- Released under the **MIT License**.
- This starter kit and lecture share verified engineering workflows and actual measured logs without promising specific revenue or view counts.
