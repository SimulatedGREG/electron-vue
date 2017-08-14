# 静态资源的使用

如果你以前使用过官方的 `vuejs-templates/webpack` 样板，那么你应该对 `static/` 目录很熟悉。这里面，你可以放置可供 `main` 和 `renderer` 进程使用的静态资源。在 Vue 应用程序中使用这些资源很简单，但是使用 `fs` 和其他需要完整路径的模块可能会有点棘手。 幸运的是，electron-vue 提供了一个 `__static` 变量，它可以在开发和产品阶段生成 `static/` 目录的路径。

### Vue 组件里 `src` 标签的使用案例

假设我有一个组件需要下载一个图像，但是直到一些其他任务完成后这个图像的地址才能知道。简单起见，让我们用一个 `data` 变量来绑定图像的来源。

**SomeComponent.vue**

```html
<template>
  <img v-bind:src="imageUrl">
</template>

<script>
  export default {
    data () {
      // 注意 路径的起始是 `static/`
      return { imageUrl: 'static/imgs/unsplash.png' }
    }
  }
</script>
```

此处，`webpack` 并不会捆绑图像 `unsplash.png`，并且应用程序可以看到 `static/imgs/unsplash.png` 目录里的资源。感谢 `vue-loader` 为我们完成了所有繁琐的工作。

### JS 搭配 `fs`、`path` 和 `__static` 的使用案例

假设我们有一个静态资源，我们需要使用 `fs` 将它读入到我们的应用程序中，但是我们如何在开发和产品阶段为 `static/` 目录获得可靠的路径呢？electron-vue 提供了一个名为 `__static` 的全局变量，它将产生一个指向 `static/` 目录的正确路径。以下是我们在开发和产品阶段如何使用它读取一个简单的文本文件。

**static/someFile.txt**

```txt
foobar
```

**SomeFile.js \(** `main` **或** `renderer` **进程\)**

```js
import fs from 'fs'
import path from 'path'

let fileContents = fs.readFileSync(path.join(__static, '/someFile.txt'), 'utf8')

console.log(fileContents)
// => "foobar"
```

请注意，在产品阶段，默认情况下，所有文件都包含 [`asar`](https://github.com/electron/asar)，因为它是被极力推荐的。因此，`static/` 文件夹中的资源只能在 `electron` 内部访问，因为只有 `electron` 了解此行为。由此，如果你打算将文件分发给用户，例如在外部程序中打开文件，那么，首先你需要将这些资源从应用程序复制到用户的文档空间或桌面中。从那里，你可以使用 electron 的 API [`shell.openItem()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath) 来打开这些资源。

这种情况的一种替代方法，是配置 `electron-packager` 或 `electron-builder`，设置特定文件，用来 “解压缩” 在产品阶段的 `asar` 存档。electron-vue 并没有计划支持这种方法; 任何与此或与如何设定此事项相关的问题将被关闭。
