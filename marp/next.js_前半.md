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
    background: linear-gradient(135deg, var(--pink), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    background: linear-gradient(135deg, var(--cyan) 0%, var(--violet) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

<!-- _class: agenda -->

# 本日のアジェンダ

1. **なぜ Next.js を学ぶのか？** — Web開発の歴史と React 単体の限界
2. **環境構築と App Router の基礎** — モダンな開発環境、Page Router との違い、レンダリング戦略の進化
3. **Server Component vs Client Component** — サーバー実行 / ブラウザ実行の境界線
4. **レンダリング戦略と RSC Payload** — 静的・動的の自動切り替えの裏側
5. **データ取得と Streaming SSR** — `async/await` と `<Suspense>` の合わせ技
6. **4層キャッシュアーキテクチャ** — 圧倒的な表示速度を支える仕組み
7. **ファイルシステム規約と高度なルーティング** — 規約が生む設計の統一

---

<!-- _class: chapter -->

# 1. なぜ Next.js を学ぶのか？

> Webフロントエンドの歴史と React の限界から紐解き、Next.js が生まれた必然性を理解する

---

<!-- _class: objectives -->

# この章で学ぶこと

- 「命令的UI」と「宣言的UI」の違いを理解する
- React 単体（**SPA**）が抱える3つの構造的課題を説明できる
- Next.js の **SSR**（Server Side Rendering）が課題をどう解決するかを学ぶ
- **ハイドレーション**の仕組みを理解する
- ビルドとバンドルの役割を知る

> 💡 用語の前提：**SPA** = Single Page Application（1ページのHTMLでJSが画面を切り替える）／ **SSR** = サーバー側でHTMLを組み立ててから返す方式

---

## 1-1. Web開発の黎明期と「命令的UI」の辛さ

> JavaScriptが導入された背景と、**DOM**（HTMLをJSから操作する仕組み）操作による「命令的UI」の課題を理解する

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

**Reactの核心：JSX**（JavaScript の中にHTMLっぽい構文を直接書ける拡張）

```tsx
const [count, setCount] = useState(0);
return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
```

> 「手順」を書くのではなく「完成形」を書く。この発想の転換がフロントエンドを変えた

---

## 1-3. JSXコードを1行ずつ読み解く

```tsx
// useState = Reactの「状態(state)」を管理する仕組み(フック)
//   count    : 現在の値 / setCount : 値を更新する関数 / 0 : 初期値
const [count, setCount] = useState(0);

return (
  <button
    // クリック時に count を「今の値 + 1」へ更新
    onClick={() => setCount(c => c + 1)}
  >
    Count: {count}  {/* { } で JS の値を埋め込める */}
  </button>
);
```

**クリック1回の流れ：** ① `onClick` 実行 → ② `setCount` で値更新 → ③ Reactが変化を検知 → ④ **自動で再描画**

> 🔑 `document.querySelector` で要素を探して書き換える必要はもうない

---

## 1-4. React 単体（SPA）が抱える3つの課題

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
| **SEOに弱い** | クローラー（検索エンジンの巡回プログラム）には空のHTMLしか見えない |

> 💡 **SEO** = Search Engine Optimization。検索エンジンに正しく評価され、検索結果で上位表示されるための最適化

---

## 1-5. Next.js の誕生：SSRによる根本解決

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

## 1-6. ハイドレーション：静的HTMLに命を吹き込む

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

## 1-7. ビルドとバンドル：本番環境への最適化

> 開発中のコードを、ブラウザで動く形にする「最後の準備」を理解する

**そもそも、なぜ変換が必要？**

私たちが書く JSX や TypeScript は、**ブラウザがそのままでは読めない言語**です。

```
あなたが書くコード               ブラウザが読める形
  Counter.tsx (TypeScript) ──→  counter.js (素のJS)
  <button>クリック</button>    ──→  React.createElement("button", ...)
```

| 処理 | 何をする？ |
|---|---|
| **ビルド** (`npm run build`) | TS / JSX を素のJSに変換 |
| **バンドル** | 何百個ものJSファイルを少数にまとめる |

> この「翻訳」と「整理整頓」を Next.js が自動で担ってくれる

---

## 1-8. Next.js が自動でやる最適化

> ビルド・バンドルに加え、Next.js は様々な最適化を裏で実行している

- **Tree-shaking** — 使っていないコードを自動で削除（= お弁当に入れない）
- **コード分割** — そのページで必要な分だけ送信（= 今食べる分だけ届ける）
- **画像・フォントの最適化** — サイズを自動で軽量化
- **Turbopack** による爆速処理（昔は Webpack の設定を長々と手書きしていた）

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

<!-- _class: objectives -->

# この章で学ぶこと

- `create-next-app` が裏側でやっていることを把握する
- TypeScript / ESLint / Tailwind CSS の役割をざっくり理解する
- **Turbopack** による高速ビルド体験の正体を知る
- **App Router** の「フォルダ＝URL」というルールを掴む
- パスエイリアス `@/` の便利さを体感する
- **Page Router** と **App Router** の構造上の違いを理解する
- Page Router のレンダリング戦略（`getStaticProps` / `getServerSideProps`）と App Router での簡素化を学ぶ

> 💡 用語の前提：**バンドラー** = 多数のJSファイルを1つにまとめて軽量化するツール／ **ルーティング** = URL ごとに表示するページを決める仕組み／ **Page Router** = `pages/` ディレクトリを使った旧来のルーティング方式

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

> 保存してから画面に反映されるまでの「待ち時間」をほぼゼロにする

**開発中に何百回も繰り返す「あの瞬間」**

コードを書く → `Ctrl+S` で保存 → 画面で確認。エンジニアは1日にこれを何百回も繰り返します。**この待ち時間が長いほど集中力が削られていく**。

```
[従来 (Webpack)]
  保存 → プロジェクト全体を作り直す → 3〜10秒待つ

[Turbopack]
  保存 → 変わった所だけ作り直す → 一瞬で反映
```

**なぜそんなに速い？**

- **Rust製** — Rust は「速さ」で有名なプログラミング言語。JavaScript より桁違いに速く動く
- **差分ビルド** — 全部ではなく、変更箇所と関係する所だけを作り直す
- **HMR**（Hot Module Replacement）— ページをリロードせず、変更部分だけ画面に差し替える仕組み

> 思考を止めずにコーディングに没頭できる

---

## 2-3. なぜ Rust だとそんなに速いのか？

> JavaScript と Rust では「コンピュータでの動かし方」が根本的に違う

**実行までの流れの違い：**

```
[JavaScript (Webpack)]
  ソースコード → JSエンジンが実行時に1行ずつ機械語に翻訳しながら実行
                ↑ 翻訳の手間が毎回かかる

[Rust (Turbopack)]
  ソースコード → 事前に機械語へコンパイル済み → CPU が直接実行
                                              ↑ 翻訳の手間ゼロ
```

**さらに Rust が圧倒的に速い2つの理由：**

- **CPU の全コアをフル活用** — JavaScript は基本1コアしか使えない。Rust は複数コアを安全に並列で動かせる → ファイルを同時並行でビルド
- **メモリ管理のオーバーヘッドが少ない** — JavaScript は **GC**（ガベージコレクション = 自動メモリ整理）でたまに動作が止まる。Rust はその仕組みが不要なので止まらない

> 「大量のファイルを高速処理する」ビルドツールの用途で Rust は無類の強さを発揮する

---

## 2-4. App Router：ファイルシステムベース・ルーティング

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

## 2-5. ネストルーティングの実践

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

## 2-6. パスエイリアス（`@/`）

階層が深くなると相対パスが煩雑になります。

```tsx
// ❌ 相対パスの地獄
import Button from "../../../components/Button"

// ✅ パスエイリアス（@ = src/）
import Button from "@/components/Button"
```

> `@/` を使えば、どれだけ階層が深くてもクリーンで壊れにくい絶対パス指定ができます。

---

## 2-7. Page Router とは？ — 2022年まで主流だったルーティング

Next.js には**2種類のルーター**があります。今章で学んでいる **App Router**（新）と、その前身 **Page Router**（旧）です。

**【Page Router】** `pages/` フォルダを使う

```text
pages/
  index.tsx   →  /           ← ファイル名がそのままURLになる
  about.tsx   →  /about
  _app.tsx    →  全ページ共通のレイアウト（App Routerのlayout.tsxに相当）
```

**【App Router】** `app/` フォルダを使う（今章で学んでいる方）

```text
app/
  page.tsx       →  /         ← フォルダ構造がURLになる
  about/
    page.tsx     →  /about
  layout.tsx     →  全ページ共通のレイアウト
```

> 今でも多くの現場コードで Page Router が使われています。**両方を読める**ことが即戦力エンジニアの条件です

---

## 2-8. Page Router のレンダリング戦略

Page Router では「**どの関数をページファイルに書くか**」でレンダリング戦略が決まります。

| ページファイルに書く関数 | 戦略名 | HTMLはいつ作られる？ |
|---|---|---|
| **何も書かない**（デフォルト） | **CSR** | ブラウザが毎回自分で作る |
| `getStaticProps` を書く | **SSG** | `npm run build` のときに一度だけ |
| `getStaticProps` ＋ `revalidate` | **ISR** | ビルド時 ＋ 指定した秒数ごとに自動更新 |
| `getServerSideProps` を書く | **SSR** | ユーザーがアクセスするたびにサーバーで作る |

**どれを使えばいい？** 迷ったらこの基準で：
- 「全員に同じ内容を見せるページ」→ **SSG**（会社概要・FAQ・ブログ）
- 「ユーザーごとに違う内容を見せるページ」→ **SSR**（マイページ・カート）
- 「定期的に内容が変わるページ」→ **ISR**（ランキング・ニュース一覧）

---

## 2-9. App Router：レンダリング戦略の"超"シンプル化

**App Router では特別な関数が不要になり、`fetch` の書き方だけで戦略が自動決定されます。**

| Page Router（旧：関数を書いて宣言） | App Router（新：`fetch` のオプションで自動決定） |
|---|---|
| `getStaticProps` を書く | `async` コンポーネントをそのまま書く（自動で Static） |
| `getServerSideProps` を書く | `{ cache: 'no-store' }` をつける（自動で Dynamic） |
| `getStaticProps` ＋ `revalidate` | `{ next: { revalidate: 60 } }` をつける（自動で ISR） |

```tsx
// ✅ App Router：データ取得も表示も同じコンポーネントの中に書ける！

export default async function BlogPost() {
  // ① fetch をそのまま書くだけ → 自動で Static（SSGと同じ動き）
  const post = await fetch('/api/post/hello').then(r => r.json());

  // ② { cache: 'no-store' } を追加するだけ → 自動で Dynamic（SSRと同じ動き）
  const user = await fetch('/api/me', { cache: 'no-store' }).then(r => r.json());

  // ③ 同じコンポーネントの中でデータを使って表示できる（Page Routerでは不可能だった！）
  return <article>{post.title} — ようこそ {user.name} さん</article>;
}
```

> **まとめ：** Page Router は「関数名で戦略を宣言」→ App Router は「`fetch` のオプションで自動判定」。特別な儀式なしでシンプルに書けるようになりました

---

<!-- _class: summary -->

## 【第2章まとめ】 App Router 時代の開発体験

| 領域 | 開発者がやること | Next.js が肩代わりすること |
|---|---|---|
| **環境構築** | `npx create-next-app` 1行を実行 | TS・ESLint・Tailwind・Turbopack を最適設定で同梱 |
| **ルーティング** | フォルダを切って `page.tsx` を置く | URL の自動生成・コード分割・ネスト |
| **レンダリング** | `async` コンポーネント＋`fetch` を書く | Static / Dynamic / ISR を自動判定 |

**Page Router → App Router で消えた3つの手間：**

- **特殊関数を覚える手間** — `getStaticProps` / `getServerSideProps` の暗記から解放
- **2ファイルに分ける手間** — データ取得と表示が同じコンポーネントに同居できる
- **戦略を手動で宣言する手間** — コードの書き方からフレームワークが自動判定

> Next.js は「本質ではない作業」を引き受け、**価値のある機能の開発に100%集中させてくれる**

---

<!-- _class: chapter -->

# 3. Server Component vs Client Component

> サーバーで動く部品とブラウザで動く部品の境界線を完全理解する

---

<!-- _class: objectives -->

# この章で学ぶこと

- 画面の部品には **2種類**ある — サーバーだけで動く **SC** と、ブラウザでも動く **CC**
- 「クリックしたら数が増えるボタン」を作りたい時、**どのファイルに何を書けば動くのか**が分かる
- **DBの接続情報やAPIキー** を安全に扱う鉄則 — 「サーバーで取って、結果だけブラウザに送る」
- ヘッダー・ボタン・カードなど **何度も使う部品** はどこに置く？プロジェクトのフォルダ運用ルール
- 「**なぜかエラーが出て動かない！**」という初心者の最大ハマりどころ（Client Boundary）の正体と直し方
- 1ページの中で **SCとCCを混ぜて使う**実用パターン（= コンポジション）を、コードで再現できる

> 💡 用語の前提：**コンポーネント** = ボタン・ヘッダー・カードなど画面の「部品」。`<Button />` のようなタグで何度でも呼び出せる／ **SC** = Server Component（サーバーだけで動く部品）／ **CC** = Client Component（ブラウザでも動く部品）／ **RSC** = SCのこと（React Server Component の略）

---

## 3-1. React Server Component (RSC) によるパラダイムシフト

> App Router の世界では、コンポーネントが **2種類** に分かれる

**Next.js のコンポーネントは2タイプ：**

- **Server Component (SC)** — デフォルト。**サーバー**で実行されHTMLになる
- **Client Component (CC)** — `"use client"` を明示。**ブラウザ**でも動く

**App Router 以前はすべて CC のみだった。何が問題だったか？**

- 全コンポーネントが巨大なJSバンドルとしてブラウザに送信される
- ブラウザがCPUを使ってHTMLを構築 → 初期表示遅延・低スペック端末で顕著

**RSC（= デフォルトSC）でこれが変わった：**

| 効果 | 詳細 |
|---|---|
| **バンドルサイズの激減** | SC の JS はブラウザに送られない → 転送量が大幅削減 |
| **高いセキュリティ** | DBの接続情報・APIキーがブラウザに漏れない |
| **爆速の初期表示** | サーバーで完成済みHTMLが届く |

---

## 3-2. Before / After で見る RSC の威力

> 「ユーザー一覧を表示する」を CC時代 と SC時代 で書き比べる

**【Before】CC時代 — `useEffect` + `useState` 地獄：**

```tsx
"use client";
const [users, setUsers]     = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('/api/users').then(r => r.json())
    .then(d => { setUsers(d); setLoading(false); });
}, []);

if (loading) return <p>読み込み中...</p>;
return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;
```

**【After】SC時代 — `async/await` でスッキリ：**

```tsx
export default async function UserList() {
  const users = await fetch('https://api/users').then(r => r.json());
  return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;
}
```

> 状態変数3つ → 0個、ローディングUIも不要。**サーバーで完結するから状態管理が消える**

---

## 3-3. 徹底比較：サーバーとクライアントの「使える武器」

| 比較項目 | Server Component (SC) | Client Component (CC) |
|---|---|---|
| **宣言方法** | デフォルト（何も書かない） | ファイル先頭に `"use client"` |
| **実行場所** | **サーバーのみ** | サーバー (事前生成) + ブラウザ |
| **得意な処理** | DB操作、バックエンド通信、機密情報 | インタラクティブなUI、状態管理 |
| **使える機能** | `cookies()`, `headers()`, DB直接アクセス | `useState`, `onClick`, `useEffect` |
| **使えない機能** | フック・イベントハンドラ | `cookies()` 等サーバー専用API |
| **JSバンドル** | **ブラウザに送信されない** | ブラウザにダウンロードされる |

---

## 3-4. サーバーとブラウザ、いつどこで動く？

> 比較表「実行場所」の行を時系列で深掘り。**SC は1回だけ・CC は3段階**で動くことを理解する

**Server Component**：サーバーで**1回だけ**実行され、結果のHTMLが配信される

```text
[ ビルド時 or リクエスト時 ]
   サーバー: SC関数を実行 → RSC Payload + HTML を生成
                              ↓
[ ブラウザ ]                 完成したHTMLを表示するだけ
                              ※ SC のJSコードはブラウザに届かない
```

**Client Component**：実は**3段階**で動く。サーバーでも事前に動いている

```text
[ ① サーバー ]      CCも事前レンダリング → 静的HTMLを生成
                                                ↓
[ ② 初回ブラウザ ]   JSをDL → ハイドレーション → 操作可能になる
                                                ↓
[ ③ 画面遷移後 ]    画面遷移時はブラウザだけで CC を再レンダリング
```

> 💡 CCも初回はサーバーで実行される点に注意。`useEffect` の外で `window` や `localStorage` を直接触ると、初回レンダリング時にエラーになる（ブラウザにしか存在しないため）

---

## 3-5. 使える関数・APIの早見表

> 比較表「使える機能」の行をフル展開。「どっちで何が使えるか」を一目で判定できる

| カテゴリ | 主なAPI / 機能 | SC | CC |
|---|---|:-:|:-:|
| **状態管理フック** | `useState` / `useReducer` / `useContext` | ❌ | ✅ |
| **副作用フック** | `useEffect` / `useRef` / `useLayoutEffect` | ❌ | ✅ |
| **イベントハンドラ** | `onClick` / `onChange` / `onSubmit` | ❌ | ✅ |
| **ブラウザAPI** | `window` / `document` / `localStorage` | ❌ | ✅ |
| **async コンポーネント** | `export default async function ...` | ✅ | ❌ |
| **サーバー専用API** | `cookies()` / `headers()` / `draftMode()` | ✅ | ❌ |
| **直接DBアクセス** | Prisma / Drizzle 等のORMクエリ | ✅ | ❌ |
| **秘匿環境変数** | `process.env.API_KEY`（`NEXT_PUBLIC_`なし） | ✅ | ❌ |
| **Server Function** | `'use server'` を付けた関数 | ✅ 定義 | ✅ 呼出 |

> 💡 **Server Function** = 関数の先頭に `'use server'` を付けるとCC側からも呼び出せる仕組み。フォーム送信やボタン操作からDB更新を行う用途で使う（例：`<form action={createPost}>`）

---

## 3-6. Server Component のコード例

サーバーコンポーネントはApp Routerのデフォルト。最大の強みは **コンポーネント自体を `async` 関数にできる** 点です。

```tsx
// 💡 Server Component — デフォルト。async をつけて非同期処理が書ける
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export default async function Dashboard() {
  // ① サーバー上のクッキーを直接読み取る
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  // ② 外部APIを作らなくても、コンポーネント内で直接DBを叩ける（Prisma 等のORM経由）
  const data = await db.query("SELECT * FROM items WHERE user_id = ?", [token]);

  return (
    <div>
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
}
```

> `useEffect` + `fetch` が不要になりコードが極めてシンプルに。接続情報はブラウザに送信されないため高いセキュリティが担保されます。
>
> 💡 **ORM** = Object Relational Mapper。SQL を直接書かずにオブジェクト操作でDBを扱えるライブラリ（例：Prisma）

---

## 3-7. Client Component のコード例

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

## 3-8. 究極の判断基準：コードを見て一瞬で判別する

> `useState` / `onClick` が出たら **CC**、それ以外はすべて **SC**（デフォルト）

**こんなコードを書きたい → CC（`"use client"` を付ける）：**

```tsx
const [open, setOpen] = useState(false);          // 状態管理
<button onClick={() => setOpen(!open)} />         // ユーザー操作
useEffect(() => { /* ... */ }, []);               // ライフサイクル
```

**こんなコードを書きたい → SC（基本はこちら。何も書かない）：**

```tsx
const data = await db.query("...");               // DB直接アクセス
const cookieStore = await cookies();              // サーバー専用API
return <ul>{data.map(...)}</ul>;                  // 表示するだけ
```

> 迷ったら **SC**。`useState` / `onClick` が登場した瞬間に初めて `"use client"` を付ける

---

## 3-9. コンポーネントの置き場所と使い方

> 再利用する部品は `src/app/` ではなく `src/components/` 配下に整理する

**プロジェクトのフォルダ構成：**

```text
src/
 ├── app/                ← ページ専用（page.tsx / layout.tsx）
 │    ├── page.tsx
 │    └── about/page.tsx
 │
 └── components/         ← 再利用する部品はここ
      ├── Button.tsx       (CC：onClick が必要)
      ├── Header.tsx       (SC：表示のみ)
      └── UserCard.tsx     (SC：DBからユーザー情報取得)
```

**使い方：`import` して JSX に書くだけ**

```tsx
// src/app/about/page.tsx (Server Component)
import Header from "@/components/Header";
import UserCard from "@/components/UserCard";

export default function AboutPage() {
  return (
    <>
      <Header title="自己紹介" />     {/* props で表示内容をカスタマイズ */}
      <UserCard userId="123" />
    </>
  );
}
```

> 1つの部品を一度作れば、複数のページから何度でも呼び出せる

---

## 3-10. 陥りやすい罠：Client Boundary

> ここまでで使い方は掴めた。しかし SC と CC を混ぜて使う時に**落とし穴**がある

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

## 3-11. 解決策：コンポジションパターン（childrenで受け取る）

> 3-10 との違い — **CCは SC を直接 `import` せず、`children` propsで「親から渡された要素を表示するだけ」の役割に変える**

**変えるポイントは2箇所：① SCの `import` を削除 ／ ② `children` を受け取って `{children}` で表示**

```tsx
// ClientBoundary.tsx — もう SC を import していない
"use client";
import { useState } from "react";

export default function ClientBoundary({
  children,  // 👈 親から渡される子要素
}: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>開く</button>
      {isOpen && children}  {/* 👈 受け取った要素をそのまま表示 */}
    </div>
  );
}
```

> 💡 **`children` とは？** `<Tag>ここが中身</Tag>` のように、開きタグと閉じタグの間に書いた要素が自動的に `props.children` として渡されるReactの基本機能

---

## 3-12. なぜエラーが消えるのか — 実行順序と依存方向

> 鍵は「**CCの中でSCを動かす**」のをやめて、「**サーバーで先に終わらせて結果だけ渡す**」こと

**実行順序を時系列で追う：**

```text
[① サーバー側（ビルド時 or リクエスト時）]
  page.tsx（親SC）を実行
        ├─ <SC /> を呼ぶ → 静的HTMLを生成
        └─ <CC>(完成HTML)</CC> という形に組み立てる
                               ↓ ブラウザへ送信
[② ブラウザ側]
  CC をハイドレーション（操作可能化）
        └─ 受け取った children は「もう動かない、ただのHTML」
        → 実行する関数本体が無い → クラッシュしようがない ✅
```

**「誰が誰を import するか」（= 依存の向き）が3-7と逆転している：**

| | 3-10 NG パターン | 3-11 OK パターン |
|---|---|---|
| **import の方向** | CC が SC を引き込む ❌ | 親SCが CC と SC を両方持つ ✅ |
| **SC が動く場所** | ブラウザ（不可能）→ 💥 | サーバー（事前生成済み）→ 安全 |
| **CC の役割** | SC を実行しようとして失敗 | 受け取った飾りを表示するだけ |

> 🔑 **CCは「子コンポーネントが何か」を知らない方が強い。** 親SC側で「何を箱に入れるか」を決める設計が App Router の推奨パターン（= コンポジション）

---

## 3-13. コンポジションパターン（呼び出し側）— 実コード

> 親SCは **CC（インタラクション担当）と SC（データ取得担当）を組み合わせる役**。CCには触らず、JSXで包むだけ

**やることは2つだけ：① 両方 `import` ／ ② CCタグの間にSCを書く**

```tsx
// src/app/(practice)/composition-pattern/page.tsx — "use client" 無し → SC
import Box from '@/components/Box'
import ClientBoundary from '@/components/ClientBoundary'              // CC
import StaticServerDataFetch from '@/components/StaticServerDataFetch' // SC

const CompositionPatternPage = () => (
  <Box>
    <h1>Composition Pattern Page</h1>
    <ClientBoundary>
      <StaticServerDataFetch /> {/* ← ClientBoundary の children になる */}
    </ClientBoundary>
  </Box>
)
export default CompositionPatternPage
```

> 🔑 `ClientBoundary` には一切手を入れない。`<StaticServerDataFetch />` を別のSCに差し替えれば同じトグルUIを使い回せる

---

## 3-14. SC の実コード — `StaticServerDataFetch.tsx`

> 3-13 で `children` として渡していた SC の中身。**`async` + `fetch` だけ**で完結する

```tsx
// src/components/StaticServerDataFetch.tsx — "use client" 無し → Server Component
import Box from "./Box";
type Todo = { id: number; todo: string };

const StaticServerDataFetch = async () => {  // 👈 関数自体に async（SC固有）
  const res = await fetch("https://dummyjson.com/todos/random");
  const todo: Todo = await res.json();
  return (
    <Box>
      <h2>Static Server Data Fetch</h2>
      <dl><dt>id</dt><dd>{todo.id}</dd><dt>todo</dt><dd>{todo.todo}</dd></dl>
    </Box>
  );
};
export default StaticServerDataFetch;
```

**SCならではの3点：**

- `async` **コンポーネント定義**ができるのは SC だけ（CCはNG）
- `useState` / `useEffect` 不要 — `fetch` → `await` → JSXが**1本の直線**で書ける
- このJSはサーバーでしか動かない → **APIキーを直書きしても漏れない**

---

## 3-15. 実コードの実行を時系列で追う

> 3つのファイルがどう連携するか — `/composition-pattern` を開いた瞬間からボタン操作までを追う

**登場する3ファイル（既存プロジェクトに実装済み）：**

- **`page.tsx`**（SC・親）— `<ClientBoundary>` の中に `<StaticServerDataFetch />` を配置
- **`ClientBoundary.tsx`**（CC）— `useState(isVisible)` でトグル、ボタンで `children` を表示/非表示
- **`StaticServerDataFetch.tsx`**（SC）— `fetch('https://dummyjson.com/todos/random')` で todo 取得

```text
[① サーバー側（リクエスト時 or ビルド時）]
   page.tsx を実行
    ├─ <StaticServerDataFetch /> を実行 → fetch完了 → 静的HTML完成
    └─ <ClientBoundary>(完成HTML)</ClientBoundary> として組み立てて送信
                                          ↓
[② ブラウザ：初回表示]
   全体が即描画される（ボタン・todo HTMLが揃った状態）
   ※ ハイドレーション前なのでまだボタンは押せない

[③ ブラウザ：ハイドレーション]
   ClientBoundary の useState が起動 → ボタンが操作可能になる

[④ ボタンクリック]
   isVisible = true → 受け取り済みの todo HTML が表示される
   ※ 新しい fetch は走らない（サーバーで取得済みのHTMLをただ表示するだけ）
```

> 💡 `fetch` は **サーバーで1回だけ** 実行される。クリックのたびにAPIを叩くわけではない点が「Streamingではなく事前取得」というSCの特性
>
> 🔑 もし `ClientBoundary` 側が `<StaticServerDataFetch />` を直接 `import` していたら、ブラウザでこの fetch をやり直そうとして失敗する（= 3-10 のエラー）。**children 経由で受け取る** ことで「サーバーで取り終わったHTML」になり、安全に表示できる

---

<!-- _class: summary -->

## 【第3章まとめ】 SC と CC の使い分け

| 観点 | Server Component | Client Component |
|---|---|---|
| **デフォルト** | こちらが基本 | `"use client"` を宣言 |
| **得意なこと** | DB・API・機密情報の処理 | onClick・useState のインタラクション |
| **JSバンドル** | ブラウザに送られない | ブラウザにダウンロードされる |

**この章で押さえるべき3つの原則：**

- **デフォルトSC・末端だけCC** — ページ全体は SC、操作が必要な部品だけ CC に切り出す
- **再利用部品は `src/components/` に** — `import` して JSX に書くだけで何度でも呼べる
- **CC内でSCをimportしない** — 親SCから `children` 経由で渡すコンポジションパターンで解決

> Next.js は **「最高のパフォーマンス」と「高度なインタラクティブ性」を1つのアプリで同時に実現** できるアーキテクチャ

---

<!-- _class: chapter -->

# 4. レンダリング戦略と RSC Payload

> 静的と動的の自動切り替えと、圧倒的な描画効率の裏側

---

<!-- _class: objectives -->

# この章で学ぶこと

- **Static Rendering**（事前生成）と **Dynamic Rendering**（都度生成）の違いがわかる
- 「**SC = Dynamic**」は誤解 — SC/CC と Static/Dynamic は **独立した2軸** であることを理解する
- どんな書き方をすると Dynamic に自動で切り替わるかを判別できる
- **RSC Payload** が何のために送られ、SC と CC で **中身がどう違うか** を理解する
- `npm run build` で生成される **`.next/` ディレクトリ** の中身を読み解ける
- `<Link>` による画面遷移がなぜ高速なのかを説明できる

> 💡 用語の前提：**Payload** = 通信で送られるデータ本体／ **ISR** = Static のまま定期再生成する仕組み（5章で詳解）

---

## 4-1. レンダリング戦略のパラダイムシフト

パフォーマンスを決定づける最大の要因は「**いつ・どこでHTMLを生成するか**」です。App Routerでは2つの戦略に統合・自動化されました。

**① Static Rendering（静的・デフォルト）**

- ビルド時（`npm run build`）にHTMLを事前生成してサーバーに保存
- 完成HTMLを即返却するだけなので **究極の表示速度**
- 対象：ブログ、LP（ランディングページ）、ヘルプドキュメント、企業概要

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
| **パフォーマンス** | **最速**（事前生成HTMLを返すだけ） | リクエストごとに処理が走る |
| **データの鮮度** | ビルド時点のデータ | **常に最新** |

---

## 4-3. 「SC = Dynamic」は誤解 — 2軸を分けて理解する

> よくある勘違い：「SCはサーバーで動くから Dynamic でしょ？」→ **間違い**。SC/CC と Static/Dynamic は **完全に独立した2軸**

**2つの軸は別の話：**

```text
SC vs CC          = "どこで" 動くか（場所の軸）
Static vs Dynamic = "いつ" 動くか（タイミングの軸）
```

**4つのマス目すべて、現実に存在する：**

| | **Static**（ビルド時に実行） | **Dynamic**（リクエスト時に実行） |
|---|---|---|
| **Server Component** | ✅ **デフォルト**。build時にSC関数を1回実行→結果キャッシュ | ✅ `cookies()`等を使うと自動切替。毎リクエストSC実行 |
| **Client Component** | ✅ build時にサーバーで事前HTML化→ブラウザでハイドレーション | ✅ リクエスト時にサーバーで事前HTML化 |

**SC が Dynamic に切り替わる「引き金」：**

- `cookies()` / `headers()` / `draftMode()` — リクエスト固有のデータを参照
- `searchParams` プロップ — URLクエリを使う
- `fetch(..., { cache: 'no-store' })` — 明示的に非キャッシュ

> 💡 3-13 の `StaticServerDataFetch` は **SC かつ Static** の例。`fetch` するだけで上記の引き金を踏んでいないので、build時に1回だけ実行されてキャッシュされる（だから名前に "Static" が付いている）

---

## 4-4. 魔法のような「自動判定」メカニズム

開発者が設定ファイルを書かなくても、**コードの記述内容を見て Next.js が自動で戦略を判定・切り替えます**。

**Dynamic Rendering に自動で切り替わるトリガー：**

| トリガー | 例 | 理由 |
|---|---|---|
| **ダイナミックAPIの使用** | `cookies()`, `headers()`, `searchParams` | リクエストが来ないと中身が確定しない |
| **キャッシュの無効化** | `fetch(..., { cache: 'no-store' })` | 「常に最新データを取得」と明示 |

これらを使った瞬間に Next.js は「このページはユーザーごとのデータが必要」と判断し、自動的に Dynamic Rendering へ切り替わります。

---

## 4-5. 自動でDynamicに切り替わるコード例

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

## 4-6. RSC Payload とは何か？

HTMLと一緒に、**RSC Payload** と呼ばれるNext.js特有のデータ構造が裏側で送信されています。

`.rsc` 形式の軽量なシリアライズデータで、以下が詰め込まれています：

- **DOMのツリー情報**: SC が生成したHTMLのツリー構造
- **CCの参照**: ページのどこにCCが配置され、必要なJSファイルはどれか
- **Propsのデータ**: サーバーからCCへ渡されたデータ（JSON形式）

---

## 4-7. SC と CC で Payload に入るものが「真逆」

> Payloadは1つの塊だが、**SC部分とCC部分で入る情報の性質が正反対**

| 種別 | Payloadに入るもの | なぜそうなる？ |
|---|---|---|
| **Server Component** | **実行済みの結果**（HTMLツリー） | サーバーで関数実行完了 → ブラウザは表示するだけ |
| **Client Component** | **JSファイルへの参照** + サーバーが決めたprops | ブラウザで関数を実行する必要 → 関数本体は別チャンクから読む |

**疑似的な中身のイメージ：**

```js
{
  type: "div",
  children: [
    { type: "h1", children: "ようこそ太郎さん" },     // 👈 SCの実行結果（完成HTML）
    {
      type: "$ClientReference",                        // 👈 CCは「参照」だけ
      module: "/_next/static/chunks/LikeButton.js",   //    どのJSを読むか
      props: { likes: 42 }                            //    サーバーで決めた初期値
    }
  ]
}
```

> 💡 **SCは「結果」、CCは「設計図 + 初期データ」**。どちらも同じPayloadに入るが、ブラウザでの扱いが真逆になる

---

## 4-8. サーバーとブラウザで「参照する場所」が逆転する

> **同じPayloadなのに、サーバー側で書き込む情報** と **ブラウザ側で読みに行く情報** が対称的に違う

| 部分 | サーバーがやること（書き手） | ブラウザがやること（読み手） |
|---|---|---|
| **SC の部分** | 関数を実行 → 結果HTMLを書き込む | そのままDOMに反映（**再実行しない**） |
| **CC の部分** | 関数は実行せず、**参照 + props** を書き込む | 参照JSをDL → CC関数を**ブラウザで実行** → DOM生成 |
| **props データ** | Server→Client へ JSON 化して埋め込み | CC の初回 rendering 時に受け取って使う |

**まとめると2行：**

- **サーバー** → 「SCは結果を、CCは未実行のまま参照を」書き込んでPayload完成
- **ブラウザ** → 「SCの結果はそのまま使い、CCは参照を辿ってJSを動かす」で画面完成

> 🔑 これが3-3の表の「**SCのJSはブラウザに送られず、CCのJSだけ送られる**」の正体。SC は Payload 内ですでにHTML化済みなので、関数本体を送る必要がない

---

## 4-9. ビルド時に Payload はどう作られる？

> Static Renderingのページは `npm run build` の時点で **HTML と RSC Payload が同時に静的ファイル化** される

**`npm run build` で起きること：**

```text
① Next.js が全ページを走査
   ├─ Static判定（cookies()/no-store なし）→ 事前レンダリング対象
   └─ Dynamic判定 → スキップ（リクエスト時に処理）

② Static ページについて：
   ├─ SC関数を1回実行 → 完成HTMLを生成
   ├─ 同時に RSC Payload を生成（SCの結果 + CCの参照 + props）
   └─ .next/server/app/*.html / *.rsc にファイル保存

③ CC のコードは別チャンクに事前バンドル
   └─ _next/static/chunks/ に出力（ブラウザへ配信される唯一のJS）
```

| 戦略 | ビルド時の挙動 | リクエスト時の挙動 |
|---|---|---|
| **Static Rendering** | HTML + Payload を**事前生成・ファイル保存** | キャッシュをそのまま配信 |
| **Dynamic Rendering** | （何もしない） | リクエスト毎に SC を実行 → HTML + Payload を都度生成 |

> 💡 ターミナルの `next build` 出力に表示される `○` (Static) は「ビルド時にPayloadが出来上がっている」マーク、`ƒ` (Dynamic) は「リクエストが来てから計算する」マーク

---

## 4-10. ビルド成果物の置き場所 — `.next/` フォルダの正体

> `npm run build` を実行すると、プロジェクト直下に **`.next/` という隠しフォルダ** が自動生成され、ビルド結果がすべて入る

**`.next/` フォルダの特徴を4つで整理：**

- **🤖 自動生成** — 自分で書き換えない。ビルドコマンドのたびに作り直される
- **🚫 `.gitignore` 対象** — Gitリポジトリには入れない（容量大＆環境ごとに変わるため）
- **👻 隠しフォルダ** — 名前が `.` で始まるので OS のデフォルトでは非表示。`ls -la` や VSCode サイドバーで見える
- **🚀 本番デプロイの主役** — Vercel等にアップするのは `src/` ではなく **このフォルダの中身**

**全体像（Staticページ `/about` の場合）：**

```text
my-app/                          ← プロジェクトのルート
├── src/                         ← あなたが書いたソースコード（編集対象）
├── package.json
└── .next/                       ← 👈 ビルド成果物（自動生成・編集対象外）
    ├── server/app/about/        ← サーバー側で使うファイル群
    │   ├── page.html            ← 事前生成HTML
    │   ├── page.rsc             ← RSC Payload
    │   └── page.meta            ← メタデータ
    ├── static/chunks/           ← ブラウザに送るJS（CCのコード）
    └── cache/                   ← Data Cache（fetch結果の保存先）
```

> 💡 確認方法: ターミナルで `npm run build` を実行後、`ls -la .next/server/app/` でフォルダ構造が見える。`cat .next/server/app/about/page.html` で生成HTMLそのものを覗ける

---

## 4-11. 各ファイルの役割 — Static / Dynamic で何が変わる？

> `.next/server/app/about/` の中身をファイル別に解剖。**Static と Dynamic で生成されるファイルが完全に違う**

**ファイル種別と役割：**

| ファイル | 中身（簡単に言うと） | 何のために使われる？ |
|---|---|---|
| `page.html` | 完成済みのHTML（タグも文字列も全部埋まっている） | 初回アクセスでブラウザに即返却 → 爆速表示 |
| `page.rsc` | RSC Payload（コンパクトな text/binary） | `<Link>` での画面遷移時に**これだけ**取得 |
| `page.meta` | キャッシュタグ・有効期限などの管理情報 | キャッシュの再検証（revalidate）時に参照 |
| `page.js` | 実行可能なJavaScript（**Dynamic専用**） | リクエスト毎に Node.js が実行してHTML生成 |

**Static / Dynamic で生成されるファイルが違う：**

| ページ種別 | 生成されるファイル | 本番での動作 |
|---|---|---|
| **Static**（デフォルト・`○`） | `page.html` + `page.rsc` + `page.meta` | ファイルをそのまま返す |
| **Dynamic**（`cookies()`等使用・`ƒ`） | `page.js` のみ（HTML/Payloadは無し） | リクエスト毎にJS実行→都度HTML/Payload生成 |

> 🔑 これが **「Staticは爆速・Dynamicは処理時間が必要」** の物理的な根拠 — Staticは事前生成ファイルを返すだけ、Dynamicは毎回計算が走る

---

## 4-12. RSC Payload の役割とハイドレーション

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

## 4-13. 画面遷移（ソフトナビゲーション）の魔法

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

- **独立した2軸**: SC/CC は「**どこで動くか**」、Static/Dynamic は「**いつ作るか**」。SC は Static にも Dynamic にもなる
- **Static/Dynamic の自動判定**: `cookies()` 等を使った瞬間に Dynamic へ自動切替。開発者は意識せず最適化される
- **ビルド成果物は `.next/`**: Static は `page.html` + `page.rsc` を事前生成、Dynamic は `page.js`（実行可能JS）のみ
- **RSC Payload の二面性**: SC部分は**完成HTML**、CC部分は**JS参照+props**という正反対の構造を一つのPayloadに格納
- **爆速の画面遷移**: `<Link>` 遷移時は HTML不要、Payloadだけ差分取得して更新
- **結論**: 正しいコードを書けば、フレームワークが**勝手に最速の戦略を選択・実行**してくれる洗練された設計

---

<!-- _class: chapter -->

# 5. データ取得と Streaming SSR

> モダンなデータフェッチと、重い処理を待たせない究極のUI体験

---

<!-- _class: objectives -->

# この章で学ぶこと

- 従来 SPA でのデータ取得の冗長さを再認識する
- Server Component 内で `async/await` を使った直感的なデータ取得を学ぶ
- **Client Component でデータを取るべき場面** と、`useState` + `useEffect` の使い方を理解する
- `fetch` のキャッシュオプション（`force-cache` / `no-store` / `revalidate`）を使い分けられる
- **ISR**（Static + 定期再生成）の仕組みと適用場面を理解する
- `<Suspense>` による **Streaming SSR** で「画面の硬直」を回避する方法を理解する

> 💡 用語の前提：**ISR** = Incremental Static Regeneration（一定時間ごとに静的ページを裏で再生成する仕組み）／ **ストリーミング** = 完成した部分から少しずつ送る方式

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
type User = { id: number; name: string };  // 👈 取得するデータの形を型で定義

export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users");
  const users: User[] = await res.json();  // 👈 型を明示（: User[] で配列と教える）

  // データが埋め込まれた完全なHTMLとしてブラウザに返される
  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

> コード量が激減し、サーバー側でのデータ取得により通信が高速に。ブラウザにはデータが揃った完全なHTMLが届くためSEOも最大化されます。
>
> 💡 **型指定を省略すると `any` 型になる** — `res.json()` の戻り値はデフォルトで `any`。`type User = {...}` を定義し `: User[]` で明示すると、`u.id` / `u.name` が型補完され、タイポも防げる

---

## 5-3. Client Component でデータを取るべき場面

> SCで取るのが基本。でも **ブラウザでしか取れない / ユーザー操作後に取る** データは CC で取る必要がある

**CC fetching が必要になる具体例：**

- 🔄 **リアルタイム更新が要るデータ** — チャット、株価、ライブ通知（数秒ごとに最新化）
- 🖱️ **ユーザー操作の結果として取るデータ** — 検索ボックス入力、フィルター変更
- 🌐 **ブラウザ固有のAPIに依存するデータ** — 位置情報、`localStorage`、Cookie 読取
- ♾️ **ページネーション・無限スクロール** — 「もっと見る」ボタンで追加取得

**判断ルール（迷ったらこれ）：**

| データの性質 | どっちで取る？ |
|---|---|
| ページを開いた瞬間に表示すべき | ✅ **Server Component** |
| ユーザー操作してから取る・常に最新が要る | ✅ **Client Component** |
| ブラウザのAPI（位置情報・Cookie等）が必要 | ✅ **Client Component**（CCしか触れない） |

> 💡 5-1で「SPAの辛さ」として登場した `useEffect + useState` だが、**CCで必要な場面に限定して使うのは現代でも正解**。次のスライドで2つのフックを復習し、その後で実コードを読み解く

---

## 5-4. その前に — `useState` と `useEffect` を1分で復習

> CCでデータを取るには **「値を覚えておく箱」と「描画後に処理を走らせる仕組み」** が必要。それが `useState` と `useEffect`

**`useState`：画面に表示する値を「覚えておく箱」**

```tsx
const [todo, setTodo] = useState<Todo | null>(null);
//       │      │                              └─ 初期値
//       │      └─ 値を更新する関数（呼ぶと自動再描画）
//       └─ 現在の値（読み取り専用）
```

**`useEffect`：描画した「後で」何かをやりたい時に使う**

```tsx
useEffect(() => {
  fetch("/api/...").then(setTodo);   // 👈 描画後の処理（例: fetch）
}, []);                               // 👈 [] = 初回マウント時に1回だけ
```

> 💡 `useEffect` がない場合 → fetchを本体に直接書くと **再描画→fetch→再描画...の無限ループ**になる。「描画後に隔離して実行」することで制御
>
> 🔑 この2つが組み合わされば「**fetch → 結果を保存 → 画面に反映**」が成立する

---

## 5-5. フックのトリガーと TypeScript の型指定

> **「いつ発火するか」と「`<...>` / `type` の意味」** を整理。実コード（次スライド）を読む前の準備

**`useState` のトリガー — `setter` を呼んだ時に再描画される**

**`useEffect` のトリガー — 依存配列の中身が変わった時：**

```tsx
useEffect(() => fetch(...), []);        // 👈 初回1回のみ（fetchの定石）
useEffect(() => fetch(...), [userId]);  // 👈 userId が変わるたびに再実行
useEffect(() => fetch(...));            // 👈 毎描画ごと実行（⚠️ 無限ループ）
```

**TypeScript の型指定 — `type` 定義とジェネリクス：**

```tsx
type Todo = { id: number; todo: string };  // 👈 型エイリアス（形に名前をつける）
useState<Todo | null>(null);
//        ▲       ▲       └─ 初期値（型に合致する必要あり）
//        ▲       └─ 「Todo か null」のどちらか（ユニオン型 = | で OR）
//        └─ ジェネリクス：state に入れる型を React に教える
```

> 🔑 依存配列を間違えると「**連発実行**」「**古いデータのまま**」などのバグの温床に。`fetch` は通常 `[]` で初回1回が鉄則

---

## 5-6. CCのデータ取得 — 実コード解説 `ClientDataFetch.tsx`

> 本プロジェクトの実装。`useState` で状態保持＋ `useEffect` で描画後に fetch する典型パターン

```tsx
// ✅ src/components/ClientDataFetch.tsx
"use client";
import React from "react";
type Todo = { id: number; todo: string };

const ClientDataFetch = () => {
  const [todo, setTodo] = React.useState<Todo | null>(null);  // 👈 ① 状態
  React.useEffect(() => {                                      // 👈 ② 描画後実行
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then(setTodo);                                          //    ③ 状態に保存
  }, []);                                                      //    [] = 初回1回
  if (todo === null) return <Box>Loading...</Box>;             // 👈 ④ 取得前
  return <Box>{/* todo.id / todo.todo を表示 */}</Box>;        // 👈 ⑤ 取得後
};
```

**動きを4ステップ：** ① マウント時 `todo=null` → "Loading..." → ② `useEffect` で fetch → ③ `setTodo` で状態更新 → ④ 自動再描画して todo 表示

> 💡 SC版の `StaticServerDataFetch`（3-14）と**同じAPIを叩いている**が、取得タイミングが違う：SCはビルド時、CCはブラウザでマウント後

---

## 5-7. 拡張された fetch API とキャッシュ制御

Next.js は標準の `fetch` を拡張し、オプション1つでキャッシュ戦略を制御できます。

| fetch オプション | 動作 | レンダリング |
|---|---|---|
| `cache: 'force-cache'`（デフォルト） | ビルド時にキャッシュ、以降はキャッシュを返す | Static |
| `cache: 'no-store'` | 毎回最新データを取得 | Dynamic に自動切替 |
| `next: { revalidate: 60 }` | 60秒後の初アクセス時に裏でキャッシュ更新（**ISR**） | Static + 定期更新 |

> 複雑なインフラ構築が必要だった「データの鮮度管理」が、たった1行のオプション指定で完結します
>
> 💡 **ISR** = Incremental Static Regeneration。「静的ページを一定時間ごとに裏でこっそり再生成する」ハイブリッドな仕組み

---

## 5-8. Static の落とし穴 — 「データが固まる」問題

> デフォルトの `fetch` は `force-cache` で **ビルド時に1回だけ実行 → HTMLに焼き込み**。何度アクセスしても**同じデータが返り続ける**

**問題例：ランキングページが「ビルド時の状態」で固まる**

```tsx
// ❌ デフォルト挙動（cache: 'force-cache'）
type Item = { rank: number; name: string };
const res = await fetch("https://api.example.com/ranking");
const ranking: Item[] = await res.json();  // ビルド時の値で固まる
```

```text
[ビルド時]   fetch → "1位:商品A, 2位:商品B..." を HTMLに焼き込み
[アクセス]   1時間後 / 1日後 / 1週間後... 何度見ても同じ「1位:商品A...」
             ※ 実際のランキングは変動しているのに、HTMLは古いまま
```

> 🔑 **「ニュースが古い」「ランキングが何日も同じ」はこの罠**。デフォルトの `fetch` だけ書くと永遠にビルド時の値になる

---

## 5-9. データ鮮度を保つ書き方 — `no-store` と `revalidate`

> 2つの方向性：**Staticを諦めてDynamic化** / **Staticのまま定期更新（ISR）**

**対処1：`cache: 'no-store'` — Static → Dynamic 切替スイッチ**

```tsx
const res = await fetch(url, { cache: "no-store" });  // 👈 ページが Dynamic に切替
const user: User = await res.json();
// 仕組み: 毎リクエストで SC を実行 → 常に最新（Dynamicの結果）
// 失うもの: ビルド時HTML・爆速応答
// 用途: マイページ・カート・ログイン状態
```

**対処2：`next: { revalidate: 秒 }` — Static のまま定期再生成（ISR）**

```tsx
const res = await fetch(url, { next: { revalidate: 60 } });  // 👈 60秒キャッシュ + 裏で再取得
const ranking: Item[] = await res.json();
// 仕組み: Static のまま。期限後にバックグラウンドで HTML 更新
// 用途: ランキング・ニュース一覧・天気予報
```

> 🔑 **`no-store` の正体は「Dynamic化スイッチ」**。データが新鮮になるのは "Dynamicに切り替わった結果" 毎リクエスト SC が動くから（次のスライドで ISR を詳しく見る）

---

## 5-10. ISR とは？ — Static の速さとデータ鮮度を両立する仕組み

> **Incremental Static Regeneration** = 「事前生成HTMLを裏で少しずつ作り直す」Next.js 独自の機能。**Increment**（増分）+ **Static**（静的）+ **Regeneration**（再生成）

**`revalidate: 60` の挙動を時系列で：**

```text
[ビルド時]            HTML生成 → "1位:商品A" 保存
[0〜60秒]             キャッシュ "1位:商品A" を即返却 ⚡
[60秒経過後の初アクセス]
  ① 古いキャッシュを即返却 ⚡（ユーザーは待たない）
  ② 同時に裏で新HTML "1位:商品B" を再生成
[以降]                新キャッシュ "1位:商品B" を即返却 ⚡
```

**Static / Dynamic / ISR の比較：**

| | Static | Dynamic | **ISR** |
|---|:-:|:-:|:-:|
| 表示速度 | ⚡ 爆速 | 🐢 都度処理 | ⚡ **爆速** |
| データ鮮度 | ❌ ビルド時固定 | ✅ 常に最新 | ✅ **数十秒遅れ** |
| サーバー負荷 | 軽い | 重い | **軽い** |

> 🔑 **「データはちょっと古くてもOK、表示は速く」** な場面の最適解。ニュース・ランキング・天気・在庫表示などで活躍する Vercel 発祥のアーキテクチャ

---

## 5-11. サーバーレンダリング最大の弱点：「画面の硬直」

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

## 5-12. Streaming SSR：解決策は `<Suspense>` で囲むだけ

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

## 5-13. Streaming SSR のタイムライン

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

- **SCがデフォルト**: `async`コンポーネント + `await fetch()` でデータ取得が直線的。状態フック不要・SEO完璧
- **CCはブラウザ操作・リアルタイム取得で**: `useState` + `useEffect` でマウント後に fetch する典型パターン（ただし「ページ初期表示」の用途では SC を使う）
- **キャッシュ戦略は1行**: `force-cache` / `no-store` / `revalidate` の使い分けで Static / Dynamic / **ISR** を制御
- **Static の罠を回避**: デフォルト `fetch` はビルド時の値で固まる。鮮度が要るなら `no-store`（Dynamic化）か `revalidate`（ISR）
- **Streaming SSR でブロック回避**: `<Suspense>` で重い処理を切り離し、準備できた部分から順次表示
- **結論**: 「SC で直接データ取得、重い部分は `<Suspense>`、ブラウザ起点なら CC + フック」がApp Routerのベストプラクティス

---

<!-- _class: chapter -->

# 6. 圧倒的な表示速度を支える4つのキャッシュ層

> Next.js の根幹をなす多層キャッシュアーキテクチャの完全理解

---

<!-- _class: objectives -->

# この章で学ぶこと

- Next.js が4層のキャッシュを **どこに・どれくらいの期間・誰のため** に持つかを把握する
- **Request Memoization** で `Prop Drilling` を廃止し「必要な場所で `fetch`」設計が成立する理由を理解する
- **Data Cache** の永続性と、`revalidateTag` / `revalidatePath` で **手動破棄** できる仕組みを学ぶ
- **Full Route Cache** が Static Rendering と連携して **SC 実行をゼロ** にする仕組みを理解する
- **Client Route Cache** とプリフェッチが画面遷移を **瞬時化** する仕組みを知る
- 4層が連携してリクエストを処理する **全体の流れ** を追える

> 💡 用語の前提：**メモ化（Memoization）** = 同じ計算結果を覚えておいて再利用する技法／ **Prop Drilling** = 親→子→孫…と props をバケツリレーして渡すこと／ **revalidate** = キャッシュを再検証して更新すること

---

## 6-1. Next.js のキャッシュ思想 — なぜ4層も必要なのか

> Next.js は **「可能な限りすべてをキャッシュする」** 思想。重い処理を繰り返さずに済むよう、**4層が住み分け**して取りこぼしをなくす

**そもそも「キャッシュ」って何？**

データや計算結果を**一時保存しておいて、次に同じものが要求されたら再計算せず即返す仕組み**。再計算 / 通信 / DB問い合わせの**省略** = 速度とコストの最適化

**4層は「保存場所」と「生存期間」が違う：**

| # | 層 | 保存場所 | 範囲 | 生存期間 |
|---|---|---|---|---|
| 1 | **Request Memoization** | サーバーメモリ | 1リクエスト内 | 数百ミリ秒 |
| 2 | **Data Cache** | `.next/cache/` ファイル | 全ユーザー横断 | 永続（手動 or `revalidate`） |
| 3 | **Full Route Cache** | `.next/server/app/` ファイル | ページ全体 | ビルド or `revalidate` まで |
| 4 | **Client Route Cache** | ブラウザメモリ | 同一ユーザーの遷移間 | タブを閉じるまで |

> 💡 上から下に進むほど **生存期間が長く・範囲が広く** なる。短期1層と長期3層の組み合わせで、用途別に最適化される

---

## 6-2. Request Memoization — 同一リクエスト内の `fetch` 重複排除

> 同じURLへの `fetch` を**1ページ内に何回書いても、サーバーへの実通信は1回だけ**

### 💡 本プロジェクトの実例：`/request-memorization` ページ

```tsx
// src/app/(practice)/request-memorization/page.tsx
<Box>
  <DynamicServerDataFetch />   {/* 👈 ① fetch('/todos/random') */}
  <RequestMemorization />      {/* 👈 ② fetch('/todos/random') ← 同じURL */}
</Box>

// 両SCの中身は同じ fetch（RequestMemorization.tsx / DynamicServerDataFetch.tsx）
await fetch("https://dummyjson.com/todos/random", { cache: "no-store" });
```

→ 画面には **2つとも同じid・同じtodo** が表示される（実通信は1回だから）

### 🔍 `fetch` が呼ばれた時の探索フロー（Static / Dynamic 共通）

```
fetch('/todos/random') 実行
   ↓
① Memoization（このリクエスト内のメモリ）を確認
    ├─ HIT  → 💾 即返却（通信ゼロ）✅
    └─ MISS ↓
② Data Cache（.next/cache の永続キャッシュ）を確認 ※ no-store ならスキップ
    ├─ HIT  → 💾 即返却 ✅
    └─ MISS ↓
③ 🌐 サーバーへ実通信 → 結果を Memoization & Data Cache に保存
```

> 🔑 **`fetch` は必ず①→②→③の順でキャッシュを探す**。Memoization が最初に当たる最も内側の壁
> ⚠️ **Client Component（CC）は対象外**。同じURLでも CC からの fetch は別途通信が走る

---

## 6-3. Data Cache — 実コード `DataCache2.tsx` で実感する

> Memoization と違い、**ユーザー・時間帯を跨いで**データを使い回す。`.next/cache/` に物理ファイルとして永続保存

```tsx
// src/components/DataCache2.tsx
const DataCache2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));  // 👈 重い処理シミュ(5秒)
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache",   // 👈 デフォルト。.next/cache/ に保存される
  });
  return <Box>{/* todo を表示 */}</Box>;
};
```

**動作：** 初回は5秒待たされる → 2回目以降（別ユーザー含む）は `.next/cache/` からHITで**瞬時** ⚡

**fetch オプションでキャッシュ挙動が変わる：**

| オプション | Data Cache の挙動 |
|---|---|
| `cache: 'force-cache'`（デフォルト） | 保存・無期限で再利用 |
| `cache: 'no-store'` | 保存しない（毎回新規通信） |
| `next: { revalidate: 60 }` | 60秒で期限切れ → 自動再取得 |

> 💡 重い集計や外部 API 通信を **全ユーザー共通で1回だけ** 行えば済む。DB通信をほぼゼロに削減

---

## 6-3-2. 📦 補足：Data Cache はいつ書き込まれる？

> 結論：**ビルド時にも書き込まれる**。Static ページなら全ユーザー分が事前に用意される

**Static か Dynamic かで SC（と中の `fetch`）が走るタイミングが変わる：**

| レンダリング種別 | SCの実行タイミング | Data Cache への書き込み |
|---|---|---|
| 🏗️ **Static**（`○`） | **ビルド時に1回だけ** | ビルド時に `.next/cache/fetch-cache/` へ保存 → デプロイに同梱 |
| 🚀 **Dynamic**（`ƒ`） | **リクエスト毎に毎回** | 1回目のリクエストで保存、以降HIT |

**何が Static / Dynamic を決める？** SC内の `fetch` や API 利用で**自動判定**：

```tsx
fetch('...')                              // 🏗️ Static（force-cache がデフォルト）
fetch('...', { next: { revalidate: 60 } })// 🏗️ Static（ISR）
fetch('...', { cache: 'no-store' })       // 🚀 Dynamic
cookies() / headers() / searchParams      // 🚀 Dynamic
```

→ ひとつでも Dynamic 要素が混ざるとページ全体が Dynamic 扱いに切り替わる

> 🔑 **Static = ビルド時に作り置き、Dynamic = 注文ごとに調理**（飲食店の比喩）

---

## 6-4. Data Cache の手動破棄 — `DataCache1.tsx` のタグ運用

> 「投稿が編集された」「在庫が変わった」など、**自動更新を待たず手動で無効化**したい場面に使う

```tsx
// ① src/components/DataCache1.tsx — fetch にタグを付与
const res = await fetch(url, { cache: "force-cache", next: { tags: ["todo"] } });

// ② Server Action — 書き込み後に該当タグを破棄
'use server';
import { revalidateTag } from 'next/cache';
export async function updateTodo(id: number, data: TodoData) {
  await db.todo.update({ where: { id }, data });
  revalidateTag('todo');  // 👈 "todo" タグの全キャッシュを破棄
}
```

| 破棄API | 対象 | 使う場面 |
|---|---|---|
| `revalidatePath('/blog')` | 指定パスのキャッシュ | 特定ページだけ更新 |
| `revalidateTag('todo')` | タグ付き fetch キャッシュ | 横断的に関連データを破棄 |
| `updateTag('todo', value)` | タグキャッシュを差分更新 | より細かい制御（Next.js 15+） |

> 🔑 自動キャッシュは「**書き込み**」のタイミングで手動破棄を呼ぶ。これがないと古いデータが残る

---

## 6-5. Full Route Cache — ページ全体を「作り置き」しておく仕組み

> Static ページの**完成済みHTMLをサーバーに保存**し、リクエストが来たらそのまま返す

### 🍱 例えるなら「定食の作り置き」

```
[Dynamic ページ]（注文ごとに調理）
👤 リクエスト → 🖥️ SC実行 → 🗄️ DB問い合わせ → HTML生成 → 返却

[Static ページ + Full Route Cache]（作り置き済み）
🏗️ ビルド時に1回だけ調理 → 💾 完成HTMLを保存
👤 リクエスト → 💾 保存品をそのまま返却 ⚡（SC実行ゼロ・DB通信ゼロ）
```

### 🤔 全ページがキャッシュされる？ → Static のみ

| ページ種別 | キャッシュ | 具体例 |
|---|:-:|---|
| **Static**（`○`） | ✅ ビルド時に作り置き | Aboutページ・ブログ記事・静的な商品ページ |
| **Dynamic**（`ƒ`） | ❌ 毎回調理 | マイページ・検索結果・カート |

→ 「**全員に同じHTMLを返せるか？**」が Static / Dynamic の分かれ目

### 🔄 作り置きを捨てるタイミング

`revalidatePath('/about')` 呼び出し（手動）／`revalidate: 60` 期限切れ（自動）／次のデプロイ時

> 🔑 全員に同じものを返せるページは **SC実行ゼロ・DB通信ゼロ** で配信できる究極の高速化

---

## 6-6. Client Route Cache — リンクが「ほぼ瞬時」になる仕組み

> ブラウザのメモリに表示済み・先読み済みのページを保存しておく仕組み

### 🎯 体感の違い

```
普通のサイト  : クリック → 🌐 通信 → 白画面 → ロード(0.3〜1秒) → 表示
Next.js<Link> : ホバー → 🔮 先読み → クリック → ⚡ 即表示（通信ゼロ）
```

### ✅ キャッシュが効く3つの場面

| シーン | 動作 |
|---|---|
| ホバー → クリック | 先読み済みのデータで即表示 |
| 戻る／進むボタン | メモリから即復元（再fetch不要） |
| 30秒〜5分以内に再訪問 | キャッシュHIT |

**やることは1つ — `<a>` を `<Link>` に変えるだけ：**

```tsx
import Link from 'next/link';
<Link href="/products/123">商品を見る</Link>  // 先読み＋キャッシュが自動で効く
```

> 💡 保持時間は `next.config.js` の `staleTimes` で調整可能

---

## 6-7. 4層キャッシュ連携 — 1リクエストの旅

> リクエストがブラウザから DB手前まで進む過程で、**各層がHIT/MISSを判定し合う**。上の層でHITすれば処理終了

```text
① Client Route Cache（ブラウザ）
     HIT → 即表示 ✅（外との通信ゼロ）
     ↓ MISS
② Full Route Cache（サーバー）
     HIT → 保存済みHTMLを返す ✅（SC実行ゼロ）
     ↓ MISS（Dynamicページ or 期限切れ）
③ Request Memoization（同一リクエスト内）
     HIT → メモリの結果を返す ✅
     ↓ MISS（初回 fetch）
④ Data Cache（サーバーファイル）
     HIT → キャッシュファイルを返す ✅
     ↓ MISS
   外部API / DB に実際の問い合わせ
```

> 🔑 **より上の層でHITするほど速い**。開発者が意識しなくても、`fetch` を書いて Static Rendering にするだけで全層が自動連携する

---

<!-- _class: summary -->

## 第6章まとめ

**キャッシュアーキテクチャの真髄**

- **キャッシュ思想**: 「可能な限り全てキャッシュ」がデフォルト。**4層が住み分け**して取りこぼしを防ぐ
- **Request Memoization**: 1リクエスト内の同一URL `fetch` を自動排除。**Prop Drillingを廃止**し「必要な場所で取る」設計が成立
- **Data Cache**: `.next/cache/` に物理保存される全ユーザー横断の永続キャッシュ。**`revalidateTag` / `revalidatePath` で手動破棄** も可能
- **Full Route Cache**: Static ページの HTML+Payload を `.next/server/app/` に事前保存。**SC 実行ゼロで配信**
- **Client Route Cache**: ブラウザメモリで Payload キャッシュ。**`<Link>` プリフェッチで遷移を瞬時化**
- **結論**: 4層が連携することで **DB通信ゼロ・SC実行ゼロ・遷移待ちゼロ** の究極のUXが成立する

---

<!-- _class: chapter -->

# 7. ファイルシステム規約と高度なルーティング

> Next.js の魔法を支える「予約されたファイル名」の完全理解

---

<!-- _class: objectives -->

# この章で学ぶこと

- `page.tsx` / `layout.tsx` / `loading.tsx` / `error.tsx` / `not-found.tsx` / `global-error.tsx` の役割を区別できる
- `layout.tsx` の `children` props で「枠は変えず中身だけ差し替える」設計を理解する
- `loading.tsx` が自動で `<Suspense>` に、`error.tsx` が `<ErrorBoundary>` になる仕組みと **発動シーン**を把握する
- **Dynamic Segments** `[id]` で無限のURLを**1ファイル**で処理できる
- **Route Groups / Parallel Routes / Intercepting Routes** の使いどころを知る
- `route.ts` で API、`middleware.ts` で全リクエスト前処理、`public/` で静的ファイル配信
- 本プロジェクトの実フォルダ構成と各ファイルの実装を読める

> 💡 用語の前提：**規約は設定に勝る (Convention over Configuration)** = 細かい設定を書かずに「決まったファイル名」だけで動くようにする思想

---

## 7-1. 「規約は設定に勝る」— 予約ファイル名で全てが組み上がる

> 決まった名前のファイルを置くだけで、フレームワークが裏側で `<Suspense>` / `<ErrorBoundary>` / Router 等の複雑な配線を**自動で**組み上げる

### 📁 本プロジェクトの実フォルダ構成

```text
src/
├── middleware.ts                    ← 全リクエスト前の関所
└── app/
    ├── layout.tsx                   ← サイト全体共通レイアウト
    ├── loading.tsx                  ← ルート全体の読み込み中UI
    ├── not-found.tsx                ← 404画面
    ├── page.tsx                     ← URL: /
    ├── @header/                     ← Parallel Route（並列ペイン）
    ├── @modal/                      ← Parallel Route（モーダル）
    ├── api/sample/route.ts          ← APIエンドポイント /api/sample
    └── (practice)/                  ← Route Group（URLには出ない）
        ├── streaming-ssr/
        │   ├── layout.tsx           ← セグメント専用レイアウト
        │   ├── loading.tsx          ← 〃 ローディング
        │   ├── error.tsx            ← 〃 エラー画面
        │   └── page.tsx
        └── static-rendering/[id]/page.tsx   ← Dynamic Segment
```

> 🔑 React 単体だと自分で配線するもの全てを、**ファイル名だけで完成**させる思想

---

## 7-2. `layout.tsx` — 全画面共通の枠を作る

> ディレクトリ以下すべての `page.tsx` を子として包む共通枠。**画面遷移しても再レンダリングされず、状態が保持される**

```tsx
// src/app/layout.tsx — ルート（全画面に適用される）
export default function RootLayout({
  header,    // 👈 @header/page.tsx の中身（Parallel Route）
  children,  // 👈 通常の page.tsx がここに入る
  modal,     // 👈 @modal/page.tsx の中身
}) {
  return (
    <html lang="en">
      <body>
        <Box>
          <span>Root Layout</span>
          {header}
          <NavigationHooks />
          {children}        {/* ← 各ページのUIが流し込まれる */}
          {modal}
        </Box>
      </body>
    </html>
  );
}
```

**ネスト可能：** `src/app/(practice)/streaming-ssr/layout.tsx` を置けば、その配下のページにだけ追加の枠が適用される

> 🔑 状態保持の威力：`<NavigationHooks />` の状態・スクロール位置・動画再生などが、**遷移しても止まらない／飛ばない**

---

## 7-2-2. 補足：`children` ってなに？ — 「中身を後から差し込める箱」

> 開始タグと閉じタグの**間に書いた中身**が `children` という名前で渡される仕組み

```tsx
// 📦 箱を作る側（受け取る）
function MyBox({ children }) {
  return <div className="border">{children}</div>;  // 👈 ここに差し込まれる
}

// 🎁 箱を使う側（中身を渡す）
<MyBox>Hello!</MyBox>           // children = "Hello!"
<MyBox><h1>タイトル</h1></MyBox>  // children = <h1>タイトル</h1>
```

### 🎯 `layout.tsx` の場合：URLに応じて children が自動で差し替わる

```
URL: /about           URL: /products
┌─────────────┐      ┌─────────────┐
│ Header      │      │ Header      │  ← 変わらない
├─────────────┤  →   ├─────────────┤
│ AboutPage   │      │ ProductPage │  ← children だけ差し替わる
├─────────────┤      ├─────────────┤
│ Footer      │      │ Footer      │  ← 変わらない
└─────────────┘      └─────────────┘
```

→ `/about` なら `app/about/page.tsx`、`/products/123` なら `app/products/[id]/page.tsx` の中身が自動で入る

> 🔑 「**枠は変えず、中身だけ差し替える**」仕組み。だから遷移しても Header 等の状態が保持される

---

## 7-3. `loading.tsx` — 「読み込み中…」を自動表示

> 重いページがロード中の間、**白画面の代わりに表示するUI**。ファイル名で自動配線

**🤔 何が嬉しい？（DBから3秒かかるページの例）**

```
なし: 👤クリック → 😰 白画面で3秒待つ → 🎉 表示
あり: 👤クリック → ⏳「読み込み中…」 → 🎉 表示  （Header/Footer は即表示）
```

**💻 やることは1つ — この名前でファイルを置くだけ：**

```tsx
// src/app/loading.tsx
const RootLoadingPage = () => <Box>Root Loading....</Box>;
export default RootLoadingPage;
```

**階層別に切り替え可能：**

```text
src/app/
├── loading.tsx                          ← 全ページのデフォルト
└── (practice)/streaming-ssr/loading.tsx ← /streaming-ssr 専用
```

> 🔑 ファイル1つで「重い処理中のUX」が完成

---

## 7-3-2. 補足：`loading.tsx` はどうやってトリガーされる？

> SC内の `await` が待ち中か？を React Suspense の仕組みで Next.js が監視している

```
👤 アクセス → 🖥️ SC実行 → ⏸️ await中（ペンディング）→ ⏳ loading.tsx 表示
                                                  → 🎉 await完了で結果に差し替え
```

**🎯 表示される条件：**

| 場面 | loading表示？ |
|---|:-:|
| SC内で `await fetch / db.query` | ✅ |
| `await new Promise(setTimeout, 3秒)` | ✅ |
| 同期的なSC（awaitなし） | ❌（そもそも待ち時間ゼロ） |
| Client Component (`"use client"`) | ❌（対象外） |

**🧪 本プロジェクトの実例：**

```tsx
// src/components/DelayServerDataFetch.tsx（/streaming-ssr で使用）
await new Promise(r => setTimeout(r, 3000));  // 👈 3秒スリープ中、loading表示
```

> 🔑 Next.js は loading.tsx を見つけたら配下の page.tsx を**自動で `<Suspense fallback>` でラップ**するだけ

---

## 7-4. `error.tsx` — エラー時に「ごめんなさい画面」を出す

> 一部でエラーが起きても**そこだけ差し替え**。Header等は無傷のまま（白画面回避）

```
[なし] 😱 SC内で throw → 全画面が真っ白！ Header/Sidebar も消える
[あり] 🛡️ エラー部分だけ「ごめんなさい+再試行ボタン」に差し替え。他は無傷
```

```tsx
// src/app/(practice)/streaming-ssr/error.tsx
'use client'   // 👈 必須（クライアント側で動かす）
export default function StreamingSsrError({
  error,           // 👈 投げられたエラー情報
  unstable_retry,  // 👈 押すとSCが再実行される（再fetch→再描画）
}) {
  return (
    <Box>
      <p>{error.message}</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </Box>
  )
}
```

→ `page.tsx` 内で `throw new Error(...)` した時、Header は残ったまま中身だけ切替

> 🔑 ボタンで**そのセクションだけ再描画**。ページ全リロード不要

---

## 7-4-2. `error.tsx` vs `global-error.tsx` — 守備範囲の違い

> `error.tsx` は Header残しで**中身だけ**守る。Header自体が壊れたら `global-error.tsx` の出番

```
🛡️ error.tsx → ┌─ Header（無傷）─┐         普段はこっち
                │  ❌ Pageだけ差替 │
                └──────────────────┘
🛡️ global-error.tsx → ❌ <html>ごと差替（Headerも消える）  最終手段
```

```tsx
// src/app/global-error.tsx
'use client'
export default function GlobalError({ error, unstable_retry }) {
  return (<html><body>      {/* 👈 必須！layout自体を置き換えるから */}
    <p>{error.message}</p>
    <button onClick={() => unstable_retry()}>Try again</button>
  </body></html>)
}
```

| ファイル | カバー範囲 | 発動場面 |
|---|---|---|
| `error.tsx` | layout の children 以下 | page/SC のエラー |
| `global-error.tsx` | `<html>` から全部 | layout 自体のエラー |

> 🔑 普段は `error.tsx`、layout が壊れた時の最終防衛線が `global-error.tsx`

---

## 7-4-3. 発動シーン例 — どんな時にどっちが出る？

> 「エラーが起きた場所が **layoutの中身 or layout自体** か」で発動ファイルが決まる

### 🛡️ `error.tsx` が出る代表例（layoutの中身でエラー）

| シーン | 発動 |
|---|:-:|
| `page.tsx` の SC で `await fetch` が500/タイムアウト | ✅ |
| DB接続失敗・Prisma クエリ失敗（SC内） | ✅ |
| `notFound()` 呼出 | ❌ → not-found.tsx へ |

```tsx
// src/app/products/page.tsx — error.tsx 発動の典型
const ProductsPage = async () => {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error('商品取得失敗');  // 👈 error.tsx発動
};
```

### 💥 `global-error.tsx` が出る代表例（layout自体でエラー）

| シーン | 発動 |
|---|:-:|
| `layout.tsx` の SC で fetch 失敗（共通設定取得など） | ✅ |
| Provider 初期化失敗（認証/テーマプロバイダ等） | ✅ |

> 🔑 layout は error.tsx の**外側**。layoutで投げると error.tsx は守れない

---

## 7-5. `not-found.tsx` — 404画面を任意の場所に配置

> 存在しないURLへのアクセス、または `notFound()` 関数が呼ばれた時に自動表示

### 🎯 発動シーン

| シーン | 例 |
|---|---|
| 存在しないURL | `/no-such-page` にアクセス → 自動発動 |
| データが見つからない | DB に該当 ID なし → `notFound()` を呼ぶ |
| 認可失敗 | 本プロジェクト：トークン不正なら 404 へ飛ばす |

```tsx
// src/app/not-found.tsx — ルートの404画面
const NotFoundPage = () => <Box><span>Not Found Page</span></Box>;
export default NotFoundPage;
```

**手動発動の実例（本プロジェクト）：**

```tsx
// src/app/(practice)/static-rendering/page.tsx
import { notFound } from "next/navigation";
const token = (await cookies()).get("token")?.value;
if (token !== "abc") notFound();   // 👈 トークン不正で 404 画面へ
```

> 🔑 「データが見つからない／権限がない」を **try/catch なしで簡潔に404化**できる

---

## 7-6. Dynamic Segments `[id]` — 無限のURLを1ファイルで対応

> 商品ID・ユーザー名など**動的な値**をURLから受け取って同じテンプレートで処理する

### 🤔 なぜ必要？ — 1万商品のECサイトの場合

```
なし: products/1/, 2/, 3/, …, 10000/page.tsx 😰 1万ファイル！
あり: products/[id]/page.tsx  ← 1ファイルで全商品OK ✨（/products/123 も /abc も処理）
```

### 💻 本プロジェクトのコード

```tsx
// src/app/(practice)/static-rendering/[id]/page.tsx
export default async function Page({ params }: {
  params: Promise<{ id: string }>   // 👈 Next.js 15+ は Promise!
}) {
  const { id } = await params       // 👈 await で取り出す
  return <Box>ID: {id}</Box>
}
```

| 他のパターン | フォルダ |
|---|---|
| `/blog/2026/05/title`（複数階層を配列で受取） | `blog/[...slug]/`（catch-all） |

> 💡 `generateStaticParams` でビルド時に全パターン Static 化可能

---

## 7-7. Route Groups `(folder)` — URLに反映されないグループ化

> `( )` で囲んだフォルダは**URLに含まれない**。レイアウト共有・論理分類に使う

### 🎯 こんな時に使う

| 課題 | Route Group での解決 |
|---|---|
| LPとログイン後で異なるレイアウトにしたい | `(marketing)/` と `(app)/` に分ける |
| URLは `/about` のままで階層を整理したい | `(marketing)/about/page.tsx` |
| 練習用と本番ページを分けたい | 本プロジェクトの `(practice)/` がこれ |
| 認証ページ群をまとめたい | `(auth)/login`, `(auth)/signup` |

**本プロジェクトの実例：**

```text
src/app/
├── page.tsx                            → URL: /
└── (practice)/                         ← URLに出ない
    ├── streaming-ssr/page.tsx          → URL: /streaming-ssr
    └── static-rendering/page.tsx       → URL: /static-rendering
```

→ `(practice)` で「練習用」と整理しつつ、URLは綺麗なまま

> 🔑 **URLは綺麗なまま、レイアウトを役割で切り分けられる**。SaaS系で頻出

---

## 7-8. Parallel Routes `@folder` — 1画面に複数ページを同時表示

> 通常 1URL = page.tsx 1つだけ。`@`付きフォルダなら**同じURLで複数のpage.tsxを並べて表示**できる

### 🤔 何が嬉しい？（Slackみたいな画面の例）

```
通常: 1つの巨大な page.tsx に全部詰める 😰
@付き: サイドバー / メイン / 通知 を 別ファイル に分けて並べる ✨
```
例：📊 ダッシュボード／🪟 URLでヘッダー切替

### 💻 仕組み：`@フォルダ名` が layout.tsx の引数として届く

```tsx
// src/app/layout.tsx
export default function RootLayout({ header, children, modal }) {
  // 👆 @header / @modal の中身がここに届く
  return <Box>{header}{children}{modal}</Box>;
}
```

```text
src/app/@header/dynamic-rendering/page.tsx   ← /dynamic-rendering時のみ表示
src/app/@modal/(.)intercepting-route/page.tsx
```

> 🔑 1URLに**複数の独立ページを共存**させられる仕組み

---

## 7-8-2. 本プロジェクトで Parallel Routes が動く瞬間

> `@header/dynamic-rendering/page.tsx` だけ存在 → `/dynamic-rendering` の時だけ header が表示される

```tsx
// src/app/layout.tsx — 引数を受け取って並べる側
export default function RootLayout({ header, children, modal }: Readonly<{
  header: React.ReactNode;     // 👈 @header から届く
  children: React.ReactNode;   // 👈 通常の page.tsx から届く
  modal: React.ReactNode;      // 👈 @modal から届く
}>) {
  return <Box>{header}<NavigationHooks />{children}{modal}</Box>;
}
// src/app/@header/dynamic-rendering/page.tsx — header に届く実体
const DynamicRenderingHeader = () => <Box>Dynamic Rendering Header</Box>;
```

**📝 型のポイント：** `React.ReactNode` = JSX/文字列/Componentなど **画面に描画できるもの全部** を表す型

| URL | header | children | modal |
|---|:-:|:-:|:-:|
| `/` | – | `app/page.tsx` | – |
| `/dynamic-rendering` | ✅ DynamicRenderingHeader | 本体 | – |
| `/intercepting-route`（リンク） | – | フルページ | ✅ モーダル |
| `/intercepting-route`（直） | – | フルページ | – |

> 🔑 **`@フォルダ` も `page.tsx` と同じURLルーティング**。URL一致時だけ中身が引数に届く

---

## 7-9. Intercepting Routes `(..)` — 同じURLで「2つの表示」を出し分け

> 本プロジェクトでは：`/static-rendering` の **「Go to Intercepting Route」リンク**をクリックすると🪟モーダルで重なり、同じ `/intercepting-route` を**ブラウザでリロード／直接URL入力**すると📄フルページが出る、という動作を**1つのURLで**実現している

### 🎬 本プロジェクトでの動作

```
① /static-rendering で「Go to Intercepting Route」をクリック → 🪟 モーダルが重なる
② そのまま F5 リロード or URL直入力 → 📄 フルページに切替わる
```

### 💻 仕組み — 同じURLに「2つの page.tsx」が用意されている

```tsx
// src/app/(practice)/intercepting-route/page.tsx ─ 📄 フルページ版（直アクセス時）
const InterceptingRoutePage = () => <Box>Intercepting Route Page</Box>;

// src/app/@modal/(.)intercepting-route/page.tsx ─ 🪟 モーダル版（リンク経由で横取り）
const InterceptingRouteModal = () => (
  <div className='fixed inset-0 bg-black/50 ...'>
    <div className='bg-white p-4'><h2>Intercepting Route Modal</h2></div>
  </div>
);
```

→ サイト内 `<Link>` で来た時だけ `@modal` 側が**フルページの代わりに**起動

> 🔑 `(.)` 同階層 / `(..)` 1つ上 / `(..)(..)` 2つ上を横取り。**URL同期モーダルUI**が状態管理なしで実現

---

## 7-10. `route.ts` — Next.js 内蔵のAPIエンドポイント

> `page.tsx` が「画面」を返すのに対し、`route.ts` は **JSON等のデータ**を返すバックエンドAPI

### 🎯 こんな時に使う（HTTPリクエストでデータをやり取り）

| ユースケース | 発動契機 |
|---|---|
| CCから `fetch('/api/...')` で取得 | ブラウザからAJAX |
| 外部サービスからの webhook 受信 | Stripe決済通知など |
| モバイルアプリ用 API | スマホアプリからの呼出 |

```ts
// src/app/api/sample/route.ts → URL: /api/sample
import prisma from "../../../../lib/prisma";

export async function GET() {                          // GET /api/sample
  return Response.json(await prisma.user.findMany());
}

export async function POST(request: Request) {         // POST /api/sample
  const { name, email } = await request.json();
  await prisma.user.create({ data: { name, email } });
  return Response.json({ message: "作成しました" }, { status: 201 });
}
```

> 🔑 **別バックエンド不要**。Prisma で DB 直接アクセス、フロント+APIが1プロジェクトで完結

---

## 7-11. `middleware.ts` — 全リクエストの前に走る「関所」

> `page.tsx` / `route.ts` に到達する**前**に毎回実行される。`matcher` で対象URLを指定

### 🎯 発動タイミング & よくある使い道

```
👤 リクエスト → 🚦 middleware → ✅条件OK → page.tsx/route.ts 実行
                                ❌NG    → リダイレクト/拒否
```

| 用途 | 実装イメージ |
|---|---|
| 未ログイン者をログイン画面へ | `if (!cookies.get('token')) → /login` |
| ABテスト出し分け | ヘッダー/CookieでURL書換 |
| アクセスログ収集 | 全リクエストを記録 |
| BOT/不正検出 | UAやIPでフィルタ |

```ts
// src/middleware.ts — 本プロジェクト：「/」を「/static-rendering」へ
import { NextResponse } from 'next/server'
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/static-rendering', request.url))
}
export const config = { matcher: '/' }   // 👈 ルート(/)のみ対象
```

> 🔑 page.tsx 自体に手を入れずに**横断的処理を差し込める**。SC実行コストもゼロ

---

## 7-12. `public/` ディレクトリ — 静的ファイルをURLで配信

> `public/` 配下のファイルは**そのままURLでアクセスできる**静的アセット置き場

### 🎯 何を置く？

| 種類 | 例 |
|---|---|
| 画像 | `public/logo.png` → URL: `/logo.png` |
| favicon / OGP画像 | `public/favicon.ico` / `public/og.png` |
| SEO用 | `robots.txt`, `sitemap.xml` |
| ダウンロード | `public/manual.pdf` |

### 💻 本プロジェクトの実例

```tsx
// src/app/(practice)/images/page.tsx
import Image from 'next/image'
<Image src="/150x150.png" width={150} height={150} alt="..." />
//      👆 /public/150x150.png が「/150x150.png」でアクセス可能
```

> 🔑 `public/` のファイルは **`/ファイル名`** でアクセス。`next/image` で自動最適化（WebP変換・遅延読込・layout shift防止）

---

<!-- _class: summary -->

## 第7章まとめ

**規約がもたらす設計の統一と拡張性**

- **予約ファイルによる自動化**: `loading.tsx` / `error.tsx` / `not-found.tsx` / `global-error.tsx` を置くだけで `<Suspense>` / `<ErrorBoundary>` / 404・root エラーハンドラが自動適用
- **`children` propsの設計**: `layout.tsx` が枠を提供し、URLに応じて**中身だけ差し替わる**ことで状態を保ったまま遷移できる
- **柔軟なルーティング**: Dynamic Segments `[id]` で**無限URLを1ファイル**でカバー、Route Groups・Parallel Routes・Intercepting Routes で**ダッシュボードやURL同期モーダル**がディレクトリ構成だけで表現できる
- **真のフルスタック**: `route.ts` で API（Prisma経由でDB直接アクセス）、`middleware.ts` でリクエスト制御、`public/` で静的アセット配信。1プロジェクトで全てが完結
- **結論**: App Router の規約は「URLの作り方」ではなく、**世界のベストプラクティスをフォルダ名という直感的なルールに落とし込んだもの**
