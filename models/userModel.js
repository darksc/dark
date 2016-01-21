var mongoose = require('mongoose');
var db = require('./db');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    realname: String
});

var UserModel = db.model('users', UserSchema, 'users');

module.exports = UserModel;