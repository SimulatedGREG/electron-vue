# Read & Write Local Files

One great benefit of using `electron` is the ability to access the user's file system. This enables you to read and write files on the local system. To help avoid Chromium restrictions and writing to your application's internal files, make sure to take use of `electron`'s APIs, specifically the [`app.getPath(name)`](https://electron.atom.io/docs/api/app/#appgetpathname) function. This helper method can get you file paths to system directories such as the user's desktop, system temporary files, etc.

### Use Case

Let's say we want to have a local database store for our application. In this example we'll demonstrate with [`nedb`](https://github.com/louischatriot/nedb).

```bash
yarn add nedb # or npm install nedb --save
```

**src/renderer/datastore.js**

Here we setup NeDB and point it to our `userData` directory. This space is reserved specifically for our application, so we can have confidence other programs or other user interactions should not tamper with this file space. From here we can import `datastore.js` in our `renderer` process and consume it.

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

To take this a step further, we can then import our datastore into `src/renderer/main.js` and attach it to the Vue prototype. Doing so, we are now able to access the datastore API through the usage of `this.$db` in all component files.

```js
import db from './datastore'

/* Other Code */

Vue.prototype.$db = db
```



