/**
 * Created by dark on 15/12/28.
 */
var express = require('express');
var router = express.Router();

var TestModel = require('../models/testModel');

/* GET test listing. */
router.get('/', function (req, res, next) {
    TestModel.find(function (err, test) {
        console.log(test);
        res.render('test', {users: test});
    });
});

module.exports = router;