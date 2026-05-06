<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Marp スライド編集ルール（`marp/*.md`）

Marp スライド（`marp: true` を含む `.md`）は1ページの高さが固定で、超過分は画面外に切れる。**書き換え・追加するときは必ず守ること。**

1. **1スライド ≦ 30行**（コードブロック・表・引用すべて含めた行数）
2. 超えそうなら **サブスライドに分割**（命名規則：`6-4` → `6-4-2`、`7-2` → `7-2-2`）。スライド区切りは前後空行付きの `---`
3. 編集後は必ず行数チェック：
   ```bash
   awk '/^## X-Y\./{s=NR} /^---$/&&s&&NR>s{print "lines:", NR-s+1; exit}' marp/ファイル名.md
   ```
4. **圧縮の優先順位**（30行超のとき）：
   - 重複コメント・冗長な説明文を削る
   - 表→1行文章への統合
   - 似たコードブロックの統合
   - 装飾的な絵文字フローよりシンプルな対比図
5. 過去に何度も「UI崩れてる／見切れてる」と指摘されている。**ユーザーに言われる前に検知して分割すること。**
