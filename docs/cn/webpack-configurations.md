# Webpack 配置

electron-vue 包含三个单独的、位于 `.electron-vue/` 目录中的 webpack 配置文件。除了可选使用 `web` 输出以外，`main` 和 `renderer` 在安装过程中都是相似的。两者都使用 `babel-preset-env` 来针对 `node@7` 的功能特性、使用`babili`、并把所有的模块都视为 `externals`。

### `.electron-vue/webpack.main.config.js`

针对 electron 的 `main` 进程。这种配置是相简陋的，但确实包括一些常见的 `webpack` 做法。

### `.electron-vue/webpack.renderer.config.js`

针对 electron 的 `renderer` 进程。此配置操控你的 Vue 应用程序，因此它包含 `vue-loader` 和许多其他可在官方 `vuejs-templates/webpack` 样板中找到的配置。

##### White-listing Externals

关于这个配置的一个重要的事情是，你可以将特定的模块列入白名单，而不是把它视为 webpack 的 `externals`。并没有很多情况需要这个功能，但是对于提供原始的 `*.vue` 组件的 Vue UI 库的情况，他们需要被列入白名单，所以 `vue-loader` 能够编译它们。另一个使用情况是使用 webpack 的 `alias`，例如设置 `vue` 来导入完整 编译+运行环境 的构建。因此，`vue` 已经在白名单中了。

### `.electron-vue/webpack.web.config.js`

针对为浏览器构建你的 `renderer` 进程源代码。如果你需要把代码发布到网上，则此配置是其强大的起步基础。 **electron-vue 不支持更多其他的 Web 输出。** 与 Web 输出相关的 Issues 有很大的可能被推迟或关闭。
