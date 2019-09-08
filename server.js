var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    requireDir = require('require-dir'),
    config = require('./config/development'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client')));


var router = express.Router();
var routes = require('./server/routes');

routes.register(router);
app.use('/api', router);

mongoose.connect('mongodb://' + config.db.mongo.host + ':' + config.db.mongo.port + '/' + config.db.mongo.db);
app.listen(9000, function () {
    console.log("Welcome to attendanceManagement, server started at 9000 : "+config.db.mongo.db)
})
module.exports = app;