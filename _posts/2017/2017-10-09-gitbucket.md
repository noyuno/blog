---
layout: post
title: 'GitBucketを更新する'
tags:
- Linux
- Git
- GitBucket
---

GitBucketを更新する．

GitHub APIを駆使して最新リリースの実行ファイルをダウンロードする．

~~~sh
#!/bin/bash -e
curl -sL $(curl -s https://api.github.com/repos/gitbucket/gitbucket/releases/latest | \
    jq -r '.assets[] |select(.name=="gitbucket.war").browser_download_url') \
    >/tmp/gitbucket.war
sudo -u git cp /tmp/gitbucket.war /var/git/gitbucket.war
sudo systemctl restart gitbucket.service
~~~

