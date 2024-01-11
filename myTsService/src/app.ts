import express from 'express';

const app = express();
const port = 3000;
// var server = app.listen(port, function (){
//
//     if (port === 3000) {
//         console.log('true')
//     }
//     console.log(`server is listening on ${port} !!!`);
// })

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



app.listen(port, () => {
    if (port === 3000) {
        console.log('true')
    }
    console.log(`server is listening on ${port} !!!`);
});
