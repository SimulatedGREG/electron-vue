# Main Process
> In Electron, the process that runs package.json’s main script is called the main process. The script that runs in the main process can display a GUI by creating web pages.

**From the [Electron Documentation](http://electron.atom.io/docs/tutorial/quick-start/#main-process)**

---

Since the `main` process is essentially a full node environment, there is no initial project structure other than two files.

#### `app/src/main/index.js`
This file is you app's main file, the file in which `electron` boots with, and is also used as `webpack`'s entry file. All `main` process development should start from here.

#### `app/src/main/index.dev.js`
This file is used specifically and only for development. It enables the use of ES6+ features for the main process and installs `electron-debug` & `vue-devtools`. There shouldn't be any need to modify this file, but it can be used to extend your development environment.

## On the subject of using `__dirname` & `__filename`

Since the `main` process is bundled using webpack, the use of `__dirname` & `__filename` **will not** provide an expected value in production.

Referring to [**Project Structure**](project_sturcture.md), you'll notice that in production the `main.js` is placed inside the `dist` folder. Based on this knowledge, use `__dirname` & `__filename` accordingly.

```
app.asar
├─ dist
│  ├─ main.js
│  ├─ renderer.js
│  └─ index.html
└─ node_modules/
└─ package.json
```

