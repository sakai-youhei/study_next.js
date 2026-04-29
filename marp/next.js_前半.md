---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  :root {
    --accent:   #4361ee;
    --accent2:  #3a0ca3;
    --accent3:  #e63946;
    --bg-light: #f8f9fc;
    --bg-card:  #ffffff;
    --text:     #1a1a2e;
    --muted:    #6c757d;
  }

  section {
    font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
    font-size: 17px;
    line-height: 1.65;
    background: var(--bg-light);
    color: var(--text);
    padding: 44px 56px;
  }

  /* ========== タイトルスライド ========== */
  section.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(140deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    color: #fff;
  }
  section.title h1 {
    font-size: 44px;
    font-weight: 700;
    border: none;
    color: #fff;
    margin-bottom: 12px;
    letter-spacing: 0.02em;
  }
  section.title p {
    font-size: 19px;
    color: #94d2e6;
    margin: 0;
  }

  /* ========== 章タイトルスライド ========== */
  section.chapter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(140deg, #1a1a2e 0%, #2c2c54 100%);
    color: #fff;
    padding: 56px 72px;
  }
  section.chapter h1 {
    font-size: 36px;
    font-weight: 700;
    border: none;
    color: #fff;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
  }
  section.chapter blockquote {
    border-left: 4px solid #94d2e6;
    background: rgba(148, 210, 230, 0.12);
    color: #cce8f0;
    font-size: 17px;
    padding: 12px 20px;
    margin: 0;
    border-radius: 0 8px 8px 0;
  }
  section.chapter blockquote p { margin: 0; }

  /* ========== 通常スライド ========== */
  h1 {
    font-size: 26px;
    font-weight: 700;
    color: var(--text);
    border-bottom: 3px solid var(--accent);
    padding-bottom: 8px;
    margin-bottom: 18px;
    letter-spacing: 0.01em;
  }
  h2 {
    font-size: 21px;
    font-weight: 700;
    color: var(--accent2);
    margin-top: 0;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--accent3);
    margin-top: 14px;
    margin-bottom: 6px;
  }

  ul, ol { padding-left: 22px; margin: 6px 0 10px; }
  li { margin-bottom: 5px; }

  strong { color: var(--text); font-weight: 700; }
  em     { color: var(--muted); font-style: normal; }

  /* ========== コード ========== */
  code {
    background: #eef0f8;
    border-radius: 4px;
    padding: 2px 7px;
    font-size: 86%;
    color: #c0246e;
  }
  pre {
    font-size: 13.5px;
    background: #1e2235;
    color: #cdd6f4;
    border-radius: 10px;
    padding: 16px 20px;
    margin: 10px 0 14px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  }
  pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    font-size: inherit;
  }

  /* ========== Blockquote（Key Takeaway / ポイント） ========== */
  blockquote {
    border-left: 4px solid var(--accent);
    background: rgba(67, 97, 238, 0.07);
    border-radius: 0 8px 8px 0;
    padding: 10px 18px;
    margin: 12px 0;
    font-size: 15.5px;
    color: #2b2d42;
  }
  blockquote p { margin: 0; }

  /* ========== テーブル ========== */
  table {
    font-size: 15px;
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0 14px;
  }
  th {
    background: var(--accent);
    color: #fff;
    font-weight: 700;
    padding: 8px 12px;
  }
  td {
    padding: 7px 12px;
    border-bottom: 1px solid #dee2ef;
  }
  tr:nth-child(even) td { background: #eef1fb; }

  /* ========== ページ番号 ========== */
  section::after {
    font-size: 13px;
    color: var(--muted);
  }
---

<!-- _class: title -->

# Next.js 完全攻略ハンズオン

App Routerの基礎概念からキャッシュ機構まで、手を動かしながら学ぶ

---

<!-- _class: chapter -->

# 1. なぜ Next.js を学ぶのか？

> Webフロントエンドの歴史と React の限界から紐解き、Next.js が生まれた必然性を理解する

---

## 1-1. Web開発の黎明期と「命令的UI」の辛さ

> JavaScriptが導入された背景と、DOM操作による「命令的UI」が抱えていた課題を理解する

**当時の開発手順：**

1. `document.getElementById` でHTML要素を探す
2. `addEventListener` でクリックイベントを付与する
3. イベント発火 → 変数を書き換え → 別の要素を探して中身を更新

**これが「命令的UI」— 手順を1つずつ指示する書き方**

アプリが複雑になると…
- 最終的にどんなHTMLになるのか **直感的にわからない**
- コードを見ただけでは画面のどこが変わるか **一目で判別できない**
- 保守性が急激に低下する

---

## 1-2. React がもたらした「宣言的UI」の革命

> Reactがどのようにして「命令的UI」の複雑さを解決したのかを学ぶ

**命令的UI vs 宣言的UI：**

| | 命令的UI（jQuery時代） | 宣言的UI（React） |
|---|---|---|
| **書き方** | 手順を1つずつ指示 | 「こう表示されるべき」を宣言 |
| **状態変化** | 手動で要素を探して更新 | 状態が変われば自動で再描画 |
| **可読性** | 複雑になると追跡困難 | JSXで完成形が一目でわかる |

**Reactの核心：JSX**

```tsx
// 状態が変われば、画面が自動で変わる
const [count, setCount] = useState(0);
return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
```

> 「手順」を書くのではなく「完成形」を書く。この発想の転換がフロントエンドを変えた

---

## 1-3. React 単体（SPA）が抱える3つの課題

> SPAのアーキテクチャが構造上抱えていたユーザー体験とビジネス上の弱点を理解する

**SPAの仕組み：サーバーは「空っぽのHTML」を返す**

```
ブラウザ                    サーバー
  │── GET / ───────────────→ │
  │ ←── <div id="root"></div> │  ← 中身がない
  │     + 巨大なJS bundle ── │
  │                           │
  │  JSをダウンロード・実行して初めて画面が構築される
```

**生まれる3つの問題：**

| 問題 | 内容 |
|---|---|
| **初期表示が遅い** | JS実行完了まで真っ白な画面 |
| **端末スペック依存** | 低スペック・低速回線でさらに遅延 |
| **SEOに弱い** | クローラーには空のHTMLしか見えない |

---

## 1-4. Next.js の誕生：SSRによる根本解決

> SPAの「初期表示の遅さ」「SEOの弱さ」をNext.jsがどう克服したかを学ぶ

**Next.jsの革命：ブラウザの仕事をサーバーが肩代わりする**

```
ブラウザ                    Next.js サーバー
  │── GET / ───────────────→ │
  │                           │  Reactを実行してHTMLを構築
  │ ←── 完全なHTML ────────── │  ← データが全部入っている
  │
  │  受け取った瞬間に画面が表示される
```

**解決した課題：**

| 課題 | Next.jsによる解決 |
|---|---|
| **初期表示が遅い** | 完成済みHTMLを受け取るため瞬時に表示 |
| **端末スペック依存** | サーバーがHTMLを構築 → 低スペックでも高速 |
| **SEOに弱い** | クローラーに完全なHTMLが返る → 正確に評価 |

---

## 1-5. ハイドレーション：静的HTMLに命を吹き込む

> 静的なHTMLをユーザーが操作可能なReactアプリへ変化させる仕組みを理解する

**ハイドレーションの3ステップ：**

```
① サーバーから完成済みHTMLが届く → 画面が即座に表示される
                                    ※ この時点でボタンはまだ押せない

② 裏側でJavaScriptをダウンロード

③ JSがHTMLと合体 → onClick 等が紐付けられ操作可能になる
```

**なぜ「ハイドレーション（水和）」と呼ぶのか？**

> 乾いた静的HTMLに、JavaScriptという「水分（命）」を行き渡らせて操作可能にするプロセス

これにより Next.js は **「爆速の初期表示」** と **「Reactの滑らかな操作性」** を両立している

---

## 1-6. ビルドとバンドル：本番環境への最適化

> 本番公開前に必須となる「ビルド」「バンドル」という最適化処理の概念を学ぶ

**なぜビルドが必要か：**

JSX や TypeScript はブラウザが直接実行できない → **変換が必要**

| 処理 | 内容 |
|---|---|
| **ビルド** (`npm run build`) | モダンなコードをあらゆるブラウザが理解できる形に変換・最適化 |
| **バンドル** | 無数のJSファイルをブラウザが効率よく読める少数のファイルにまとめる |

**Next.jsが自動でやってくれること：**

- Turbopack / Webpack による高速バンドル
- Tree-shaking（不要コードの除去）
- コード分割（必要なJSだけを送る）
- 画像・フォントの最適化

> 開発者はビルド設定を書かずに、ビジネスロジックの実装に集中できる

---

## 【第1章まとめ】 なぜ Next.js を学ぶのか？

| フェーズ | 技術 | 課題 |
|---|---|---|
| Web黎明期 | 命令的UI (jQuery) | 複雑化すると保守困難 |
| React登場 | 宣言的UI (SPA) | 初期表示遅延・SEO弱 |
| **Next.js** | **SSR + Hydration** | **すべての課題を根本解決** |

**Next.jsが同時に実現すること：**

- **Reactの書きやすさ** — 宣言的UIはそのまま
- **最高のパフォーマンス** — サーバーレンダリングで爆速初期表示
- **確実なSEO** — 完全なHTMLをクローラーに返す

> 現代のWebフロントエンドにおいて Next.js はもはや避けては通れないスタンダード

---

<!-- _class: chapter -->

# 2. 環境構築と App Router の基礎
<p>〜 モダンなフロントエンド環境の構築と直感的なルーティング 〜</p>

---

## 2-1. 最新のフロントエンド環境を「一瞬」で構築する
**【何を学べるか？】**
`create-next-app` コマンドが裏側で行っていることと、現代のWeb開発において標準装備すべき必須ツール（TypeScriptやTailwind CSSなど）の役割を深く理解します。

**【詳細解説：ツールの選定コストをゼロにする魔法のコマンド】**
React単体で開発を始めようとすると、「コードの変換（Babel）」「モジュールの結合（Webpack）」「ルーティング（React Router）」など、無数のライブラリを自分で選定し、複雑な設定ファイルを書き上げる必要がありました。これは初学者にとって最初の高く険しい壁でした。

Next.jsでは、Node.js環境で **`npx create-next-app`** というコマンドを1行実行するだけで、Vercel社（Next.jsの開発元）がベストプラクティスと定める最強のツール群が、最適な設定で自動的にセットアップされます。

**＜セットアップで導入される主な技術スタックとその理由＞**
*   **TypeScript:** JavaScriptに「データ型のルール」を追加する言語です。開発中にエディタ上でエラーに気づけるため、本番環境での致命的なバグを未然に防ぎ、チーム開発の保守性を劇的に高めます。
*   **ESLint:** 「使っていない変数がある」「非推奨の書き方をしている」といったコードの不吉な匂い（コードスメル）を自動検知する静的解析ツールです。
*   **Tailwind CSS:** クラス名をHTMLに直接書き込むだけでスタイリングが完了する、大人気のCSSフレームワークです。コンポーネント指向のNext.jsと極めて相性が良く、CSSファイルの肥大化を防ぎます。
*   **`src/` ディレクトリの採用:** アプリのソースコード（`src`）と、設定ファイル群（`next.config.ts`など）の置き場所を明確に分離することで、プロジェクト全体の見通しを良くします。

---

## 2-2. 開発体験の革命：「Turbopack」による超高速ビルド
**【何を学べるか？】**
Next.jsの開発サーバー起動オプションに組み込まれている「Turbopack」が、日々の開発業務のストレスをどう排除してくれるのかを学びます。

**【詳細解説：待たされない開発体験（HMRの極致）】**
開発中、エンジニアは「コードを書き換えて保存し、ブラウザで動作を確認する」というサイクルを1日に何百回も繰り返します。アプリの規模が大きくなると、コードを保存してからブラウザに反映されるまでに数秒〜十数秒待たされるようになり、これがエンジニアの集中力を削ぐ大きな原因となっていました。

Next.js（App Router）では、開発サーバー起動時（`npm run dev`）に **Turbopack（ターボパック）** という次世代のバンドラーを使用することが推奨されています。
Turbopackは、処理速度に定評のあるプログラミング言語「Rust」でゼロから書き直されたツールです。その最大の特徴は、**「インクリメンタル・コンピューティング」**と呼ばれる設計にあります。

コードに変更があった際、プロジェクト全体を再ビルドするのではなく、「変更された部分」と「それに依存する部分」だけを瞬時に計算して差分ビルドを行います。これにより、どれだけ巨大なアプリケーションになっても、コードを保存した瞬間にミリ秒単位でブラウザが更新されるようになり、開発者は思考を止めることなくコーディングに没頭できます。

---

## 2-3. App Router：ファイルシステムベース・ルーティング
**【何を学べるか？】**
旧来のルーティング設定の煩わしさを解決した、Next.jsの最大の発明とも言える「フォルダ名＝URL」となる直感的なルーティング規約を学びます。

**【詳細解説：設定ファイル地獄からの解放】**
従来のReact開発（React Routerなど）では、ページを表示させるために必ず「ルーティング用の設定ファイル」を書く必要がありました。
「`/about` にアクセスが来たら `AboutComponent` を表示する」「`/users/:id` なら `UserDetailComponent` を表示する」といったルールを中央集権的に管理していたため、ページが増えるたびに設定ファイルが肥大化し、開発者が「このURLのコードは一体どのファイルにあるのか？」と迷子になりがちでした。

Next.jsのApp Routerは、この問題を**「ファイルシステムベース・ルーティング」**という画期的な手法で解決しました。
*   プロジェクト内の **`src/app`** ディレクトリが、Webサイトのルート（ `/` ）として機能します。
*   このディレクトリの中にフォルダを作ると、そのフォルダの名前が「そのままURLのパス」になります。
*   そして、フォルダの中に **`page.tsx`** という特別な規約ファイルを配置した時だけ、そのURLが「公開（ルーティング可能）」になります。

開発者は、エディタ上のフォルダ構造を見るだけで、Webサイト全体のURLツリー（サイトマップ）を完璧に把握できるようになりました。

---

## 2-4. ネストルーティングの実践とパスエイリアス

階層の深いURL（ネストルーティング）を実際に構築する方法と、**パスエイリアス（`@/`）** の仕組みを学びます。

フォルダを切って `page.tsx` を置くだけでURLが開通します。

```text
src/
 └── app/
      └── practice/
           └── dynamic-rendering/
                └── page.tsx
```

```tsx
// src/app/practice/dynamic-rendering/page.tsx
export default function DynamicRenderingPage() {
  return <h1>ダイナミック レンダリング ページ</h1>;
}
```

---

## 2-4. パスエイリアス（`@/`）

階層が深くなると相対パスが煩雑になります。

```tsx
// ❌ 相対パスの地獄
import Button from "../../../components/Button"

// ✅ パスエイリアス（@ = src/）
import Button from "@/components/Button"
```

> `@/` を使えば、どれだけ階層が深くてもクリーンで壊れにくい絶対パス指定ができます。

---

## 第2章まとめ

**直感的な環境がもたらす開発速度の向上**

- **ゼロコンフィグの力**: `create-next-app` により、TypeScript・Tailwind CSS・Turbopackが「設定不要」で手に入る
- **ファイルシステムベース・ルーティング**: 「フォルダを作って `page.tsx` を置く」ただ1つのルールで、どんな複雑なURL階層も構築できる
- **結論**: Next.jsはエンジニアから本質的でない面倒な作業を取り上げ、**「ユーザーにとって価値のある機能の開発」に100%の時間を注げるようにした**
---
<!-- _class: chapter -->

# 3. Server Component vs Client Component
<p>〜 サーバーで動く部品とブラウザで動く部品の境界線を完全理解する 〜</p>

---

## 3-1. React Server Component (RSC) によるパラダイムシフト

**【詳細解説：フロントエンドの常識を覆すレンダリング技術】**
React 18で追加されたRSC（React Server Component）は、その名の通りサーバーでコンポーネントをレンダリングする技術です[1]。
これまでのReact開発では、記述したすべてのコンポーネントが巨大なJavaScriptの束（バンドル）としてブラウザにダウンロードされ、ブラウザのCPUリソースを消費してHTMLを構築していました。この方式では、初期表示の遅延や低スペック端末でのパフォーマンス低下が避けられませんでした[2]。

しかし、Next.jsのApp Router環境においては、従来のクライアントでのレンダリングも使うことができますが、作成したコンポーネントはデフォルトで「サーバーコンポーネント」となります[1, 3]。
サーバー側で完全にHTMLとしてレンダリングされるため、コンポーネントのビジネスロジック（JavaScriptコード）がブラウザに一切送信されません。これによりバンドルサイズが劇的に削減され、圧倒的な初期表示速度と強固なセキュリティ（機密情報の完全な秘匿）が同時に実現されます[3]。

---

## 3-2. 徹底比較：サーバーとクライアントの「使える武器」

実行される場所が明確に異なるため、2つのコンポーネントは扱える関数やパラメーターに明確な境界線があります[1]。

| 比較項目 | Server Component (SC) | Client Component (CC) |
|---|---|---|
| **宣言方法** | デフォルト（ファイルの先頭に何も書かない）[3] | ファイルの先頭に1行空けて `"use client"` と明記する[4] |
| **実行場所** | **サーバーのみ**[1] | サーバー (事前生成) + ブラウザ[1, 4] |
| **得意な処理** | データベース操作、バックエンド通信、機密情報の秘匿 | ユーザー操作に応じたインタラクティブなUI、状態管理 |
| **使える機能** | DB直接アクセス(Prisma等)、`cookies()`, `headers()`, `searchParams` などのダイナミックAPI[3] | `useState`, `onClick`, `onChange`, `useEffect` などのReactフックスやブラウザAPI[3, 4] |
| **使えない機能**| フック（`useState`等）、イベント（`onClick`等）[3] | サーバー専用API（`cookies()`等）、直接のDBアクセス、非同期コンポーネント化(`async`)[3-5] |
| **JSバンドル** | **ブラウザに送信されない（極めて軽量・セキュア）** | ブラウザにダウンロードされ、ハイドレーションに利用される |

---

## 3-3. Server Component のコード例と深掘り

サーバーコンポーネントはApp Routerのデフォルトであり、特別な宣言は不要です[3]。最大の強みは、**コンポーネント自体に `async` をつけて非同期関数にできる**点です[3]。

```tsx
// 💡 Server Component — デフォルト。コンポーネントの前に async をつけることができる[3]。
import { cookies } from "next/headers"; // Next.js専用のダイナミックAPI[3]
import { db } from "@/lib/db"; 

export default async function Dashboard() {
  // ① サーバー上にあるクッキーを直接、かつ同期的に読み取る[3, 6]
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  
  // ② 外部APIを作らなくても、コンポーネント内で直接DB(Prisma等)を叩ける[3]
  const data = await db.query("SELECT * FROM items WHERE user_id = ?", [token]);

  // ③ 取得したデータをそのままHTMLとして構築して返す
  return (
    <div>
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
}

> `useEffect` + `fetch` が不要になりコードが極めてシンプルに。接続情報はブラウザに送信されないため高いセキュリティが担保されます。

---

## 3-4. Client Component のコード例

ユーザー操作に反応するインタラクティブなUIが必要な場合は、ファイル先頭に `"use client"` を記述します。

```tsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

> **誤解注意**: Client Component は「ブラウザのみ」ではなく、まずサーバーで事前レンダリングされ、その後ブラウザでハイドレーションされます。

---

## 3-5. 究極の判断基準

```
ユーザー操作（onClick, onChange）や状態管理（useState, useEffect）が必要？
  │
  ├─ Yes → "use client" を宣言 → Client Component
  │
  └─ No  → そのまま（デフォルト） → Server Component ★基本はこちら
```

> 可能な限り Server Component にし、インタラクティブな末端部品のみ Client Component に切り出すのがベストプラクティス

---

## 3-6. 陥りやすい罠：Client Boundary

CC（Client Component）内でインポートしたコンポーネントは**自動的に CC になってしまう**。

```tsx
// ❌ これはエラー
"use client";
import ServerDataFetch from "./ServerDataFetch"; // SC を直接インポート

export default function ClientBoundary() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>開く</button>
      {isOpen && <ServerDataFetch />} {/* 💥 SC が強制的に CC 扱いになりクラッシュ */}
    </div>
  );
}
```

---

## 3-7. 解決策：コンポジションパターン

直接インポートせず、**`children` として外から渡す**設計に変更する。

```tsx
// ✅ ClientBoundary.tsx
"use client";
import { useState } from "react";

export default function ClientBoundary({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>開く</button>
      {isOpen && children}
    </div>
  );
}
```

---

## 3-8. コンポジションパターン（呼び出し側）

親の Server Component 側で SC を呼び出し、CC の `children` として渡す。

```tsx
// ✅ page.tsx (Server Component)
import ClientBoundary from "./ClientBoundary";
import ServerDataFetch from "./ServerDataFetch";

export default function Page() {
  return (
    <ClientBoundary>
      <ServerDataFetch /> {/* SC を children として外から注入 */}
    </ClientBoundary>
  );
}
```

> ビルド時に SC はすでに安全な静的HTMLとして展開済みのため、CC がブラウザ実行時にエラーを起こさない

---

## 第3章まとめ

**パフォーマンスと安全性を両立する設計**

- **RSCによるパラダイムシフト**: デフォルトがサーバー実行となり、ブラウザへ送るJSの量が極限まで削減される
- **明確な役割分担**: 基本は Server Component、`onClick` 等が必要な末端のみ `"use client"` で Client Component にする
- **コンポジションパターン**: Client Boundary エラーは `children` で外から渡す設計で解決する
- **結論**: Next.jsは**「最高のパフォーマンス」と「高度なインタラクティブ性」を1つのアプリで同時に実現**できるようにした

---

<!-- _class: chapter -->

# 4. レンダリング戦略と RSC Payload
<p>〜 静的と動的の自動切り替えと、圧倒的な描画効率の裏側 〜</p>

---

## 4-1. レンダリング戦略のパラダイムシフト
**【詳細解説：究極の速度とリアルタイム性の両立】**
ウェブアプリケーションのパフォーマンス（表示速度）を決定づける最大の要因は、「いつ、どこでHTMLを生成するのか」です。
旧来の Next.js（Pages Router）では、開発者がファイル単位で `getServerSideProps`（都度生成）や `getStaticProps`（事前生成）といった特別な関数を使い分け、レンダリング手法を手動で指定していました。しかし、これはコードを複雑にし、初学者の高い壁となっていました。

最新の **App Router** では、この概念が極めてシンプルに整理され、以下の2つの戦略に統合されました。

1.  **Static Rendering（静的レンダリング・デフォルト）**
    ブログ記事やコーポレートサイトなど、「誰が見ても・いつ見ても同じ内容のページ」に適用されます。本番環境にデプロイする前（`npm run build` 時）に、サーバー側でデータベースからデータを引き出し、**あらかじめ完成されたHTMLを作って保存**しておきます。ユーザーからのアクセスが来た際は、その「保存済みのHTML」を返すだけなので、CDN（コンテンツ配信ネットワーク）にキャッシュさせることもでき、物理的な限界に近い「究極の表示速度」を叩き出します。
2.  **Dynamic Rendering（動的レンダリング）**
    マイページやショッピングカートなど、「アクセスするユーザーや時間帯によって内容が変わるページ」に適用されます。ビルド時にはHTMLを作らず、**「ユーザーからのリクエストが来たその瞬間」**に、サーバー側で最新のデータを使ってHTMLを構築し、返却します。

---

## 4-2. 徹底比較：Static vs Dynamic レンダリング
**【詳細解説：それぞれの強みとユースケース】**

| 比較項目 | Static Rendering (静的) | Dynamic Rendering (動的) |
|---|---|---|
| **HTML生成タイミング** | **ビルド時**（事前生成して保存） | **リクエスト時**（アクセスがある度に都度生成） |
| **切り替わる条件** | デフォルト（何も指定しない場合） | `cookies()`, `headers()` の使用や `no-store` の指定 |
| **適するページ** | ブログ、LP、ヘルプドキュメント、企業概要 | ユーザーダッシュボード、カート、検索結果ページ |
| **パフォーマンス** | **最速**（CDNでキャッシュ可能、サーバー負荷最小） | リクエストごとに処理が走るためサーバー負荷あり |
| **データの鮮度** | ビルド時点のデータ（再構築するまで変わらない） | **常に最新のデータ** |

> 💡 **Next.jsの基本哲学：**
> Next.jsはパフォーマンスを最大化するため、「可能な限りすべてのページを Static Rendering で事前生成する」ことを基本戦略としています。特別な理由がない限り、ページは極限まで速く配信される仕組みになっています。

---

## 4-3. 魔法のような「自動判定」メカニズム
**【詳細解説：設定ファイル不要でフレームワークが空気を読む】**

App Routerの最も革新的なポイントは、開発者が「このページは静的、このページは動的」といちいち設定ファイルに書く必要がないことです。Next.jsは、**「コードの記述内容」を見て自動的に戦略を判定し、切り替えます**。

具体的には、サーバーコンポーネント内で以下の「ダイナミックAPI」を使用するか、フェッチのキャッシュを無効化した瞬間に、Next.jsは「あ、このページはユーザーごとのデータが必要なんだな」と賢く判断し、自動的に **Dynamic Rendering** へと切り替えます。

*   **ダイナミックAPIの使用:**
    `cookies()`（ログイン情報など）や `headers()`（ユーザーのIPやブラウザ情報）、URLのクエリパラメータ（`searchParams`）など、「実際にリクエストが来ないと中身が確定しない情報」を読み取ろうとした場合。
*   **キャッシュの無効化:**
    `fetch` 関数によるデータ取得時に、 `{ cache: "no-store" }` というオプションを明示的に指定して、「常に最新のデータを取ってきてね」と指示した場合。

---

## 4-4. 自動でDynamicに切り替わるコード例
**【詳細解説：たった1行がレンダリング戦略を決定する】**

以下のコードを見てください。これは一見普通のサーバーコンポーネントですが、`cookies()` を呼び出しているため、Next.jsの賢いコンパイラがビルド時にこれを検知します。

```tsx
// 💡 Dynamic Rendering に自動で切り替わる例
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  // ① ユーザーのセッションクッキーを取得しようとしている
  // ＝「アクセスしたユーザーごとに内容が変わる」とNext.jsが自動判定する！
  // ＝ このページ全体が自動的に Dynamic Rendering に切り替わる
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("token")?.value; 

  // ② セッションに基づいてDBから最新のユーザー固有データを取得
  const userData = await db.getUserData(sessionToken);

  return <div>ようこそ、{userData.name}さん</div>;
}
```

> `npm run build` を実行するとターミナルに全ページ一覧が表示され、`○` (Static) か `ƒ` (Dynamic) かが明確に出力されます。

---

## 4-5. RSC Payload とは何か？

HTMLと一緒に、**RSC Payload** と呼ばれるNext.js特有のデータ構造が裏側で送信されています。

`.rsc` 形式の軽量なシリアライズデータで、以下が詰め込まれています：

- **DOMのツリー情報**: SC が生成したHTMLのツリー構造
- **CCの参照**: ページのどこにCCが配置され、必要なJSファイルはどれか
- **Propsのデータ**: サーバーからCCへ渡されたデータ（JSON形式）

---

## 4-6. RSC Payload の役割とハイドレーション

```
ブラウザ                    Next.js サーバー
  │── GET /dashboard ──────────→ │
  │ ←── ① 完全な HTML ───────── │
  │ ←── ② RSC Payload ────────── │ ツリー情報 + CC参照 + Propsデータ
  │
  │  ① HTMLで → 画面を即座に表示（爆速の初期描画）
  │  ② Payloadで → 必要な部分だけにハイドレーション
```

RSC Payload という「青写真」があることで、ブラウザは**どの部分にJSを適用すべきか一瞬で把握**でき、無駄のない超効率的なハイドレーションが可能になります。

---

## 4-7. 画面遷移（ソフトナビゲーション）の魔法

`<Link>` による画面遷移時、Next.jsは**HTMLを再取得しない**。代わりに**RSC Payloadだけ**をリクエストします。

| タイミング | 送受信するもの | 効果 |
|---|---|---|
| **初期アクセス** | 完全なHTML ＋ RSC Payload | 爆速表示 ＆ SEO完璧 |
| **画面遷移時** | RSC Payload のみ | 差分だけ更新、SPAのような滑らかな遷移 |

> サーバーはヘッダー・フッターなど共通部分の計算をスキップし、変化する中身のPayloadだけを返します

---

## 第4章まとめ

**自動化されたパフォーマンス最適化**

- **Static/Dynamic の自動判定**: `cookies()` などダイナミックAPIを使った瞬間に Dynamic へ自動切替。開発者は意識せず最高のパフォーマンスを得られる
- **RSC Payload がハイドレーションを最適化**: HTMLと一緒に送られるコンポーネントツリーの青写真がブラウザ側の計算負担を極限まで削減
- **爆速の画面遷移**: Payload だけ差分取得して更新することで、SPAの滑らかさと強力なSEOを同時に実現
- **結論**: 正しいコードを書けば、フレームワークが**勝手に最速の戦略を選択・実行してくれる**洗練されたアーキテクチャ

---

<!-- _class: chapter -->

# 5. データ取得と Streaming SSR
<p>〜 モダンなデータフェッチと、重い処理を待たせない究極のUI体験 〜</p>

---

## 5-1. React (SPA) におけるデータ取得の「辛さ」
**【詳細解説：useEffectとuseStateの地獄からの脱却】**
これまでのReact単体（SPA）のフロントエンド開発において、外部APIからデータを取得して画面に表示する処理は、非常に冗長で複雑なコードを書く必要がありました[1]。

具体的には、以下のような手順を必ず踏まなければなりませんでした。
1. `useState` を使って、取得したデータを格納する「空のステート」を作成する。
2. さらに、ローディング中かどうかを判定する `isLoading` ステートや、エラーを格納する `error` ステートを用意する。
3. `useEffect` フックを使用して、コンポーネントがマウント（描画）された直後に非同期処理（API通信）を発火させる[2]。
4. レスポンスが返ってきたらステートを更新し、コンポーネントを再レンダリングさせる。

このアプローチは、コードが肥大化するだけでなく、「ウォーターフォール（データの取得待ちが連鎖して遅くなる現象）」を引き起こしやすく、また初期表示のHTMLにはデータが含まれないためSEOにも非常に弱いという欠点がありました。

---

## 5-2. Server Component での圧倒的にシンプルなデータ取得
**【詳細解説：async/await で直接 fetch するだけの世界】**
Next.jsのApp Router（サーバーコンポーネント）では、この複雑なデータ取得の常識が完全に覆ります[3, 4]。

サーバーコンポーネントはサーバー側で実行されるため、コンポーネントの関数自体に **`async`** をつけることができます。これにより、コンポーネント内部で直接 **`await fetch()`** を呼び出し、取得したデータをそのままJSXに埋め込むことが可能になりました[3]。

```tsx
// 💡 Server Component では余計なライブラリやフックは一切不要
export default async function UsersPage() {
  // コンポーネント内で直接同期的（に見える形）にデータを待つ
  const res   = await fetch("https://api.example.com/users");
  const users = await res.json();

  // データが埋め込まれた完全なHTMLとしてブラウザに返される
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}

> コード量が激減し、サーバー側でのデータ取得により通信が高速に。ブラウザにはデータが揃った完全なHTMLが届くためSEOも最大化されます。

---

## 5-3. 拡張された fetch API とキャッシュ制御

Next.js は標準の `fetch` を拡張し、オプション1つでキャッシュ戦略を制御できます。

| fetch オプション | 動作 | レンダリング |
|---|---|---|
| `cache: 'force-cache'`（デフォルト） | ビルド時にキャッシュ、以降はキャッシュを返す | Static |
| `cache: 'no-store'` | 毎回最新データを取得 | Dynamic に自動切替 |
| `next: { revalidate: 60 }` | 60秒後の初アクセス時に裏でキャッシュ更新（ISR） | Static + 定期更新 |

> 複雑なインフラ構築が必要だった「データの鮮度管理」が、たった1行のオプション指定で完結します

---

## 5-4. サーバーレンダリング最大の弱点：「画面の硬直」

`async/await` は便利ですが、**ページ内のすべての `await` が完了するまでHTMLを1バイトも返せない**という弱点があります。

```
ページ内に…
  ├─ サイドバー（0.1秒で完成）
  └─ 重いグラフコンポーネント（DB集計に5秒かかる）

→ サーバーは5秒間待ち続ける
→ ユーザーは5秒間、画面が真っ白なまま待たされる
```

> SPAの「ローディングスピナー待ち」よりもストレスの溜まる最悪の事態

---

## 5-5. Streaming SSR：解決策は `<Suspense>` で囲むだけ

重いコンポーネントを `<Suspense>` でラップし、`fallback` にローディングUIを指定するだけです。

```tsx
import { Suspense } from "react";
import HeavyDataFetch from "./HeavyDataFetch";

export default function Page() {
  return (
    <div>
      <h1>ダッシュボード（すぐ表示される）</h1>

      {/* 処理が終わるまで fallback を表示し、画面をブロックしない */}
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyDataFetch />
      </Suspense>
    </div>
  );
}
```

---

## 5-6. Streaming SSR のタイムライン

```
[ 0ms ]   アクセス → サーバーでレンダリング開始
    ↓
[ 50ms ]  ヘッダー・サイドバーと fallback（Loading...）を先行送信
          ★ この瞬間、画面にUIが表示される → 離脱を防げる！
    ↓
[ 800ms ] HeavyDataFetch のデータ取得が完了
    ↓
[ 810ms ] 完成したHTMLチャンクを追撃送信
          ブラウザが Loading... を本命データにすり替える
```

> `<Suspense>` の境界ごとにHTMLが順次送信されるため、体感的な待ち時間が劇的に短縮されます

---

## 第5章まとめ

**データを制する者は UX を制す**

- **サーバー主導のデータ取得**: `useEffect` + `useState` を捨て、`async/await` で直接取得。コードの可読性・パフォーマンスが劇的に向上
- **1行で決まるキャッシュ戦略**: `force-cache` / `no-store` / `revalidate` を切り替えるだけで静的・動的・ISRを制御
- **Streaming SSR でブロック回避**: `<Suspense>` で重い処理を切り離し、準備できた部分から順次表示
- **結論**: 「サーバーコンポーネントで直接データ取得し、重い部分は `<Suspense>` でストリーミング」がApp Routerの絶対的なベストプラクティス

---

<!-- _class: chapter -->

# 6. 圧倒的な表示速度を支える4つのキャッシュ層

> Next.js の根幹をなす多層キャッシュアーキテクチャの完全理解

---

## 6-1. Next.js のキャッシュ思想

Next.js はデフォルトで**「可能な限りすべてをキャッシュする」**という思想で設計されています。

特別なインフラ不要で、フレームワークが**4つのキャッシュ機構**を自動運用します。

| # | キャッシュ層 | 保存場所 | 範囲 |
|---|---|---|---|
| 1 | **Request Memoization** | サーバーメモリ | 1リクエスト内 |
| 2 | **Data Cache** | サーバーファイル | リクエスト跨ぎ・永続 |
| 3 | **Full Route Cache** | サーバーファイル | ページ全体（HTML+Payload） |
| 4 | **Client Route Cache** | ブラウザメモリ | 画面遷移間 |

---

## 6-2. Request Memoization

同一リクエスト内で**同じURLへの `fetch` が複数回呼ばれても、通信は1回だけ**。

```tsx
async function ComponentA() {
  const res = await fetch('https://api.example.com/user/1'); // ① 実際の通信
  return <div>{(await res.json()).name}</div>;
}

async function ComponentB() {
  const res = await fetch('https://api.example.com/user/1'); // ② メモリから返す
  return <div>{(await res.json()).email}</div>;
}
```

> Props のバケツリレー（Prop Drilling）が不要に。データが必要な場所で直接 `fetch` を書ける設計が可能になります（※SC のみ有効）

---

## 6-3. Data Cache

`force-cache`（デフォルト）を使うと、**異なるユーザー・異なる時間帯を跨いで**データを永続キャッシュします。

```
初回アクセス:
  fetch → 外部API/DB からデータ取得 → .next/cache/ に保存

2回目以降:
  fetch → キャッシュから即返却（外部への通信ゼロ）
```

> ニュースサイトの「アクセスランキング」など、全ユーザー共通の重い集計データのDBクエリをほぼゼロに削減できます

---

## 6-4. Full Route Cache

Static Rendering のページは、ビルド時に構築された**HTML + RSC Payload をサーバーにファイル保存**します。

```
リクエスト到着
  ↓
Full Route Cache を確認
  ├─ HIT  → 保存済みHTMLをそのまま返す（サーバー処理ゼロ）
  └─ MISS → サーバーコンポーネントを実行してHTMLを構築
```

CDN に配置すれば世界中のエッジから瞬時に返せます。

> Dynamic Rendering（`cookies()` 等を使用）のページはスキップされます

---

## 6-5. Client Route Cache

ブラウザのメモリに RSC Payload をキャッシュし、**画面遷移を瞬時に**します。

- **戻る/進むボタン**: サーバーに再リクエストせず、メモリから即座に復元
- **`<Link>` のプリフェッチ**: リンクが画面に見えた瞬間、裏でリンク先の Payload を先読みして保存

> クリックした時点でデータはすでにブラウザにある → 待ち時間ゼロで遷移完了

---

## 6-6. 4層キャッシュ：リクエストの旅

```
① Client Route Cache（ブラウザ）
     HIT → 即表示 ✅
     ↓ MISS
② Full Route Cache（サーバー）
     HIT → 保存済みHTMLを返す ✅
     ↓ MISS（Dynamic ページ）
③ Request Memoization（同一リクエスト内）
     HIT → メモリの結果を返す ✅
     ↓ MISS（初回 fetch）
④ Data Cache（サーバーファイル）
     HIT → キャッシュファイルを返す ✅
     ↓ MISS
   外部API / DB に実際の問い合わせ
```

---

## 第6章まとめ

**キャッシュアーキテクチャの真髄**

- **Request Memoization**: Prop Drilling を廃止。コンポーネントが必要な場所で直接 `fetch` を書ける美しい設計へ
- **Data Cache + Full Route Cache**: DB・バックエンドへの過剰アクセスをブロック。限られたスペックで大量トラフィックを捌ける
- **Client Route Cache**: `<Link>` の自動プリフェッチとの連携で、ページ遷移のローディングを消し去る
- **結論**: 4層のキャッシュがブラウザからDBの手前まで完璧に連携することで、**最速のUXと最強のコストパフォーマンスを同時に実現**している

---

<!-- _class: chapter -->

# 7. ファイルシステム規約と高度なルーティング

> Next.js の魔法を支える「予約されたファイル名」の完全理解

---

## 7-1. 「規約は設定に勝る」という設計思想

特定の名前のファイルを置くだけで、フレームワークが裏側で自動的に複雑な設定を組み上げます。

| ファイル名 | 役割 |
|---|---|
| `page.tsx` | そのURLのメインUI |
| `layout.tsx` | 複数ページ共通のレイアウト |
| `loading.tsx` | ローディング中のUI（Suspense フォールバック） |
| `error.tsx` | エラー発生時のUI（Error Boundary） |
| `not-found.tsx` | 404ページ |
| `route.ts` | バックエンドのAPIエンドポイント |

---

## 7-2. `layout.tsx` の真価：ネストと状態の保持
**【詳細解説：SPAの滑らかさを生み出す根幹】**
`layout.tsx` は、そのディレクトリ以下の全ての `page.tsx` に適用される共通レイアウトを定義します。例えば `src/app/layout.tsx` にヘッダーを書けば、サイト全域にヘッダーが適用されます。

```tsx
// 💡 layout.tsx の基本形（children に子ページが流し込まれる）
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header /> {/* 全画面共通のヘッダー */}
        <main>{children}</main> {/* ここに各 page.tsx が入る */}
      </body>
    </html>
  );
}

> `layout.tsx` の最大の特性は**「画面遷移時に再レンダリングされない」**こと。`children` の部分だけ書き換わり、ヘッダーやBGMの状態はそのまま保持されます。

---

## 7-3. `loading.tsx` は自動化された `<Suspense>`

`loading.tsx` を置くだけで、Next.js が裏側で自動的に `<Suspense>` を組み上げます。

```tsx
// /app/users/loading.tsx を置くだけ
export default function Loading() {
  return <div>読み込み中...</div>;
}
```

```tsx
// Next.js が裏で自動生成する構造
<Layout>
  <Suspense fallback={<Loading />}>
    <Page />
  </Suspense>
</Layout>
```

> `<Suspense>` を手書きしなくても、ファイルを置くだけでストリーミングSSRが有効になります

---

## 7-4. `error.tsx` による部分的クラッシュ防止

`error.tsx` を置くと `<ErrorBoundary>` が自動適用されます。

```tsx
"use client"; // error.tsx は必ず Client Component
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>再読み込み</button>
    </div>
  );
}
```

> エラーが起きた部分だけ差し替え。親の `layout.tsx`（ヘッダー等）は無傷のまま表示され、`reset()` でその箇所だけ再実行できます

---

## 7-5. 特殊ルーティング①：Dynamic Segments `[id]`

フォルダ名を `[ ]` で囲むと、URLの一部を変数として受け取れます。

```tsx
// src/app/users/[id]/page.tsx
export default function UserDetailPage({ params }: { params: { id: string } }) {
  return <h1>ユーザーID: {params.id}</h1>; // /users/123 → params.id = "123"
}
```

> デフォルトは Dynamic Rendering。`generateStaticParams` を使えばビルド時に全パターンを Static Rendering（事前生成）できます

---

## 7-6. 特殊ルーティング②：Route Groups `(folder)`

`( )` で囲んだフォルダはURLに**反映されない**。ページをグループ化し、異なるレイアウトを適用できます。

```text
src/app/
 ├── (marketing)/
 │    ├── layout.tsx       ← マーケティング用レイアウト
 │    └── about/page.tsx   → URL: /about
 │
 └── (app)/
      ├── layout.tsx       ← アプリ用レイアウト（サイドバー付き）
      └── dashboard/page.tsx → URL: /dashboard
```

---

## 7-7. 特殊ルーティング③：Parallel Routes `@folder`

`@` をつけたフォルダが自動的に `layout.tsx` の props として渡り、**1画面に複数の独立ペイン**を配置できます。

```tsx
// src/app/dashboard/layout.tsx
export default function DashboardLayout({ children, analytics, team }) {
  return (
    <div>
      <main>{children}</main>
      <aside>{analytics}</aside> {/* @analytics/page.tsx */}
      <aside>{team}</aside>      {/* @team/page.tsx */}
    </div>
  );
}
```

> 各ペインに独自の `loading.tsx` / `error.tsx` を置けるため、1つが失敗しても他に影響しません

---

## 7-8. 特殊ルーティング④：Intercepting Routes `(..)`

アプリ内遷移時のみモーダルで表示し、直接アクセス・リロード時はフルページで表示する高度なUIパターン。

```
タイムラインから写真クリック → 背景を残したまま モーダルで表示
URL を直接入力 / リロード    → 全画面の写真詳細ページとして表示
```

Parallel Routes（`@modal`）と組み合わせることで、状態管理ライブラリなしで**URLと完全同期したモーダルUI**を構築できます。

---

## 7-9. `route.ts` と `middleware.ts`

**`route.ts`（Route Handlers）**
`page.tsx` の代わりにJSONを返すAPIエンドポイント。`src/app/api/users/route.ts` → `/api/users` になります。

**`middleware.ts`**
全リクエストが `page.tsx` / `route.ts` に到達する「前」に実行される関所。

- 未ログインユーザーをログイン画面へリダイレクト
- アクセスログの取得
- ABテストの出し分け

> 別サーバー不要。Next.js 1つでフロントからAPIまで完結します

---

## 第7章まとめ

**規約がもたらす設計の統一と拡張性**

- **予約ファイルによる自動化**: `loading.tsx` / `error.tsx` を置くだけで `<Suspense>` / `<ErrorBoundary>` が自動適用。設定ゼロで堅牢なアーキテクチャが手に入る
- **高度なUIパターンの標準化**: Route Groups・Parallel Routes・Intercepting Routes により、ダッシュボードやURL同期モーダルがディレクトリ構成だけで表現できる
- **真のフルスタック**: `route.ts` でAPI構築、`middleware.ts` でリクエスト制御。1プロジェクトで全てが完結
- **結論**: App Router の規約は「URLの作り方」ではなく、**世界のベストプラクティスをフォルダ名という直感的なルールに落とし込んだもの**
