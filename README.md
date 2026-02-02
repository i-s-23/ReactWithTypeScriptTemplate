# react-typescript-template

react+typescript などを使用した開発環境のテンプレート。

## Contains

1. React
2. TypeScript
3. Webpack
4. Eslint
5. prettier
6. storybook

## Usage

- Reactをローカルで起動する

```bash
pnpm start
```

- storybookをローカルで起動する

```bash
pnpm storybook
```

## Reference material

- [React を使ったモダンなフロントエンド開発の環境構築](https://qiita.com/toshi-toma/items/8ee55304f09b5840b9a4)
- [React のプロジェクトに TypeScript を導入する〜npm install からコンパイルまで〜](https://qiita.com/toshi-toma/items/080b89000ed7f0242bee)

## ディレクトリ構成と役割

このリポジトリの主要なディレクトリ構成とその役割を以下に示します。

```bash
.
├── .devcontainer/: **DevContainer の設定ファイル群**。VS Code Dev Containers を使用して、開発環境の構築と設定を定義
├── .storybook/: **Storybook の設定ファイル群**。`main.ts` や `preview.ts` など、Storybook の動作やアドオンをカスタマイズするためのファイルが含む
├── src/: **アプリケーションのソースコードが配置される主要なディレクトリ**
│   ├── App.tsx: **アプリケーションのルートコンポーネント**。ここで定義された内容がブラウザに表示されるアプリケーションの基盤になる
│   ├── index.tsx: **アプリケーションのエントリポイント**。`App.tsx` コンポーネントをブラウザの DOM にマウントし、React アプリケーションを起動する
│   ├── component/: **再利用可能なコンポーネントが配置されるディレクトリ**
│   │   └── Example/: 例として作成されたコンポーネントのディレクトリ
│   │       ├── index.stories.tsx: `Example` コンポーネントの Storybook ストーリー定義。コンポーネントの異なる状態を視覚的に確認可能
│   │       └── index.tsx: `Example` コンポーネント本体のソースコードです。
│   └── stories/: **Storybook の初期化時に生成されたサンプルストーリーとコンポーネント**が配置される。これらは Storybook の使い方の参考用
│       ├── Button.tsx: サンプルとして提供される UI コンポーネント
│       ├── Button.stories.ts: サンプルコンポーネントの Storybook ストーリー定義
│       ├── Header.tsx: サンプルとして提供される UI コンポーネント
│       ├── Header.stories.ts: サンプルコンポーネントの Storybook ストーリー定義
│       ├── Page.tsx: サンプルとして提供される UI コンポーネント
│       ├── Page.stories.ts: サンプルコンポーネントの Storybook ストーリー定義
│       └── assets/: サンプルストーリーで使用されるアセット（画像など）
├── Dockerfile: **Docker コンテナのビルド手順を定義するファイル**です。開発環境や本番環境をコンテナ化する際に使用される
├── package.json: **プロジェクトのメタデータ、依存関係、およびスクリプトを定義するファイル**。`pnpm install` コマンドでインストールされるパッケージや、`pnpm start` のような実行コマンドがここに記述される
├── README.md: **プロジェクトの概要、セットアップ方法、使い方、貢献方法などを記述するファイル**。プロジェクトの顔となる重要なドキュメント
├── tsconfig.json: **TypeScript コンパイラの設定ファイル**。TypeScript コードを JavaScript にコンパイルする際のルールやオプションを定義している
└── webpack.config.js: **Webpack の設定ファイル**。アプリケーションのソースコードをバンドルし、ブラウザで実行可能な形式に変換する方法を定義している
```
