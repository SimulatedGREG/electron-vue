# CSS 框架的使用

虽然这可能看起来并不明智，但我建议你使用 [`style-loader`](https://github.com/webpack/style-loader) 将第三方 CSS 库导入 webpack，这一点已经为你做到了。

## 实际情况

假设你要为你的程序使用 [bootstrap](http://getbootstrap.com/)、[bulma](http://bulma.io/) 或者 [materialize](http://materializecss.com/)。你可以仍旧像通常情况下一样，从 `npm` 安装你的库，而不是将资源附加到 `index.ejs`，我们将在我们的 JavaScript 中导入 CSS，特别是在 `src/renderer/main.js` 中。

#### 例子

让我们安装 `bulma`

```bash
npm install bulma --save
```

然后，在 `src/renderer/main.js` 里面加入这一行：

```bash
import 'bulma/css/bulma.css'
```

替代方案是, 你也可以在你的组建文件中引用 `bulma`。

**App.vue**

```html
<style>
  @import "~bulma/css/bulma.css";
</style>
```

现在，`webpack` 会为我们的应用程序加载 `bulma`，并使其可用于产品构建中.
