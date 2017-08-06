# 静的アセットの使用

もし以前に `vuejs-templates/webpack` ボイラープレートを使用したことがある場合、 `static/` ディレクトリに詳しいでしょう。ここは `main` プロセスや `renderer` プロセスが使用する静的アセットを配置する場所です。 これらのアセットを Vue アプリケーション内で使用するのは簡単ですが、フルパスを必要とする `fs` や他のモジュールで使用するのには少し難解です。幸いなことに、electron-vue は開発、本番で `static/` ディレクトリまでのパスを返却する `__static` 変数を提供しています。

### Vue コンポーネント内で `src` タグを使用する場合

画像を読み込むコンポーネントがありますが、他のタスクが完了するまで画像のパスが分からないとします。物事を簡単にするために、 `<img>` の src をバインドするために、 `data` 変数を使用しましょう。

**SomeComponent.vue**

```html
<template>
  <img v-bind:src="imageUrl">
</template>
<script>
  export default {
    data () {
      // URL が `static/` から始まることに注意してください
      return { imageUrl: 'static/imgs/unsplash.png' }
    }
  }
</script>
```

`webpack` は `unsplash.png` をバンドルしません。アプリケーションは `static/imgs/unsplash.png` ディレクトリ内を調べます。`vue-loader` のおかげで、全てのめんどくさいことを代わりにやってくれます。

### JS で `fs`、`path`、`__static` を使用する場合

`fs` を使用してアプリケーションに読み込む必要のある静的アセットがある場合、開発と本番の両方で `static/` ディレクトリまでの信頼できるパスを取得するにはどのようにすれば良いでしょうか？electron-vue は `static/`  ディレクトリまでの適切なパスを返却する `__static` という名前のグローバル変数を提供しています。ここでは、開発と本番の両方で簡単なテキストファイルを読むためにそれを使う方法を示します。

**static/someFile.txt**

```txt
foobar
```

**SomeFile.js (**`main`** プロセスもしくは **`renderer`** プロセス)**

```js
import fs from 'fs'
import path from 'path'
let fileContents = fs.readFileSync(path.join(__static, '/someFile.txt'), 'utf8')
console.log(fileContents)
// => "foobar"
```

本番では全てのファイルが強く推奨されている通り、デフォルトで [`asar`](https://github.com/electron/asar) でパッケージングされていることに注意してください。このため、この挙動を認識しているので、`static/` フォルダ内のアセットは `electron` 内でのみアクセスできます。例えば外部プログラムで開けるようにユーザにファイルを配布したい場合、これらのアプリケーションのアセットをユーザのドキュメントスペースまたはデスクトップにコピーする必要があります。そこからそれらのアセットを開くために [`shell.openItem()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath)  という electron API を使用することができます。

この状況の別の解決策は特定のファイルを本番の `asar` アーカイブから "解凍" するように `electron-packager`/`electron-builder` を構成することです。electron-vue はこの方法をサポートする予定はありません。これに関連する、または設定方法に関する課題は終了します。
