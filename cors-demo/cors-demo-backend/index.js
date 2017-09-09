const express = require('express');
const cookieParser = require('cookie-parser');
let app = express();
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Credentials","true");
    next();
});
app.use(cookieParser());
app.get('/setcookie', function (req, res) {
    res.cookie("testkey", "testvalue");
    res.send('cookie set ok!');
});
app.get('/getcookie', function (req, res) {
    res.send('cookie is ' + req.cookies.testkey);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});