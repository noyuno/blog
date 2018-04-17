#!/bin/bash -e

for i in $(find _posts/$1 -type f); do
    f=$(echo $i | cut -d '/' -f 3 | cut -d '.' -f 1)
    cat << EOF > blog/$f.html
<!doctype html>
<html>
    <head>
        <meta http-equiv="refresh" content="0;url=/$f">
    </head>
<body>
    301 Moved Permanently<br>
    <a hreF="/$f">/$f</a>
</body>
</html>
EOF
done

