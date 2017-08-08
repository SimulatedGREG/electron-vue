# レンダラープロセス

> Electron は web ページの表示に Chromium を使用するので、 Chromium の マルチプロセスアーキテクチャも使われています。Electron では web ページごとにレンダラープロセスと呼ばれる独自のプロセスが実行されます。普通のブラウザでは、webページは通常サンドボックス環境で実行され、ネイティブリソースへのアクセスは許可されません。 しかし、 electron ユーザーは、 web ページで Node.js API を使用して、より低レベルのオペレーティングシステムとのやりとりを可能にしています。

[**Electron ドキュメンテーション**](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process)**より **

---

## `vue` と `vuex` について

### vue コンポーネント

Vue コンポーネントに精通していない場合は、[こちら](https://jp.vuejs.org/v2/guide/single-file-components.html)を読んでください。 コンポーネントを使用することで、巨大で複雑なアプリケーションをより構造化することができます。各コンポーネントは CSS やテンプレートや JavaScript の関数をカプセル化することができます。

コンポーネントは `src/renderer/components` に格納されます。子コンポーネントを作成するときは、親コンポーネントの名前を持つ新しいフォルダ内に子コンポーネントを配置するのが一般的な方法です。これは、異なるルートをまとめる場合に特に便利です。

```
src/renderer/components
├─ ParentComponentA
│  ├─ ChildComponentA.vue
│  └─ ChildComponentB.vue
└─ ParentComponentA.vue
```

### vue ルーティング

`vue-router` の詳細については [こちら](https://github.com/vuejs/vue-router) をクリックしてください。手短に言うと、 electron アプリケーションを作成するときにシングルページアプリケーションを作成することはとても適しているので、 `vue-router` を使用することをお勧めします。たくさんのブラウザウィンドウを管理し、すべての間で情報をやりとりしたいですか？おそらくそうではないですよね。

ルーティングは `src/renderer/router/index.js` の中に保持され、このように定義されます...

```js
{
  path: '<routePath>',
  name: '<routeName>',
  component: require('@/components/<routeName>View')
}
```

`<routepath></routepath>` と ` <routename><routename>` はどちらも変数です。これらのルーティングは `src/renderer/App.vue` の `<router-view></router-view>` ディレクティブを使用してコンポーネントツリーにアタッチされます。

##### 注意

`vue-router` を使用するときは、 [**HTML5 ヒストリーモード**](http://router.vuejs.org/ja/essentials/history-mode.html)を使用しないでください。このモードは厳密には `http`  プロトコルを介してファイルを提供するためのもので、 electron がプロダクションビルドでファイルを提供する `file` プロトコルでは正しく動作しません。デフォルトの `hash` モードがまさに求めているものです。

### vuex モジュール

`vuex` を説明するのは簡単なことではないので、どんな問題を解決しようとしているか、どのように動作するのかをより理解するために [こちら](http://vuex.vuejs.org/ja/intro.html) を読んでください。

electron-vue `vuex` のモジュール構造を利用して複数のデータストアを作成し、`src/renderer/store/modules` に保存します。

複数のデータストアを持つことは構造的には素晴らしいですが、それぞれをインポートする必要があります。しかし、`src/renderer/store/modules/index.js` が嫌がる仕事をするので、気にしないでください！この小さなスクリプトは  `src/renderer/store/index.js` のすべてのモジュールをワンショットでインポートします。以降は、`Counter.js` モジュールを簡単に複製できることだけ知っていれば、それは "魔法のように" 読み込まれます。
