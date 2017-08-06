# プロジェクト構造

electron アプリケーションの作成に関しては、プロジェクト構造は少し変わっています。これまで公式の [`vuejs-templates/webpack`](https://github.com/vuejs-templates/webpack) セットアップを使用していたのならば、構造はかなり似通っていると感じるでしょう。このセクションのドキュメントではどのようにボイラープレートが動作するかの概要とアプリケーションをビルドする際の違いを説明しようと思います。

### 単一の `package.json` によるセットアップ

そんなに前のことではありませんが、2つの `package.json` によるセットアップが必要でした。しかし、 [@electron-userland](https://github.com/electron-userland) の努力のおかげで、 [`electron-packager`](https://github.com/electron-userland/electron-packager) と [`electron-builder`](https://github.com/electron-userland/electron-builder)  の両方が完全に単一の `package.json` によるセットアップをサポートしています。

#### `dependencies`

これらの依存関係は最終的な本番アプリケーションに含まれ**ます**。つまり、アプリケーションが動作するのに必要なモジュールがある場合は、ここにインストールしてください！

#### `devDependencies`

これらの依存関係は最終的な本番アプリケーションに含まれ**ません**。ビルドスクリプトや`webpack` ローダーなどの開発に必要な特定のモジュールをインストールします。

#### ネイティブ NPM モジュールのインストール

ネイティブ npm モジュールが electron に対してビルドされていることを確認する必要があります。それをするためには、 [`electron-rebuild`](https://github.com/electron/electron-rebuild) を使用できます。しかし、単純化のため、これらのタスクをうまく処理するビルドツールに [`electron-builder`](https://github.com/electron-userland/electron-builder)  を使用することを強くお勧めします。

### `main` プロセスについて

開発中に `src/main/index.dev.js` に気付くかもしれません。このファイルは特に開発のために使用され、開発ツールのインストールにも使用されます。このファイルを変更する必要はありませんが、開発の必要に応じて拡張するために使用することができます。ビルド時、`webpack` は `src/main/index.js` 自身をエントリーファイルとしてバンドルを作成します。
