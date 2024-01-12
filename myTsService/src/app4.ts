import express from 'express';
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'test'
});

connection.connect();

function queryDB(){
    connection.query('SELECT 1 + 1 AS solution', function (error:any, results:any, fields:any) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
}

// router
app.get('/', (req, res) => {
    res.send('---> My server is working !!!!!');
});

app.get('/db', (req, res) => {
    res.send('---> query Mysql !!!');
    queryDB();
});



app.listen(port, () => {
    if (port === 3000) {
        console.log('true')
    }
    console.log(`server is listening on ${port} !!!`);
});
