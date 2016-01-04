var express = require('express');
var router = express.Router();

var PostModel = require('../models/postModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'darK'});
});

router.get('/post', function (req, res, next) {
    PostModel.find()
        .sort({_id: 'desc'})
        .exec(function (err, post) {
            console.log(post);
            res.send(post);
        });
});

router.post('/send', function (req, res, next) {
    var postEntity = new PostModel(req.query);

    postEntity.save();

    res.send(true);
});

module.exports = router;
