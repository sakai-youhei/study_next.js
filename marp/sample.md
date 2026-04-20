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
> App Router の「フォルダ名 = URL」というルーティング規約と、Route Group / Dynamic Segment の使い方を身につける

### App Router のルーティング規約

**フォルダ構造がそのままURLになる。** 本プロジェクトの実際の構成:

```
src/app/
  (practice)/                         ← Route Group（URLに影響しない）
    static-rendering/page.tsx         → /static-rendering
    static-rendering/[id]/page.tsx    → /static-rendering/123
    dynamic-rendering/page.tsx        → /dynamic-rendering
    data-fetch/page.tsx               → /data-fetch
    streaming-ssr/page.tsx            → /practice/streaming-ssr
    call-server-action/page.tsx       → /call-server-action
    login/page.tsx                    → /login
    images/page.tsx                   → /images
```

- `(practice)` -- **Route Group**: カッコで囲むとURLに含まれず、整理目的のみ
- `[id]` -- **Dynamic Segment**: URLの一部をパラメータとして受け取る

---

# 3. 規約ファイルとレイアウトの仕組み

### Key Takeaway
> `page.tsx` 以外にもNext.jsが認識する規約ファイルがある。これらを置くだけで、レイアウト・ローディング・エラー処理が自動で機能する

### 本プロジェクトで使用している規約ファイル

| ファイル | 役割 | 設置場所 |
|----------|------|----------|
| `layout.tsx` | 共通レイアウト。子ルートで共有される | ルート / streaming-ssr |
| `loading.tsx` | ページ読み込み中のフォールバックUI | ルート / streaming-ssr |
| `error.tsx` | エラー発生時のフォールバックUI | streaming-ssr |
| `not-found.tsx` | 404ページ | ルート |
| `global-error.tsx` | ルートレイアウトのエラー境界 | ルート |
| `middleware.ts` | リクエスト前処理（リダイレクト等） | src直下 |

### Root Layout の実装

```tsx
// src/app/layout.tsx -- Parallel Routes のスロットを受け取っている
export default function RootLayout({
  header, children, modal,
}: Readonly<{
  header: React.ReactNode;   // @header スロット
  children: React.ReactNode;
  modal: React.ReactNode;    // @modal スロット
}>) {
  return (
    <html lang="en">
      <body>
        {header}
        <NavigationHooks />
        {children}
        {modal}
      </body>
    </html>
  );
}
```

---

# 4. Server Component vs Client Component

### Key Takeaway
> デフォルトは Server Component。`"use client"` は「ユーザー操作が必要な場合だけ」付ける

### 使い分けの基準

| | Server Component | Client Component |
|---|---|---|
| 宣言 | デフォルト（何も書かない） | `"use client"` を先頭に記述 |
| 実行場所 | サーバーのみ | サーバー + ブラウザ |
| できること | DB直接アクセス、`cookies()` | `useState`, `onClick` 等 |
| JSバンドル | 含まれない（軽量） | 含まれる |

### 本プロジェクトの例

```tsx
// StaticServerComponent.tsx -- Server Component（デフォルト）
export const StaticServerComponent = () => {
  return <span>Static Server Component</span>;
};

// DynamicServerComponent.tsx -- cookies() でサーバー専用APIを使用
import { cookies } from "next/headers";
export const DynamicServerComponent = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return <span>トークン: {token?.value}</span>;
};
```

```tsx
// StaticClientComponent.tsx -- "use client" でブラウザ操作を有効化
"use client";
import { useState } from "react";
export const StaticClientComponent = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
};
```

---

# 5. レンダリング戦略 -- Static vs Dynamic

### Key Takeaway
> ページはデフォルトで Static。`cookies()` や `no-store` fetch を使った瞬間に Dynamic に切り替わる

### Static vs Dynamic

| | Static Rendering | Dynamic Rendering |
|---|---|---|
| 生成タイミング | ビルド時（事前生成） | リクエスト時（都度生成） |
| 切り替わる条件 | デフォルト | `cookies()` / `headers()` / `no-store` fetch |
| 適するページ | ブログ、LP | ダッシュボード、ユーザー固有ページ |

### 本プロジェクトでの切り替え

```tsx
// static-rendering/page.tsx -- cookies() を使っているので実は Dynamic になる
const cookieStore = await cookies();
const token = cookieStore.get("token");
if (token?.value !== "abc") notFound();  // 未ログインなら404

// dynamic-rendering/page.tsx -- こちらも cookies() で Dynamic
// → どちらもリクエストごとにサーバーで実行される
```

> `cookies()` や `headers()` を呼ぶだけで、そのページ全体が Dynamic Rendering に切り替わる。意図せず Dynamic になっていないかビルド時に確認しよう

---

# 6. データ取得パターン

### Key Takeaway
> Server Component では直接 `fetch` や Prisma を呼べる。Client Component では従来の `useEffect` パターンを使う

### 3つのパターン比較（本プロジェクトの実装）

```tsx
// ① Server Component + fetch (キャッシュあり = Static)
// StaticServerDataFetch.tsx
const res = await fetch("https://dummyjson.com/todos/random");
// → ビルド時に取得。再デプロイまで同じ値

// ② Server Component + fetch (キャッシュなし = Dynamic)
// DynamicServerDataFetch.tsx
const res = await fetch("https://dummyjson.com/todos/random", {
  cache: "no-store",
});
// → リクエストのたびに最新データを取得

// ③ Client Component + useEffect
// ClientDataFetch.tsx
"use client";
useEffect(() => {
  fetch("https://dummyjson.com/todos/random")
    .then(res => res.json()).then(setTodo);
}, []);
// → ブラウザから直接APIを叩く（従来のSPAパターン）
```

---

# 7. Data Cache とキャッシュ制御

### Key Takeaway
> `fetch` のオプションでキャッシュ戦略を制御し、`revalidateTag` でオンデマンドに無効化できる

### キャッシュ付き fetch + タグによる無効化

```tsx
// DataCache1.tsx -- タグ付きキャッシュ
const res = await fetch("https://dummyjson.com/todos/random", {
  cache: "force-cache",
  next: { tags: ["todo"] },  // ← "todo" タグを付与
});

// DataCache2.tsx -- タグなしキャッシュ（個別無効化できない）
const res = await fetch("https://dummyjson.com/todos/random", {
  cache: "force-cache",
});
```

```tsx
// actions/refresh-todo.ts -- タグを指定してキャッシュを無効化
"use server";
import { updateTag } from "next/cache";

export const refreshTodo = async () => {
  updateTag("todo");          // ← "todo" タグのキャッシュだけ破棄
  redirect("/data-cache-1");
};
// → DataCache1 は更新されるが、DataCache2 はキャッシュが残ったまま
```

---

# 8. Streaming SSR

### Key Takeaway
> `<Suspense>` + `loading.tsx` で、重いデータ取得を待たずにUIを段階的に表示できる

### 本プロジェクトの構成

```
(practice)/streaming-ssr/
  layout.tsx      ← 共通レイアウト
  page.tsx        ← <Suspense> で DelayServerDataFetch を囲む
  loading.tsx     ← ページ全体のフォールバック
  error.tsx       ← エラー時のリトライUI
```

```tsx
// DelayServerDataFetch.tsx -- 5秒の遅延をシミュレート
await new Promise((resolve) => setTimeout(resolve, 5000));
const res = await fetch("https://dummyjson.com/todos/random", {
  cache: "no-store",
});
```

**動作の流れ:**
1. ユーザーがページにアクセス → `loading.tsx` が即座に表示
2. 5秒後にデータ取得完了 → `loading.tsx` が実コンテンツに置き換わる
3. エラー発生時 → `error.tsx` のリトライUIが表示される

---

# 9. Server Actions -- 3つのパターン

### Key Takeaway
> フォームの送信処理をサーバー側で安全に実行できる。バリデーションの場所と状態管理で3パターンに分かれる

### パターン比較

| パターン | バリデーション | 状態管理 | 用途 |
|----------|---------------|---------|------|
| Server直接 | サーバー側 | redirect + query params | シンプルなフォーム |
| Client経由 | クライアント側 | 戻り値で判定 | リッチなUI制御 |
| useActionState | サーバー側 | React が状態を保持 | エラー表示の保持 |

### ① Server直接（フォームaction属性）

```tsx
// action-called-sever.ts
export const actionCalledServer = async (formData: FormData) => {
  const name = formData.get("name") as string;
  if (name === "") redirect(`/call-server-action?errors=empty_name`);
  await prisma.user.create({ data: { name, email } });
  revalidatePath("/get-data-from-server-component");
};
```

### ② Client経由（戻り値で制御）

```tsx
// action-called-client.ts -- 成功/失敗をオブジェクトで返す
export const actionCalledClient = async (name: string, email: string) => {
  if (name === "") return { success: false, errors: ["empty_name"] };
  await prisma.user.create({ data: { name, email } });
  return { success: true };
};
```

---

# 10. Server Actions -- useActionState パターン

### Key Takeaway
> React 19 の `useActionState` を使うと、フォームの送信状態・エラー・前回入力値をReactが自動管理してくれる

```tsx
// action-called-client-with-action-state.ts
type State = {
  success: boolean;
  data: { name: string; email: string };
  errors?: (keyof typeof ERROR_MESSAGE)[];
};

export const actionCalledClientWithActionState = async (
  _initialState: State,  // ← 前回のState
  formData: FormData,
): Promise<State> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  if (name === "") return { success: false, data: { name, email },
                            errors: ["empty_name"] };
  await prisma.user.create({ data: { name, email } });
  return { success: true, data: { name: "", email: "" } };
};
```

```tsx
// ActionWithActionState.tsx（Client Component）
const [state, formAction] = useActionState(
  actionCalledClientWithActionState,
  { success: false, data: { name: "", email: "" } }
);
// → state.errors があればエラーメッセージを表示
// → 送信後も前回の入力値 (state.data) が保持される
```

---

# 11. Route Handler (API Routes)

### Key Takeaway
> `app/api/*/route.ts` に HTTP メソッド名の関数をexportするだけでAPIエンドポイントになる

### 本プロジェクトの API

```tsx
// src/app/api/sample/route.ts

// GET /api/sample -- ユーザー一覧取得
export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

// POST /api/sample -- ユーザー作成
export async function POST(request: Request) {
  const res = await request.json();
  await prisma.user.create({
    data: { name: res.name, email: res.email },
  });
  return Response.json({ message: "ユーザーを作成しました", status: 201 });
}
```

### Server Component から直接DB vs Route Handler 経由

| 方法 | コード | 用途 |
|------|--------|------|
| Server Component で直接 | `await prisma.user.findMany()` | SSR / SSGでのデータ表示 |
| Route Handler 経由 | `fetch("/api/sample")` | Client Component / 外部からの呼び出し |

> Server Component ではAPIを経由せず直接DBアクセスが可能。わざわざRoute Handlerを挟む必要はない

---

# 12. Parallel Routes と Intercepting Routes

### Key Takeaway
> `@folder` でレイアウトに複数のスロットを差し込み、`(.)` でルート遷移をインターセプトしてモーダル表示できる

### Parallel Routes -- ヘッダーの動的切り替え

```
src/app/
  @header/
    default.tsx                    ← デフォルトは "Default Header"
    dynamic-rendering/page.tsx     ← /dynamic-rendering では専用ヘッダー
  @modal/
    default.tsx                    ← デフォルトは null（何も表示しない）
    (.)intercepting-route/page.tsx ← /intercepting-route をインターセプト
```

- `@header` -- URLに応じてヘッダーの中身が自動的に切り替わる
- `@modal` -- 通常は `null`、特定ルートでモーダルを表示

### Intercepting Routes -- モーダル表示

```tsx
// @modal/(.)intercepting-route/page.tsx
// → クライアント遷移時にモーダルとして表示
// → 直接URL入力やリロード時は通常のページとして表示
```

`(.)` はインターセプトの深さを表す:
- `(.)` -- 同階層
- `(..)` -- 1階層上
- `(...)` -- ルートから

---

# 13. Middleware

### Key Takeaway
> リクエストがルーティングされる前に処理を挟める。認証チェックやリダイレクトに使う

### 本プロジェクトの Middleware

```tsx
// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // ルートパスへのアクセスを /static-rendering にリダイレクト
  return NextResponse.redirect(new URL("/static-rendering", request.url));
}

export const config = {
  matcher: "/",  // ルートパスのみに適用
};
```

**活用例:**
- 未認証ユーザーをログインページにリダイレクト
- 特定パスへのアクセス制御
- リクエストヘッダーの書き換え
- A/Bテストのルーティング

---

# 14. Prisma によるDB連携

### Key Takeaway
> Prisma のスキーマ定義からTypeScript型が自動生成され、型安全にDBアクセスできる

### スキーマ定義

```prisma
// prisma/schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
```

### Prisma Client のシングルトンパターン

```tsx
// lib/prisma.ts -- 開発中にホットリロードでインスタンスが増殖するのを防ぐ
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

---

# 15. Image 最適化

### Key Takeaway
> Next.js の `<Image>` は自動で WebP変換・リサイズ・遅延読み込みを行い、Core Web Vitals を改善する

### 本プロジェクトの実装例

```tsx
// images/page.tsx
import Image from "next/image";

// ① 静的画像 -- width/height 必須
<Image src="/150x150.png" alt="" width={150} height={150} />

// ② レスポンシブ画像 -- fill + sizes でコンテナに合わせる
<div style={{ position: "relative", width: "300px", height: "300px" }}>
  <Image src="/150x150.png" alt="" fill
         sizes="(max-width: 768px) 100vw, 300px" />
</div>

// ③ 画質指定 -- quality で圧縮率を制御
<Image src="/150x150.png" alt="" width={150} height={150} quality={25} />

// ④ リモート画像 -- next.config.ts で許可が必要
<Image src="https://placehold.jp/150x150.png" alt=""
       width={150} height={150} />
```

```tsx
// next.config.ts -- リモート画像の許可設定
images: {
  qualities: [25, 50, 75, 100],
  remotePatterns: [{ protocol: "https", hostname: "placehold.jp" }],
},
```

---

# 16. Composition Pattern

### Key Takeaway
> Client Component の children に Server Component を渡すことで、インタラクティブな枠の中にサーバー専用処理を組み込める

```tsx
// ClientBoundary.tsx -- Client Component がラッパーになる
"use client";
export const ClientBoundary = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && children}  {/* ← children は Server Component でもOK */}
    </div>
  );
};
```

```tsx
// composition-pattern/page.tsx
<ClientBoundary>
  <ServerComponent />  {/* ← サーバーで実行済みの結果が渡される */}
</ClientBoundary>
```

> Server Component を Client Component に **import して使う**のはNG。**children として渡す**のがポイント

---

<!-- _class: title -->

# まとめ

本ハンズオンで扱った機能一覧

---

# 扱った機能の全体マップ

| カテゴリ | 機能 | 該当ルート |
|----------|------|-----------|
| ルーティング | Route Group / Dynamic Segment | `(practice)` / `[id]` |
| レンダリング | Static / Dynamic / Streaming SSR | `static-rendering` / `dynamic-rendering` / `streaming-ssr` |
| コンポーネント | Server / Client / Composition | `composition-pattern` |
| データ取得 | fetch (cache/no-store) / Prisma 直接 | `data-fetch` / `get-data-from-server-component` |
| キャッシュ | Data Cache / revalidateTag | `data-cache-1` / `data-cache-2` |
| Server Actions | form / client / useActionState | `call-server-action` |
| API | Route Handler (GET/POST) | `api/sample` |
| 高度なルーティング | Parallel Routes / Intercepting Routes | `@header` / `@modal` |
| その他 | Middleware / Image 最適化 / エラー処理 | `middleware.ts` / `images` |
