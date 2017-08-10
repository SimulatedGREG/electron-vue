# 单元测试

electron-vue 使用 [Karma](https://karma-runner.github.io/1.0/index.html) 作为测试的运行器，使用 [Mocha](https://mochajs.org/) \(与 [Chai](http://chaijs.com/)\ 作为测试框架 进行单元测试。

Mocha 和 Chai 分别使用 `karma-mocha` 和 `karma-chai` 进行集成，所以所有的 API（例如 `expect`）都可以在测试文件中全局使用。

### 运行测试

```bash
# 开始 Karma
npm run unit
```

### 文件结构

```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ karma.conf.js
```

**在大多数情况下，你可以忽略** `index.js` **和** `karma.conf.js` **，只专注于编写** `specs/` **。**

#### `specs/`

这个目录里面是编写实际测试代码的地方。由于 Webpack 的强大功能，你可以完全依照 ES2015 和 所支持的加载程序编写。

#### `index.js`

这是 `karma-webpack` 使用的入口文件。该文件的目的是一次性收集所有测试和源代码。

#### `karma.conf.js`

在这里，你可以找到实际的 `karma` 配置，并使用 spec/coverage 记录器进行设置。可以根据 [karma 官方文档](http://karma-runner.github.io/1.0/config/configuration-file.html) 进一步定制。

### Mocking Dependencies

electron-vue 默认安装 [`inject-loader`](https://github.com/plasticine/inject-loader)。有关使用 Vue 组件文件的信息，请参阅 [`vue-loader' 的测试与仿真文档](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html)。
