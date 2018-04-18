---
layout: post
title: 'Neovimのキーマッピング一覧'
tags:
- Neovim
---

自分のNeovimのキーマッピング一覧

| mode | map | description | command |
|:----:|:----|:------------|:--------|
|    n | `y<C-G>     ` |             | `*@:call setreg(v:register, <SNR>25_recall())<CR>` |
|    n | `<C-A>      ` | インクリメント     | `  <SNR>16_(increment)` |
|      | `<C-B>      ` |             | `* max([winheight(0) - 2, 1]) . "\<C-U>" . (line('w0') <= 1 ? "H" : "M")` |
|      | `<C-F>      ` |             | `* max([winheight(0) - 2, 1]) . "\<C-D>" . (line('w$') >= line('$') ? "L" : "M")` |
|    s | `<C-H>      ` |             | `* a<BS>` |
|    n | `<C-H>      ` | ヘルプ         | `* :<C-U>Unite -buffer-name=help help<CR>` |
|    n | `<Tab>      ` | タブ切り替え      | `* :wincmd w<CR>` |
|    x | `<Tab>      ` |             | `* >` |
|    n | `<C-K>      ` | 変更ジャンプ      | `* :<C-U>Unite change jump<CR>` |
|    n | `<C-L>      ` | 再描画         | `* :<C-U>redraw!<CR>` |
|    s | `<CR>       ` |             | `* a<BS>` |
|    n | `<C-T>      ` | タブ一覧        | `* :<C-U>Unite -auto-resize -select=`tabpagenr()-1` tab<CR>` |
|    n | `<C-W>      ` | 前のタブ            | `* :<C-U>Unite -force-immediately window:all:no-current<CR>` |
|    n | `<C-X>      ` | デクリメント      | `  <SNR>16_(decrement)` |
|    n | `<Esc><Esc> ` | ハイライトオフ     | `* :nohlsearch<CR>:match<CR>` |
|    x | `<Space>    ` |             | `  [Space]` |
|    n | `<Space>    ` |             | `  [Space]` |
|    n | `<Space>c   ` | 文法チェック            | `* :<C-U>SyntasticCheck<CR>` |
|    n | `<Space>u   ` | Uniteメニュー            | `* :<C-U>Unite<CR>` |
|    n | `#          ` | 他のファイル            | `* <C-^>` |
|    n | `*          ` | 単語検索            | `* :<C-U>UniteWithCursorWord -buffer-name=search%`bufnr('%')` line:forward:wrap<CR>` |
|    n | `,st        ` |             | `* :NeoCompleteIncludeMakeCache<CR> :UniteWithCursorWord -immediately -sync -default-action=context_split tag` /include<CR> |
|    n | `,ll        ` | make show   | `* :<C-U>silent !make show<CR><C-L>` |
|    n | `,gu        ` |             | `* :call <SNR>16_InsertGitHubUserInfo()<CR>` |
|    n | `,c         ` | 文法チェック       | `* :<C-U>SyntasticCheck<CR>` |
|    n | `,,         ` | 更新            | `* :<C-U>update<CR>` |
|    n | `,s         ` |             | `* :<C-U>Unite latex-symbols<CR>` |
|    x | `,          ` |             | `* <Nop>` |
|    n | `,          ` |             | `* <Nop>` |
|    n | `/          ` | 検索            | `* :<C-U>Unite -buffer-name=search%`bufnr('%')` -start-insert line:forward:wrap<CR>` |
|    x | `;r         ` | レジスタ            | `* d:<C-U>Unite -buffer-name=register -default-action=append register history/yank<CR>` |
|    n | `;r         ` | レジスタ            | `* :<C-U>Unite -buffer-name=register -default-action=append register history/yank<CR>` |
|    n | `;g         ` | grep        | `* :<C-U>Unite grep -buffer-name=grep`tabpagenr()` -auto-preview -no-split -no-empty -resume <CR>` |
|    n | `;o         ` |             | `* :<C-U>Unite outline -no-start-insert -resume<CR>` |
|    n | `;b         ` |             | `* :<C-U>Unite -buffer-name=build`tabpagenr()` -no-quit build<CR>` |
|    x | `;          ` |             | `* <Nop>` |
|    n | `;          ` |             | `* <Nop>` |
|    x | `<          ` |             | `* <gv` |
|    n | `<          ` | インデント       | `* <<` |
|      | `>          ` | インデント       | `  map` |
|    n | `B          ` | 1単語戻る       | `* b` |
|    n | `M          ` |             | `* m` |
|    n | `Q          ` |             | `* q` |
|    n | `W          ` | w3m         | `* :<C-U>W3m <C-R>+` |
|    x | `X          ` | カット         | `* "*x:let [@+,@"]=[@*,@*]<CR>` |
|    n | `Y          ` | 行をヤンク            | `* "*Y:let [@+,@"]=[@*,@*]<CR>` |
|    x | `Y          ` | 行をヤンク            | `* "*Y:let [@+,@"]=[@*,@*]<CR>` |
|    n | `ZZ         ` |             | `* <Nop>` |
|    n | `[Space]n   ` |             | `* :UniteNext<CR>` |
|    o | `[z         ` |             | `* '<Esc>:<C-U>call <SNR>71_UpdateWin(0)<CR>' . '"' . v:register . v:operator . v:count1 . '[z'` |
|    x | `[z         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>gv'.v:count.'[z'` |
|    n | `[z         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>'.v:count.'[z'` |
|    nox|`[Space]k   ` |             | `* zk` |
|    nox|`[Space]j   ` |             | `* zj` |
|    x | `[Alt]P     ` |             | `* O<Esc>Pm``[=`]``^` |
|    n | `[Alt]P     ` |             | `* O<Esc>Pm``[=`]``^` |
|    x | `[Alt]p     ` |             | `* o<Esc>pm``[=`]``^` |
|    n | `[Alt]p     ` |             | `* o<Esc>pm``[=`]``^` |
|    x | `[Alt]      ` |             | `* <Nop>` |
|    n | `[Alt]      ` |             | `* <Nop>` |
|    n | `[Window]B  ` |             | `* :<C-U>Unite buffer -buffer-name=file<CR>` |
|    n | `[Window]b  ` |             | `* :<C-U>Unite buffer_tab -buffer-name=file<CR>` |
|    n | `[Window]Q  ` |             | `* :<C-U>bd<CR>` |
|    n | `[Window]q  ` |             | `* :<C-U>q<CR>` |
|    n | `[Window]v  ` |             | `* :<C-U>vs<CR>` |
|    n | `[Window]T  ` |             | `* :<C-U>Unite tab<CR>` |
|    n | `[Window]t  ` |             | `* :<C-U>tabnew<CR>` |
|    n | `[Window]P  ` |             | `* :<C-U>bp<CR>` |
|    n | `[Window]N  ` |             | `* :<C-U>bn<CR>` |
|    n | `[Window]O  ` |             | `* <C-W>=` |
|    n | `[Window]o  ` |             | `* :<C-U>only<CR>` |
|    n | `[Window]w  ` |             | `* <C-W>w` |
|    n | `[Window]=  ` |             | `* <C-W>=` |
|    n | `[Window]r  ` |             | `* <C-W>r` |
|    n | `[Window]p  ` |             | `* gT` |
|    n | `[Window]H  ` |             | `* <C-W>H` |
|    n | `[Window]L  ` |             | `* <C-W>L` |
|    n | `[Window]K  ` |             | `* <C-W>K` |
|    n | `[Window]J  ` |             | `* <C-W>J` |
|    n | `[Window]h  ` |             | `* <C-W>h` |
|    n | `[Window]l  ` |             | `* <C-W>l` |
|    n | `[Window]k  ` |             | `* <C-W>k` |
|    n | `[Window]j  ` |             | `* <C-W>j` |
|    n | `[Window]   ` |             | `* <Nop>` |
|    n | `[Space]cd  ` |             | `* :<C-U>call <SNR>16_cd_buffer_dir()<CR>` |
|    n | `[Space]rv  ` |             | `* :<C-U>source $MYVIMRC | echo "source $MYVIMRC"<CR>` |
|    n | `[Space]ev  ` |             | `* :<C-U>edit $MYVIMRC<CR>` |
|    n | `[Space]w   ` |             | `* :<C-U>call ToggleOption('wrap')<CR>` |
|    n | `[Space]p   ` |             | `* :UnitePrevious<CR>` |
|    n | `[Space]ar  ` |             | `* :<C-U>setlocal autoread<CR>` |
|    n | `[Space]cl  ` |             | `* :<C-U>call ToggleOption('cursorline')<CR>` |
|    n | `[Space]/   ` |             | `* :<C-U>call ToggleOption('hlsearch')<CR>` |
|    n | `[Space]m   ` |             | `* :<C-U>call ToggleOption('paste')<CR>:set mouse=<CR>` |
|    n | `[Space].   ` |             | `* :<C-U>call ToggleOption('relativenumber')<CR>` |
|    x | `[Space]    ` |             | `* <Nop>` |
|    n | `[Space]    ` |             | `* <Nop>` |
|    n | `[Space]i   ` |             | `* :<C-U>Findent! --no-warnings<CR>` |
|    n | `[Window]e  ` |             | `* :<C-U>Unite junkfile/new junkfile -start-insert<CR>` |
|    n | `[Space]v   ` | ファイラ        | `* :<C-U>VimFiler -invisible<CR>` |
|    n | `[Alt]?     ` |             | `* ?` |
|    n | `[Alt]/     ` |             | `* /` |
|    n | `[Space]ft  ` | ファイルタイプ     | `* :<C-U>Unite -start-insert filetype filetype/new<CR>` |
|    n | `[Window]g  ` |             | `* :<C-U>Unite -start-insert ghq<CR>` |
|    n | `[Window]n  ` |             | `* gt` |
|    n | `[Window]<Sp`a|             | `ce> * :<C-U>Unite -buffer-name=files -path=~/.vim/rc file_rec<CR>` |
|    n | `[Window]s  ` |             | `* :<C-U>sp<CR>` |
|    n | `[Space]gl  ` |             | `* :<C-U>Gita blame<CR>` |
|    n | `[Space]gb  ` |             | `* :<C-U>Gita browse<CR>` |
|    n | `[Space]gd  ` |             | `* :<C-U>Gita diff<CR>` |
|    n | `[Space]ga  ` |             | `* :<C-U>Gita commit --amend<CR>` |
|    n | `[Space]gc  ` |             | `* :<C-U>Gita commit<CR>` |
|    n | `[Space]gs  ` |             | `* :<C-U>Gita status<CR>` |
|    n | `\          ` |             | `* ` |
|    o | `]z         ` |             | `* '<Esc>:<C-U>call <SNR>71_UpdateWin(0)<CR>' . '"' . v:register . v:operator . v:count1 . ']z'` |
|    x | `]z         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>gv'.v:count.']z'` |
|    n | `]z         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>'.v:count.']z'` |
|    x | `ad         ` |             | `* a"` |
|    o | `ad         ` |             | `* a"` |
|    x | `aq         ` |             | `* a'` |
|    o | `aq         ` |             | `* a'` |
|    x | `ar         ` |             | `* a]` |
|    o | `ar         ` |             | `* a]` |
|    x | `aa         ` |             | `* a>` |
|    o | `aa         ` |             | `* a>` |
|    x | `e          ` |             | `  [Alt]` |
|    n | `e          ` |             | `  [Alt]` |
|    n | `gu         ` |             | `* gUiw ]` |
|    x | `id         ` |             | `* i"` |
|    o | `id         ` |             | `* i"` |
|    x | `iq         ` |             | `* i'` |
|    o | `iq         ` |             | `* i'` |
|    x | `ir         ` |             | `* i]` |
|    o | `ir         ` |             | `* i]` |
|    x | `ia         ` |             | `* i>` |
|    o | `ia         ` |             | `* i>` |
|    x | `l          ` |             | `* foldclosed(line('.')) != -1 ? 'zogv0' : 'l'` |
|    n | `l          ` |             | `* foldclosed(line('.')) != -1 ? 'zo0' : 'l'` |
|    x | `m          ` |             | `* <Nop>` |
|    n | `m          ` |             | `* <Nop>` |
|    n | `n          ` | 次を検索        | `* :<C-U>UniteResume search%`bufnr('%')`  -no-start-insert -force-redraw<CR>` |
|    n | `q          ` | 閉じる         | `* winnr('$') != 1 ? ':<C-U>close<CR>' : ""` |
|    x | `r          ` |             | `* <C-V>` |
|    x | `s          ` |             | `* :s//g<Left><Left>` |
|    n | `s          ` | [Window] prefix            | `  [Window]` |
|    n | `tp         ` | ジャンプ            | `* &filetype == 'help' ? ":\<C-U>pop\<CR>" : ":\<C-U>Unite jump\<CR>"` |
|    n | `tt         ` |             | `* &filetype == 'help' ?  "g\<C-]>" : ":\<C-U>UniteWithCursorWord -buffer-name=tag -immediately  tag tag/include \<CR>"` |
|    n | `x          ` |             | `* "_x` |
|    x | `y          ` |             | `* "*y:let [@+,@"]=[@*,@*]<CR><Space>` |
|    o | `zk         ` |             | `* '<Esc>:<C-U>call <SNR>71_UpdateWin(0)<CR>' . '"' . v:register . v:operator . v:count1 . 'zk'` |
|    x | `zk         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>gv'.v:count.'zk'` |
|    n | `zk         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>'.v:count.'zk'` |
|    o | `zj         ` |             | `* '<Esc>:<C-U>call <SNR>71_UpdateWin(0)<CR>' . '"' . v:register . v:operator . v:count1 . 'zj'` |
|    x | `zj         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>gv'.v:count.'zj'` |
|    n | `zj         ` |             | `* ':<C-U>call <SNR>71_UpdateWin(0)<CR>'.v:count.'zj'` |
|    n | `zC         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zC` |
|    n | `zc         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zc` |
|    n | `zO         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zO` |
|    n | `zo         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zo` |
|    n | `zA         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zA` |
|    n | `za         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>za` |
|    n | `zX         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zX` |
|    n | `zx         ` |             | `* :<C-U>call <SNR>71_UpdateWin(0)<CR>zx` |
|    nox| `zz         ` |             | `* (winline() == (winheight(0)+1)/ 2) ? 'zt' : (winline() == 1)? 'zb' : 'zz'` |
|    n | `zu         ` |             | `* :<C-U>Unite -vertical -no-quit -winwidth=30 outline<CR>` |
|    n | `zn         ` |             | `* :<C-U>set nofoldenable<CR>` |
|    n | `ze         ` |             | `* :<C-U>set foldenable<CR>` |
|    s | `<Del>      ` |             | `* a<BS>` |
|    s | `<BS>       ` |             | `* a<BS>` |
|    n | `<S-Right>  ` |             | `* v<Right>` |
|    n | `<S-Left>   ` |             | `* v<Left>` |
|    n | `<S-Down>   ` |             | `* V<Down>` |
|    n | `<S-Up>     ` |             | `* V<Up>` |
|    n | `<SNR>16_(de`c|             | `rement) * :AddNumbers -1<CR>` |
|    n | `<SNR>16_(in`c|             | `rement) * :AddNumbers 1<CR>` |
|    x | `<S-Tab>    ` |             | `* <` |
|    n | `<C-Space>  ` |             | `  <Nul>` |
|    n | `<F2>       ` | サイドバーファイラ            | `* :VimFiler -simple -buffer-name=explorer -split -winwidth=30 -toggle -no-quit<CR>` |
|    n | `っy        ` |             | `* yy` |
|    n | `っd        ` |             | `* dd` |
|    n | `お         ` |             | `* o` |
|    n | `う         ` |             | `* u` |
|    n | `い         ` |             | `* i` |
|    n | `あ         ` |             | `* a` |

