#!/bin/bash -e

for i in $(find _posts/$1 -type f); do
    f=$(echo $i | cut -d '/' -f 3 | cut -d '.' -f 1)
    m=$(echo $f | cut -d '-' -f 2)
    d=$(echo $f | cut -d '-' -f 3)
    n=$(echo $f | cut -d '-' -f 4)
    mkdir -p $1/$m/$d/$n
    cat << EOF > $1/$m/$d/$n/index.html
<!doctype html>
<html>
    <head>
        <meta http-equiv="refresh" content="0;url=/$1-$m-$d-$n">
    </head>
<body>
    301 Moved Permanently<br>
    <a hreF="/$1-$m-$d-$n">/$1-$m-$d-$n</a>
</body>
</html>
EOF
done

