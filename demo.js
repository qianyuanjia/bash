#!/user/bin/env node

var fs=require('fs');
fs.mkdirSync(process.argv[2]);
process.chdir(process.argv[2]);
fs.writeFileSync('index.html','<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>');
fs.mkdirSync('css');
fs.mkdirSync('js');
process.chdir('css');
fs.writeFileSync('style.css','h1{color: red;}');
process.chdir('../js');
fs.writeFileSync('main.js',' var string = "Hello World"\nalert(string)');
process.exit(0);
