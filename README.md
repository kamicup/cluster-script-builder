# Cluster Script を Typescript 言語で書く方法

### システムに Node.js をインストールする

https://nodejs.org/

から、ご自分の PC 環境用の Node.js をダウンロードして、インストールします。

※ システムに Node.js をインストールする代わりに
[Node.js の Docker コンテナを使用する方法](./docker.md)
もあります。


### プロジェクトディレクトリを用意する

ご自分の PC 内での作業ディレクトリ置き場を決めて、このリポジトリを clone（複製）します。

複製方法は git clone でも、ZIP でダウンロードして解凍しても構いません。


### エディタや IDE でプロジェクトを開く

Visual Studio Code (VSCode) や WebStorm でプロジェクトディレクトリを開きます。


### ライブラリをインストールする

```shell
cd src
npm i
```

### ビルドコマンドを実行する

ビルドコマンドにより、以下の Typescript ソースは Javascript に変換されます。

| Typescript             | → | Javascript      |
|------------------------|---|-----------------|
| src/example/example.ts | → | dist/Example.js |

この対応は src/webpack.config.js の entry 内に記述されています。


#### ビルドして終了

```shell
cd src
npm run build
```

#### 監視して変更を検知したらビルドする

```shell
cd src
npm run watch
```
