# アプリケーション構築

electron-vue はビルドと本番アプリケーションの配布のために [electron-packager](https://github.com/electron-userland/electron-packager) と [electron-builder](https://github.com/electron-userland/electron-builder) の両方をサポートしています。両方のビルドツールは素晴らしい [@electron-userland](https://github.com/electron-userland) コミュニティによって支援されていて、それぞれに詳細なドキュメントがあります。`vue-cli` のスキャフォールディング中にどちらのビルダーを使いたいか尋ねられます。

## [`electron-packager`](using-electron-packager.md)

electron アプリケーションを作成するのが初めて使う人や単純な実行可能ファイルを作成する必要がある場合、`electron-packager` がニーズに最適です。

## [`electron-builder`](using-electron-builder.md)

完全なインストーラー、自動更新サポート、Travis CI と AppVeyor を使用した CI ビルド、またはネイティブコードモジュールの再構築の自動化を探し求めている場合、`electron-builder` が最適です。
