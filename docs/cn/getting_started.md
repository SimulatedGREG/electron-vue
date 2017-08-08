# 起步

## 脚手架

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

#### 关于 electron

虽然是可选的，仍旧建议在通过脚手架创建你的项目之后锁定你 electron 的版本。这样可以防止在同一项目上工作的其他开发者使用不同的版本进行开发。electron 经常发布新版本，所以一些功能特性总是会发生相应的变化。[更多信息](http://electron.atom.io/docs/tutorial/electron-versioning/)。


#### Windows 用户注意事项

如果在 `npm install` 期间遇到关于 `node-gyp` 的错误，那么你很有可能没有在你的系统上安装正确的构建工具。构建工具包括 Python 和 Visual Studio 等等。感谢 [@felixrieseberg](https://github.com/felixrieseberg)，有几个软件包可以帮助简化此过程。

我们需要检查的第一项是我们的 npm 版本，并确保它不是过时的。这个可以使用 [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade) 来完成。如果你使用 `yarn`，则可以跳过此项检查。

若上一项检查完成，我们可以继续设置所需的构建工具。使用 [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools) 来为我们完成大部分烦人的工作。在全局下安装此工具将依次设置 Visual C++ 软件包、Python 等等。

到现在为止，所有工具都应该成功安装了，可是如果没有，那么你就会需要安装一个干净的 Visual Studio。请注意，这些并不是 electron-vue 自身的问题 \(Windows 有时候可能会很难用 ¯\\\_\(ツ\)\_/¯\)。
