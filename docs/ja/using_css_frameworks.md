# CSS フレームワークの使用

これは簡単なように思えるかもしれませんが、すでに用意されている [`style-loader`](https://github.com/webpack/style-loader) を使用してサードパーティの CSS ライブラリを webpack にインポートすることをお勧めします。

## ユースケース

アプリケーションに [bootstrap](http://getbootstrap.com/) 、 [bulma](http://bulma.io/) 、 [materialize](http://materializecss.com/) を使いたいとします。いつも通り `npm` からインストールしますが、 `index.ejs` に追加する代わりに、JavaScript 、特に `src/renderer/main.js` に CSS をインポートします。

#### 例

`bulma` をインストールしましょう

```bash
npm install bulma --save
```

それでは `src/renderer/main.js` にこの行を追加しましょう。

```bash
import 'bulma/css/bulma.css'
```

また、コンポーネントファイル内に `bulma` を含めることもできます。

**App.vue**

```html
<style>
  @import "~bulma/css/bulma.css";
</style>
```

`webpack` は `bulma` を読み込み、本番ビルドで使用できるようにします。
