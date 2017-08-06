# テスト

electron-vue は `renderer` プロセスのユニットテストとエンドツーエンドテストの両方をサポートし、公式の `vuejs-templates/webpack` ボイラープレートで提供されているテスト設定に大きく影響を受けています。`vue-cli`  スキャフォールディング中にテストサポートを含めるかの選択があります。

## [ユニットテスト](unittesting.md)

Karma と Mocha でユニットテストを実行する

```bash
npm run unit
```

## [エンドツーエンドテスト](end-to-end_testing.md)

Spectron と Mocha でエンドツーエンドテストを実行する

```bash
npm run e2e
```

## 全てのテストを実行する

```bash
npm test
```

### CI テストについて

スキャフォールディング時にビルドツールとして `electron-builder` を使うことに決めた場合、`darwin`、`linux`、`win32`向けにTravis CI と AppVeyorの両方で簡単にアプリケーションをテストできます。`.travis.yml` と `appveyor.yml` の中には、コメントアウトされたセクションがあります。テストを有効にするために、セクションのコメントアウトを解除することができます。詳細については、[**CI を使用した自動デプロイ**](/using-electron-builder.md#automated-deployments-using-ci)を読んでください。** **
