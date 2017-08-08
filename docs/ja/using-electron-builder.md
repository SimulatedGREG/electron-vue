# [`electron-builder`](https://github.com/electron-userland/electron-builder)の使用　

`electron-builder` によって作成された全てのビルドは `build` ディレクトリ内にあります。

#### ビルド

```bash
npm run build
```

#### 解凍されたディレクトリのビルド

フルインストーラなしで簡単な実行可能ファイルを作成します。迅速なテストに役立ちます。

```bash
npm run build:dir
```

### デフォルトのビルド構成

[こちら](https://github.com/electron-userland/electron-builder/wiki/Options)にある `electron-builders` のオプションに従って、`package.json` でさらにカスタマイズすることができます。

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

## CI を使用した自動デプロイ

electron-vue の `electron-builder` 構成を使用する場合、自動デプロイのために `appveyor.yml` と `.travis.yml` も提供されます。両方の設定ファイルは electron アプリケーションのビルドや GitHub リリース、 Bintray などへ生成物をプッシュするために設定されています。Travis CI は `linux` と `darwin` (macOS) の両方のビルドに使用される一方、AppVeyor は `win32` のビルドに使用されます。どちらのサービスも OSS プロジェクトに対しては無料です。

#### Travis CI/AppVeyor のセットアップ

1. [Travis CI](https://travis-ci.org/getting_started) / [AppVeyor](https://www.appveyor.com/) でアカウントを作成します
2. electron-vue プロジェクトがある GitHub リポジトリにリンクします
3. [https://github.com/settings/tokens](https://github.com/settings/tokens) にアクセスし、**Generate new token ** を押します(Travis CI と AppVeyor 両方で同じトークンが使用可能です)
    1. **Token description** を設定します
    2. **public_repo ** スコープにチェックをつけます
    3. **Generate token** を押します
4. 新しいトークンをコピーして後々使うために保存します
5. Travis CI / AppVeyor でリポジトリ設定を開き、新しい**環境変数**を追加します
    1. 変数の名前を `GH_TOKEN` に設定します
    2. 変数の値を作成したばかりのGitHubアクセストークンに設定します
    3. 新しい変数を**保存**し、暗号化が有効になっていることを確認します

この時点で、全てがセットアップされました。Travis CI/AppVeyor はデフォルトで `master` ブランチへのプッシュを監視します。プッシュが行われると、Travis CI/AppVeyor はリポジトリをサーバーにクローンし、ビルドプロセスを開始します。最終ステージでは、`electron-builder`  は環境変数の `GH_TOKEN` を見て、ドラフトのリリースを作成し、作成物を GitHub のパブリックリポジトリにアップロードします。この時点から、ドラフトのリリースを編集して、それを世界に公開することができます。 リリースを公開した後、`package.json` を更新して、将来のリリースに新しいバージョン番号が付いていることを確認してください。

#### 自動アップデート

アプリケーションが自動アップデートを受信できるようにすることは、優れた機能ですが、[**コードサイニング**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)が必要であることを知ってください。[こちら](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)で説明されている  `electron-builder` が必要とするものに基づいて、いくつかの環境変数を追加することでコードサイニングを設定可能です。いったん証明書を設定すると、 `electron-updater`  をインストールし、自動アップデートを有効にするために、`src/main/index.js` の一番下のコードをコメントアウトすることができます。

ほとんどの人と同じように、コード署名証明書がない場合は、GitHub API を使用して新しいリリースをチェックすることができます。新しいリリースが検出されたら、アプリケーション内で、新しいビルドをダウンロードしてインストールできるダウンロードページをユーザーに示す通知を提供します。`electron-builder` が提供する素晴らしいインストーラーのおかげで、ユーザーは現在のバージョンをアンインストールする必要がなくなり、新しいインストールは Web ストレージまたは `userData` ファイルをそのまま維持しながら古いものを置き換えます。
