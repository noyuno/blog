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

注：

1. 認証方式をhttpsでなくsshにすれば`ssh-agent`の世界になるのでここでは関係ない．
2. 当然，あらかじめGPGの鍵を作成しておく必要がある．
4. `gpg-agent`が正常に動作している必要がある．でなければ，GPGの秘密鍵を（おそらくpinentryにより）毎回入力する必要がある．
ようするに，GitのHTTPS認証をGPGに任せるということである．

### スクリプト

次のスクリプトを，`git-credential-pass`としてPATHの通った場所に保存し，実行権限をつける．

[dotfiles/git-credential-pass at master · noyuno/dotfiles](https://github.com/noyuno/dotfiles/blob/master/bin/git-credential-pass)

### 使用方法

まずGitの認証情報を保存するための関連付けをする．
次の1行目と2行目は同じ動作をする

~~~bash
git config --global credential.helper 'pass'
git config --global credential.helper 'pass -d ~/.password-store/git -g ~/.password-store/.gpg-id'
~~~

`-d`で認証情報を保存するディレクトリを，`-g`でGPGメールアドレス（recipient）を指定する．

その後は，いつもどおりに`git pull`, `git push`など認証が必要なコマンドを使う．
認証情報が保存されていない初回だけリモートのユーザ名とパスワードを入力する必要があるが，
それ以降の同じリモートのリポジトリは入力する必要はなく自動で認証される．

### passについて

[pass](https://www.passwordstore.org/) とはGitとGPGを使ってパスワードを管理するツールである．
`pass`は既定で`.password-store`を使う．

`git-credident-pass`が吐いたパスワード情報をGitで管理すると，
一度一つのコンピュータで認証すれば他の自分のコンピュータ（GPG秘密鍵が入っているコンピュータ）で再びGitのユーザ名とパスワードを入力する必要がなくなる．
また，パスワードをすべて`.password-store`に保存しておけば集中管理ができて楽である．
これらの利便性を享受するため，`git-credident-pass`の既定の保存先が`~/.password-store/git`になっている．

もちろん`pass`は必須ではなく，引数を指定することで`git-credident-pass`単体で使うこともできる．

