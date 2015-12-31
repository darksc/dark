var mongoose = require('mongoose');
var db = require('./db');

var TestSchema = new mongoose.Schema({
    id: String,   //定义一个属性name，类型为String
    name: String
});

var TestModel = db.model('Test', TestSchema, 'test');

module.exports = TestModel;