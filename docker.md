# Node.js の Docker コンテナを使用する方法

システムに Node.js をインストールしたくない場合、Docker で Node.js を動かすことができます。

### Docker をインストールする

https://www.docker.com/ja-jp/

から、ご自分の PC 環境用の Docker Desktop をダウンロードして、インストールします。


### Docker コンテナを起動する

```shell
docker compose up -d
```

### Docker コンテナを終了する

```shell
docker compose down
```

### 起動中の Docker コンテナを使ってビルド

```shell
docker compose exec --workdir /root/src nodejs npm run watch
```
