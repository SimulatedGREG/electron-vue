# 新版本

electron-vue 自 2016年5月初 创建以来有了很大的发展，并引入了许多新奇的功能。你能相信有一段时间不支持 `vue-cli` 脚手架吗？新功能的开发计划不会停止。唯一的缺点是，每天都有华而不实的东西在把你的项目卡在一个老脚手架上。尽管electron-vue 利用了 `vue-cli` 的优势，遗憾的是，并没有一个结构化的方式来 _版本化_ 样板 或 使其变得 _可更新_。

electron-vue 的主要更新将通过 GitHub 的 里程碑 (Milestones) 进行，并将包含许多新功能和错误修复，这使得这些版本造就了最佳的 [迁移](/migration-guide.md) 时间，以从任何现有项目转换为为较新的架构。这些里程碑通常不是预先计划的，而是随着问题提交里的功能请求，在追踪问题的时候加上去的。

### 之前的里程碑

#### [复用](https://github.com/SimulatedGREG/electron-vue/milestone/1?closed=1)

* 迁移到 `webpack` 2
* 支持 `electron-builder`
* 支持 `main` 进程的捆绑
* 一般的错误修复

#### [简化](https://github.com/SimulatedGREG/electron-vue/issues/171)

* 迁移到单一的 `package.json` 结构
* 为 `electron-builder` 用户的 Travis CI / AppVeyor 配置
* `renderer` 进程的最小化网页输出
* 迁移到` axios`
* 完全支持 `main` 进程捆绑
* 重写开发和构建的脚本
* 迁移到 `babili` 以避免完全反编译到 ES5
* 在使用需要完整路径 \([`__static`](/using-static-assets.md)\) 的模块时支持 `static/` 资源
