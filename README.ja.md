# 🧠 LLM Wiki スターターキット — Karpathy 3階層「第二の脳」

🌐 **Language**: [**English**](./README.md) | [**简体中文**](./README.zh-CN.md) | [**日本語**](./README.ja.md) | [**한국어**](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Agent Compatible](https://img.shields.io/badge/Agents-Claude%20Code%20%7C%20Codex%20%7C%20Antigravity-purple)](./AGENTS.md)
[![Lint Status](https://img.shields.io/badge/Wiki%20Lint-6%2F6%20PASSED-brightgreen)](./wiki/log.md)
[![Interactive Course Lab](https://img.shields.io/badge/Course%20Lab-ainewground.com-0e7a5a)](https://ainewground.com/ja/courses/llm-wiki/)

> **「質問するたびに文書を細切れにして検索し、チャットを閉じればすべて忘れてしまう従来のRAGの代わりに、AIエージェントがローカルのMarkdownウィキ（`wiki/`）を直接コンパイルし、`[[Wikiリンク]]`で繋いで知識が複利で積み上がる仕組みを作りましょう。」**
> — Andrej Karpathyの **LLM Wiki** アーキテクチャ実践再現スターターキット (`github.com/gptssam/llm-wiki-starter`)

---

## ⚡ 10秒スタート：AIエージェント用コピペプロンプト (Claude Code · Codex · Antigravity)

ターミナルでコマンドを手入力する必要はありません。お使いのAIエージェント（**Claude Code**、**OpenAI Codex**、**Antigravity**）のチャット欄に以下のプロンプトをそのまま貼り付けてください：

```text
https://github.com/gptssam/llm-wiki-starter

このGitHubリポジトリを現在のフォルダにクローンし、AGENTS.mdのルールに従って使えるようにセットアップして。
```

### 🤖 AIエージェント向け自動セットアップ手順 (For AI Agents)

ユーザーが上記のプロンプトを入力してセットアップを依頼した場合、AIエージェント（Claude Code / Codex / Antigravity）は**確認を求めず直ちに以下の4ステップを順番に実行**してください：

1. **リポジトリのクローン（`git`未インストール時は自動で`curl + tar`にフォールバック）とステータス確認**：
   ```bash
   git clone https://github.com/gptssam/llm-wiki-starter.git || (curl -sL https://github.com/gptssam/llm-wiki-starter/archive/refs/heads/main.tar.gz | tar -xz && mv llm-wiki-starter-main llm-wiki-starter)
   cd llm-wiki-starter
   python3 scripts/wiki_tool.py status
   ```
   *（すでにクローン済みのフォルダ内にいる場合は、ダウンロードをスキップして`status`から実行します。）*
2. **Wikiインデックス・グラフデータのビルドおよび6大整合性監査（`/lint`）**：
   ```bash
   python3 scripts/wiki_tool.py build
   python3 scripts/wiki_tool.py lint
   ```
   *（外部パッケージのインストール不要 — Python 3標準ライブラリのみで0.01秒以内に完了します。）*
3. **インタラクティブ知識グラフビューアの起動**：
   - **macOS**: `open viewer/index.html`
   - **Windows**: `start viewer/index.html`
   - **Linux**: `xdg-open viewer/index.html`
4. **検証結果の報告と3つのオンボーディング質問**：
   `6/6 PASS`の監査結果と、ブラウザで知識グラフビューア（16ノード・30個の`[[Wikiリンク]]`）が開いたことを案内した上で、ユーザー独自のWiki構築を始めるために以下の3点を質問してください：
   - ① **どのようなテーマや業務のメモ（`raw/`）を整理したいですか？**（例：AI動画制作、会議議事録、リサーチ記事、開発ノートなど）
   - ② **今すぐ`raw/`フォルダに入れてみたいメモやファイルはありますか？**（チャット欄に直接テキストを貼り付けても構いません）
   - ③ **既存のサンプルデータ（生メモ5件・Wiki 7件）を残したまま追加しますか？それともサンプルをバックアップして白紙から始めますか？**

---

## ✨ このスターターキットの3大特徴

1. **特定のAIツールに依存しない3重Markdown憲法 (`AGENTS.md` · `CLAUDE.md` · `GEMINI.md`)**
   - Claude Codeを使っていて週間利用上限（Weekly Limit）に達しても、作業を止める必要はありません。
   - **Claude Code**、**OpenAI Codex**、**Antigravity (Gemini)** のどのツールでフォルダを開いても、同一の [`AGENTS.md`](./AGENTS.md) 憲法と専用スキル（`.claude/skills/`、`.codex/skills/`、`.agents/skills/`）、検証スクリプト（[`scripts/wiki_tool.py`](./scripts/wiki_tool.py)）が1分でそのまま引き継ぎます。
2. **Obsidian不要・ダブルクリックで即開くダークモード知識グラフビューア (`viewer/index.html`)**
   - 追加ソフトやサーバーのインストールなしで `viewer/index.html` をブラウザで開くだけで、**5件の`raw/`生メモ ↔ 9件の`wiki/`文書のネットワークグラフ**と **Before(`raw/`) ↔ After(`wiki/`) 左右比較ビュー**を即座に探索できます。
   - もちろんフォルダ全体を **Obsidian Vault** として開いても100%互換性があります。
3. **ハルシネーションとリンク切れを防ぐ決定論的 `/lint` 監査ゲート (`scripts/wiki_tool.py`)**
   - 0.01秒未満で以下の6項目を自動検査します：① Frontmatterスキーマ、② リンク切れ0件、③ 孤立ノード（Orphan）0件、④ `raw/`原資料カバレッジ100%、⑤ 1次根拠(`✔`)・2次推定(`△`)の明記、⑥ 個人情報・ローカルパスの露出0件。

---

## 🛠️ ターミナル手動実行ガイド

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

## 📊 サンプル実測ベンチマーク (`✔` 実測値)

| 測定項目 | 実測値 (`✔`) | 備考 |
|---|---|---|
| **投入した生メモ (`raw/`)** | **5ファイル** (計 8,615文字 / 141行) | AI動画・Karpathy記事・議事録・TTS・規約メモ |
| **コンパイルされたWiki (`wiki/`)** | **9ファイル** (概念7件 + `index.md` + `log.md`, 計 23,659文字 / 404行) | 4カテゴリに自動分類 |
| **相互 `[[Wikiリンク]]` 数** | **30個** (概念文書あたり平均 4.3個接続) | 孤立ノード 0件 |
| **生メモ → Wiki 引用数** | **16回** (生メモ1件あたり平均 3.2回引用) | 未反映の生メモ 0件 |
| **エージェント初期合成時間** | **約1分42秒** (`init` 12.4s + `ingest` 38.2s + `compile` 51.0s) | エンドツーエンド実測 |
| **`wiki_tool.py` ビルド・検証時間** | **約9.5 ms** (`0.01秒`未満) | Python 3 標準ライブラリのみ |

---

## 🔗 オンライン実習室 & コミュニティ

- **オンライン実習室 (動画講義 + ブラウザ内蔵知識グラフ)**: [https://ainewground.com/ja/courses/llm-wiki/](https://ainewground.com/ja/courses/llm-wiki/)
- **カカオトーク オープンチャット**: [https://gptssam.com/openchat](https://gptssam.com/openchat)
- **講師紹介・ニュースレター**: [https://gptssam.com](https://gptssam.com)

---

## 📜 ライセンスおよび免責事項

- 本リポジトリは **MIT License** の下で無料公開されています。
- 本テンプレートおよび講義は、特定の収益や再生回数を保証するものではなく、実際に検証したワークフローと測定記録を透明に共有するために制作されています。
