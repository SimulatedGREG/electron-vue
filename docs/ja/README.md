![](../images/logo.png)

> vue で構築された electron アプリケーションを作成するためのボイラープレートです(名前から分かるように)。

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

## 概要

このプロジェクトは vue を使用した electron アプリケーションの手動セットアップをなくすことを目標としています。electron-vue はスキャフォールディングのために `vue-cli` 、 `vue-loader` と `webpack`、 `electron-packager` または `electron-builder`、 `vue-router` や `vuex` などの最も使われているプラグインを使用します。

#### ドキュメントは [こちら](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)を確認してください。

このボイラープレートで見つけることができるもの...

- **単一の** `package.json` セットアップによる基本的なプロジェクト構造 
- 詳細な[ドキュメント](https://simulatedgreg.gitbooks.io/electron-vue/content/)
- [vue-cli](https://github.com/vuejs/vue-cli) を使用したプロジェクトスキャフォールディング
- Vue プラグイン ([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex))を使用する準備ができています*
- 開発のために [vue-devtools](https://github.com/vuejs/vue-devtools) や [devtron](https://github.com/electron/devtron) ツールのインストール
- [electron-packager](https://github.com/electron-userland/electron-packager) や [electron-builder](https://github.com/electron-userland/electron-builder) を使用して簡単にアプリケーションをパッケージングする機能*
- [electron-builder](https://github.com/electron-userland/electron-builder) による自動デプロイのための `appveyor.yml` と `.travis.yml` の設定*
- ブラウザ用の Web 出力を生成する機能
- 便利な [NPM scripts](/npm_scripts.md)
- Hot Module Replacement を伴う [webpack](https://github.com/webpack/webpack) と [vue-loader](https://github.com/vuejs/vue-loader) の使用
- electron の `main` プロセスで動いているプロセスの再起動
- [vue-loader](https://github.com/vuejs/vue-loader/) による HTML/CSS/JS プリプロセッサのサポート 
- ES6 のデフォルトは [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) です
- ES5 へトランスパイルする必要をなくすために [`babili`](https://github.com/babel/babili) の使用
- ESLint ([`standard`](https://github.com/feross/standard) と [`airbnb-base`](https://github.com/airbnb/javascript) スタイルのサポート)*
- (Karma と Mocha を使用した)ユニットテスト*
- (Spectron と Mocha を使用した)エンドツーエンドテスト*

*の箇所は `vue-cli` のスキャフォールディング中にカスタマイズ可能です

### はじめに

このボイラープレートは [`vue-cli`](https://github.com/vuejs/vue-cli) のテンプレートとして作成され、スキャフォールディングされたアプリケーションをカスタマイズするためのオプションが含まれています。`node@^7` かそれ以上のバージョンを使用する必要があります。electron-vue はパッケージマネージャの [`yarn`](https://yarnpkg.org) を公式に推奨しています。依存関係をよりよく処理し、`yarn clean` により最終的なビルドサイズを減らすことができます。

```bash
# vue-cli をインストールしボイラープレートをスキャフォールディングします
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project
# 依存関係をインストールし、アプリケーションを実行します
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

##### Windows ユーザーですか?

[**Windows ユーザーのための注意**](https://simulatedgreg.gitbooks.io/electron-vue/content/ja/getting_started.html#a-note-for-windows-users)を確認し、electron や他の依存関係で必要なビルドツールが全てあることを確認してください。

##### Vue 1 を使いたいですか?

`1.0`  ブランチを参照してください。electron-vue は `vue@^1` の使用を公式に推奨していないため、プロジェクトの構造、機能やドキュメントは これらの変更を反映していることに注意してください([**旧版のドキュメント**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs))。

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

### 次のステップ

[ドキュメント](https://simulatedgreg.gitbooks.io/electron-vue/content/) を確認してください。こちらから設定、プロジェクト構造、アプリケーションのビルドに関する有益な情報を得ることができます。便利な [FAQ](https://simulatedgreg.gitbooks.io/electron-vue/content/ja/faqs.html) セクションもあります。

## electron-vue で作られたもの

electron-vue で作られたいくつかの素晴らしいプロジェクトを見てみましょう。自身のプロジェクトをリストに追加したいですか？遠慮なくプルリクエストを送ってください。

- [**Surfbird**](https://github.com/surfbirdapp/surfbird): Electron と Vue で作られた Twitter クライアント
- [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser は Vue.js 2 と Electron でコーディングされた軽量なブラウザです。
- [**Space-Snake**](https://github.com/ilyagru/Space-Snake): Electron と Vue.js で作られたデスクトップゲーム。
- [**Forrest**](https://github.com/stefanjudis/forrest): npm scripts デスクトップクライアント
- [**miikun**](https://github.com/hiro0218/miikun): シンプルなマークダウンエディター
- [**Dakika**](https://github.com/Madawar/Dakika): 議事録を簡単に取ることができるアプリケーション
- [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc は dynamodb-local、 dynalite と AWS dynamodb のための GUI クライアントです
- [**Dockeron**](https://github.com/dockeron/dockeron): Docker のために Electron と Vue.js で作られた dockeron プロジェクト
- [**Easysubs**](https://github.com/matiastucci/easysubs): 字幕を早く簡単な方法でダウンロードする
