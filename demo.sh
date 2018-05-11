if [ -d $1 ];then
	echo '目录已存在'
    exit 1
else 
    mkdir $1
    cd $1
    echo '<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>' > index.html
    mkdir css js
    cd css
    echo 'h1{color: red;}' > style.css
    cd ../js
    echo 'var string = "Hello World"
alert(string)' > main.js
    exit 0
fi
