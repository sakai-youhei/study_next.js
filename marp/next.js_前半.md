---
marp: true
theme: default
paginate: true
style: |
  section {
    font-size: 18px;
    line-height: 1.6;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    padding: 40px 50px;
  }
  section.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: #fff;
  }
  section.title h1 {
    font-size: 42px;
    border: none;
    color: #fff;
    margin-bottom: 8px;
  }
  section.title p {
    font-size: 20px;
    color: #94d2e6;
  }
  h1 {
    font-size: 28px;
    color: #1a1a2e;
    border-bottom: 3px solid #4361ee;
    padding-bottom: 6px;
    margin-bottom: 16px;
  }
  h2 { font-size: 22px; color: #3a0ca3; margin-bottom: 8px; }
  h3 { font-size: 17px; color: #e63946; margin-top: 12px; margin-bottom: 4px; }
  ul { padding-left: 22px; margin-bottom: 8px; }
  li { margin-bottom: 4px; }
  strong { color: #2b2d42; }
  em { color: #6c757d; font-style: normal; }
  code {
    background-color: #e8ecf1;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 88%;
    color: #d63384;
  }
  pre {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 12px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  blockquote {
    border-left: 4px solid #4361ee;
    background: rgba(67, 97, 238, 0.08);
    padding: 8px 16px;
    margin: 12px 0;
    font-size: 16px;
  }
  table { font-size: 16px; }
  th { background: #4361ee; color: #fff; }
---

<!-- _class: title -->

# Next.js 完全攻略ハンズオン

App Routerの基礎概念からキャッシュ機構まで、手を動かしながら学ぶ

---

# 1. なぜ Next.js なのか？

### Key Takeaway
> SPAが抱える「初期表示の遅さ」と「SEOの弱さ」を、Next.jsのサーバーレンダリングがどう解決するかを理解する

### SPA (React単体) の課題

| 課題 | 原因 |
|------|------|
| 初期表示が遅い | ブラウザがJS実行後にHTMLを構築 |
| SEOに弱い | クローラーにコンテンツが見えない |
| OGP対応が困難 | サーバーが空のHTMLしか返さない |

### Next.js のアプローチ

- **サーバーサイドレンダリング** -- サーバーでHTMLを生成し、完成した状態で返す
- **ハイドレーション** -- 受け取ったHTMLにJSのイベントを後付けして操作可能にする
- **ビルド最適化** -- コード分割・静的生成で本番パフォーマンスを最大化

> React の宣言的UIの良さを活かしたまま、表示速度とSEOを両立する

---

# 2. 環境構築とルーティング

### Key Takeaway
> `create-next-app` で環境を立ち上げ、App Router の「フォルダ名 = URL」という直感的なルーティング規約を身につける

### セットアップ

```bash
npx create-next-app@latest my-app --typescript --app
cd my-app && npm run dev
```

### App Router のルーティング規約

**フォルダ構造がそのままURLになる。** `page.tsx` を置くだけでルートが生える。

```
src/app/
  page.tsx                        → /
  about/page.tsx                  → /about
  practice/
    dynamic-rendering/page.tsx    → /practice/dynamic-rendering
```

```tsx
// src/app/practice/dynamic-rendering/page.tsx
export default function DynamicRenderingPage() {
  return <h1>Dynamic Rendering</h1>;
}
```

> フォルダ名 = URLパス。設定ファイル不要で直感的にルートを追加できる

---

# 3. Server Component vs Client Component

### Key Takeaway
> サーバーで動く部品（RSC）とブラウザで動く部品（CC）の違いを理解し、どちらを使うべきか判断できるようになる

### 使い分けの基準

| | Server Component | Client Component |
|---|---|---|
| 宣言 | デフォルト（何も書かない） | `"use client"` を先頭に記述 |
| 実行場所 | サーバーのみ | サーバー + ブラウザ |
| できること | DB直接アクセス、`cookies()` | `useState`, `onClick` 等 |
| JSバンドル | 含まれない（軽量） | 含まれる |

### コード例

```tsx
// Server Component -- デフォルト。async が使える
import { cookies } from "next/headers";

export default async function Dashboard() {
  const token = await cookies().get("session");
  const data = await db.query("SELECT ...");
  return <div>{data.map(d => <Card key={d.id} {...d} />)}</div>;
}
```

```tsx
// Client Component -- ユーザー操作が必要な場合のみ
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

---

# 4. レンダリング戦略と RSC Payload

### Key Takeaway
> ビルド時に生成する「Static」とリクエスト時に生成する「Dynamic」の違い、そしてNext.js内部のデータ構造「RSC Payload」の役割を掴む

### Static vs Dynamic

| | Static Rendering | Dynamic Rendering |
|---|---|---|
| 生成タイミング | ビルド時（事前生成） | リクエスト時（都度生成） |
| 切り替わる条件 | デフォルト | `cookies()` / `headers()` / `no-store` fetch |
| 適するページ | ブログ、LP、ドキュメント | ダッシュボード、ユーザー固有ページ |

### RSC Payload とは

サーバーがクライアントに送る**中間データ構造**。HTMLのツリー情報 + Client Componentへの参照 + データがシリアライズされている。

> ブラウザはこのPayloadを使ってハイドレーションを効率的に行う。
> HTMLとは別に送信され、クライアント側のナビゲーションではHTMLなしでPayloadだけが送られる。

---

# 5. データ取得と Streaming SSR

### Key Takeaway
> Server Component でのモダンなデータフェッチと、重い処理を待たずに画面を順次表示する Streaming SSR の仕組みを学ぶ

### Server Component でのデータ取得

```tsx
// 関数を async にして直接 fetch を呼ぶだけ
export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### Streaming SSR -- 重い部分を待たせない

```tsx
import { Suspense } from "react";
import HeavyDataFetch from "./HeavyDataFetch";

export default function Page() {
  return (
    <div>
      <h1>すぐ表示される</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyDataFetch />  {/* 準備できた時点でストリーム送信 */}
      </Suspense>
    </div>
  );
}
```

> `<Suspense>` 境界ごとにHTMLがチャンク送信される。ユーザーは待ち時間なくページを操作開始できる。
