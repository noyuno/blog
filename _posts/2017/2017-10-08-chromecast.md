---
layout: post
title: 'Chromecastを操作する'
tags:
- Python3
image: /images/2017-10-08-chromecast.png
---

Python 3でChromecastの情報を取得したり，操作する．

[Raspberry Pi 3 Server](http://noyuno.space)

[![image]({{page.image}})]({{page.image}})

## 取得

    HTTP GET /cgi/chromecast

### アイドル

~~~json
{
    "active": false, 
    "app": "Backdrop", 
    "play": false
}
~~~

### dアニメストア

~~~json
{
    "active": true,
    "app": "d anime store2",
    "autoPlayMode": 1,
    "images": [
        {
            "height": 100,
            "url": "https://cs1.anime.dmkt-sp.jp/anime_kv/img/21/52/9/0/01/21529001_1_2.png?1491291002000",
            "width": 100
        },
        {
            "height": 100,
            "url": "https://cs1.anime.dmkt-sp.jp/anime_kv/img/21/52/9/0/01/21529001_1_2.png?1491291002000",
            "width": 100
        }
    ],
    "metadataType": 0,
    "nextContentInfoUri": "https://anime.dmkt-sp.jp/animestore/rest/WS010104?partId=21529002&startBitrateCd=4&befPlayPartId=21529001&needWebViewUrl=1",
    "opSkipMode": 0,
    "play": true,
    "prevContentInfoUri": null,
    "title": "フレームアームズ・ガール #01 轟雷／スティレットとバーゼラルド"
}
~~~

### AbemaTV

番組名取得は不可

~~~json
{
    "active": true,
    "app": "AbemaTV",
    "images": [
        {
            "height": 72,
            "url": "https://hayabusa.io/abema/channels/logo/midnight-anime.w256.h144.png",
            "width": 128
        }
    ],
    "metadataType": 0,
    "play": true,
    "subtitle": "",
    "title": "深夜アニメチャンネル"
}
~~~

## 操作

    HTTP GET /cgi/chromecast?command=1

- command: pause, play, stopのいづれか
- 戻り値: 取得の項に同じ

<script src="https://gist-it.appspot.com/http://github.com/noyuno/pisite/raw/master/cgi/chromecast"></script>

