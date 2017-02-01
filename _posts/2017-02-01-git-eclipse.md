---
layout: post
title: IntelliJ IDEA/EclipseでGit
tags:
- git
---

IntelliJ IDEA/EclipseでGitを使った開発をする際の雑多な注意事項．

## IntelliJ IDEA

拡張子.imlファイルをダブルクリックして起動するか，起動時のメニューで「Open」
をクリックしてプロジェクトのルートディレクトリを選択．

「File>Settings」を開き，「Editor>Code Style」を選択し，「Line separator」を
「Unix and OS X」にする．

さらに，「Editor>File Encodings」を選択し，
「IDE Encoding」および「Project Encoding」を「UTF-8」にする．

### インデント

[IntelliJ IDEA クイックスタート](http://samuraism.com/products/jetbrains/intellij-idea/quickstart/codestyle-and-formatting)

## Eclipse

Pleiades導入済みの環境．

### 拡張機能EGit

[Eclipse EGit の使い方](http://another.maple4ever.net/archives/2060/)

「作業対象」に`http://download.eclipse.org/egit/updates`を入力

### 文字化けを解消

「編集>エンコードの設定」を開き，「その他」を選び，
右のコンボボックスから「UTF-8」を選択する．

また，「プロジェクト>プロパティー」をクリックして「リソース」を選択して
右ペインの「テキスト・ファイルのエンコード」を「その他」を選び，
右のコンボボックスから「UTF-8」を選択する．
さらに，その下の「新規テキスト・ファイルの行区切り文字」を「その他」を選び，
右のコンボボックスから「Unix」を選択する．

### Eclipseにプロジェクトを読みこませる

「ファイル>ファイル・システムからプロジェクトを読み込む」をクリックして，
「ディレクトリー」をクリックしてプロジェクトのルートディレクトリを選択して
「完了」をクリックする．

### インデント

[第1回 Eclipseでインデントをタブではなくスペースにする方法](http://d.hatena.ne.jp/bi_na/20100127/1264585042)

