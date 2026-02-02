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

```
.
├── .devcontainer/
├── .storybook/
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── component/
│   │   └── Example/
│   │       ├── index.stories.tsx
│   │       └── index.tsx
│   └── stories/
│       ├── Button.tsx
│       ├── Button.stories.ts
│       ├── Header.tsx
│       ├── Header.stories.ts
│       ├── Page.tsx
│       ├── Page.stories.ts
│       └── assets/
├── Dockerfile
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
├── 脆弱性アップグレードメモ.md
└── 開発途中メモ.md
```

### 各ディレクトリ・ファイルの役割

*   `.devcontainer/`: **DevContainer の設定ファイル群**。VS Code Dev Containers を使用して、開発環境の構築と設定を定義します。
*   `.storybook/`: **Storybook の設定ファイル群**。`main.ts` や `preview.ts` など、Storybook の動作やアドオンをカスタマイズするためのファイルが含まれます。
*   `src/`: **アプリケーションのソースコードが配置される主要なディレクトリ**です。
    *   `src/App.tsx`: **アプリケーションのルートコンポーネント**。ここで定義された内容がブラウザに表示されるアプリケーションの基盤となります。
    *   `src/index.tsx`: **アプリケーションのエントリポイント**。`App.tsx` コンポーネントをブラウザの DOM にマウントし、React アプリケーションを起動します。
    *   `src/component/`: **再利用可能なコンポーネントが配置されるディレクトリ**です。
        *   `src/component/Example/`: 例として作成されたコンポーネントのディレクトリです。
            *   `src/component/Example/index.stories.tsx`: `Example` コンポーネントの Storybook ストーリー定義。コンポーネントの異なる状態を視覚的に確認できます。
            *   `src/component/Example/index.tsx`: `Example` コンポーネント本体のソースコードです。
    *   `src/stories/`: **Storybook の初期化時に生成されたサンプルストーリーとコンポーネント**が配置されます。これらは Storybook の使い方を学ぶための良い参考になります。
        *   `src/stories/Button.tsx`, `Header.tsx`, `Page.tsx`: サンプルとして提供される UI コンポーネントです。
        *   `src/stories/Button.stories.ts`, `Header.stories.ts`, `Page.stories.ts`: サンプルコンポーネントの Storybook ストーリー定義です。
        *   `src/stories/assets/`: サンプルストーリーで使用されるアセット（画像など）が配置されます。
*   `Dockerfile`: **Docker コンテナのビルド手順を定義するファイル**です。開発環境や本番環境をコンテナ化する際に使用されます。
*   `package.json`: **プロジェクトのメタデータ、依存関係、およびスクリプトを定義するファイル**です。`pnpm install` コマンドでインストールされるパッケージや、`pnpm start` のような実行コマンドがここに記述されます。
*   `README.md`: **プロジェクトの概要、セットアップ方法、使い方、貢献方法などを記述するファイル**です。プロジェクトの顔となる重要なドキュメントです。
*   `tsconfig.json`: **TypeScript コンパイラの設定ファイル**です。TypeScript コードを JavaScript にコンパイルする際のルールやオプションを定義します。
*   `webpack.config.js`: **Webpack の設定ファイル**です。アプリケーションのソースコードをバンドルし、ブラウザで実行可能な形式に変換する方法を定義します。
*   `脆弱性アップグレードメモ.md`: **脆弱性に関するメモ**が記載されたファイルです。セキュリティ関連の重要な情報が記録されています。
*   `開発途中メモ.md`: **開発中のメモ**が記載されたファイルです。プロジェクトの進捗や一時的な情報が記録されます。