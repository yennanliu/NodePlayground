//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
   res.send('rgrerge');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
//   console.log("App URL =  http://%s:%s", host, port)
  console.log("App URL = " + host + ":" + port)

})