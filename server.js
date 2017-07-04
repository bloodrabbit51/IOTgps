var express = require('express');
var app = express();
var config = require('./config/config.json');
var initializer = require('./app/controllers/deviceControllers/dataCollectorFromDevice.js')();

app.listen(config.http.port,function () {
    console.log(`http server is running on port ${config.http.port}`);
});