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
    background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #93c5fd 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    color: #fff;
    margin-bottom: 28px;
    letter-spacing: 0.02em;
    line-height: 1.25;
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
  h1 {
    font-size: 22px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--violet) 0%, var(--indigo) 50%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    font-size: 13.5px;
    border-collapse: separate;
    border-spacing: 0;
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

  /* ========== まとめスライド ========== */
  section.summary {
    background:
      radial-gradient(ellipse 60% 80% at 95% 50%, rgba(52,211,153,0.15) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 5%  10%, rgba(99,102,241,0.12) 0%, transparent 55%),
      var(--bg);
  }
  section.summary h1 {
    background: linear-gradient(135deg, var(--emerald) 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

# Next.js 完全攻略ハンズオン

App Routerの基礎概念からキャッシュ機構まで、手を動かしながら学ぶ

---

<!-- _class: chapter -->

# 1. なぜ Next.js を学ぶのか？

> Webフロントエンドの歴史と React の限界から紐解き、Next.js が生まれた必然性を理解する

---

## 1-1. Web開発の黎明期と「命令的UI」の辛さ

> JavaScriptが導入された背景と、DOM操作による「命令的UI」の課題を理解する

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
  │
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

**なぜビルドが必要か：** JSX や TypeScript はブラウザが直接実行できない → **変換が必要**

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

<!-- _class: summary -->

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

> モダンなフロントエンド環境の構築と直感的なルーティング

---

## 2-1. 最新のフロントエンド環境を「一瞬」で構築する

`npx create-next-app` を1行実行するだけで、Vercelが定めるベストプラクティスのツール群が最適な設定で自動セットアップされます。

**セットアップで導入される技術スタック：**

| ツール | 役割 | 効果 |
|---|---|---|
| **TypeScript** | 型チェック | 開発中にエラー検出 → 本番バグを激減 |
| **ESLint** | 静的解析 | コードスメルを自動検知 |
| **Tailwind CSS** | CSSフレームワーク | クラス名だけでスタイリング完了 |
| **`src/` ディレクトリ** | 構造分離 | ソースコードと設定ファイルを明確に整理 |

> ツール選定・設定の時間がゼロになり、最初の1行からビジネスロジックに集中できる

---

## 2-2. 開発体験の革命：「Turbopack」による超高速ビルド

エンジニアは1日に何百回も「コード保存 → ブラウザ確認」を繰り返します。アプリが大きくなると反映に数秒〜十数秒かかり、集中力が途切れる原因になっていました。

**Turbopack が解決する：**

- **Rust製** — 処理速度に定評のある言語でゼロから書き直された次世代バンドラー
- **インクリメンタル・コンピューティング** — 変更した箇所と依存先だけを差分ビルド
- どれだけ大規模なアプリでも **ミリ秒単位** でブラウザが更新される

```
従来 (Webpack):  保存 → プロジェクト全体を再ビルド → 数秒待つ
Turbopack:       保存 → 変更箇所だけ差分ビルド    → 即座に反映
```

> 思考を止めることなくコーディングに没頭できる開発体験（HMRの極致）

---

## 2-3. App Router：ファイルシステムベース・ルーティング

**従来（React Router等）の問題：**

- `"/about" → AboutComponent` のようなルール設定ファイルが必要
- ページが増えるたびに肥大化し、URLとファイルの対応が把握困難に

**App Router の解決策：フォルダ名 ＝ URLパス**

1. `src/app/` がサイトのルート `/` として機能する
2. フォルダを作ると、その名前がそのままURLのパスになる
3. フォルダ内に **`page.tsx`** を置いた時だけURLが公開される

```text
src/app/
  ├── page.tsx           →  /
  ├── about/
  │    └── page.tsx      →  /about
  └── users/
       └── [id]/
            └── page.tsx →  /users/123
```

> エディタのフォルダ構造を見るだけでサイト全体のURL構成が把握できる

---

## 2-4. ネストルーティングの実践

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

<!-- _class: summary -->

## 第2章まとめ

**直感的な環境がもたらす開発速度の向上**

- **ゼロコンフィグの力**: `create-next-app` により、TypeScript・Tailwind CSS・Turbopackが「設定不要」で手に入る
- **ファイルシステムベース・ルーティング**: 「フォルダを作って `page.tsx` を置く」ただ1つのルールで、どんな複雑なURL階層も構築できる
- **結論**: Next.jsはエンジニアから本質的でない面倒な作業を取り上げ、**「ユーザーにとって価値のある機能の開発」に100%の時間を注げるようにした**

---

<!-- _class: chapter -->

# 3. Server Component vs Client Component

> サーバーで動く部品とブラウザで動く部品の境界線を完全理解する

---

## 3-1. React Server Component (RSC) によるパラダイムシフト

React 18で追加されたRSCは、**コンポーネントをサーバーで実行する**技術です。

**App Router以前の課題：**

- すべてのコンポーネントが巨大なJSバンドルとしてブラウザに送信される
- ブラウザのCPUリソースを消費してHTMLを構築 → 初期表示遅延・低スペック端末で顕著

**App Routerでの革命：**

- コンポーネントは**デフォルトでサーバーコンポーネント**（何も書かなければサーバー実行）
- サーバー側でHTMLとして完全にレンダリングされる
- コンポーネントのJavaScriptコードが**ブラウザへ一切送信されない**

| 効果 | 詳細 |
|---|---|
| **バンドルサイズの激減** | JSをブラウザに送らないため転送量が大幅削減 |
| **高いセキュリティ** | DBの接続情報・APIキーがブラウザに漏れない |
| **爆速の初期表示** | サーバーで完成済みHTMLが届く |

---

## 3-2. 徹底比較：サーバーとクライアントの「使える武器」

| 比較項目 | Server Component (SC) | Client Component (CC) |
|---|---|---|
| **宣言方法** | デフォルト（何も書かない） | ファイル先頭に `"use client"` |
| **実行場所** | **サーバーのみ** | サーバー (事前生成) + ブラウザ |
| **得意な処理** | DB操作、バックエンド通信、機密情報 | インタラクティブなUI、状態管理 |
| **使える機能** | `cookies()`, `headers()`, DB直接アクセス | `useState`, `onClick`, `useEffect` |
| **使えない機能** | フック・イベントハンドラ | `cookies()` 等サーバー専用API |
| **JSバンドル** | **ブラウザに送信されない** | ブラウザにダウンロードされる |

---

## 3-3. Server Component のコード例

サーバーコンポーネントはApp Routerのデフォルト。最大の強みは **コンポーネント自体を `async` 関数にできる** 点です。

```tsx
// 💡 Server Component — デフォルト。async をつけて非同期処理が書ける
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export default async function Dashboard() {
  // ① サーバー上のクッキーを直接読み取る
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  // ② 外部APIを作らなくても、コンポーネント内で直接DBを叩ける
  const data = await db.query("SELECT * FROM items WHERE user_id = ?", [token]);

  return (
    <div>
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
}
```

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

<!-- _class: summary -->

## 第3章まとめ

**パフォーマンスと安全性を両立する設計**

- **RSCによるパラダイムシフト**: デフォルトがサーバー実行となり、ブラウザへ送るJSの量が極限まで削減される
- **明確な役割分担**: 基本は Server Component、`onClick` 等が必要な末端のみ `"use client"` で Client Component にする
- **コンポジションパターン**: Client Boundary エラーは `children` で外から渡す設計で解決する
- **結論**: Next.jsは**「最高のパフォーマンス」と「高度なインタラクティブ性」を1つのアプリで同時に実現**できるようにした

---

<!-- _class: chapter -->

# 4. レンダリング戦略と RSC Payload

> 静的と動的の自動切り替えと、圧倒的な描画効率の裏側

---

## 4-1. レンダリング戦略のパラダイムシフト

パフォーマンスを決定づける最大の要因は「**いつ・どこでHTMLを生成するか**」です。App Routerでは2つの戦略に統合・自動化されました。

**① Static Rendering（静的・デフォルト）**

- ビルド時（`npm run build`）にHTMLを事前生成してサーバーに保存
- CDNにキャッシュ可能 → **究極の表示速度**
- 対象：ブログ、LP、ヘルプドキュメント、企業概要

**② Dynamic Rendering（動的）**

- リクエストが来た瞬間に最新データでHTMLを構築して返す
- 対象：ユーザーダッシュボード、カート、検索結果

> Next.jsの基本哲学：可能な限りすべてのページを Static Rendering で事前生成し、最速配信を目指す

---

## 4-2. 徹底比較：Static vs Dynamic レンダリング

| 比較項目 | Static Rendering | Dynamic Rendering |
|---|---|---|
| **HTML生成タイミング** | **ビルド時**（事前生成） | **リクエスト時**（都度生成） |
| **切り替わる条件** | デフォルト | `cookies()` 等の使用 / `no-store` 指定 |
| **適するページ** | ブログ、LP、ヘルプ | ダッシュボード、カート、検索 |
| **パフォーマンス** | **最速**（CDNキャッシュ可） | リクエストごとに処理が走る |
| **データの鮮度** | ビルド時点のデータ | **常に最新** |

---

## 4-3. 魔法のような「自動判定」メカニズム

開発者が設定ファイルを書かなくても、**コードの記述内容を見て Next.js が自動で戦略を判定・切り替えます**。

**Dynamic Rendering に自動で切り替わるトリガー：**

| トリガー | 例 | 理由 |
|---|---|---|
| **ダイナミックAPIの使用** | `cookies()`, `headers()`, `searchParams` | リクエストが来ないと中身が確定しない |
| **キャッシュの無効化** | `fetch(..., { cache: 'no-store' })` | 「常に最新データを取得」と明示 |

これらを使った瞬間に Next.js は「このページはユーザーごとのデータが必要」と判断し、自動的に Dynamic Rendering へ切り替わります。

---

## 4-4. 自動でDynamicに切り替わるコード例

```tsx
// 💡 Dynamic Rendering に自動で切り替わる例
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  // ① cookies() を呼び出した瞬間、このページが Dynamic と自動判定される
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

<!-- _class: summary -->

## 第4章まとめ

**自動化されたパフォーマンス最適化**

- **Static/Dynamic の自動判定**: `cookies()` などダイナミックAPIを使った瞬間に Dynamic へ自動切替。開発者は意識せず最高のパフォーマンスを得られる
- **RSC Payload がハイドレーションを最適化**: HTMLと一緒に送られるコンポーネントツリーの青写真がブラウザ側の計算負担を極限まで削減
- **爆速の画面遷移**: Payload だけ差分取得して更新することで、SPAの滑らかさと強力なSEOを同時に実現
- **結論**: 正しいコードを書けば、フレームワークが**勝手に最速の戦略を選択・実行してくれる**洗練されたアーキテクチャ

---

<!-- _class: chapter -->

# 5. データ取得と Streaming SSR

> モダンなデータフェッチと、重い処理を待たせない究極のUI体験

---

## 5-1. React (SPA) におけるデータ取得の「辛さ」

**従来のSPAでは、データを表示するために毎回この儀式が必要でした：**

```tsx
// ❌ SPA（useEffect + useState）の典型的なパターン
const [users, setUsers]      = useState([]);
const [isLoading, setLoading] = useState(true);
const [error, setError]      = useState(null);

useEffect(() => {
  fetch('/api/users')
    .then(r => r.json())
    .then(data => { setUsers(data); setLoading(false); })
    .catch(e => setError(e));
}, []);
```

**このアプローチの問題点：**

- 状態変数が3つ必要（data / isLoading / error）
- 初期HTMLにデータがないため **SEOに致命的**
- データ取得が連鎖する「ウォーターフォール問題」が起きやすい

---

## 5-2. Server Component での圧倒的にシンプルなデータ取得

サーバーコンポーネントはサーバー側で実行されるため、**コンポーネント自体に `async` をつけて直接 `await fetch()`** が呼べます。

```tsx
// ✅ Server Component では余計なライブラリやフックは一切不要
export default async function UsersPage() {
  // コンポーネント内で直接データを待つ
  const res   = await fetch("https://api.example.com/users");
  const users = await res.json();

  // データが埋め込まれた完全なHTMLとしてブラウザに返される
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

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

<!-- _class: summary -->

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

<!-- _class: summary -->

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

`layout.tsx` は、そのディレクトリ以下の全ての `page.tsx` に適用される共通レイアウトを定義します。`src/app/layout.tsx` にヘッダーを書けば、サイト全域に適用されます。

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
```

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

<!-- _class: summary -->

## 第7章まとめ

**規約がもたらす設計の統一と拡張性**

- **予約ファイルによる自動化**: `loading.tsx` / `error.tsx` を置くだけで `<Suspense>` / `<ErrorBoundary>` が自動適用。設定ゼロで堅牢なアーキテクチャが手に入る
- **高度なUIパターンの標準化**: Route Groups・Parallel Routes・Intercepting Routes により、ダッシュボードやURL同期モーダルがディレクトリ構成だけで表現できる
- **真のフルスタック**: `route.ts` でAPI構築、`middleware.ts` でリクエスト制御。1プロジェクトで全てが完結
- **結論**: App Router の規約は「URLの作り方」ではなく、**世界のベストプラクティスをフォルダ名という直感的なルールに落とし込んだもの**
