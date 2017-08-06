#  `index.html`

electron-vue は本番ビルドで `index.html` を作成するために [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin) を使用します。開発中は `src/` ディレクトリの`index.ejs` となります。ここではエントリーとなる HTML ファイルを変更することができます。

このプラグインがどのように動作するかわからない場合は、その[ドキュメント](https://www.npmjs.com/package/html-webpack-plugin)を見ることを勧めます。しかし要するに、このプラグインは自動的に `renderer.js` と `styles.css`  を含む本番アセットを最終的にファイルサイズを小さくし、 `index.html` に挿入します。

### 開発中の `index.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <%= ... %>
  </head>
  <body>
    <div id="app"></div>
    <!-- webpack ビルドが自動的に注入されます -->
  </body>
</html>
```

### 本番の(ファイルサイズを小さくしていない) `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>app</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="renderer.js"></script>
  </body>
</html>
```

### CDN の利用について

CDN から提供されるアセットを利用することは、アプリケーションの最終的なビルドサイズにとっては素晴らしい利点があるかもしれませんが、それらを使用することは勧めません。主な理由は、そうすることによってアプリケーションが必ずインターネットにアクセスできると仮定することになりますが、Electron アプリケーションの場合は必ずしもそうとは限りません。これは bootstrap のような CSS フレームワークではかなり重大な問題となり、アプリケーションはすぐに整っていない状態になるでしょう。

> "私は気にしません、それでも CDN を使いたいです"

それでも CDN を利用すると決めた場合は、 `src/index.ejs` ファイルにタグを追加することでできます。ただアプリケーションがオフラインの時の UI/UX フローを適切に設定してください。
