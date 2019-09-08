var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client')));


app.listen(9000, function () {
    console.log("Welcome to Police_Squad, server started at 3000 :")
})
module.exports = app;