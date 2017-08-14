# 入口 `index.html`

在产品阶段，electron-vue 使用 [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin) 创建 `index.html`。在开发过程中，你将在 `src/` 目录中找到一个 `index.ejs`。在这里，你可以更改 HTML 入口文件。

如果你不熟悉这个插件的工作原理，那么我鼓励你看看它的 [文档](https://www.npmjs.com/package/html-webpack-plugin)。简而言之，这个插件会自动将产品阶段的资源（包括 `renderer.js` 和 `styles.css`）注入到最终压缩版的 `index.html` 中。

### 开发阶段的 `index.ejs`

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
    <!-- webpack 的构建会被自动注入 -->
  </body>
</html>
```

### 产品阶段的 `index.html` \(非压缩版\)

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

### 关于 CDNs 的使用

虽然使用 CDN 提供的资源有益于你的应用程序的最终版本的大小，但我建议不要使用它们。主要原因是，通过这样做，你其实是在假设你的应用程序始终可以访问互联网，而 Electron 应用程序并不总是如此。这成为使用 CSS 框架（如 bootstrap）的一个相当重要的问题，因为没有互联网，你的应用程序将迅速变得没有任何样式并且乱七八糟。

> “我不在乎，我还是想用CDN。”

如果你坚持使用 CDN，那么你仍可以通过将标签添加到 `src/index.ejs` 文件中达到目的。只是当你的应用程序处于离线模式时，请确保设置适当的 UI/UX 流程。
