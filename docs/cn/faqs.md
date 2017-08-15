# 常见问题

* [为什么运行 `npm run dev` 之后我的 electron 应用程序是空白的？](#why-is-my-electron-app-blank-after-running-npm-run-dev)
* [为什么我的 electron 程序显示了文件浏览器？](#why-does-my-electron-app-show-a-file-explorer)
* [为什么没有 `vue-devtools` 或 `devtron`？](#why-is-vue-devtoolsdevtron-missing)
* [在哪里放置我的静态资源？](#where-do-i-put-static-assets)
* [为什么 `npm run lint` 会出现错误？](#why-did-npm-run-lint-end-with-an-error)
* [为什么我无法在网页浏览器中加载应用程序？](#why-cant-i-load-my-app-in-a-web-browser)
* [如何导入 `jquery`？](#how-do-import-jquery)
* [如何调试 `main` 进程？](#how-can-i-debug-the-main-process)

---

## 为什么运行 `npm run dev` 之后我的 electron 程序是空白的？

#### 简要

请确认你没有设置可能篡改 `webpack-dev-server` 的个人 **代理**。

## 为什么我的 electron 程序显示了文件浏览器？

#### 简要

你的 `src/renderer` 包含错误。请检查 控制台 (console)，修复错误，然后用 `CommandOrControl+R` 刷新 electron。

##### 详述

如果你的 `src/renderer` 中出现错误，则会在首次运行时与 ESLint 产生冲突。接着，一个无效的 webpack 的 `renderer.js` 会被生成出来，它会打断 `HtmlWebpackPlugin` 创建 `index.html`。由于 `webpack-dev-server` 没有 `index.html` 可以提供服务，所以服务器失败，程序返回到文件浏览器。

## 为什么没有 `vue-devtools` 或 `devtron`？

如果缺少 `vue-devtools` 或 `devtron`，请确保首次启动时，关闭并重新打开开发者工具面板。另外，请检查你的终端，检查是否在安装过程中有任何可能的错误消息。

## 在哪里放置我的静态资源？

[**静态资源的使用**](/using-static-assets.md)

## 为什么 `npm run lint` 会出现错误？

eslint 的默认属性是将控制台的错误打印出来，如果发现脚本以非零值退出结束时 \(它会产生 npm 错误\)。这是正常的行为。

## 为什么我无法在网页浏览器中加载应用程序？

[\#195](https://github.com/SimulatedGREG/electron-vue/issues/195)

## 如何导入 `jquery`？

如果你想使用 `bootstrap`，我将不得不在此打住你。在同一环境中使用 `vue` 和 `jquery` 并不是一个好的做法，这导致两个框架的相互冲突。我强烈建议使用一个 `bootstrap` 的替代方法，并使用 `vue` 提供的 JavaScript 的功能。一些建议包括使用 [`bootstrap-vue`](https://github.com/bootstrap-vue/bootstrap-vue) 和 [`vue-strap`](https://github.com/yuche/vue-strap)。若有任何原因使你必须使用 `jquery`，记得从 `webpack` 的文档里寻求有关 `ProvidePlugin` 的指导，或者参见 [\#192](https://github.com/SimulatedGREG/electron-vue/issues/192)。

## 如何调试 `main` 进程？

当使用 `electron@^1.7.2` 时，你可以打开 Goog​​le Chrome，然后转到 `chrome://inspect`，在应用程序以开发模式运行时，弹出远程的 electron 进程。

[Electron 文档]（https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md）
