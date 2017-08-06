# プリプロセッサの使用

[`webpack`](https://github.com/webpack/webpack) で [`vue-loader`](https://github.com/vuejs/vue-loader) を使用することの大きな利点の一つは、特に努力せずに Vue コンポーネントファイル内で HTML/CSS/JS を直接前もって処理できることです。詳細は[**こちら**](https://vuejs.org/v2/guide/single-file-components.html)を確認してください。

## ユースケース

CSS の前処理に Sass/SCSS を使う必要があるとします。まず、この構文を処理するために適切な `webpack` ローダーをインストールする必要があります。

#### `sass-loader` のインストール

```bash
npm install --save-dev sass-loader node-sass
```

必要なローダーがインストールされると、完成です。`vue-loader` は魔法のように残り作業をやってくれます。これで、Vue コンポーネントファイルに `lang="sass"` または `lang="scss"` を簡単に追加できます。 `sass-loader` の依存パッケージであるため、 `node-sass` もインストールしたことに注意してください。

#### `lang`  属性を適用する

これを...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

...こうします...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

他のプリプロセッサにも同じ原則が適用されます。JS に coffeescript が必要かもしれませんね？[coffeescript-loader](https://github.com/webpack/coffee-loader) をインストールして、 `<script>` タグに `lang="coffeescript"` 属性を適用するだけです。

この機能の高度な使い方については [vue-loader のドキュメント](http://vue-loader.vuejs.org/en/configurations/pre-processors.html)を参照してください。

## Sass/SCSS のグローバル使用

CSS 構文に Sass/SCSS を使用する場合、全ての Vue コンポーネントファイルでグローバルな変数/ミックスインを使用できることはとても有益です。これを実現させる方法は次のとおりです。

### ユースケース

この例は `globals.scss` を全ての Vue コンポーネントファイルに適用する方法を示しています。このドキュメントでは上述の通り、開発環境ですでに `sass-loader` が設定されていることを前提としています。

#### グローバル変数を定義する

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### `globals.scss` を `node-sass` に直接注入する

**.electron-vue/webpack.renderer.config.js** で `vue-loader` の設定を編集する

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### グローバル変数を使用する

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```
