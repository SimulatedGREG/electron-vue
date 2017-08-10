# NPM 脚本

为了帮助消除开发过程中的冗余任务，请注意可用的一些 NPM 脚本。以下命令应该运行在项目的根目录下。当然，你可以使用 `yarn run <command>` 的方式运行下列任何命令。

### `npm run build`

为了生产和打包来构建你的应用程序。更多信息可以在 [**构建你的应用程序**](building_your_app.md) 部分找到。

### `npm run dev`

在开发环境中运行程序

### `npm run lint`

静态分析所有在你 `src/` 和 `test/` 下的 JS 以及 Vue 组件文件。

### `npm run lint:fix`

静态分析所有在你 `src/` 和 `test/` 下的 JS 以及 Vue 组件文件并且尝试修复问题。

### `npm run pack`

同时运行 `npm run pack:main` 和 `npm run pack:renderer`。 虽然这些命令是可用的，但并没有很多情况下你需要手动执行此操作，因为 `npm run build` 将处理此步骤。

### `npm run pack:main`

运行 webpack 来打包 `main` 进程的源代码。

### `npm run pack:renderer`

运行 webpack 来打包 `renderer` 进程的源代码。

### `npm run unit`

运行使用 Karma + Jasmine 的单元测试。更多信息请见 [**单元测试**](unittesting.md)。

### `npm run e2e`

运行使用 Spectron + Mocha 的端对端测试。更多信息请见 [**端对端测试**](unittesting.md)。

### `npm test`

运行 `npm run unit` 和 `npm run e2e`. 更多信息请见 [**测试**](unittesting.md)。
