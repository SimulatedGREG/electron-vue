# 构建你的应用程序

electron-vue 支持 [electron-packager](https://github.com/electron-userland/electron-packager) 和 [electron-builder](https://github.com/electron-userland/electron-builder) 来构建和分发你的产品阶段就绪的应用程序。两个构建工具都由了不起的 [@electron-userland](https://github.com/electron-userland) 社区支持，每个都有详细的文档。在 `vue-cli` 脚手架过程中，你将被问到你想要使用哪个构建器。

## [`electron-packager`](using-electron-packager.md)

如果你刚开始制作 electron 应用程序或只需要创建简单的可执行文件，那么 `electron-packager` 就可以满足你的需求。

## [`electron-builder`](using-electron-builder.md)

如果你正在寻找完整的安装程序、自动更新的支持、使用 Travis CI 和 AppVeyor 的 CI 构建、或自动本机 node 模块的重建，那么你会需要 `electron-builder`。