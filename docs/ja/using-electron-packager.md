# [`electron-packager`](https://github.com/electron-userland/electron-packager) の使用

`electron-packager` によって作成された全てのビルドは `build` フォルダ内にあります。

#### 全てのプラットフォーム用にビルド

すべてのオペレーティングシステムが他のすべてのプラットフォーム用に構築できるとは限りません。

```bash
npm run build
```

#### 特定のプラットフォーム用のビルド

プラットフォームには `darwin`、 `mas`、 `linux` と `win32` があります。

```bash
# darwin 用にビルドする(macOS)
npm run build:darwin
```

#### クリーニング

`build` から全てのビルドを削除します。

```bash
npm run build:clean
```

### Windows以外のユーザーのためのメモ

Windows 以外のプラットフォームを使用して**カスタムアイコン付きで** Windows 用にビルドしたい場合、[wine](https://www.winehq.org/) をインストールする必要があります。[詳細な情報はこちら](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms)。

### デフォルトのビルド構成

[ここ](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options) に記載のある `electron-packager` のオプションの通りに `.electron-vue/build.config.js` でさらなるカスタマイズが可能です。ビルドされたアプリケーションに適用される名前は `package.json` の `productName` の値が設定されます。

```js
{
    // 'x64' アーキテクチャを対象にします
    arch: 'x64',
    // 'electron/asar' を使用してアプリケーションを圧縮します
    asar: true,
    // アプリケーションのディレクトリ
    dir: path.join(__dirname, '../'),
    // electron のアプリケーションアイコンを設定します
    // ファイル拡張子はプラットフォームに基づいて追加されます
    //
    // Linux 用にビルドする場合、以下を参照してください
    // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#icon
    icon: path.join(__dirname, '../build/icons/icon'),
    // 最終的なビルドサイズを膨らませるファイルを無視する
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,
    // ビルドファイルを `builds` に保存する
    out: path.join(__dirname, '../build'),
    // ビルドファイルを上書きする
    overwrite: true,
    // プラットフォームを設定する環境変数
    platform: process.env.BUILD_TARGET || 'all'
}
```
