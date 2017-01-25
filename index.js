var morgan = require('morgan');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
//All express config done in express.js
var app = require("./config/express");

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/app/index.html');
});

// connect to our database
mongoose.connect('mongodb://localhost/crondb', function () {
    console.log('------------');
    console.log('----- connected to mongodb://localhost/crondb -----');
    console.log('------------');
});

//Bluebird promise assign to mongoose
mongoose.Promise = Promise;

module.exports = app;