# Webpack構成

electron-vue には `.electron-vue/` ディレクトリに置かれた3つの別々の webpack 設定ファイルが入っています。 `web` 出力のオプションは別として、 `main` と `renderer`はセットアップが似通っています。どちらも `node@7` の機能を対象にするために `babel-preset-env` を使用し、 `babili` を使用し、全てのモジュールを `externals` として扱います。

### `.electron-vue/webpack.main.config.js`

electron の `main` プロセスを対象にします。この構成はかなり最低限ですが、いくつかの一般的な `webpack` のプラクティスが含まれています。

### `.electron-vue/webpack.renderer.config.js`

electron の `renderer` プロセスを対象にします。この構成は Vue アプリケーションを取り扱うので、 `vue-loader` や公式の `vuejs-templates/webpack` ボイラープレートで使用可能なその他多くの構成が含まれます。

##### 外部依存のホワイトリスト化

この構成について考慮すべき重要なことの1つは、特定のモジュールを webpack `externals` として扱わないようにホワイトリストに登録できることです。この機能性が必要になるユースケースはあまりありませんが、 `*.vue` コンポーネントそのままを提供する Vue UI ライブラリーの場合は、ホワイトリストに登録が必要なため、 `vue-loader` はそれらをコンパイルできます。もう1つのユースケースは、フルコンパイラ＋ランタイムビルドをインポートするために `vue` を設定するなどのような webpack の `alias` を使用する場合です。このため、 `vue` はすでにホワイトリストに入っています。

### `.electron-vue/webpack.web.config.js`

ブラウザ用に `renderer` プロセスのソースコードをビルド対象にします。この設定は web に公開する必要がある場合に強力な開始基盤として提供されています。**electron-vue は提供されているもの以上の web 出力をサポートしていません。**web 出力に関する課題は延期されるかクローズする可能性が高いでしょう。
