'use strict';

var express = require('express');
var router = express.Router();

var UserModel = require('../models/userModel');

/* GET register page. */
router.get('/', function (req, res, next) {
    res.render('register', {title: '矿岛 - 注册'});
});

router.post('/signup', function (req, res, next) {
    var userEntity = new UserModel(req.query);
    userEntity.save(function (err, product, numberAffected) {
        if (!err) {
            res.send(true);
        } else {
            res.send(false);
        }
    });

});

module.exports = router;