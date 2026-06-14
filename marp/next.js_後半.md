---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap');

  :root {
    --bg:       #0c0f1a;
    --surface:  #131929;
    --surface2: #1a2240;
    --border:   #1e2d45;
    --text:     #dce6f5;
    --muted:    #607090;
    --indigo:   #6366f1;
    --violet:   #a78bfa;
    --pink:     #f472b6;
    --cyan:     #22d3ee;
    --emerald:  #34d399;
    --amber:    #fbbf24;
  }

  /* ========== ベース ========== */
  section {
    font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    background: var(--bg);
    color: var(--text);
    padding: 44px 60px 44px 64px;
    position: relative;
    overflow: hidden;
  }

  /* 左アクセントストライプ */
  section::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--indigo) 0%, var(--violet) 50%, var(--pink) 100%);
  }
  section.title::before,
  section.chapter::before { display: none; }

  /* 右下の装飾グロー */
  section::after {
    content: attr(data-marpit-pagination) ' / ' attr(data-marpit-pagination-total);
    font-size: 12px;
    color: var(--muted);
    position: absolute;
    bottom: 18px;
    right: 24px;
  }

  /* ========== タイトルスライド ========== */
  section.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background:
      radial-gradient(ellipse 70% 70% at 15% 50%, rgba(99,102,241,0.45) 0%, transparent 65%),
      radial-gradient(ellipse 50% 50% at 82% 30%, rgba(244,114,182,0.28) 0%, transparent 55%),
      radial-gradient(ellipse 35% 35% at 68% 80%, rgba(34,211,238,0.22) 0%, transparent 50%),
      var(--bg);
    padding: 60px;
  }
  section.title h1 {
    font-size: 48px;
    font-weight: 900;
    border: none;
    margin-bottom: 18px;
    letter-spacing: 0.02em;
    line-height: 1.25;
    /* PDFで -webkit-background-clip:text が破綻するため単色化 */
    color: #ffffff;
  }
  section.title p {
    font-size: 19px;
    color: rgba(199,220,255,0.75);
    margin: 0;
    letter-spacing: 0.03em;
  }

  /* ========== 章タイトルスライド ========== */
  section.chapter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
    background:
      radial-gradient(ellipse 90% 110% at -15% 50%, rgba(99,102,241,0.38) 0%, transparent 65%),
      radial-gradient(ellipse 40% 60% at 95% 85%, rgba(167,139,250,0.18) 0%, transparent 55%),
      var(--bg);
  }
  section.chapter h1 {
    font-size: 40px;
    font-weight: 900;
    border: none;
    color: #fff !important;
    margin-bottom: 28px;
    letter-spacing: 0.02em;
    line-height: 1.25;
    /* PDF出力でASCII部分が紫塊になるのを防ぐ：ベース h1 のグラデ＆テキスト透過を明示値で打ち消し */
    background: transparent !important;
    background-image: none !important;
    -webkit-background-clip: border-box !important;
    -webkit-text-fill-color: #fff !important;
    background-clip: border-box !important;
  }
  section.chapter blockquote {
    border-left: 3px solid var(--cyan);
    background: rgba(34,211,238,0.08);
    color: rgba(199,235,255,0.85);
    font-size: 16.5px;
    padding: 14px 22px;
    margin: 0;
    border-radius: 0 10px 10px 0;
  }
  section.chapter blockquote p { margin: 0; }

  /* ========== 通常スライド：見出し ========== */
  /* グラデ付き h1 は各 section.X h1 で個別宣言する（PDF出力時に
     -webkit-background-clip:text が ASCII で部分失敗するため、ベースには付けない） */
  h1 {
    font-size: 22px;
    font-weight: 700;
    color: var(--violet);
    border-bottom: 1px solid var(--border);
    padding-bottom: 10px;
    margin-top: 0;
    margin-bottom: 18px;
    letter-spacing: 0.01em;
  }
  h2 {
    font-size: 19px;
    font-weight: 700;
    color: var(--violet);
    margin-top: 0;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    color: var(--pink);
    margin-top: 14px;
    margin-bottom: 6px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  /* ========== 本文 ========== */
  ul, ol { padding-left: 20px; margin: 6px 0 10px; }
  li { margin-bottom: 6px; }
  li > ul, li > ol { margin-top: 3px; }

  strong { color: var(--violet); font-weight: 700; }
  em     { color: var(--muted);  font-style: normal; }

  /* ========== インラインコード ========== */
  code {
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    background: rgba(167,139,250,0.12);
    border: 1px solid rgba(167,139,250,0.25);
    border-radius: 5px;
    padding: 1px 7px;
    font-size: 83%;
    color: #c084fc;
  }

  /* ========== コードブロック ========== */
  pre {
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    font-size: 12.5px;
    background: #010711;
    color: #cdd6f4;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
    margin: 8px 0 12px;
    box-shadow:
      0 0 0 1px rgba(99,102,241,0.12),
      0 8px 32px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.03);
  }
  pre code {
    background: transparent;
    border: none;
    color: inherit;
    padding: 0;
    font-size: inherit;
  }

  /* ========== Blockquote ========== */
  blockquote {
    border-left: 3px solid var(--indigo);
    background: rgba(99,102,241,0.08);
    border-radius: 0 10px 10px 0;
    padding: 10px 16px;
    margin: 12px 0;
    font-size: 14.5px;
    color: rgba(180,200,240,0.85);
  }
  blockquote p { margin: 0; }

  /* ========== テーブル ========== */
  section table {
    display: table;
    font-size: 13.5px;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    margin: 10px 0 14px;
    border: 1px solid #1e2d45;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }
  section table th {
    background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
    color: #ffffff;
    font-weight: 700;
    padding: 10px 14px;
    text-align: left;
  }
  section table td {
    padding: 8px 14px;
    border-bottom: 1px solid #1e2d45;
    color: #dce6f5;
    background-color: #0d1221;
  }
  section table tr:last-child td {
    border-bottom: none;
  }
  section table tr:nth-child(even) td {
    background-color: #141a2e;
  }

  /* ========== アジェンダスライド ========== */
  section.agenda {
    background:
      radial-gradient(ellipse 70% 80% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 50% 100%, rgba(244,114,182,0.10) 0%, transparent 55%),
      var(--bg);
  }
  section.agenda h1 { font-size: 26px; }
  section.agenda ol {
    counter-reset: chapter;
    list-style: none;
    padding-left: 0;
    margin-top: 8px;
  }
  section.agenda ol li {
    counter-increment: chapter;
    position: relative;
    padding: 10px 16px 10px 64px;
    margin-bottom: 8px;
    background: rgba(99,102,241,0.06);
    border: 1px solid rgba(99,102,241,0.2);
    border-left: 3px solid var(--indigo);
    border-radius: 0 8px 8px 0;
    font-size: 14.5px;
  }
  section.agenda ol li::before {
    content: counter(chapter, decimal-leading-zero);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 900;
    /* PDFで -webkit-background-clip:text が破綻するため単色化 */
    color: var(--pink);
    letter-spacing: -0.02em;
  }

  /* ========== 学習目標スライド ========== */
  section.objectives {
    background:
      radial-gradient(ellipse 60% 60% at 0% 50%, rgba(167,139,250,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 100% 100%, rgba(34,211,238,0.10) 0%, transparent 55%),
      var(--bg);
  }
  section.objectives h1 {
    /* PDFで -webkit-background-clip:text が破綻するため単色化 */
    color: var(--cyan);
    border-bottom-color: rgba(167,139,250,0.3);
  }
  section.objectives ul {
    list-style: none;
    padding-left: 0;
    margin-top: 14px;
  }
  section.objectives ul li {
    position: relative;
    padding: 10px 16px 10px 44px;
    margin-bottom: 10px;
    background: rgba(167,139,250,0.06);
    border-left: 2px solid var(--violet);
    border-radius: 0 6px 6px 0;
    font-size: 15px;
  }
  section.objectives ul li::before {
    content: '✓';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--cyan);
    font-weight: 900;
    font-size: 18px;
  }
  section.objectives blockquote {
    margin-top: 20px;
    border-left-color: var(--amber);
    background: rgba(251,191,36,0.06);
    color: rgba(253,224,151,0.85);
  }

  /* ========== 用語補足ボックス（blockquote の入れ子で表現） ========== */
  blockquote.term {
    border-left-color: var(--amber);
    background: rgba(251,191,36,0.07);
    color: rgba(253,224,151,0.85);
    font-size: 13.5px;
  }

  /* ========== まとめスライド ========== */
  section.summary {
    background:
      radial-gradient(ellipse 60% 80% at 95% 50%, rgba(52,211,153,0.15) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 5%  10%, rgba(99,102,241,0.12) 0%, transparent 55%),
      var(--bg);
  }
  section.summary h1 {
    /* PDFで -webkit-background-clip:text が破綻するため単色化 */
    color: var(--emerald);
    border-bottom-color: rgba(52,211,153,0.3);
  }
  section.summary blockquote {
    border-left-color: var(--emerald);
    background: rgba(52,211,153,0.07);
    color: rgba(167,240,200,0.85);
    font-weight: 500;
  }
  section.summary strong { color: var(--emerald); }
---

<!-- _class: title -->

# Next.js 完全攻略ハンズオン（後半）

<p>Server Actions・組み込み機能・総まとめ —— 「読む」から「書く」へ</p>

---

<!-- _class: agenda -->

# 後半のアジェンダ

> 前半（1〜7章）で SC / CC・レンダリング・4層キャッシュ・ルーティング規約は習得済み。残るは「**データの書き込み**」とフロント・バック統合——ここからが本番

1. **フロントエンドとバックエンドの統合** — Prisma 導入、API の終焉、Server Actions（第8章）
2. **Next.js 特有のコンポーネントと関数群** — `<Link>` / `<Image>` / ナビフック / キャッシュ操作（第9章）
3. **総まとめと次のステップ** — 全体系の振り返りと実力化ロードマップ（第10章）

---

<!-- _class: chapter -->

# 8. フロントエンドとバックエンドの統合

> ORM の導入から、API の終焉、そして Server Actions の境地へ

---

<!-- _class: objectives -->

# この章で学ぶこと

- **Prisma** の導入手順（`init` / schema / `db push` / seed / `studio`）を実装レベルで把握する
- データ取得を **Route Handlers vs Server Component** で比較し、なぜ後者が最適解かを理解する
- データ作成を **POST API vs Server Actions** で比較し、API レス開発の本質を掴む
- Server Component と Client Component それぞれからの **Server Actions 呼び出し方** を学ぶ
- `useActionState` で **複雑な `useState` 地獄** から脱出する書き方を身につける

> 💡 用語の前提：**ORM** = SQL を書かずに DB を操作するライブラリ（Prisma 等）／ **シード（seed）** = ダミーデータの初期投入／ **ボイラープレート** = 毎回書かされる定型コード／ **CRUD** = Create・Read・Update・Delete（データ操作の4分類。本章は Read と Create を実装）

---

## 8-1. フルスタックフレームワークとしての Next.js

> 別 API サーバーは不要。**Next.js 内に ORM を入れるだけ**で TypeScript 1 言語・1 リポジトリで完結

従来は Express / Rails 等の**別サーバー**を立てて DB アクセスを担当させていた。
ブラウザに DB パスワードを書くと**漏洩 → DB 乗っ取り**のリスクがあるため。

Next.js（App Router）は標準で **Server Component**（SC：サーバー実行）と **Route Handlers**（API 作成機能）を持つため、ORM を入れるだけで安全に DB アクセスできる。

```ts
// 旧: フロント(React) ⇄ HTTP ⇄ 別サーバー(Express) ⇄ DB
// 新: Next.js (SC 内で直接 await prisma.findMany()) ⇄ DB
```

> 💡 **根本原因：フロントとバックが「別オリジン・別リポジトリ」に分かれているから** CORS 設定もリポジトリ二重管理も発生する。SC は同じサーバー上で動き HTTP 境界をまたがないので、両方とも丸ごと消える

---

## 8-2. Prisma セットアップ (1) — 初期化とスキーマ定義

> **設計図（`schema.prisma`）を書く**段階。必要パッケージを入れて初期化し、テーブル構造を宣言的に記述

```bash
npm i -D prisma tsx && npm i @prisma/client @prisma/adapter-libsql dotenv
npx prisma init --datasource-provider sqlite  # 👈 prisma/ と .env（DATABASE_URL）を生成
```

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"  // 👈 生成 Client の置き場所（8-3 以降で import するパス）
}
datasource db {
  provider = "sqlite"
}
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}
```

> 💡 同時に入れた `tsx`（TS 実行ツール）・`dotenv`・`@prisma/adapter-libsql`（SQLite 接続アダプタ）は 8-3 のシードで使う

---

## 8-2-2. スキーマ記法の読み方（記号を日本語に翻訳）

> 見慣れない記号も 1 つずつ訳せば、`schema.prisma` は怖くない。続きの `Post` モデルを例に読む

```prisma
// schema.prisma 続き：投稿テーブル（User と 1:多 で紐付く）
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
```

| 記法 | 意味 |
|---|---|
| `id Int @id` | この列を**主キー**（1 行を見分ける背番号）にする |
| `@default(autoincrement())` | 作成時に 1, 2, 3… と**自動で連番**を振る |
| `email String @unique` | **重複禁止**。同じメールは 2 人登録できない |
| `name String?` | 末尾 `?` ＝**省略可**（空でも OK）。無印は必須 |
| `posts Post[]` | `[]` ＝「複数の Post を持つ」。**1 User : 多 Post** |
| `author … @relation` | Post が「どの User のものか」を**外部キー**で紐付け |

> 💡 **主キー** = 各行の背番号／ **外部キー** = 別テーブルの主キーを指す紐付け列。この 2 つで「ユーザー」と「投稿」が線で繋がる

---

## 8-3. Prisma セットアップ (2) — DB 反映とシードデータ

> スキーマを DB に反映 → 初期データを投入する `seed.ts` を用意

```bash
npx prisma db push  # 👈 schema.prisma を SQLite に反映
```

```ts
// prisma/seed.ts
import "dotenv/config";
import { PrismaClient, Prisma } from "../src/generated/prisma/client.js";
import { PrismaLibSql } from "@prisma/adapter-libsql";
const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const userData: Prisma.UserCreateInput[] = [
  { name: "Alice", email: "alice@prisma.io",
    posts: { create: [{ title: "Join the Prisma Discord", published: true }] } },
  { name: "Bob", email: "bob@prisma.io",
    posts: { create: [{ title: "Follow Prisma on Twitter", published: true }] } },
];
export async function main() { for (const u of userData) await prisma.user.create({ data: u }); }
main();
```

> 💡 接続先は `.env` の `DATABASE_URL`（8-2 の `init` が生成）。Prisma 7 はアダプタ（`PrismaLibSql`）経由で DB に接続する
> 💡 リポジトリにある `prisma/migrations/` は `migrate dev` の履歴。学習用は履歴を残さない `db push` で十分

---

## 8-4. Prisma セットアップ (3) — データ確認とクライアント化

> シード実行 → GUI で確認 → アプリで使う **PrismaClient インスタンス**を1箇所に集約

```bash
npx prisma db seed     # 👈 シード実行（prisma.config.ts の seed 設定が前提・下記⚠️）
npx prisma studio      # 👈 localhost:5555 で GUI 起動
```

```ts
// lib/prisma.ts（注：src/ の外に配置）
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const adapter = new PrismaLibSql({ url: process.env.LIBSQL_URL! });
// 開発中の hot-reload で接続枯渇を防ぐためグローバルに保持
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
```

> 💡 SC や Server Action から `import prisma from "../../lib/prisma"` で DB が叩ける
> ⚠️ Prisma 7 の seed 設定は `prisma.config.ts` の `migrations: { seed: "tsx prisma/seed.ts" }` に書く（`package.json` 追記は旧方式）
> ⚠️ `seed.ts` は `DATABASE_URL`、`prisma.ts` は `LIBSQL_URL` を読む——`.env` に**両方**書く（1 つに統一する方が安全）

---

## 8-5. データ読み取り — 旧来の Route Handlers 手法

> 従来の SPA 流：まず `route.ts` で **JSON を返す API** を作る（前半 7-10 で作った API の続き）

```ts
// src/app/api/sample/route.ts
import prisma from "../../../../lib/prisma";

// GET /api/sample
export async function GET() {
  const users = await prisma.user.findMany();   // 👈 DB から全件取得
  return Response.json(users);                  // 👈 JSON で返す
}
```

> ✅ `http://localhost:3000/api/sample` で JSON が返るようになった。次はフロントから叩く
> 💡 **Route Handler** = `app` 配下に `route.ts` を置き `GET`/`POST` 関数を export するだけで API になる仕組み。`Response.json(...)` が JSON 応答を作る

---

## 8-6. データフェッチの苦悩 — Client Component での呼び出し

> 自作 API を `useState` + `useEffect` + `fetch` で叩く——**冗長なボイラープレート地獄**

```tsx
// src/components/GetDataFromRouteHandler.tsx
"use client";
import type { User } from "@/generated/prisma/client";  // 👈 自動生成された型
import React, { useEffect } from "react";

const GetDataFromRouteHandler = () => {
  const [users, setUsers] = React.useState<User[]>([]);  // ① 空のステート
  useEffect(() => {                                       // ② 初回マウントで fetch
    fetch("/api/sample")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};
export default GetDataFromRouteHandler;
```

> ⚠️ **本質的な問題：データはサーバー(DB)にあるのに、ブラウザ経由でわざわざ取りに戻っている**
> → 「空 HTML を返す → JS 読込 → API を叩く → やっと描画」の順次通信。初回は必ず空表示（SEO に弱い・カクつく）

---

## 8-7. データ読み取りの最適解 — Server Component での直接取得

> API を作らず、コンポーネントを `async` 化して **直接 Prisma を呼ぶ**

```tsx
// src/components/GetDataFromServerComponent.tsx
// "use client" を書かない → サーバー上で実行
import prisma from "../../lib/prisma";

const GetDataFromServerComponent = async () => {  // 👈 async!
  const users = await prisma.user.findMany();      // 👈 直接DB呼出
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};
export default GetDataFromServerComponent;
```

> 🎯 **結論（Read）：** SC なら API 層も client 往復もゼロ。サーバー上で DB→HTML を直接組み立てるので、コードが減り・往復が消え・初回から中身入り HTML（SEO 強）

---

## 8-7-2. 作った部品を `page.tsx` に置いて URL に出す

> 部品（`src/components/*.tsx`）は単体では画面に出ない。**`app` 配下の `page.tsx` で import → 配置**して初めて URL に表示される

```tsx
// src/app/(practice)/get-data-from-server-component/page.tsx
//   👈 フォルダ名がそのまま URL → /get-data-from-server-component
import GetDataFromServerComponent from "@/components/GetDataFromServerComponent";

const Page = () => (
  <main>
    <h1>Users</h1>
    <GetDataFromServerComponent />   {/* 👈 作った部品を置くだけ */}
  </main>
);
export default Page;
```

> 💡 **フォルダ構成 = URL**（App Router）。`page.tsx` が「画面」、`src/components/*` が「部品」。8 章で作る部品はすべてこの形で `page.tsx` に配置する（1 ページに複数並べても OK：例 `call-server-action` は 3 つの部品を並べている）

---

## 8-8. データ作成 — 旧来の Route Handlers 手法

> 取得は解決。次は「フォームから新規登録」を **POST API** で受ける従来型

```ts
// src/app/api/sample/route.ts に追記
export async function POST(request: Request) {
  const res = await request.json();           // ① JSON をパース
  await prisma.user.create({                   // ② Prisma で登録
    data: { name: res.name, email: res.email },
  });
  return Response.json({                        // ③ 成功レスポンス
    message: "ユーザーを作成しました",
    status: 201,
  });
}
```

> 💡 この `status: 201` は **JSON の中身**であって HTTP ステータスではない（応答コードは 200 のまま）。正しくは第2引数 `Response.json(body, { status: 201 })`——前半 7-10 でやった形だ

---

## 8-9. データ作成の苦悩 — Client での泥臭いフォーム実装

> ⚠️ **本質的な問題：保存先の DB はサーバーにあるのに、入力値をわざわざ JSON に詰め直し HTTP API 越しに送り返している**
> → そのために入力ステート・JSON 変換・fetch・結果ステートが全部手書きに（取得側 8-6 と同じ往復構造）

```tsx
// src/components/CreateDataWithRouteHandler.tsx
"use client";
import React from "react";

const CreateDataWithRouteHandler = () => {
  const [info, setInfo] = React.useState({ name: "", email: "" });    // ① 入力
  const [message, setMessage] = React.useState<string | null>(null);  // ② 結果
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/sample", {                                       // ③ POST
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    }).then(r => r.json()).then(data => setMessage(data.message));     // ④ 結果格納
  };
  return <form onSubmit={handleSubmit}>...</form>;
};
export default CreateDataWithRouteHandler;
```

---

## 8-10. 革命的機能「Server Actions」の登場

> `"use server"` 宣言で、**フロントから直接呼べるバックエンド関数**が誕生

```ts
// src/actions/action-called-sever.ts
"use server";       // 👈 このファイル内の関数はすべてサーバー実行
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/prisma";

export const actionCalledServer = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  if (!name || !email) {                                  // ① 空チェック
    redirect(`/call-server-action?errors=empty_name&errors=empty_email`);
  }
  await prisma.user.create({ data: { name, email } });    // ② DB に保存
  revalidatePath("/get-data-from-server-component");      // ③ キャッシュ破棄
  redirect("/get-data-from-server-component");            //    完了後に遷移
};
```

> 💡 `revalidatePath` でキャッシュ破棄（→ 9-17）、`redirect` で画面遷移（→ 9-15）。`"use server"` 関数は `<form action>` に**直接渡せる**のが核心

---

## 8-11. Server Component × Server Actions

> `<form action={...}>` にサーバー関数を**直接渡す**だけ。**JS オフでも動作**する超堅牢フォーム

```tsx
// src/components/ActionWithServer.tsx
// "use client" を書かない → Server Component
import { actionCalledServer } from "../actions/action-called-sever";

const ActionWithServer = async () => {
  return (
    // 👇 action 属性にサーバー関数を直接渡す！
    <form action={actionCalledServer} className="flex flex-col gap-4">
      {/* name 属性 = FormData のキー */}
      <input type="text" name="name" className="border" />
      <input type="email" name="email" className="border" />
      <button type="submit" className="border">Create</button>
    </form>
  );
};
export default ActionWithServer;
```

> 🎯 `useState` も `fetch` も URL 指定も不要。HTML 標準の POST で送信される

---

## 8-12. Server Component 呼び出しの「弱点」

> ⚠️ **本質的な問題：この構成にはブラウザ側で動く JS が無い**
> → 状態を持てないので「入力中の検証」も「送信中の表示」もできず、サーバー往復が終わるまで画面は無反応

```tsx
// 8-11 の構成では…
<form action={actionCalledServer}>
  <input type="text" name="name" />    {/* ❌ 入力中の即時チェック不可 */}
  <button type="submit">作成</button>   {/* ❌ 送信中スピナーも出せない */}
</form>
// → サーバーに往復 → redirect → 画面リロード → やっとエラーに気付く
```

> ⚠️ さらに `redirect` 後はページ再読込でスクロール位置もリセット
> → だからブラウザ側で状態を持つ **Client Component（CC）** が必要

---

## 8-13. Client Component から Server Actions を呼び出す

> サーバー関数を**普通の async 関数として import** → ハイブリッド構成

```tsx
// src/components/ActionWithClient.tsx（import・className のみ省略）
"use client";
const ActionWithClient = () => {
  const router = useRouter();
  const [info, setInfo] = React.useState({ name: "", email: "" });    // ① 入力値
  const [loading, setLoading] = React.useState(false);                // ② 送信中
  const [errors, setErrors] = React.useState<string[]>([]);           // ③ エラー
  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => setInfo({ ...info, [e.target.name]: e.target.value });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setErrors([]); setLoading(true);
    const res = await actionCalledClient(info.name, info.email);      // 👈 関数として呼ぶ
    setLoading(false); if (res.success) router.push("/static-rendering"); else setErrors(res.errors);
  };
  return (<form onSubmit={handleSubmit}>
    <input type="text" name="name" value={info.name} onChange={onChangeInfo} />
    <input type="email" name="email" value={info.email} onChange={onChangeInfo} />
    {errors.length > 0 && <ul>{errors.map(er => <li key={er}>{ERROR_MESSAGE[er]}</li>)}</ul>}
    <button type="submit" disabled={loading}>{loading ? "Loading..." : "Create"}</button>
  </form>);
};
```

> ⚠️ UX は向上。ただし送信状態(loading)もエラーもサーバーの状態を**手動で複製・同期**している → 抜けや不整合の温床。8-14 で一掃

---

## 8-13-2. 呼び出された側 — `actionCalledClient` の中身

> 8-10 と違い **FormData を受け取らず、redirect もしない**。普通の async 関数だ

```ts
// src/actions/action-called-client.ts（骨子）
"use server";
import prisma from "../../lib/prisma";

export const actionCalledClient = async (name: string, email: string) => {
  const errors: string[] = [];
  if (!name) errors.push("empty_name");
  if (!email) errors.push("empty_email");
  if (errors.length > 0) return { success: false, errors };  // ① 検証NGは値を返す
  await prisma.user.create({ data: { name, email } });       // ② DB 保存
  return { success: true };                                  // ③ redirect せず結果を返す
};
```

> 💡 `"use server"` 関数は **form の action 専用ではない**。シリアライズ可能な引数・戻り値なら普通に import して呼べる（8-14 への布石）
> ⚠️ ここでは `revalidatePath` を呼ばないため一覧には即反映されない。本デモは遷移確認用に `/static-rendering` へ push している

---

## 8-14. 究極のフォーム制御 `useActionState` の導入

> サーバーアクションを `(prevState, formData) → State` 形式に書き換える

```ts
// src/actions/action-called-client-with-action-state.ts
"use server";
import prisma from "../../lib/prisma";

type State = { success: boolean; data: { name: string; email: string }; errors?: string[] };

// 👇 第1引数に _initialState（前の状態）が自動で入る
export const actionCalledClientWithActionState = async (
  _initialState: State, formData: FormData
): Promise<State> => {
  const name = (formData.get("name") as string) ?? "";
  const email = (formData.get("email") as string) ?? "";
  if (!name || !email) return { success: false, data: { name, email }, errors: ["empty_name", "empty_email"] };
  try {
    await prisma.user.create({ data: { name, email } });
    return { success: true, data: { name, email } };
  } catch {
    return { success: false, data: { name, email }, errors: ["unexpected_error"] };
  }
};
```

---

## 8-15. `useActionState` を用いた究極のクライアント実装

> 🎯 **結論（Create）：** 8-13 の `useState`×3 ＋ handleSubmit が `useActionState` 1 行に。送信状態・エラー・入力保持が自動で揃う

```tsx
// src/components/ActionWithActionState.tsx
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { actionCalledClientWithActionState } from "@/actions/action-called-client-with-action-state";
const initialState = { success: false, data: { name: "", email: "" }, errors: [] };
const ActionWithActionState = () => {
  const router = useRouter();
  // 👇 [state, formAction, isPending] を一発で取得
  const [state, formAction, isPending] = React.useActionState(
    actionCalledClientWithActionState, initialState);
  useEffect(() => { if (state.success) router.push("/static-rendering"); }, [state.success, router]);
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="text" name="name" defaultValue={state.data.name} />
      <input type="email" name="email" defaultValue={state.data.email} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Create"}
      </button>
    </form>
  );
};
```

---

## 8-15-2. `useState` と `useActionState` の違い（早見表）

> 🎯 同じフォームでも、状態を「自分で配線」するか「React に任せる」かの差

| 観点 | `useState`（手書き） | `useActionState` |
|---|---|---|
| 送信中 | `setLoading` を手動 ON/OFF | `isPending` が自動（再描画完了まで true） |
| エラー/結果 | `useState` で手動更新 | Action の戻り値が `state` に自動格納 |
| 入力保持 | `value`＋`onChange` で管理 | `state.data`＋`defaultValue` |
| 送信方法 | `onSubmit`＋`preventDefault`（JS必須） | `<form action>`（JS無しでも動く） |
| Action の形 | `(name, email) => res` | `(prevState, formData) => newState` |

> ⚠️ 代償：Action を `(prevState, formData)` の形に書き換える必要あり（→ 8-14）

**結論：** `useState` は何にでも使える汎用フック。`useActionState` は**フォーム送信専用**で、送信中・エラー・入力保持の3点セットを自動配線する「特化版」。

---

## 8-15-3. `isPending` は「自分で管理しない」

> 🎯 8-15 のコードに `setIsPending(true)` のような行は一切ない。切り替えは React が自動で行う

**こちらがやることは3つだけ：**

```tsx
// ① フックから受け取る（3番目の値）
const [state, formAction, isPending] = useActionState(...);
// ② formAction を form に繋ぐ ← これが唯一の"配線"
<form action={formAction}> ... </form>
// ③ あとは読むだけ
<button disabled={isPending}>{isPending ? "Loading..." : "Create"}</button>
```

```
送信 → ② formAction 起動 → isPending = true（処理中…）
     → 完了して新 state が返る → isPending = false（おわり）
```

> ⚠️ ②が肝：isPending が動く条件は **action が transition 内で呼ばれること**。`<form action={formAction}>` は自動で満たす（自前 `onSubmit` でも `startTransition` で包めば動く）

---

<!-- _class: summary -->

## 第8章まとめ — API エンドポイント設計からの解放

> **フロント・バック統合：** Next.js 内に Prisma 等の ORM を入れるだけで、別サーバー / CORS 設定不要。安全に DB アクセス可能。

> **Read は Server Component で：** `useEffect`+`fetch` を捨て、SC 内で `await prisma.findMany()` を直接呼ぶのが最速・最シンプル。

> **CUD（Create / Update / Delete）は Server Actions で：** POST API を捨て、`"use server"` 関数を直接呼ぶ。`isPending` で送信中ボタン無効化、サーバーエラーの即時表示も最小コードで実現。

> ※ webhook 受信やモバイル向けなど**外部に公開する API** には Route Handlers を引き続き使う（→ 前半 7-10）

**結論：** 「JSON の形」「URL 設計」という本質ではない作業から解放され、**UI とデータロジックだけに 100% 集中できる**真のフルスタック・アーキテクチャの完成形。

---

<!-- _class: chapter -->

# 9. Next.js 特有のコンポーネントと関数群

> パフォーマンスを極限まで引き上げる組み込み機能の完全理解

---

<!-- _class: objectives -->

# この章で学ぶこと

- **`<Link>`** の自動プリフェッチ（**先読み**）と、Dynamic Rendering ページの**例外**を理解する
- **`<Image>`** の `width`/`height`/`fill`/`sizes`/`quality`/`preload` を実装レベルで使い分ける
- **DevTools**（ブラウザ開発者ツール／F12 で開く）で `/_next/image` の URL パラメータ・WebP 変換を確認できる
- 外部画像を扱うときの `remotePatterns` セキュリティ設定を学ぶ
- `useRouter` / `usePathname` / `useSearchParams` の使い分けと、`redirect` の **try-catch 落とし穴** を把握する
- `revalidatePath` / `updateTag`・`revalidateTag` で **On-Demand ISR**（必要な時だけキャッシュ破棄）を実装する

> 💡 用語：**LCP**（最大要素の描画時間）／ **CLS**（レイアウトのガタつき量）は Google の Core Web Vitals 指標で **SEO 評価に直結**。`<Image>` はこれらを自動で改善してくれる

---

## 9-1. `<Link>` コンポーネントとプリフェッチの魔法

> **〔9章 ①/⑤：Link 編〕** 遷移は **`<Link>` 必須**。差分だけ取る「ソフトナビ」と自動プリフェッチで爆速

| | `<a href>` | `<Link href>` |
|---|---|---|
| 種類 | ハードナビ | ソフトナビ |
| 通信 | 全リソース再 DL | **RSC Payload 差分のみ** |
| プリフェッチ | なし | **自動**（ビューポート入り時／本番ビルドのみ） |

```tsx
import Link from "next/link";
// 👇 画面に表示された瞬間 → 裏で RSC Payload を先行取得
//    → クリック時は通信ゼロで瞬時遷移
//    （イメージ：ユーザーが来店する前にコンビニが商品を棚に並べておく）
<Link href="/about">About</Link>
```

> 💡 **ハードナビ** = 普通の `<a>` クリック時の挙動。画面が一瞬白くなり全部読み直す／ **ソフトナビ** = SPA 特有の滑らかな差分更新／ **RSC Payload** = Server Component の出力を軽量化したデータ（HTML より小さい）／ **ビューポート** = ブラウザの見えている範囲

---

## 9-2. プリフェッチの「部分」と `prefetch={true}`

> Dynamic Rendering のページは、デフォルトでは**「静的な殻」まで**しか先読みされない（`loading.tsx` 境界の手前まで。重い DB 部分は遷移時）

```tsx
// ⚠️ デフォルト：loading.tsx までの殻だけ部分プリフェッチ
<Link href="/dynamic-rendering">動的ページへ</Link>

// ✅ ルート全体を先読み（部分→完全プリフェッチに格上げ）
<Link href="/dynamic-rendering" prefetch={true}>
  Go to ダイナミックレンダリング
</Link>
```

**なぜ全部を先読みしない？** リンクが画面に映る度に DB クエリまで走らせるとサーバーが枯渇するため。

> ⚠️ `prefetch={true}` は本当に頻繁に遷移する画面だけ。乱用すると本末転倒
> 💡 **Dynamic Rendering** = アクセス毎にサーバーで HTML を作り直すモード／ `loading.tsx` が無ければ動的ルートは先読みされない（完全に切るなら `prefetch={false}`）

---

## 9-3. `<Image>` コンポーネントの基本

> **〔9章 ②/⑤：Image 編〕** 巨大画像は **LCP** 悪化の元凶。`<Image>` は**配信時に自動リサイズ＋圧縮＋WebP 変換**で「必要なだけの画像」に削る

```tsx
// src/app/(practice)/images/page.tsx
import React from "react";
import Image from "next/image";

const ImagesPage = () => {
  return (
    <>
      <h1>Images Page</h1>
      <Image
        src="/150x150.png"   // 👈 public/ 配下のパス
        alt="Sample Image"
        width={150}           // 👈 原則必須（CLS 防止）
        height={150}          // 👈 原則必須（CLS 防止）
      />
    </>
  );
};
export default ImagesPage;
```

> 💡 `width` / `height` 必須 → 予約スペース確保で **CLS** を完全防止

---

## 9-4. DevTools で見る `_next/image` の完全解剖

> ブラウザに出力された HTML を見ると `src` が**最適化エンドポイント**に書き換わっている

```html
<!-- 実際の DOM 出力（DevTools の Elements タブで確認） -->
<img
  src="/_next/image?url=%2F150x150.png&w=384&q=75"
  width="150" height="150" alt="Sample Image"
/>
```

**URL パラメータの意味：**
- `/_next/image` … 画像処理用の URL（**エンドポイント** = サーバーが受け付ける窓口）
- `w=384` … この表示に必要な画像の横幅(px)。**画面幅・`sizes`・倍率(Retina)で変わる**（→ 詳細 9-7-2）
- `q=75` … 画質を 75% に自動圧縮（見た目はほぼ変わらず容量大幅減）

> 💡 サーバーがアクセス時にリアルタイム生成・キャッシュ。2回目以降は瞬時に返る

---

## 9-5. 最強のフォーマット「WebP」への自動変換

> 元が PNG/JPEG でも、ブラウザが対応すればサーバー側で **WebP** にリアルタイム変換

```
DevTools > Network タブ > Img フィルタ
┌──────────────┬────────┬───────────┐
│ Name         │ Type   │ Size      │
├──────────────┼────────┼───────────┤
│ image?url=…  │ webp   │ ↓ 20〜30% │ 👈 元PNGより劇的に軽い
└──────────────┴────────┴───────────┘
```

**WebP の威力：** Google 開発の次世代フォーマット。同画質で**ファイルサイズ 20〜30% 以上削減**。
ブラウザの `Accept` ヘッダから対応状況を自動検知してリアルタイム変換。

> 💡 開発者が手動で WebP 書き出しする手間ゼロ。`<Image>` を使うだけで自動適用

---

## 9-6. レスポンシブ画像：`fill` プロパティ

> 親要素のサイズに合わせて柔軟に伸縮させたい場合は `fill` を使う

```tsx
// src/app/(practice)/images/page.tsx より
// 親要素には position: relative と幅・高さの定義が必須
<div className="relative w-1/2 h-screen">
  <Image
    src="/150x150.png"
    alt="Sample Image"
    fill                  // 👈 親要素を埋める
    sizes="50vw"
    style={{ objectFit: "cover" }}  // 👈 縦横比を保って切り抜き
  />
</div>
```

> 💡 **`position: relative`** = `fill` の `<Image>` の位置基準を親に固定する CSS／ **`objectFit:"cover"`** = 縦横比を保って親を埋める（はみ出しは切り取り）
> ⚠️ Next.js 13 で `objectFit` 単体 prop は**廃止**。今は `style={{ objectFit: "cover" }}` と書く（古い書き方は dev で警告が出て、将来動かなくなる）

---

## 9-7. `sizes` プロパティと再取得メカニズム

> `fill` だけだとフルスクリーン用の**巨大画像**（例：1920px）が生成され、スマホユーザーに無駄な大画像を送りつけてしまう。`sizes` で「どのくらいの大きさが必要か」をブラウザに**ヒント**として伝える

```tsx
// src/app/(practice)/images/page.tsx より（lg ブレークポイント版）
<div className="relative w-full lg:w-1/2 h-screen">
  <Image
    src="/150x150-2.png"
    alt="Sample Image"
    fill
    style={{ objectFit: "cover" }}
    // 👇 64rem(=1024px) 以下 → 50vw、それ以上 → 25vw
    sizes="(max-width: 64rem) 50vw, 25vw"
  />
</div>
```

**ブラウザの賢い再取得：**
- スマホ幅 → サーバーから `w=1080` 等の小画像 GET
- ウィンドウを広げる → 画質不足を検知し `w=1920` を**自動で再要求**
- 縮める → 既に綺麗な画像があるので再取得なし

> 💡 **`100vw`** = 画面幅の 100%（**vw** = viewport width）／ **`50vw`** = 画面幅の半分

---

## 9-7-2. `w` の数字はどう決まる？ — 画面幅しだい

> 🎯 9-4 の `w=384` は固定値じゃない。**「画面幅 × `sizes`の割合 × 画面の倍率」** をブラウザが計算し、候補から自動で選ぶ

```
必要なピクセル = 画面幅 × sizes(何%) × 倍率（普通=1 / Retina=2）
→ Next.js が用意した候補から「足りる中で一番小さい w」を選ぶ
```

`sizes="(max-width: 64rem) 50vw, 25vw"`（9-7）の例：

| 画面幅 | 画像の表示幅 | 普通の画面 | Retina(2倍) |
|---|---|---|---|
| 1440px（PC） | 25vw=360px | `w=384` | `w=750` |
| 768px（スマホ） | 50vw=384px | `w=384` | `w=828` |

> 💡 だから `w=384` は「Retina専用」ではなく、**PCの普通画面でも選ばれる**。画面幅と `sizes` の影響の方が大きい

**候補リストの正体**（`next.config.ts` 未設定 → デフォルト）：`deviceSizes` = 640/750/828/1080/1200/1920/2048/3840（画面幅用）＋ `imageSizes` = 32/48/64/96/128/256/**384**（画面より小さい画像用）

> ⚠️ `sizes` を付け忘れると「画面幅いっぱい(100vw)」扱い → 無駄にデカい画像を取得してしまう

---

## 9-8. クオリティ制御 `quality` と許可リスト

> 画質を意図的に変える時は `quality` を指定。**許可リスト外の値は最も近い許可値に丸められる**（最適化 URL を直接許可外の値で叩くと 400 エラー）

```tsx
// src/app/(practice)/images/page.tsx より
{/* 高画質：写真ポートフォリオ向け */}
<Image src="/150x150-3.png" alt="Sample Image" width={150} height={150} quality={100} />
{/* 低画質：アイコン等の極小画像向け */}
<Image src="/150x150-4.png" alt="Sample Image" width={150} height={150} quality={25} />
```

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],   // 👈 許可する値を配列で明示
  },
};
```

> 💡 セキュリティ・サーバー負荷の観点でホワイトリスト方式。75 以外を使うなら必須

---

## 9-9. 遅延読み込みと `preload`

> デフォルトで **Lazy Loading**。画面に近づくまで通信を行わない → LCP 改善

```
ページ初期表示
  ┌────────────┐
  │ ヘッダー   │ ✅ 即取得
  │ ヒーロー   │ ⚠️ ファーストビューなのに遅延の可能性
  │ ───────── │
  │ ↓スクロール│
  │ 画像A      │ ⏳ 近づいてから取得
  │ 画像B      │ ⏳ 近づいてから取得
  └────────────┘
```

```tsx
{/* ファーストビュー画像は preload で先読み */}
<Image src="/hero.png" width={1200} height={600} alt="ヒーロー" preload />
```

> ⚠️ Next.js 16 で `priority` は**非推奨**。今は `preload`（または `loading="eager"` / `fetchPriority="high"`）を使う

> 💡 **Lazy Loading**（遅延読み込み） = 必要な時まで読み込みを後回しにする技法／ **ヒーロー画像** = ページ最上部のメインビジュアル／ **ファーストビュー** = スクロールせずに最初に見える領域

---

## 9-10. 外部ドメイン画像のセキュリティ制限

> S3 や placehold.jp 等の外部 URL を `<Image>` に渡すと**最初は必ずエラー**

**理由：** 巨大な外部画像 URL を大量送信されると Next.js サーバーが画像処理で枯渇 → **DDoS 攻撃**。これを防ぐホワイトリスト方式

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.jp" },  // 👈 許可ホスト
    ],
  },
};
export default nextConfig;
```

> 設定後は開発サーバー再起動。`<Image src="https://placehold.jp/150x150.png" ... />` が動作
> 💡 **DDoS 攻撃** = 大量のリクエストを送りつけてサーバーをパンクさせる攻撃／ **ホワイトリスト** = 「これだけは許可」リスト

---

## 9-11. クライアントナビゲーションの主役：`useRouter`

> **〔9章 ③/⑤：ナビフック編〕** `<Link>` はリンク用。**JS イベント起点の遷移**は `useRouter` を使う

```tsx
// src/components/NavigationHooks.tsx
"use client";  // 👈 フック使用のため必須
import { usePathname, useRouter } from "next/navigation";

const NavigationHooks = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <button onClick={() => router.push("/static-rendering")}
        className={pathname === "/static-rendering" ? "underline" : ""}>Push</button>
      <button onClick={() => router.replace("/static-rendering")}>Replace</button>
      <button onClick={() => router.refresh()}>Refresh</button>
    </>
  );
};
export default NavigationHooks;
```

> 💡 **フック（Hook）** = React の機能を関数で借りる仕組み（`use〇〇` 系）／ **`"use client"`** = 「このファイルはブラウザ側で動かす」という宣言。`useState`・`onClick` 等を使うなら必須

---

## 9-12. `push` / `replace` / `refresh` の使い分け

| メソッド | 履歴への影響 | 主な用途 |
|---|---|---|
| `router.push("/path")` | **追加**（戻る可能） | 通常の遷移 |
| `router.replace("/path")` | **上書き**（戻れない） | ログイン後など戻したくない場面 |
| `router.refresh()` | なし | クライアント state を保ち SC のみ再生成 |

```tsx
// 例：ログイン処理後はログイン画面に戻れないように
await login();
router.replace("/dashboard");

// 例：データ更新後、フォーム入力は維持しつつ一覧だけ最新化
await updateItem();
router.refresh();
```

> 💡 **`refresh()` の勝ちどころ：ページ全体を再読み込みせず、クライアント state（入力途中のフォーム等）を壊さないまま、サーバー側のデータ（SC）だけを取り直して最新化できる**

---

## 9-13. パスとクエリの取得：`usePathname` / `useSearchParams`

> 今いる URL の情報（パス／クエリ）を CC で読み取る2つのフック

```tsx
"use client";
import { usePathname, useSearchParams } from "next/navigation";

// 👇 現在のパスでアクティブ表示を切り替え
export function ActiveLink() {
  const pathname = usePathname();
  return (
    <span className={pathname === "/about" ? "underline" : ""}>About</span>
  );
}

// 👇 ?q=nextjs を取得
export function SearchResult() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  return <p>検索キーワード: {q}</p>;
}
```

> 💡 サイドバーのアクティブ表示、検索結果、ページネーション等で必須
> ⚠️ `useSearchParams` を使う CC は `<Suspense>` で包むこと。dev では動くが、包み忘れると**静的ページの本番ビルドが失敗**する

---

## 9-14. サーバー専用関数：`cookies`

> **〔9章 ④/⑤：サーバー専用関数編〕** Cookie の読み取りは SC でも可。**書き込み（set / delete）は Server Action / Route Handler の中だけ**
> 💡 **Cookie** = ブラウザに保存される小さなデータ（ログイン状態の保持等に使用）

```ts
// src/actions/login.ts（Server Action：書き込み）
"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const login = async () => {
  const cookieStore = await cookies();
  cookieStore.set("token", "abc");          // 👈 Cookie に保存
  redirect("/static-rendering");             // 👈 完了後リダイレクト
};

// src/actions/logout.ts
"use server";
import { cookies } from "next/headers";
export const logout = async () => {
  (await cookies()).delete("token");         // 👈 Cookie を削除
  redirect("/static-rendering");
};
```

> ⚠️ SC で `cookies().get()` を呼ぶと、そのページは**自動的に Dynamic Rendering に切替**

---

## 9-15. 処理を強制中断して転送：`redirect` と `notFound`

> 認証 NG・データ不在時に、レンダリングを**強制中断＆転送**

```tsx
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";

export default async function Dashboard() {
  const token = (await cookies()).get("token")?.value;

  if (!token) redirect("/login");          // 👈 未ログイン → /login
  if (token === "invalid") notFound();      // 👈 不正トークン → 404

  return <div>ダッシュボード</div>;
}
```

**`redirect` vs `router.push`：**
- `redirect`：サーバーで **HTTP リダイレクト**を返す（SC からなら 307、**Server Action からなら 303**）。**内部で例外を投げる**ため後続コードは実行されない
- `router.push`：ブラウザの JavaScript で DOM（画面の構造）を書き換え
- `redirect` は CC の**レンダリング中**でも呼べるが、**イベントハンドラ内は不可**（そこは `router.push`）

---

## 9-16. `redirect` の落とし穴と `try-catch` の罠

> `redirect` は**内部的に Error を投げる**仕様。`try-catch` で囲むと罠にハマる

```ts
// ❌ アンチパターン
export async function createUser(formData: FormData) {
  try {
    await prisma.user.create({ data: { /* ... */ } });
    redirect("/users");          // 💥 例外スロー → catch に飛ぶ
  } catch (error) {
    console.error(error);        // ここに redirect エラーが入る！
  }
}

// ✅ 正解：redirect は try-catch の外
export async function createUser(formData: FormData) {
  try {
    await prisma.user.create({ data: { /* ... */ } });
  } catch {
    return { error: "保存失敗" };
  }
  redirect("/users");            // 👈 try 抜けてから安全に呼ぶ
}
```

> 💡 どうしても try の中で呼ぶなら、catch 先頭で `unstable_rethrow(error)` を呼べば redirect / notFound の内部例外だけ素通しできる

---

## 9-17. オンデマンド・キャッシュ更新：`revalidatePath`

> **〔9章 ⑤/⑤：キャッシュ操作編〕** 静的ページのキャッシュを**ピンポイントで破棄**。次回アクセスで最新 HTML に再構築

**問題：** Server Action で新規ユーザー保存 → 一覧（`/get-data-from-server-component`）が Static Rendering なら**古いキャッシュが返り続け**、新ユーザーが表示されない

```ts
// src/actions/action-called-sever.ts より抜粋
"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/prisma";

export const actionCalledServer = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  await prisma.user.create({ data: { name, email } });

  revalidatePath("/get-data-from-server-component");  // 👈 該当ページのキャッシュ破棄
  redirect("/get-data-from-server-component");        //    次回アクセスで最新HTML
};
```

> 💡 **Static Rendering** = ビルド時に HTML を完成させてキャッシュする方式（CDN 配信並みに爆速）／ **Full Route Cache** = その完成済み HTML を保管する層／ **ISR** = Incremental Static Regeneration（部分的な静的再生成）

---

## 9-18. タグによる柔軟なキャッシュ破棄：`updateTag`

> 「複数ページに跨る同じデータ」を**横断的に**破棄したい時に使う（前半 6-4 で触れた破棄 API の v16 実践編）

```tsx
// src/components/DataCache1.tsx より：取得時にタグを付ける
const res = await fetch("https://dummyjson.com/todos/random", {
  cache: "force-cache",          // 👈 キャッシュさせる（破棄の対象になる）
  next: { tags: ["todo"] },      // 👈 このデータに "todo" タグを付与
});
```

```ts
// src/actions/refresh-todo.ts
"use server";
import { updateTag } from "next/cache";  // 👈 v16 新登場。即時無効化＆Server Action 専用
import { redirect } from "next/navigation";

export const refreshTodo = async () => {
  updateTag("todo");                         // 👈 "todo" 付き Data Cache を破棄
  redirect("/data-cache-1");
};
```

> 💡 fetch 側の `tags: ["todo"]` と `updateTag("todo")` は**同じ名前**で対応（ズレると破棄されない）
> 💡 `updateTag`＝即時失効・**Server Action 専用**（自分の書き込みを即反映）。`revalidateTag` は別物で **Route Handler でも可**——v16 は **第2引数 `"max"` 推奨**：`revalidateTag("todo","max")`（古い内容を返しつつ裏で更新）。1引数は**非推奨**（TSエラー・将来削除の可能性）

---

## 9-18-2. タグ破棄は「どんな時」に使う？

> 🎯 ①タグ方式が向く場面 ＋ ②`updateTag` と `revalidateTag` の使い分け、の2点で覚える

**① 同じデータが複数ページに散らばってる時**に効く
例：プロフィール情報がヘッダー・マイページ・コメント欄…と何ヶ所にも出る
→ 全 fetch に `tags:["profile"]` を付け、編集時 `updateTag("profile")` **一発で全部更新**（パス指定だと1ページずつ書く必要があり面倒）

**② どっちを使う？（合言葉：自分の変更を即見せたい→`updateTag`）**

| 使いたい場面 | 関数 |
|---|---|
| 操作を**即・自分の画面に反映**（TODO追加・投稿・プロフィール編集・カート・いいね） | `updateTag`（即時／SA専用） |
| 裏で更新されればOK・多少古くても速さ優先（ブログ・商品カタログ・docs） | `revalidateTag(t,"max")` |
| **webhook / 外部API** から破棄（CMS更新通知など） | `revalidateTag`（Route Handler可） |

> 💡 「ユーザーが今やった変更をすぐ見せる」なら `updateTag`、「裏でこっそり最新化」なら `revalidateTag`

---

<!-- _class: summary -->

## 第9章まとめ — 機能 × 使える場所の早見表

| 機能 | SC | CC | Server Action |
|---|---|---|---|
| `<Link>` / `<Image>` | ✅ | ✅ | ❌ |
| `useRouter` / `usePathname` / `useSearchParams` | ❌ | ✅ | ❌ |
| `cookies` | ✅ | ❌ | ✅ |
| `revalidatePath` / `updateTag`・`revalidateTag` | ❌ | ❌ | ✅ |
| `redirect` / `notFound` | ✅ | ✅ | ✅ |

> ※ `revalidatePath` / `revalidateTag` は **Route Handler でも呼べる**（webhook からの On-Demand ISR が典型）。Server Action **専用**なのは `updateTag`

> **フロントエンド最適化の完全自動化：** `<Link>` 自動プリフェッチと `<Image>` の WebP/sizes/CLS 防止で **Core Web Vitals** が跳ね上がる

> **キャッシュの完全支配：** `revalidatePath` / `updateTag` で多層キャッシュを操り、**爆速とリアルタイム性**を両立

**結論：** 関数には**動く場所（SC / CC / Server Action / Route Handler）が決まっている**。場所を間違えればエラー、キャッシュ破棄を忘れれば古い表示——**「どこで何が使えるか」を押さえることが、バグらせずに爆速とリアルタイム性を両立する唯一の道**

---

<!-- _class: chapter -->

# 10. Next.js 完全攻略の総まとめと次のステップ

> フロントエンドの歴史の到達点と、市場価値の高いフルスタックエンジニアへの道標

---

<!-- _class: objectives -->

# この章で学ぶこと

- Web フロントエンドの**歴史的文脈**から Next.js の存在意義を再確認する
- **RSC・ルーティング・レンダリング・キャッシュ**の4大要素を体系で振り返る
- **Server Actions** による API レス開発が「真のフルスタック化」である意味を腑に落とす
- Next.js 特有の組み込み機能（`<Image>` / ナビフック / サーバー専用関数）を整理する
- 学んだ知識を**実力に変える**ためのアウトプット指針を得る

> 💡 用語：**SPA**（Single Page Application）= ページ遷移しない単一ページアプリ／ **SSR**（Server-Side Rendering）= サーバー側で HTML を生成する方式／ **RSC**（React Server Components）= サーバーで実行する React 部品

---

## 10-1. フロントエンド進化の歴史と Next.js の存在意義（→ 第1章）

> SPA の2大弱点（**初期表示遅・SEO 弱**）を Next.js が根本解決

```
HTML/CSS 時代   ─ 静的ページのみ
   ↓
jQuery 時代     ─ document.getElementById で命令的に DOM 操作
   ↓               コードがスパゲッティ化・保守困難
React (SPA)     ─ 宣言的 UI で開発体験(DX)が劇的向上
   ↓               ⚠️ 初期表示遅・SEO 弱という2大弱点
Next.js         ─ サーバーで完全な HTML を組み立てて配信
                  → React の DX + 爆速 + SEO すべて両立 🎯
```

> 💡 **DX**（Developer Experience：開発者体験）／ **UX**（User Experience：利用者体験）／ **SEO**（Search Engine Optimization：検索結果に出やすくする工夫）

---

## 10-2. React Server Components (RSC) という大革命（→ 第3章）

> **デフォルト SC・末端のみ CC**。CC の中で直接 SC を import できないが、`children` で**注入**すれば回避できる（= コンポジションパターン）

```tsx
// Server Component（デフォルト：サーバー実行・JS 0KB）
import prisma from "../../lib/prisma";   // 👈 lib/ は src/ の外なので相対パス（→ 8-4）
export default async function Page() {
  const users = await prisma.user.findMany();
  return <ClientShell><UserList users={users} /></ClientShell>;
  //     👆 CC に SC を children として注入（コンポジション）
}

// Client Component（onClick / useState を使う末端のみ）
"use client";
export function ClientShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div onClick={() => setOpen(!open)}>{children}</div>;
}
```

> 💡 **鉄則：** デフォルトを SC のまま保ち、CC は末端 UI に閉じ込める

---

## 10-3. ファイルシステムベース・ルーティングの魔法（→ 第7章）

> **規約 > 設定**。フォルダ構造だけでルーティング・レイアウト・ローディングが完成

```
src/app/
├── layout.tsx            ← 遷移時も保持される共通レイアウト
├── page.tsx              ← / の画面
├── loading.tsx           ← <Suspense> を自動構築・Streaming SSR
├── error.tsx             ← <ErrorBoundary> を自動構築
├── (dashboard)/          ← URL に影響しない Route Group
│   ├── @sidebar/page.tsx ← Parallel Routes（同時描画）
│   └── @main/page.tsx
├── users/[id]/page.tsx   ← 動的ルート /users/123
└── @modal/(.)photo/      ← Intercepting Routes（URL 連動モーダル）
```

> 💡 **`<Suspense>`** = 「データ待ち中はこれを表示」を宣言する React 部品／ **`<ErrorBoundary>`** = 子コンポーネントでエラーが起きても画面全体が壊れないようにする防波堤

---

## 10-4. レンダリング戦略の自動最適化（→ 第4章）

> 開発者が手動切替不要。**コードを読んで Next.js が自動判定**

```tsx
// ① Static Rendering（デフォルト）
export default async function Blog() {
  const posts = await fetch("https://api/posts").then(r => r.json());
  return <PostList posts={posts} />;   // 👈 ビルド時に HTML 生成
}

// ② Dynamic Rendering（自動切替トリガー）
import { cookies } from "next/headers";
export default async function Dashboard() {
  const user = (await cookies()).get("user");  // 👈 cookies() で Dynamic に
  return <div>{user?.value}</div>;
}
```

**自動 Dynamic 切替のトリガーは2系統：** ① Request-time API＝`cookies()` / `headers()` / `searchParams`（`connection()` で明示も可）② キャッシュしない fetch＝`cache: "no-store"` / `revalidate: 0`（→ 前半 4-2・5-9）

---

## 10-5. データ取得の常識を覆す Streaming SSR（→ 第5章）

> **本質：旧来はブラウザから API を往復して取りに行くから「空表示→取得→再描画」になる**
> → 新方式は async SC でサーバー側が直接 await。`useEffect` + `useState` の手組みごと不要に

```tsx
// 旧（SPA 時代）：useEffect + useState 地獄
const [data, setData] = useState(null);
useEffect(() => { fetch("...").then(r => r.json()).then(setData); }, []);

// 新（Next.js）：async コンポーネントで直接 await
async function HeavyPart() {
  const data = await slowQuery();   // 5秒かかる重い処理
  return <Result data={data} />;
}

// 重い部分を <Suspense> で囲めば「準備できた HTML から順次配信」
<Suspense fallback={<Spinner />}>
  <HeavyPart />
</Suspense>
```

> 💡 **Streaming SSR** = HTML を一気に渡さず、できた部分から細切れで送る方式／ **`<Suspense>`** で囲んだ箇所が「後から届く」扱いになる

---

## 10-6. 範囲と速度が違う4層キャッシュアーキテクチャ（→ 第6章）

| # | 層 | 保存場所 | 範囲 | 生存期間 |
|---|---|---|---|---|
| 1 | Request Memoization | サーバーメモリ | 1リクエスト内 | 数百ms |
| 2 | Data Cache | `.next/cache/` | 全ユーザー横断 | 永続 or `revalidate` |
| 3 | Full Route Cache | `.next/server/app/` | ページ全体 | ビルド or `revalidate` |
| 4 | Client Route Cache | ブラウザメモリ | 同一ユーザー遷移間 | `staleTimes` |

```ts
// On-Demand ISR：更新時だけキャッシュを破棄
revalidatePath("/users");       // ページ単位
updateTag("todo");              // タグ横断・即時無効化（v16新／revalidateTag とは別物）
```

> 💡 4層必要なのは**範囲と速度が違う**から。短期1層（メモリ）と長期3層（ファイル）の組み合わせで、用途別に最適化される

> 💡 発展：v16 は `next.config.ts` の `cacheComponents: true` ＋ 関数/コンポーネント先頭の `'use cache'` で「書いた所だけキャッシュ」する新モデルも持つ。この4層は『従来モデル』として今も有効——まずこちらを理解しよう

---

## 10-7. API レス時代の到来：真のフルスタック化（→ 第8章）

> フロントとバックの境界が論理的に消滅。**1言語（TypeScript）で完結**

```tsx
// Read：API を作らず SC で直接 Prisma
async function UserList() {
  const users = await prisma.user.findMany();   // 👈 SC 内で直接 ORM
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

```tsx
// CUD："use server" で関数を直接呼べる
"use server";
export async function createUser(prev: State, fd: FormData): Promise<State> {
  await prisma.user.create({ data: { name: fd.get("name") as string } });
  return { success: true };
}
// CC：useActionState で isPending / errors を一発管理
const [state, formAction, isPending] = useActionState(createUser, initialState);
```

> 💡 **CUD** = Create / Update / Delete（データ書き換え系の総称）／ **ORM** = SQL を書かずに DB を操作するライブラリ（Prisma 等）

---

## 10-8. Next.js 特有の強力な組み込み機能群（→ 第9章）

```tsx
// ① <Image>：WebP 自動変換（AVIF は config で有効化）・遅延読込・CLS 防止
<Image src="/hero.jpg" alt="" width={1200} height={600} preload />

// ② <Link>：自動プリフェッチ・ソフトナビゲーション
<Link href="/about" prefetch={true}>About</Link>

// ③ ナビゲーションフック（"use client" 専用）
const router = useRouter();
const path = usePathname();
const params = useSearchParams();

// ④ サーバー専用関数（SC / Server Actions 専用）
const token = (await cookies()).get("token")?.value;
if (!token) redirect("/login");
```

> 💡 場所（SC / CC / Server Action）と用途を意識して使い分けるのが達人の証

---

## 10-9. フルスタックエンジニアとしての市場価値

> 単なるコーダーから、**設計力を持つフルスタックエンジニア**へ

```
✅ 習得スキルセット
─ レンダリング戦略の選択（Static / Dynamic / Streaming）
─ Server / Client 境界の設計・コンポジションパターン
─ 多層キャッシュアーキテクチャの制御（On-Demand ISR）
─ Server Actions による API レス開発
─ Prisma + ORM での型安全なデータ層構築
─ Core Web Vitals（LCP / CLS）を意識した UI 最適化
─ セキュリティ（DB 接続情報の境界・remotePatterns）
```

> 💡 Next.js App Router を正しく理解しベストプラクティスで構築できる人材は、現在の Web 業界で圧倒的に不足している

---

## 10-10. 学習を「実力」に変えるための Next Action

> 動画・教材を見るだけでは数日で抜け落ちる。**手を動かすことだけが定着の道**

```
真のスキル定着ロードマップ:

1. ゼロからオリジナル Web アプリを構築
   └ 例：ブログ / タスク管理 / ミニ SNS / ポートフォリオ
2. 本講義で学んだ機能を全部使う
   ├ Server Component で Prisma 直接取得
   ├ Server Actions + useActionState でフォーム
   ├ <Image> + <Link> + キャッシュ最適化
   └ Streaming SSR + Suspense
3. 本番デプロイ（Vercel / Cloudflare Pages 等）
4. 詰まったら本講義の該当章へ戻って再読
```

> 💡 **デプロイ** = 作ったアプリを本番のサーバーに公開すること／ **Vercel** = Next.js 公式の無料デプロイサービス（GitHub 連携で push するだけで自動デプロイ）
> 💡 「作る → 詰まる → 学び直す」のサイクルが最強。完璧を目指さず、まず 1 つ完成させる

---

<!-- _class: title -->

# 【講義完結】 ありがとうございました！

<p>Next.js の「根本的なアーキテクチャ思想」を理解したことは、<br>あなたのエンジニア人生における一生の財産です</p>
