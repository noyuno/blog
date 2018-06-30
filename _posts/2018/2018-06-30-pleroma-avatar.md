---
layout: post
title: 'PleromaのVPS移行時にアバターが見えなくなった'
tags:
- Pleroma
---

なったので，力ずくで復旧させた．

自分がフォローしているインスタンスはほぼMastodonなので，MastodonのユーザページのHTMLタグ
からアバターのURLを取得した（スクレイピング）．
APIを使用すると，すべてのインスタンスにアカウントを作らなければならなくなるため，面倒で諦めた．
PleromaはHTMLタグから取得できないうえ，少ないので諦めた．

次のスクリプトをrootで動かす．
PostgreSQLのpleroma_devデータベースのusersテーブル
からユーザ名を取得して，そのユーザ名のページからアバターのURLをHTMLスクレイピングにより取得して，
ユーザ名とアバターURLの対を`list`に出力する．

~~~bash
#!/bin/bash -e
set -e

p() {
    sudo -u pleroma psql -q -d pleroma_dev -c "$1"
}

p "select nickname from users;" > nicknames

cat nicknames | while read n ; do
    name=$(echo $n | awk -F@ '{print $1}')
    domain=$(echo $n | awk -F@ '{print $2}')
    url=$(curl -sL "$domain/@$name" | \
        grep "div class='avatar'" -A2 | \
        sed 's/>/\n/g' | \
        grep img | \
        sed 's/ /\n/g' | \
        grep 'src=' | \
        awk -F= '{print $2}' |\
        sed 's/"//g')
    echo "$name@$domain,$url" | tee -a list
    sleep 2
done
~~~

次に，次のスクリプトをrootで実行してデータベースのアバターURLを取得したアバターURLに更新する．

~~~bash
#!/bin/bash -e

set -e

cat list | while read line ; do
    nickname=$(echo $line | awk -F, '{print $1}')
    url=$(echo $line | awk -F, '{print $2}')
    if [ "$url" == "" ]; then
        echo "$nickname does not have avatar"
        echo "$nickname" >> noavatar
        continue
    fi
    if [[ $url  =~ ^/ ]] ;then
        domain=$(echo $nickname | awk -F@ '{print $2}')
        url=https://$domain$url
    fi
    echo "update users set avatar='{\"url\": [{\"href\": \"$url\"}], \"type\": \"Image\"}' where nickname='$nickname';" >> avatar.sql
done

sudo -u pleroma psql -q -d pleroma_dev < avatar.sql
~~~

3051ユーザのうち，取得できなかったのは210ユーザだった．

