# メインプロセス

> Electron では、 package.json のメインスクリプトを実行するプロセスをメインプロセスと呼びます。 メインプロセスで実行されるスクリプトは、Webページを作成して GUI を表示できます。

[**Electron ドキュメンテーション**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)**より **

---

`main` プロセスは根本的に完全な Node 環境なので、2つのファイル以外の初期プロジェクト構造は存在しません。

#### `src/main/index.js`

このファイルはアプリケーションのメインファイルであり、 `electron` が起動するファイルです。本番向けの`webpack`のエントリーファイルとしても使われます。すべての `main` プロセスの作業はここから開始しなければなりません。

#### `app/src/main/index.dev.js`

このファイルは開発時にのみ `electron-debug` と `vue-devtools`をインストールするために使われます。このファイルを修正する必要はありませんが、開発の必要に応じて拡張することもできます。

## `__dirname` と `__filename` の使用について

`main` プロセスは `webpack` を使用してバンドルされているため、 `__dirname` と `__filename` を使用しても本番環境で期待した値は得られ **ないでしょう**。[**ファイルツリー**](/file-tree.md) を参照すると、本番環境では `main.js` が `dist/electron` フォルダの中に置かれていることがわかるでしょう。この知識に基づいて、 `__dirname` と `__filename` を適切に使用してください。

**`static/` アセットディレクトリへのパスが必要な場合は、**[**静的なアセットの使用**](/using-static-assets.md)** を参照して、とても便利な `__static` 変数について学んでください。**

```
app.asar
├─ dist
│  └─ electron
│     ├─ static/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```
