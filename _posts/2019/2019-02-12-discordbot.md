---
layout: post
title: 'Discord ボットを作った'
tags:
- Discord
image: /images/2019-02-12-discordbot.png
---

Discordボットをdiscord.pyを使って作った．
以前にほぼ同機能のSlackボットを作っていたため，車輪の再発明そのものである．

### 機能

現時点での機能は3つある．

1つ目はボットのAPIを提供する．

~~~
curl -XPOST -d '{"message":"hello, discordbot"}' http://discordbot/
~~~

とボットに投げるとDiscordに通知が転送されるという単純なものである．
[noyuno/photod](https://github.com/noyuno/photod) と
[noyuno/backupd](https://github.com/noyuno/backupd/)
はこれを使ってバックアップの進捗を報告する．

2つ目は Docker コンテナの死活監視である．
1時間ごとに Docker が生きているかどうかを cAdvisor を使って確認する．
cAdvisor API は v2.1 は `/containers` が使えないため， v1.3 を使用した．
予め `CONTAINERS` 環境変数で指定したコンテナが生きているか API で確認をして，
1つでも落ちていれば Discord に通知する．

もう1つは気象情報である．
予報の取得に今回は Dark Sky API を使用した．
この API は経度緯度を API に入力することで，現在，1時間毎の天気，湿度，風速，温度を取得できる．
欲しい情報を一通り取得できる上，予報が「薄曇りが今夜から始まり明日の朝まで続く．」と
（やや不自然な言い回しだが）具体的に教えてくれる．

降雨情報は国土交通省の「川の防災情報」の地図を使用した．
自動的にブラウザを開いてスクリーンショットを撮る manet を使用して，
スクリーンショットを Discord に送信するようにした．
これでいつどの程度雨が降るか直感的に理解できる．

[![image]({{page.image}})]({{page.image}})


ソースコード，使用方法：[noyuno/discordbot](https://github.com/noyuno/discordbot)


