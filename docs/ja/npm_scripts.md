# NPM スクリプト

開発プロセスに関する冗長なタスクを排除するために、役立つ NPM スクリプトに注目してください。次のコマンドは、プロジェクトのルートディレクトリから実行する必要があります。そしてもちろん、以下のコマンドのどれでも `yarn run <command>` を使用して実行することが可能です。

### `npm run build`

本番用にアプリケーションをビルドし、パッケージングします。詳細は [**アプリケーションのビルド**](building_your_app.md) セクションを参照してください。

### `npm run dev`

開発用にアプリケーションを実行します。

### `npm run lint`

全ての `src/` と `test/` の JS と Vue コンポーネントファイルをリントします。

### `npm run lint:fix`

全ての `src/` と `test/` の JS と Vue コンポーネントファイルをリントし、問題を解決しようとします。

### `npm run pack`

`npm run pack:main` と `npm run pack:renderer` の両方を実行します。これらのコマンドは利用可能ですが、 `npm run build` がこのステップを処理するため、手動で実行する場面はそれほど多くありません。

### `npm run pack:main`

`main` プロセスのソースコードをビルドするために webpack を実行します。

### `npm run pack:renderer`

`renderer` プロセスのソースコードをビルドするために webpack を実行します。

### `npm run unit`

Karma + Jasmine でユニットテストを実行します。詳細は[**ユニットテスト**](unittesting.md)を参照してください。

### `npm run e2e`

Spectron + Mocha でE2Eテストを実行します。詳細は[**E2Eテスト**](end-to-end_testing.md)を参照してください。

### `npm test`

`npm run unit` と `npm run e2e` の両方を実行します。詳細は[**テスト**](testing.md)を参照してください。
