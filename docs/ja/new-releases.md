# 新しいリリース

electron-vue は2016年5月に作成して以来、大きく進化し、多くの新しく素晴らしい機能を導入してきました。`vue-cli` のスキャフォールディングが提供されていない時があったことを信じられますか？新しい機能の開発はすぐに終了するつもりはありません。新しいオプション機能の唯一の欠点は、あなたのプロジェクトが古いスキャフォールディングから離れられないでいることです。electron-vue は `vue-cli` を使用しているため、残念ながら、ボイラープレートを*バージョンアップ* したり、*更新可能*にする構造化の方法はありません。

electron-vue のメジャーアップデートは GitHub マイルストーンを介して行われ、一度に多くの新しい機能/バグ修正を含み、これらのリリースは既存のプロジェクトを新しくスキャフォールディングし、[移行](/migration-guide.md)するのに最適な時です。これらのマイルストーンは通常は計画されていませんが、機能要求が課題トラッカーに追加されると発生します。

### 過去のマイルストーン

#### [複合化](https://github.com/SimulatedGREG/electron-vue/milestone/1?closed=1)

- `webpack` 2 への移行
- `electron-builder` のサポート
- `main` プロセスバンドルのサポート
- 全体的なバグ修正

#### [最小化](https://github.com/SimulatedGREG/electron-vue/issues/171)

- 単一の `package.json` 構造への移行
- `electron-builder` ユーザー向けの Travis CI / AppVeyor 構成
- `renderer` プロセスの最小 web 出力
- `axios` への移行
- `main` プロセスバンドルの完全サポート
- 開発とビルドスクプリトの書き直し
- ES5 へのトランスパイルの必要を取り除く `babili` への移行
- フルパスを必要とするモジュールを使用する際の `static/` アセットをサポート ([`__static`](/using-static-assets.md))
