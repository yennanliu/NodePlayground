import express from 'express';
var bodyParser = require('body-parser');

const app = express();
const port = 3000;
// var server = app.listen(port, function (){
//
//     if (port === 3000) {
//         console.log('true')
//     }
//     console.log(`server is listening on ${port} !!!`);
// })

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/public', express.static('public'));

// router
app.get('/', (req, res) => {
    res.send('---> My server is working !!!!!');
});

app.get('/test1', (req, res) => {
    res.send('---> test1 !!!');
});

app.post('/', (req, res) => {
    console.log("main page POST")
    res.send('hello POST');
});

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
    //res.sendFile(  __dirname + '..' + "static/index.html" );
})

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


app.listen(port, () => {
    if (port === 3000) {
        console.log('true')
    }
    console.log(`server is listening on ${port} !!!`);
});
