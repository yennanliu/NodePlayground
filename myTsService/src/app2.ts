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
 *  https://www.runoob.com/nodejs/nodejs-express-framework.html
 */

// router
app.get('/', (req:any, res:any) => {
    console.log("Cookies: " + util.inspect(req.cookies));
    res.send('---> My server is working !!!!!');
});

app.get('/upload_file.html', function (req:any, res:any) {
    res.sendFile( __dirname + "/upload_file.html" );
})

app.post('/file_upload', function (req:any, res:any){

    console.log(">>> file info = " + JSON.stringify(req.files[0]));
    var des_file = __dirname + "/" + req.files[0].originalname;
    console.log("read file ...")
    fs.readFile( req.files[0].path, function (err:any, data:any) {
        console.log("save file ...")
        fs.writeFile(des_file, data, function (err: any) {
            if( err ){
                console.log("save file FAIL ...")
                console.log( err );
            }else{
                let response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( "response = " + JSON.stringify(response) );
            console.log("save file OK ...")
            //res.end( JSON.stringify( response ) );
            res.end( JSON.stringify( "OK" ) );
        });
    });
})

app.listen(port, () => {
    if (port === 3000) {
        console.log('true')
    }
    console.log(`server is listening on ${port} !!!`);
});
