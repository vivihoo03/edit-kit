var express=require('express');
var app =express();
var bodyParser = require('body-parser'); 
var QUJIAdecoder = require('./qujia');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
app.post('/getPath',function(req,res){
    console.log(req.stack);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    console.log('-----------------------解析开始-------------------------');
    let designData = QUJIAdecoder(req.body.kjl, req.body.jtl);
    console.log('-----------------------解析完成-------------------------');
    res.json(designData);
})
//配置服务端口
var server = app.listen(3001, function () {

var host = server.address().address;

var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})