![](../images/logo.png)

> 使用 vue (基本上是它听起来的样子) 构造 electron 应用程序的样板代码。

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

## 概要

该项目的目的是为了要去除使用 vue 手动设置 electron 应用程序的需要。electron-vue 利用 `vue-cli` 的优势作为脚手架工具，拥有 `vue-loader` 的 `webpack`，`electron-packager` 或是 `electron-builder`，一些最常用的插件，如`vue-router`、`vuex` 等等。


#### 在[这里](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)查看文档。

你会在本样板代码中找到的东西...

* 基本项目结构与**单一的** `package.json` 设置
* 详细的 [文档](https://simulatedgreg.gitbooks.io/electron-vue/content/)
* 使用 [vue-cli](https://github.com/vuejs/vue-cli) 的项目脚手架
* 立即可用的 Vue 插件 \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* 预装 [vue-devtools](https://github.com/vuejs/vue-devtools) 以及 [devtron](https://github.com/electron/devtron) 开发工具
* 能够使用 [electron-packager](https://github.com/electron-userland/electron-packager) 或 [electron-builder](https://github.com/electron-userland/electron-builder) 轻松打包你的应用程序\*
* `appveyor.yml` 与 `.travis.yml` 配置用于 [electron-builder](https://github.com/electron-userland/electron-builder) 的自动部署 \*
* 能够为浏览器生成网页输出
* 便利的 [NPM 脚本](/npm_scripts.md)
* 使用 [webpack](https://github.com/webpack/webpack) 和 [vue-loader](https://github.com/vuejs/vue-loader) 以及模块热更新
* 在 electron 的 `main` 主进程中进行进程重启
* 使用 [vue-loader](https://github.com/vuejs/vue-loader/) 的 HTML/CSS/JS 预处理器支持
* 默认支持 [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) 的 ES6
* 使用 [`babili`](https://github.com/babel/babili) 消除完全反编译到 ES5 的需要
* ESLint \(支持 [`standard`](https://github.com/feross/standard) 和 [`airbnb-base`](https://github.com/airbnb/javascript)\)\*
* 单元测试 \(使用 Karma + Mocha\)\*
* 端到端测试 \(使用 Spectron + Mocha\)\*

\* 在`vue-cli`脚手架中可定制

### 起步

该样板代码被构建为 [`vue-cli`](https://github.com/vuejs/vue-cli) 的模板，并包含自定义你的最终脚手架应用程序的选项。需要使用`node@^7`或更高版本。electron-vue 官方推荐 [`yarn`](https://yarnpkg.org) 作为组件管理器，因为它可以更好地处理依赖关系，并可以使用 `yarn clean` 帮助减少最后构建文件的大小。

```bash
# 安装 vue-cli 和 脚手架样板代码
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# 安装依赖并运行你的程序
cd my-project
yarn # 或者 npm install
yarn run dev # 或者 npm run dev
```

##### 你是一个 Windows 用户？

请务必查看 [**Windows 用户注意事项**](https://simulatedgreg.gitbooks.io/electron-vue/content/en/getting_started.html#a-note-for-windows-users) 来确保你拥有 electron 和其他依赖关系所需的所有必要构建工具。

##### 希望使用 Vue 1？

只需指向 `1.0` 分支即可。请注意，electron-vue 已经正式废除了 `vue@^1` 的使用，因此项目结构、功能和文档也将反映这些更改 \([**遗留文档**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs)\)。

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

### 下一步

请务必查看[文档](https://simulatedgreg.gitbooks.io/electron-vue/content/)。文档里，你将找到有关项目配置、项目结构和构建应用程序的有用信息。还有一个便利的 [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html) 部分。

## 使用 electron-vue 制作

看看一些用 electron-vue 建造的了不起的的项目。想要列出你自己的项目吗？请随时提交 pull 请求。

* [**Surfbird**](https://github.com/surfbirdapp/surfbird): 一个基于 Electron 和 Vue 的 Twitter 客户端
* [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser 是一个轻量级的浏览器，基于 Vue.js 2 和 Electron
* [**Space-Snake**](https://github.com/ilyagru/Space-Snake): 使用 Electron 和 Vue.js 构建的桌面游戏。
* [**Forrest**](https://github.com/stefanjudis/forrest): 一个 npm 脚本的桌面客户端
* [**miikun**](https://github.com/hiro0218/miikun): 一个简单的 Markdown 编辑器
* [**Dakika**](https://github.com/Madawar/Dakika): A minute taking application that makes writing minutes a breeze
* [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc 是一个 dynamodb-local、 dynalite 和 AWS dynamodb 的图形化界面客户端
* [**Dockeron**](https://github.com/dockeron/dockeron): Dockeron 项目, 基于 Electron + Vue.js 的 Docker 桌面客户端
* [**Easysubs**](https://github.com/matiastucci/easysubs): 快速简单地下载字幕
