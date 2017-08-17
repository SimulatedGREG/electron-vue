# 预处理器的使用

将 [`vue-loader`](https://github.com/vuejs/vue-loader) 与 [`webpack`](https://github.com/webpack/webpack) 一起使用的好处之一是能够直接在你的 Vue 组件文件中预处理你的 HTML/CSS/JS，而无需其他工作。请查询 [**这里**](https://vuejs.org/v2/guide/single-file-components.html) 相关的详细信息。

## 使用案例

假设我们需要使用 Sass/SCSS 来预处理我们的 CSS。首先，我们需要安装正确的 `webpack` 加载器来处理这种语法。

#### 安装 `sass-loader`

```bash
npm install --save-dev sass-loader node-sass
```

一旦安装了我们需要的加载器，一切就都差不多完成了。`vue-loader` 将神奇地做好其余的工作。现在我们可以轻松地将 `lang="sass"` 或 `lang="scss"` 添加到我们的 Vue 组件文件中。注意，我们还安装了 `node-sass`，因为它是 `sass-loader` 的依赖包。

#### 应用 `lang` 属性

所以...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

... 现在变成了 ...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

相同的原理适用于任何其他预处理器。那么，也许你的 JS 需要 coffeescript？只需安装 [coffeescript-loader](https://github.com/webpack/coffee-loader)，并将属性 `lang=“coffeescript”` 应用到你的 `<script>` 标签上。

要获得该功能更高级的使用情况，请转到 [vue-loader 的文档](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) 了解更多信息。

## Sass/SCSS 全局变量的使用

当使用 Sass/SCSS 作为你的 CSS 语法时，在整个 Vue 组件文件中使用 全局变量 与 混合嵌套 是非常有益的。以下是此方法的实现。

### 使用案例

此示例演示了如何将 `globals.scss` 应用于所有的 Vue 组件文件中。本文档假设你已经在开发环境中如上所述地设置了 `sass-loader`。

#### 定义你的全局变量

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### 直接向 `node-sass` 注入 `globals.scss`

在 **.electron-vue/webpack.renderer.config.js** 里编辑 `vue-loader` 的配置

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### 使用你的全局变量

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```
