# Vue プラグイン

electron-vue には `vue-cli` でのスキャフォールディングの間にインストールできる次の `vue` プラグインが入っています...

- [axios ](https://github.com/mzabriskie/axios)(web リクエスト)
- [vue-electron](https://github.com/SimulatedGREG/vue-electron) (electron API を Vue オブジェクトに付け加える)
- [vue-router](https://github.com/vuejs/vue-router) (シングルページアプリケーションのルーティング)
- [vuex](https://github.com/vuejs/vuex) (Flux にインスパイアされたアプリケーションアーキテクチャ)

---

### [`axios`](https://github.com/mzabriskie/axios)

> ブラウザーと Node.js のための Promise ベースの HTTP クライアント

`vue-resource` をよく知っている場合、 `axios` はほとんどの API がほぼ同じであるため、とても馴染みやすいでしょう。`main` プロセススクリプトで簡単に `axios` をインポートしたり、 `renderer` プロセスで `this.$http` や `Vue.http` を使用することができます。

### [`vue-electron`](https://github.com/SimulatedGREG/vue-electron)

> electron API を Vue オブジェクトに付け加え、全てのコンポーネントからアクセス可能にする vue プラグイン。

electron API に `this.$electron` で簡単にアクセスできるようにするシンプルな `vue` プラグインです。全てのコンポーネントで `electron` をインポートする必要はありません。

### [`vue-router`](https://github.com/vuejs/vue-router)

> `vue-router`  は [Vue.js](http://jp.vuejs.org/) 公式のルーターです。Vue.js でシングルページアプリケーションを構築するために Vue.js のコアと深く結びついています。

提供されるプロジェクト構造は公式で提供されている `vuejs-templates/webpack` のボイラープレートの設定と似ているため馴染みやすいでしょう。

### [`vuex`](https://github.com/vuejs/vuex)

> Vuex は Vue.js アプリケーション向けの**状態管理パターンであり、ライブラリ**でもあります。アプリケーション内の全てのコンポーネントの集中型ストアとして機能し、状態を予測可能な方法でのみ変更できることを保証するルールを備えています。

提供されるプロジェクト構造はかなり最低限ですが、`vuex` のモジュールパターンを使用してデータストアを整理することを勧めます。`@/store/modules/index.js` は `vuex` のストアが全てのモジュールをワンショットでインポートできるようにします。
