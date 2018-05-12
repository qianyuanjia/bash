var http=require('http');
var url=require('url');
var port=process.argv[2];
var server=http.createServer(function(request,response){
	var path=request.url;
	var oUrl=url.parse(path,true);
	var pathStr=oUrl.pathname;
	var queryStr='';
	if(path.indexOf('?')>=0){
		queryStr=path.substring(path.indexOf('?'));
	}
	console.log('请求方式'+request.method);
	console.log('请求路径'+pathStr);
	console.log('请求参数'+queryStr);
	
	if(pathStr=='/'){
		response.setHeader('Content-Type','text/html; charset=utf-8');
		response.write('<!DOCTYPE html>\n<html><head>'+'<link rel="stylesheet" href="/style.css"></link>'
			+'<script src="/main.js"></script>'
			+'</head><body><h1>Hello World</h1></body></html>');
		response.end();
	}else if(pathStr=='/style.css'){
		response.setHeader('Content-Type','text/css; charset=utf-8');
		response.write('body{color:red;background:#ccc;}');
		response.end();
	}else if(pathStr=='/main.js'){
		response.setHeader('Content-Type','text/javascript; charset=utf-8');
		response.write('alert("Hello");');
		response.end();
	}else{
		response.statusCode=404;
		response.end();
	}	
});

if(!port){
	console.log('给个端口号呗！');
}else{
	server.listen(port);
	console.log('服务器已经在监听'+port+'端口...');
}
