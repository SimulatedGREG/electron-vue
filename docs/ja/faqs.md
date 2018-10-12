# FAQ

- [`npm run dev` を実行した後に electron アプリケーションが空白になるのはなぜですか？](#why-is-my-electron-app-blank-after-running-npm-run-dev)
- [electron アプリケーションがファイルエクスプローラーを表示するのはなぜですか？](#why-does-my-electron-app-show-a-file-explorer)
- [`vue-devtools`/`devtron` が見つからないと言われるのはなぜですか？](#why-is-vue-devtoolsdevtron-missing)
- [静的なアセットはどこに置けば良いですか？](#where-do-i-put-static-assets)
- [`npm run lint` がエラーで終了するのはなぜですか？](#why-did-npm-run-lint-end-with-an-error)
- [アプリケーションが web ブラウザで読み込めないのはなぜですか？](#why-cant-i-load-my-app-in-a-web-browser)
- [`jquery` はどうやってインポートするのですか？](#how-do-import-jquery)
- [`main` プロセスはどうやってデバッグするのですか？](#how-can-i-debug-the-main-process)

---

## `npm run dev` を実行した後に electron アプリケーションが空白になるのはなぜですか？

#### 要約

`webpack-dev-server` を改ざんする個人用の**プロキシ**がないことを確認してください。

## electron アプリケーションがファイルエクスプローラーを表示するのはなぜですか？

#### 要約

`src/renderer` にエラーがあります。コンソールを確認し、エラーを修正し、`CommandOrControl+R` で electron を更新してください。

##### 詳細

`src/renderer` にエラーがある場合、最初の実行時に ESLint と競合が発生します。次に、無効な webpack の `renderer.js` が作成され、`HtmlWebpackPlugin` が `index.html` を作成するのを中断します。`webpack-dev-server` は提供可能な `index.html`  がないので、サーバーはファイルエクスプローラーを表示します。

## `vue-devtools`/`devtron` が見つからないと言われるのはなぜですか？

初めて起動するときに、開発者ツールのパネルがないときは閉じて再度開いてください。また、インストール中にエラーメッセージが発生していないか、ターミナルを確認してください。

## 静的なアセットはどこに置けば良いですか？

[**静的なアセットの使用**](using-static-assets.md)

## `npm run lint` がエラーで終了するのはなぜですか？

ESLint のデフォルトの性質は、リントエラーをコンソールに表示することです。もし何か見つかった場合は、スクリプトは0でない値を返し終了します(これが npm エラーを作成します)。これは正常な動作です。

## アプリケーションが web ブラウザで読み込めないのはなぜですか？

[#195](https://github.com/SimulatedGREG/electron-vue/issues/195)

## `jquery` はどうやってインポートするのですか？

`bootstrap` を使いたい場合、あなたを止めなければなりません。`vue` と `jquery` の両方を同じ環境で使用することはバッドプラクティスであり、2つのフレームワークが互いに衝突することにつながります。`vue` を JavaScript 関数的に使用する `bootstrap` の代替を使用することを強くお勧めします。お勧めは、[`bootstrap-vue`](https://github.com/bootstrap-vue/bootstrap-vue) と [`vue-strap`](https://github.com/yuche/vue-strap) です。何らかの理由で `jquery` を使用しなければならない場合、`webpack`の `ProvidePlugin` に関するドキュメントを詳しく調べるか [#192](https://github.com/SimulatedGREG/electron-vue/issues/192) を参照してください。

## `main` プロセスはどうやってデバッグするのですか？

`electron@^1.7.2` 以上を使用している場合、Google Chrome を開き、`chrome://inspect` にアクセスし、アプリケーションが開発モードで起動している間に、リモート electron プロセスを開くことができます。

[Electron のドキュメント](https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md)
