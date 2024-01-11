import {response} from "express";

var express = require('express');
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

var cookieParser = require('cookie-parser')
var util = require('util');

const app = express();
const port = 3000;

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

/**
 *  https://www.runoob.com/nodejs/nodejs-restful-api.html
 */

// data
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

// router
app.get('/', (req:any, res:any) => {
    console.log("Cookies: " + util.inspect(req.cookies));
    res.send('---> My server is working !!!!!');
});

app.get('/users', function (req:any, res:any) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err:any, data:any) {
        console.log( "data = " + data );
        res.end( data );
    });
})

app.get('/add', function (req:any, res:any) {

    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err:any, data:any) {
        data = JSON.parse( data );
        console.log(">>> current data = " + data);
        data["user4"] = user["user4"];
        console.log(">>> updated data = " + data);
        res.end( JSON.stringify(data));
    });
})


app.get('/:id', function (req:any, res:any) {
    // 首先我们读取已存在的用户
    console.log(">>> read users.json ...");
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err:any, data:any) {
        console.log(">>> read users.json ...");
        data = JSON.parse( data );
        console.log( "data = " + data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

app.get('/delete', function (req:any, res:any) {

    // TODO : fix below
    var id = 2;

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err:any, data:any) {

        data = JSON.parse( data );
        console.log( "data = " + JSON.stringify(data) );
        //delete data["user" + id];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

app.listen(port, () => {
    if (port === 3000) {
        console.log('true')
    }
    console.log(`server is listening on ${port} !!!`);
});
