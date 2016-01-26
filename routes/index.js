'use strict';

var express = require('express');
var router = express.Router();

var PostModel = require('../models/postModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    var user = req.session.user;
    if(typeof(user) != 'undefined') {
        res.render('index', {title: user.username + ' - 社区', user: user});
    } else {
        res.render('index', {title: '社区'});
    }

});

router.get('/post', function (req, res, next) {
    PostModel.find()
        .sort({_id: 'desc'})
        .exec(function (err, post) {
            res.send(post);
        });
});

router.post('/send', function (req, res, next) {
    var user = req.session.user;
    if(typeof(user) != 'undefined') {
        var postEntity = new PostModel(req.query);
        postEntity.save(function (err, product, numberAffected) {
            if (!err) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
        res.send(true);
    } else {
        res.send(false);
    }


});

router.post('/remove', function (req, res, next) {
    var user = req.session.user;
    if(typeof(user) != 'undefined') {
        PostModel.remove({only: req.query.only},function (err, product, numberAffected) {
            if (!err) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
    } else {
        res.send(false);
    }

});

router.get('/resume', function (req, res, next) {
    res.render('resume', {title: 'dark'});
});

module.exports = router;