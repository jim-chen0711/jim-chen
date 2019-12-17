var fs = require('fs');
var express = require('express');
var multer = require('multer')
const path = require('path');
var app = express();
var upload = multer({ dest: 'upload/' });

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./test.html', {encoding: 'utf8'});
    res.send(form);
});


const port = 3000
app.listen(port,() =>{
    console.log(`app is running at port: ${port}`)
});