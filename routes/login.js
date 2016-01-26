'use strict';

var express = require('express');
var router = express.Router();

var UserModel = require('../models/userModel');

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: '矿岛 - 登陆'});
});

router.get('/signin', function (req, res, next) {
    var loginUser = req.query;
    UserModel.findOne({username: loginUser.username}, function(err, user) {
        if(user) {
            if(user.password == loginUser.password) {
                req.session.user = user;
                res.send('true');
            } else {
                res.send(false);
            }
        } else {
            res.send(false);
        }
    });
});

router.get('/logout', function (req, res, next) {
    req.session.user = undefined;
    req.session.error = undefined;
    res.redirect('/');
});

module.exports = router;