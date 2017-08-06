# ユニットテスト

electron-vue はユニットテストのためにテストランナーの [Karma](https://karma-runner.github.io/1.0/index.html) とテストフレームワークの [Mocha](https://mochajs.org/) ([Chai](http://chaijs.com/) と一緒に) を利用しています。

Mocha と Chai はそれぞれ `karma-mocha` と `karma-chai`  を使用して統合されているため、`expect` などの全ての API はテストファイルで全て使用可能です。

### テストの実行

```bash
# Karma を始める
npm run unit
```

### ファイル構造

```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ karma.conf.js
```

**ほとんどの場合、**`index.js`** と **`karma.conf.js`** は無視して **`specs/`** を書くことだけに集中できます。**

#### `specs/`

このディレクトリの中に実際のテストが書かれています。webpackのおかげで、ES2015とサポートされているローダーにフルアクセスできます。

#### `index.js`

これは `karma-webpack` で使われるエントリーファイルです。このファイルの目的は、全てのテストとソースコードをワンショットで集めることです。

#### `karma.conf.js`

ここでは、スペック/カバレッジレポーターで設定された実際の `karma`  構成を見つけることができます。さらなるカスタマイズは[公式の karma のドキュメント](http://karma-runner.github.io/1.0/config/configuration-file.html)に従って行うことができます。

### 依存関係のモック化

electron-vue にはデフォルトでインストールされた [`inject-loader`](https://github.com/plasticine/inject-loader) が付属しています。Vue コンポーネントファイルでの使用については、[`vue-loader` のドキュメントのモックでテストする](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html)を参照してください。
