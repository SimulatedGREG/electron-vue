# エンドツーエンドテスト

electron-vue はエンドツーエンドテストのために [Spectron](http://electron.atom.io/spectron/) とテストフレームワークの [Mocha](https://mochajs.org/) ([Chai](http://chaijs.com/) と一緒に) を利用しています。Mocha と Chai の APIは、`expect`、`should`、`assert`を含め、グローバルスコープで利用可能です。

### テストの実行

```bash
# Mocha を始める
npm run e2e
```

##### 注意

エンドツーエンドテストを実行する前に、Spectron がテスト中に使用する本番ビルドを作成するために、`npm run pack` が呼び出されます。

### ファイル構造

```
my-project
├─ test
|  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ utils.js
```

**ほとんどの場合、 **`index.js`** は無視して、 **`specs/`** を書くことだけに集中できます。**

#### `specs/`

このディレクトリの中に実際のテストが書かれています。`babel-register` の機能のおかげで、ES2015にフルアクセスできます。

#### `index.js`

このファイルは Mocha のメインエントリーとして機能し、テスト用に `specs/` で書かれた全てのテストを集めます。

#### `utils.js`

ここでは、`specs/` 全体で使用することができる汎用関数を見つけることができます。基本関数には、 electron の作成/破壊プロセスを処理する `beforeEach` と `afterEach` が含まれます。

### Spectron について

Spectron は 公式の [electron](http://electron.atom.io) テストフレームワークであり、DOM 要素を操作するために [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) と [WebDriverIO](http://webdriver.io/) の両方を使用します。

#### WebDriverIO の使用

Spectron の[ドキュメント](https://github.com/electron/spectron#client)に記載されている通り、[WebDriverIO API](http://webdriver.io/api.html) へのアクセスは `this.app.client` を通してすることができます。 electron-vue は Mocha を使用しているため、`this` のコンテキストは `afterEach`、`beforeEach`、`it` の間で共有されます。このため、ES2015 のアロー関数は、`this` のコンテキストが上書きされるため、特定の状況では使用できないことに注意することが重要です([詳細はこちら](https://mochajs.org/#arrow-functions))。
