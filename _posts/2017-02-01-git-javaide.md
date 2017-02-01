---
layout: post
title: IntelliJ IDEA/EclipseでGit
tags:
- git
---

IntelliJ IDEA/EclipseでGitを使った開発をする際の雑多な注意事項．

## IntelliJ IDEA

### プロジェクトを開くとき

拡張子.imlファイルをダブルクリックして起動するか，起動時のメニューで「Open」
をクリックしてプロジェクトのルートディレクトリを選択．

### エンコード

「File>Settings」を開き，「Editor>File Encodings」を選択し，
「IDE Encoding」および「Project Encoding」を「UTF-8」にする．

### 行末文字

「File>Settings」を開き，「Editor>Code Style」を選択し，「Line separator」を
「Unix and OS X」にする．

### インデント

[IntelliJ IDEA クイックスタート](http://samuraism.com/products/jetbrains/intellij-idea/quickstart/codestyle-and-formatting)

### Git拡張

既に含まれている．

## Eclipse

Pleiades導入済みの環境．

### プロジェクトを開くとき

「ファイル>ファイル・システムからプロジェクトを読み込む」をクリックして，
「ディレクトリー」をクリックしてプロジェクトのルートディレクトリを選択して
「完了」をクリックする．

### エンコード

「編集>エンコードの設定」を開き，「その他」を選び，
右のコンボボックスから「UTF-8」を選択する．

また，「プロジェクト>プロパティー」をクリックして「リソース」を選択して
右ペインの「テキスト・ファイルのエンコード」を「その他」を選び，
右のコンボボックスから「UTF-8」を選択する．

### 行末文字

「プロジェクト>プロパティー」をクリックして「リソース」を選択して
右ペインの「新規テキスト・ファイルの行区切り文字」を「その他」を選び，
右のコンボボックスから「Unix」を選択する．

### インデント

[第1回 Eclipseでインデントをタブではなくスペースにする方法](http://d.hatena.ne.jp/bi_na/20100127/1264585042)

### Git拡張

EGit

[Eclipse EGit の使い方](http://another.maple4ever.net/archives/2060/)

「作業対象」に`http://download.eclipse.org/egit/updates`を入力

## おまけ：Ubuntu, Debianでの開発環境

```
sudo apt install -y git vim
```

## おまけ：Windowsでの開発環境

- 隠しファイルを表示させる
- マルチバイト文字を含まない名前のユーザを作成する
- Atomなどのテキストエディタを用意する

### Windows 10

「スタートメニュー>設定」をクリックして，「更新とセキュリティ>開発者向け」を選択する．

「Windows Update」の「アクティブ時間」を適宜変更する．

また，「開発者向け」の「開発者モード」を選択．
下の「エクスプローラー」の全項目にチェックを入れて「適用」をクリック．
同様に，「PowerShell」の全項目にチェックを入れて「適用」をクリック．

### SourceTree

#### 設定

全般

- フルネーム，メールアドレス
- デフォルトの文字コード:utf-8

ツールバー右上の「ターミナル」をクリック，
`git config --global core.autocrlf false`

### 補足：Chocolateyを使った方法

Chocolateyを使って，必要なソフトを一気にインストールする．
PowerShellを管理者権限で起動させて，次のコマンドを逐次実行させて
Chocolateyをインストールする．

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

[dotfiles/packages.config at master · noyuno/dotfiles · GitHub](https://github.com/noyuno/dotfiles/blob/master/windows/packages.config)
のように記述して

```
cinst -y packages.config
```

を実行してソフトをインストールする．
