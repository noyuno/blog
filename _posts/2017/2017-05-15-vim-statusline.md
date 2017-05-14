---
layout: post
title: lightline.vimでステータスラインに絶対パスを表示させる
tags:
- vim

---

lightline.vimでステータスラインに絶対パスを表示させる．

~~~vim
  let g:lightline = {
      \ 'active': {
      \   'left': [ [ 'mode', 'paste' ],
      \             [ 'fugitive', 'readonly', 'absolutepath', 'modified' ] ],
      \ }
      \ 'component_function': {
      \   'absolutepath': 'AbsolutePath'
      \ },
      \ }

  function! AbsolutePath()
    let a = substitute(expand('%:p'), $HOME, '~', '')
    if a == ""
      return '🗒'
    elseif strlen(a) > 40
      return a[strlen(a)-40:]
    else
      return a
    endif
  endfunction
~~~

