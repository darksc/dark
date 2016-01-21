'use strict';

var express = require('express');
var router = express.Router();

var UserModel = require('../models/userModel');

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'darK - 登陆'});
});

router.get('/signin', function (req, res, next) {
    var user = req.query;
    console.log(user);
    UserModel.find({username: user.username}, function(err, docs) {
        if(docs) {
            if(docs[0].password == user.password) {
                res.send('true');
            } else {
                res.send(false);
            }
        } else {
            res.send(false);
        }
    });
});

module.exports = router;