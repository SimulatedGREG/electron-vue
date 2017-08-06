# ローカルファイルの読み書き

`electron` を使用する利点の一つは、ユーザーのファイルシステムにアクセスできることです。これにより、ローカルシステム上のファイルを読み書きすることができます。Chromium の制限を回避し、アプリケーションの内部ファイルに書き込むには、`electron` の API 、特に [`app.getPath(name)`](https://electron.atom.io/docs/api/app/#appgetpathname) 関数を使用してください。このヘルパーメソッドは、ユーザーのデスクトップ、システムの一時ファイルなどのシステムディレクトリへのファイルパスを取得できます。

### ユースケース

アプリケーション用のローカルデータベースストアを用意したいとしましょう。この例では、[`nedb`](https://github.com/louischatriot/nedb) を使って説明します。

```bash
yarn add nedb # or npm install nedb --save
```

**src/renderer/datastore.js**

ここでは NeDB を設定し、パスを `userData` ディレクトリに向けます。このファイルスペースは、アプリケーション専用に確保されているため、他のプログラムや他のユーザーのやりとりがこのファイルスペースを改ざんしないだろうという確信を得ることができます。ここから、 `renderer` プロセスで `datastore.js` をインポートし、使うことができます。

```js
import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'
export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})
```

**src/renderer/main.js**

さらに手順を進めると、データストアを `src/renderer/main.js` にインポートし、 Vue のプロトタイプに設定することができます。そうすることで、全てのコンポーネントファイルで `this.$db` を通してデータストア API にアクセスすることができるようになりました。

```js
import db from './datastore'
/* 他のコード */
Vue.prototype.$db = db
```
