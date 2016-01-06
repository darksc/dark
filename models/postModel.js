var mongoose = require('mongoose');
var db = require('./db');

var PostSchema = new mongoose.Schema({
    author: String,
    data: String,
    post: String,
    only: String
});

var PostModel = db.model('post', PostSchema, 'post');

module.exports = PostModel;