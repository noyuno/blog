---
layout: post
title: CLI上でアプリケーションメニューを表示
tags:
- Linux

image: /images/2017-08-11-application-menu-on-cli.png
---

CLI上でアプリケーションメニューを[ranger](http://ranger.nongnu.org/)
で表示して，選択したアプリケーションを実行する．

![menu]({{page.image}})

## 使い方

    menu [-b] [arguments...]

    -b: build
    arguments: Arguments of choosed program (e.g. filename)

`menu`を初めて使う前や新しいアプリケーションをインストールしたときに，
アプリケーションリストを作成するために`menu -b`を実行する．
2回目以降は単純に`menu`を実行すれば良い．

<script src="https://gist-it.appspot.com/http://github.com/noyuno/dotfiles/raw/master/bin/menu"></script>

