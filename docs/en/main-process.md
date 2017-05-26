# Main Process

> In Electron, the process that runs package.json’s main script is called the main process. The script that runs in the main process can display a GUI by creating web pages.

**From the **[**Electron Documentation**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)

---

Since the `main` process is essentially a full node environment, there is no initial project structure other than two files.

#### `src/main/index.js`

This file is you app's main file, the file in which `electron` boots with, and is also used as `webpack`'s entry file. All `main` process work should start from here.

#### `app/src/main/index.dev.js`

This file is used specifically and only for development as it installs `electron-debug` & `vue-devtools`. There shouldn't be any need to modify this file, but it can be used to extend your development needs.

## On the subject of using `__dirname` & `__filename`

Since the `main` process is bundled using webpack, the use of `__dirname` & `__filename` **will not** provide an expected value in production.

Referring to [**Project Structure**](project_sturcture.md), you'll notice that in production the `main.js` is placed inside the `dist/electron` folder. Based on this knowledge, use `__dirname` & `__filename` accordingly. If you are needing a path to your `static/` directory, make sure to read up on [**Using Static Assets**](/using-static-assets.md) to learn about the `__static` variable.

```
app.asar
├─ dist
│  └─ electron
│     ├─ <assets>/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```



