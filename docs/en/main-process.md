# Main Process

> In Electron, the process that runs package.json’s main script is called the main process. The script that runs in the main process can display a GUI by creating web pages.

**From the **[**Electron Documentation**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)

---

Since the `main` process is essentially a full node environment, there is no initial project structure other than two files.

#### `src/main/index.js`

This file is your application's main file, the file in which `electron` boots with. It is also used as `webpack`'s entry file for production. All `main` process work should start from here.

#### `app/src/main/index.dev.js`

This file is used specifically and only for development as it installs `electron-debug` & `vue-devtools`. There shouldn't be any need to modify this file, but it can be used to extend your development needs.

## On the subject of using `__dirname` & `__filename`

Since the `main` process is bundled using `webpack`, the use of `__dirname` & `__filename` **will not** provide an expected value in production. Referring to the [**File Tree**](/file-tree.md), you'll notice that in production the `main.js` is placed inside the `dist/electron` folder. Based on this knowledge, use `__dirname` & `__filename` accordingly.

**If you are in need of a path to your `static/` assets directory, make sure to read up on **[**Using Static Assets**](/using-static-assets.md)** to learn about the super handy `__static` variable.**

```
app.asar
├─ dist
│  └─ electron
│     ├─ static/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```



