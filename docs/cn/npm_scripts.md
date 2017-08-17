# NPM 脚本

为了帮助n你消除开发过程中的冗余任务，请注意一些可用的 NPM 脚本。以下命令应该运行在项目的根目录下。当然，你可以使用 `yarn run <command>` 的方式运行下列任何命令。

### `npm run build`

为了产品和打包来构建你的应用程序。更多信息可以在 [**构建你的应用程序**](building_your_app.md) 部分找到。

### `npm run dev`

在开发环境中运行程序

### `npm run lint`

静态分析所有在 `src/` 和 `test/` 下面的 JS 以及 Vue 组件文件。

### `npm run lint:fix`

静态分析所有在 `src/` 和 `test/` 下面的 JS 以及 Vue 组件文件并且尝试修复问题。

### `npm run pack`

同时运行 `npm run pack:main` 和 `npm run pack:renderer`。 虽然这些命令是可用的，但很少情况下，你需要手动执行此操作，因为 `npm run build` 将处理此步骤。

### `npm run pack:main`

运行 webpack 来打包 `main` 进程的源代码。

### `npm run pack:renderer`

运行 webpack 来打包 `renderer` 进程的源代码。

### `npm run unit`

运行使用了 Karma + Jasmine 的单元测试。更多信息请见 [**单元测试**](unittesting.md)。

### `npm run e2e`

运行使用了 Spectron + Mocha 的端对端测试。更多信息请见 [**端对端测试**](unittesting.md)。

### `npm test`

运行 `npm run unit` 和 `npm run e2e`. 更多信息请见 [**测试**](unittesting.md)。
