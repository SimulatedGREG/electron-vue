# 使用 [`electron-packager`](https://github.com/electron-userland/electron-packager)

所有 `electron-packager` 生成的文件都可以在 `build` 文件夹中找到。

#### 针对所有平台的构建

请注意，并非所有操作系统都可以为所有其他平台构建。

```bash
npm run build
```

#### 针对特定平台的构建

平台包括 `darwin`、 `mas`、 `linux` 和 `win32`。

```bash
# build for darwin (macOS)
npm run build:darwin
```

#### 清除

从 `build` 删除所有构建文件。

```bash
npm run build:clean
```

### 非 Windows 用户注意事项

如果你想在非 Windows 平台上 **使用自定义图标** 为 Windows 构建，你必须安装 [wine](https://www.winehq.org/)。[更多信息](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms)。

### 默认的构建配置

可以在 `.electron-vue/build.config.js` 中基于 `electron-packager` 的 [各种选项](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options) 进一步定制。你可以设置 `package.json` 里的 `productName` 来设置构建后的程序名称。

```js
{
    // 针对 'x64' 架构
    arch: 'x64',

    // 使用 'electron/asar' 压缩应用
    asar: true,

    // 应用程序的目录
    dir: path.join(__dirname, '../'),

    // 设置 electron 程序的图标
    // 基于平台添加文件的扩展
    //
    // 如果针对 Linux 进行构建, 请阅读
    // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#icon
    icon: path.join(__dirname, '../build/icons/icon'),

    // 忽略可能造成最后程序很大的文件
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,

    // 把构建结果存储到 `builds`
    out: path.join(__dirname, '../build'),

    // 重写现有构建
    overwrite: true,

    // 指定平台的环境变量
    platform: process.env.BUILD_TARGET || 'all'
}
```
