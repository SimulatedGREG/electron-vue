# Using Pre-Processors

[`webpack`](https://github.com/webpack/webpack)과 함께 [`vue-loader`](https://github.com/vuejs/vue-loader)를 사용하면 큰 노력을 들이지 않고도 Vue components 파일에서 직접 HTML/CSS/JS를 전-처리 할 수 ​​있다는 이점이 있습니다. 이에 대한 자세한 내용은 [**여기**](https://vuejs.org/v2/guide/single-file-components.html)를 참조하세요.

## Use Case

CSS를 사전 처리하기 위해 Sass/SCSS를 사용해야한다고 가정 해봅시다. 먼저 다음 구문을 처리 할 적절한 `webpack` loader를 설치해야합니다.

#### Installing `sass-loader`

```bash
npm install --save-dev sass-loader node-sass
```

Once the loader we need is installed, everything is pretty much finished. `vue-loader` will magically take care of the rest. Now we can easily add `lang="sass"` or `lang="scss"` to our Vue component files. Notice we also installed `node-sass` as it is a dependent package for `sass-loader`.

#### Applying the `lang` attribute

So...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

...now becomes...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

The same principles apply for just about any other pre-processor. So maybe you need coffeescript for your JS? Simply install the [coffeescript-loader](https://github.com/webpack/coffee-loader) and apply the `lang="coffeescript"` attribute to your `<script>` tag.

For more advanced use of this feature please head over to the [vue-loader documentation](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) for more information.

## Using Sass/SCSS globals

When using Sass/SCSS for your CSS syntax, it's very beneficial to make use of global variables/mixins throughout all Vue component files. Here's how to make that happen.

### Use Case

This example demonstrates how to apply a `globals.scss` to all Vue component files. This documentation assumes you have already setup `sass-loader` in your development environment as mentioned above.

#### Define your globals

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### Inject `globals.scss` directly into `node-sass`

Edit the `vue-loader` config in **.electron-vue/webpack.renderer.config.js**

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### Use your globals

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```



