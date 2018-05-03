---
layout: post
title: 'Git の認証情報を暗号化して保存する'
tags:
- Git
- GPG
---

Git の認証情報はメモリかストレージに平文として保存されてしまう．
さらに，メモリでは再ログインをすると失われてしまい，新たにユーザ名とパスワードを入力する必要がある．
これはとても面倒なのでストレージに暗号化して保存することにする．

Gitは認証情報の保存方法を選択することができ，`cache`（メモリに保存）, `store`（平文でストレージに保存）
のほか，自作のスクリプトにより拡張することができる．
今回はBashスクリプト`git-credential-pass`を作成して認証情報をGPGで暗号化して保存する．

さらにそれらをpass（Gitでパスワードを扱いやすくするラッパ）で管理すると，
一度一つのコンピュータで認証すれば他の自分のコンピュータでも自動的に認証することができる．

※認証方式をhttpsでなくsshにすれば`ssh-agent`の世界になるのでここでは関係ない．

※当然，あらかじめGPGの鍵を作成しておく必要がある．

※`gpg-agent`が正常に動作している必要がある．でなければ，GPGの秘密鍵を毎回入力する必要がある．

### スクリプト

次のスクリプトを，`git-credential-pass`として保存し，実行権限をつける．

[dotfiles/git-credential-pass at master · noyuno/dotfiles](https://github.com/noyuno/dotfiles/blob/master/bin/git-credential-pass)

### 使用方法

まずGitの認証情報を保存するための関連付けをする．

~~~bash
git config --global credential.helper 'pass -d pass-directory'
~~~

※`pass-directory`を指定しないときは`$HOME/.password-store/git`となる．

その後は，いつもどおりに`git pull`, `git push`など認証が必要なコマンドを使う．
認証情報が保存されていない初回だけリモートのユーザ名とパスワードを入力する必要があるが，
それ以降の同じリモートのリポジトリは入力する必要はなく自動で認証される．

他のコンピュータで保存した認証情報を共有したければ，Gitを用いて転送すれば良い．

