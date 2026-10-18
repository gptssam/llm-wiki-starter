# 🧠 LLM Wiki 入门套件 — Karpathy 三层架构“第二大脑”

🌐 **Language**: [**English**](./README.md) | [**简体中文**](./README.zh-CN.md) | [**日本語**](./README.ja.md) | [**한국어**](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Agent Compatible](https://img.shields.io/badge/Agents-Claude%20Code%20%7C%20Codex%20%7C%20Antigravity-purple)](./AGENTS.md)
[![Lint Status](https://img.shields.io/badge/Wiki%20Lint-6%2F6%20PASSED-brightgreen)](./wiki/log.md)
[![Interactive Course Lab](https://img.shields.io/badge/Course%20Lab-ainewground.com-0e7a5a)](https://ainewground.com/zh-hans/courses/llm-wiki/)

> **“告别每次提问都要临时切分文档、关掉聊天窗口就遗忘一切的传统 RAG。让 AI 智能体直接编译并维护你本地通过 `[[Wiki链接]]` 相互交织的 Markdown 知识库（`wiki/`），让知识产生复利。”**
> — Andrej Karpathy **LLM Wiki** 架构实战复现入门包 (`github.com/gptssam/llm-wiki-starter`)

---

## ⚡ 10 秒快速启动：AI 智能体复制粘贴提示词 (Claude Code · Codex · Antigravity)

无需手动输入终端命令，只需将以下提示词复制并粘贴到 **Claude Code**、**OpenAI Codex** 或 **Antigravity** 聊天窗口中：

```text
https://github.com/gptssam/llm-wiki-starter

将此 GitHub 仓库克隆到当前目录，并按照 AGENTS.md 的规则完成初始化配置与验证。
```

### 🤖 AI 智能体自动配置指南 (For AI Agents)

当用户粘贴上述提示词或要求配置本仓库时，AI 智能体（Claude Code / Codex / Antigravity）应**直接按顺序执行以下 4 个步骤**：

1. **克隆仓库并检查状态**：
   ```bash
   git clone https://github.com/gptssam/llm-wiki-starter.git
   cd llm-wiki-starter
   python3 scripts/wiki_tool.py status
   ```
   *（如果已在克隆后的目录中，请跳过 `git clone` 直接运行 `status`。）*
2. **编译 Wiki 索引与图谱数据并执行 6 项完整性审计 (`/lint`)**：
   ```bash
   python3 scripts/wiki_tool.py build
   python3 scripts/wiki_tool.py lint
   ```
   *（零外部依赖 — 仅需 Python 3 标准库即可在 `<0.01s` 内完成。）*
3. **打开交互式暗黑模式知识图谱查看器**：
   - **macOS**: `open viewer/index.html`
   - **Windows**: `start viewer/index.html`
   - **Linux**: `xdg-open viewer/index.html`
4. **汇报验证结果并向用户提出 3 个定制问题**：
   简要汇报 `6/6 PASS` 审计结果，告知浏览器已打开包含 16 个节点与 30 条 `[[Wiki链接]]` 的知识图谱，并向用户提问以下 3 项以启动专属知识库：
   - ① **您希望首先整理哪个主题或工作流的笔记（`raw/`）？**（例如：AI 视频制作、会议纪要、研究摘录、开发日志等）
   - ② **您现在有想要立刻放入 `raw/` 目录的笔记文本或文件吗？**（也可以直接粘贴到聊天框中）
   - ③ **您希望保留现有的 5 份示例笔记并在其基础上追加，还是归档示例并从空白知识库开始？**

---

## ✨ 三大核心亮点

1. **不绑定单一 AI 工具的三重 Markdown 宪法 (`AGENTS.md` · `CLAUDE.md` · `GEMINI.md`)**
   - 即使 Claude Code 达到每周额度限制（Weekly Limit），也无需中断工作。
   - 在 **Claude Code**、**OpenAI Codex** 或 **Antigravity (Gemini)** 中打开同一目录，相同的 [`AGENTS.md`](./AGENTS.md) 宪法、专属技能（`.claude/skills/`、`.codex/skills/`、`.agents/skills/`）和确定性验证脚本（[`scripts/wiki_tool.py`](./scripts/wiki_tool.py)）可在 1 分钟内无缝接力。
2. **零安装、双击即开的暗黑模式知识图谱与对比查看器 (`viewer/index.html`)**
   - 无需安装 Obsidian 或本地服务器，直接用浏览器打开 `viewer/index.html`，即可探索 **5 份 `raw/` 原始笔记 ↔ 9 份 `wiki/` 文档的节点关系图**，以及 **Before(`raw/`) ↔ After(`wiki/`) 左右分栏对比视图**。
   - 同时也 100% 兼容直接作为 **Obsidian Vault** 打开。
3. **防止幻觉与死链的 6 项 `/lint` 完整性门禁 (`scripts/wiki_tool.py`)**
   - 在 `<0.01s` 内自动检查：① YAML Frontmatter 结构、② 零死链（Dead Links）、③ 零孤立节点（Orphans）、④ `raw/` 原始资料 100% 覆盖、⑤ 一手事实(`✔`)与二手估算(`△`)标记、⑥ 零个人敏感路径泄露。

---

## 🛠️ 终端手动运行命令

```bash
git clone https://github.com/gptssam/llm-wiki-starter.git
cd llm-wiki-starter

python3 scripts/wiki_tool.py status
python3 scripts/wiki_tool.py build
python3 scripts/wiki_tool.py lint

# macOS: open / Windows: start
open viewer/index.html
```

---

## 📊 示例数据实测指标 (`✔` 已验证)

| 指标项目 | 实测数值 (`✔`) | 说明 |
|---|---|---|
| **原始笔记 (`raw/`)** | **5 个文件** (共 8,615 字符 / 141 行) | AI 视频工作流、Karpathy 摘录、会议纪要、TTS、平台合规 |
| **编译后 Wiki (`wiki/`)** | **9 个文件** (7 篇概念文档 + `index.md` + `log.md`, 共 23,659 字符 / 404 行) | 4 大分类自动归档 |
| **交叉 `[[Wiki链接]]`** | **30 条** (平均每篇概念文档 4.3 条链接) | 孤立节点 0 个 |
| **原始资料引用次数** | **16 次** (平均每份原始笔记被引用 3.2 次) | 原始资料覆盖率 100% |
| **智能体初始合成耗时** | **约 1 分 42 秒** (`init` 12.4s + `ingest` 38.2s + `compile` 51.0s) | 端到端完整编译 |
| **`wiki_tool.py` 构建与校验** | **约 9.5 ms** (`<0.01 秒`) | 仅使用 Python 3 标准库 |

---

## 🔗 在线互动实验室与社区

- **在线互动课程实验室 (视频课程 + 内嵌实时知识图谱)**: [https://ainewground.com/zh-hans/courses/llm-wiki/](https://ainewground.com/zh-hans/courses/llm-wiki/)
- **KakaoTalk 开放聊天室**: [https://gptssam.com/openchat](https://gptssam.com/openchat)
- **讲师主页与通讯订阅**: [https://gptssam.com](https://gptssam.com)

---

## 📜 许可证与声明

- 本仓库基于 **MIT License** 免费开源。
- 本模板与课程旨在透明分享经过实测验证的工作流与工程日志，不承诺任何特定收益或播放量。
