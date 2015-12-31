var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;