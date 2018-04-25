---
layout: post
title: 'Pleromaボットでインスタンスの更新を自動化する'
tags:
- Pleroma
- Python3
- bot
---

Pleromaボットを作り，Pleromaインスタンス自身の更新をPythonで自動化する．

PleromaボットはおおむねMastodon.pyを使えばいいが，
ログインがうまく行かなかったので，そこだけごりおす．

また，ログインの持続は600[sec]らしいので，期限が近くなったら再ログインする必要がある．
延長できるかもしれないが，よくわからん．

ボットの認証を取る

ここで扱う変数は次のような値を取る．

~~~python
secret="pleromabot.secret"
url="https://s.noyuno.space"
user="megurubot"
password="hogehoge"
~~~

~~~python
with open(filename,"r") as f:
    if os.path.exists(secret) == False:
        Mastodon.create_app(
            'pleromabot',
            api_base_url = url,
            to_file = secret
        )
~~~

ログインする.
ここでMastodon.pyのlog_inは使えなかった

~~~python
bot.log_in(
    email,
    password,
    to_file = 'user.secret'
)
~~~

これをつぎのようにする．

~~~python
auth = requests.post(url + "/oauth/token", params={
    "name":user, # no email address
    "password":password, 
    "grant_type":"password", 
    "client_id":clientid, 
    "client_secret":clientsecret
}).json()
~~~

ここで，`cliendid`はcreate_appで指定した`to_file`内の1行目に，
`clientsecret`は2行目に記載されているので取り出す．

ログインできたので，次はボットを作る．

~~~python
bot = Mastodon(
    client_id = secret,
    access_token = auth["access_token"],
    api_base_url = url
)
~~~

トゥートする

~~~python
bot.status_post(status="ちゃろー", visibility="private")
~~~

自分宛てのトゥートを探す．

~~~python
toots = bot.timeline_home(since_id=current_id)
~~~

ここで，`current_id`は前に`timeline_home`して取得したトゥートのうち，最大な`id`である．
これにより，前回取得したトゥートよりも最新のトゥートを取得できる．

`bot.toot("ちゃろー")`でもいいが，上は色々と設定できる．

自分はこれを用いて，@noyunoから@megurubotに来たトゥートに更新するような文言が入っていれば，
PleromaのGitリモートリポジトリからPullして更新して，
Pleromaサービスを再起動するようにした．

GitやSystemd操作は`subprocess.check_output`を使った．

これでメモリの潤沢なPCでデバッグして，Pushした後，@megurubotに話しかければ
Raspberry Piインスタンスを自動で更新してくれるというワークフローとなった．

ソース：[pleromabot/update.py at master · noyuno/pleromabot](https://github.com/noyuno/pleromabot/blob/master/update.py)

ボット：[@megurubot](https://s.noyuno.space/users/255)


