# 读写本地文件

使用 `electron` 的一大好处是可以访问用户的文件系统。这使你可以读取和写入本地系统上的文件。为了避免 Chromium 的限制以及对应用程序内部文件的改写，请确保使用 `electron` 的 API，特别是 [`app.getPath(name)`](https://electron.atom.io/docs/api/app/#appgetpathname) 函数。这个帮助函数可以使你获得指向系统目录的文件路径，如用户的桌面、系统临时文件 等等。

### 使用案例

假设我们想为我们的应用程序提供本地的数据库存储。在这个例子中，我们将用 [`nedb`](https://github.com/louischatriot/nedb) 作为演示。

```bash
yarn add nedb # 或 npm install nedb --save
```

**src/renderer/datastore.js**

这里，我们设置 NeDB 并将其指向我们的 `userData` 目录。这个空间专门为我们的应用程序所保留，所以，我们可以确信，其他程序 或 与其他用户的交互不应该篡改这个文件空间。至此，我们可以在 `renderer` 进程中导入 `datastore.js` 并使用它。

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

为了更进一步，我们可以将数据存储导入到 `src/renderer/main.js` 里，并将其附加到 Vue 的 原型 (prototype) 上。通过在所有组件文件中使用 `this.$db`，我们现在可以访问数据存储的 API。

```js
import db from './datastore'

/* 其它代码 */

Vue.prototype.$db = db
```
