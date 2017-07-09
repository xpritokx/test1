var mongoose = require('mongoose');
var dataHelper = require('./scripts/getData');

var DB_HOST = 'localhost';
var DB_NAME = 'sanna_code';
var DB_PORT = 27017;

var db;

//DB_HOST, DB_NAME, DB_PORT
mongoose.connect('mongodb://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME, {
    useMongoClient: true
});

db = mongoose.connection;

db.once('connected', function () {
    console.log('connection is ok');

    require('./models/index');

    dataHelper.getData();
});

db.on('error', function(err){
    throw err;
});