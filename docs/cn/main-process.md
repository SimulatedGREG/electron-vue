# 主进程

> 在 Electron 中，运行 package.json 主脚本的过程称为主进程。在主进程中运行的脚本可以通过创建网页来显示其图形化界面。

**来自** [**Electron 文档**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)

---

由于 `main` 进程本质上是一个完整的 node 环境，所以除了以下两个文件之外，没有初始的项目结构。

#### `src/main/index.js`

这个文件是你应用程序的主文件，`electron` 也从这里启动。它也被用作 `webpack` 的产品构建的入口文件。所有的 `main` 进程工作都应该从这里开始。

#### `app/src/main/index.dev.js`

这个文件是专门用于开发阶段，因为它会安装 `electron-debug` 与 `vue-devtools`。一般不需要修改此文件，但它可以用于扩展你开发的需求。

## 关于 `__dirname` 与 `__filename` 的使用

由于 `main` 进程是使用 `webpack` 绑定的，所以使用 `__dirname` 和 `__filename` **将不会** 在产品阶段提供一个预期的值。参考 [**文件树**](/file-tree.md)，你会注意到，在产品阶段，`main.js` 被放在了 `dist/electron` 文件夹里面。应根据此点相应地使用 `__dirname` 和 `__filename`。

**如果您需要 `static/` 资源目录的路径，请务必阅读** [**使用静态资产**](/using-static-assets.md) **学习了解非常方便的 `__static` 变量。**


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
