# 测试

electron-vue 单元测试和 `renderer` 进程的端到端测试，其受到了官方 `vuejs-templates/webpack` 样板代码提供的测试的极大启发。在 `vue-cli` 脚手架中，你可以选择是否包含测试。

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

如果你决定在脚手架时使用 `electron-builder` 作为构建工具，那么你可以轻松地在针对 `darwin`、`linux` 和 `win32` 的 Travis CI 以及 AppVeyor 上轻松测试应用程序。在 `.travis.yml` 和 `appveyor.yml` 两者之间，你会发现注释掉的部分，你可以快速取消注释以启用测试。确保在 [**使用 CI 的自动化部署**](/using-electron-builder.md#automated-deployments-using-ci) 上阅读更多信息。
