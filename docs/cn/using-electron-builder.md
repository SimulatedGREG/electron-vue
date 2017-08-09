# 使用 [`electron-builder`](https://github.com/electron-userland/electron-builder)

所有 `electron-builder` 生成的文件都可以在 `build` 文件夹中找到。

#### 构建

```bash
npm run build
```

#### 构建未打包的目录

生成简单的可执行文件，没有完整的安装程序。用于快速测试。

```bash
npm run build:dir
```

### 默认的构建配置

可以在 `package.json` 中基于 `electron-builder` 的 [各种选项](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options) 进一步定制。

```js
"build": {
  "productName": "ElectronVue",
  "appId": "org.simulatedgreg.electron-vue",
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "directories": {
    "output": "build"
  },
  "files": [
    "dist/electron",
    "node_modules/",
    "package.json"
  ],
  "mac": {
    "icon": "build/icons/icon.icns"
  },
  "win": {
    "icon": "build/icons/icon.ico"
  },
  "linux": {
    "icon": "build/icons"
  }
}
```

## 使用 CI 的自动化部署

当使用 electron-vue 的 `electron-builder` 配置时，本项目还提供 `appveyor.yml` 和 `.travis.yml` 用于自动部署。两个配置文件都被设置用于构建你的 electron 程序，并将生成推送到 GitHub 的发布页面、Bintray 等。Travis CI 用于构建 `linux` 和 `darwin` \(macOS\)，而 AppVeyor 用于构建 `win32`。这两项服务都是免费的 OSS 项目。

#### 设置 Travis CI 和 AppVeyor

1. 在 [Travis CI](https://travis-ci.org/getting_started) / [AppVeyor](https://www.appveyor.com/) 上创建一个帐户
2. 链接你的 electron-vue 项目的 GitHub 仓库
3. 访问 [https://github.com/settings/tokens](https://github.com/settings/tokens) 并点击 **生成新令牌** \(同样的令牌可用于 Travis CI 和 AppVeyor 二者\)
   1. 设置一个 **令牌描述**
   2. 检查 **public\_repo** 的范围
   3. 点击 **生成令牌**
4.复制你的新令牌并保存以备以后使用
5.打开 Travis CI / AppVeyor 上的仓库设置选项，添加一个新的 **环境变量**
   1.将变量的名称设置为 `GH_TOKEN`
   2.将变量的值设置为刚刚创建的 GitHub 的访问令牌
   3. **保存** 新变量并确保加密已启用

现在，所有的事情应该都配置完毕了。Travis CI / AppVeyor 默认情况下会监测到任何到你 `master` 分支的推送。推送完毕后，Travis CI / AppVeyor 将克隆你的仓库到其服务器并开始构建过程。在最后阶段，`electron-builder` 可以看到 `GH_TOKEN` 环境变量，并创建一个发布草稿，并将生成上传到你公共 GitHub 仓库。现在，你可以编辑发布草稿，然后发布出去。发布了发行版后，通过更新你的 `package.json`，你可以确保将来的版本标有新版本号。

#### 自动更新

启用你应用程序的自动更新接收是一个超级好的功能，但要知道你必须要有 [**代码签名**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)。你可以根据 [这里](https://github.com/electron-userland/electron-builder/wiki/Code-Signing) 描述的 `electron-builder` 的需求来添加更多的环境变量来设置代码签名。安装证书后，你可以安装 `electron-updater` 并注释掉 `src/main/index.js` 底部的代码以启用自动更新。

如果你像大多数人一样，并且没有花哨的代码签名证书，那么你可以随时使用 GitHub API 来检查新的软件发布。当检测到新版本时，你的应用程序会提供一条通知，导向用户可以下载并安装新版本的下载页面。由于 `electron-builder` 提供的了不起的安装程序，用户无需卸载当前版本，新的安装将替代旧的版本，同时仍然保留任何 Web 存储或 `userData` 文件。
