# 项目结构

当涉及制作 electron 应用程序的问题时，项目结构会有些不同。如果你以前使用过官方的 [`vuejs-templates/webpack`](https://github.com/vuejs-templates/webpac) 设置，那么你对这个结构应该很熟悉。本文档在此章节将尝试解释样板代码的工作原理以及应用程序在构建中的一些区别。

### 单一的 `package.json` 设置

就在不久之前，两个 `package.json` 的设置是必需的，但是，感谢 [@electron-userland](https://github.com/electron-userland) 的努力，[`electron-packager`](https://github.com/electron-userland/electron-packager) 和 [`electron-builder`](https://github.com/electron-userland/electron-builder) 现在完全支持单一的 `package.json` 设置。

#### `dependencies`

这些依赖项 **将会被** 包含在你最终产品的应用程序中。所以，如果你的应用程序需要某个模块才能运行，那么请在此安装！

#### `devDependencies`

这些依赖项 **不会被** 包含在你最终产品的应用程序中。在这里，你可以安装专门用于开发的模块，如构建脚本、`webpack` 加载器等等。

#### 安装原生 NPM 模块

我们需要确保我们本地的 npm 模块是针对 electron 来构建的。为了做到这一点，我们可以使用 [`electron-rebuild`](https://github.com/electron/electron-rebuild)，但是为了使事情变得更简单，我们强烈建议使用 [`electron-builder`](https://github.com/electron-userland/electron-builder) 作为你的构建工具，因为它会为你处理很多任务。

### 关于 `main` 进程

在开发过程中，你可能会注意到 `src/main/index.dev.js`。该文件专门用于开发以及安装开发工具。原则上，该文件不应该被修改，但是可以被用来扩展你的开发需求。在构建的过程中，`webpack` 将介入其中并创建一个的捆绑，以 `src/main/index.js` 作为该捆绑的入口文件。
