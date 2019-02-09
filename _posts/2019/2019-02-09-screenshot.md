---
layout: post
title: 'Arch Linuxで送る良さげなスクリーンショット生活'
tags:
- Arch Linux
---

Arch Linuxでスクリーンショットを撮るとき，単純にPrintScreenを押すとダイアログが表示される．
僕はこのダイアログのボタンを押すのすらも億劫だと感じるので，PrintScreenを押すとデスクトップに
すぐに保存されるようにした．

必要なパッケージは`maim`と`xdotool`（アクティブウィンドウの取得に使う）．

~~~bash
#!/bin/bash -e

to="$HOME/Desktop/$(date '+%Y%m%d-%H%M%S').png"
clip="xclip -selection clipboard -t image/png"

if [ $# -eq 0 ]; then
    zenity --error --text "require one argument"
    exit 1
fi
if ! which maim 1>/dev/null 2>&1 ; then
    zenity --error --text "maim command not found"
fi

while getopts dsaDSAh OPT; do
    case $OPT in
        d) maim "$to" ;;                                # desktop
        s) maim -s "$to" ;;                             # intaractive selection mode
        a) maim -i $(xdotool getactivewindow) "$to" ;;  # active window
        D) maim | $clip ;;
        S) maim -s | $clip ;;
        A) maim -i $(xdotool getactivewindow) | $clip ;;
        h) exit 1;;
    esac
done
~~~

「キーボード・ショートカット」ウィンドウから独自のショートカットを作成して，上のスクリプトをPrintScreenで呼べるようにしたらOK.

