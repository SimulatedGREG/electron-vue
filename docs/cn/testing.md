# 测试

因受到了官方样板代码 `vuejs-templates/webpack` 提供的测试功能的极大启发，electron-vue 同时支持单元测试和 `renderer` 进程的端到端测试。在 `vue-cli` 脚手架中，你可以选择是否包含测试。

## [单元测试](unittesting.md)

使用 Karma + Mocha 运行单元测试

```bash
npm run unit
```

## [端对端测试](end-to-end_testing.md)

使用 Spectron + Mocha 运行端对端测试

```bash
npm run e2e
```

## 运行所有测试

```bash
npm test
```

### 关于 CI 测试

如果在脚手架时你决定使用 `electron-builder` 作为构建工具，那么你可以在针对 `darwin`、`linux` 和 `win32` 的 Travis CI 以及 AppVeyor 上轻松测试你的程序。在 `.travis.yml` 和 `appveyor.yml` 两者之间，你会发现一些被注释掉的部分，你可以快速取消注释以启用测试。确保阅读 [**使用 CI 的自动化部署**](/using-electron-builder.md#automated-deployments-using-ci) 上的更多信息。
