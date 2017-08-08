# はじめに

## スキャフォールディング

このボイラープレートは [vue-cli](https://github.com/vuejs/vue-cli) のテンプレートとして作成され、スキャフォールディングされたアプリケーションをカスタマイズするためのオプションが含まれています。`node@^7` かそれ以上のバージョンを使用する必要があります。 electron-vue はパッケージマネージャの [`yarn`](https://yarnpkg.org) を公式に推奨しています。 依存関係をよりよく処理し、`yarn clean` により最終的なビルドサイズを減らすことができます。

```bash
# vue-cli をインストールしボイラープレートをスキャフォールディングします
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project
# 依存関係をインストールし、アプリケーションを実行します
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

#### electron について

オプションとはいっても、プロジェクトをスキャフォールディングした後は electron のバージョンを固定することをお勧めします。これは、同じプロジェクトで作業している開発者が異なるバージョンで開発することを防ぐことに役立ちます。electron はリリースを頻繁に行うため、機能は常に変更対象となります。 [詳細な情報はこちら](http://electron.atom.io/docs/tutorial/electron-versioning/)。

#### Windows ユーザーのための注意

`npm install` 中に `node-gyp` に関するエラーが発生した場合、システムに適切なビルドツールがインストールされていない可能性が非常に高いです。ビルドツールには、Python や Visual Studio などのアイテムが含まれています。[@felixrieseberg](https://github.com/felixrieseberg) のおかげで、このプロセスを簡潔にするのに役立つパッケージがいくつかあります。

最初に確認する項目は npm のバージョンで、古いバージョンでないことを確認します。これは [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade) を使用することで達成できます。`yarn` を使用する場合は、この確認をスキップすることができます。

それが完了したら、引き続きビルドツールをセットアップします。[`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools) を使用することで、めんどくさいことの大半は完了します。これをグローバルにインストールすると Visual C ++パッケージ、 Python などがセットアップされます。

この時点では正常にインストールされるはずですが、そうでない場合は Visual Studio をクリーンインストールする必要があります。これらは electron-vue 自身の問題ではないことに注意してください(Windows は時々面倒になることがあります ¯\\\_\(ツ\)\_/¯\)。
