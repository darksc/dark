var express = require('express');
var router = express.Router();

var PostModel = require('../models/postModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'darK'});
});

router.get('/post', function (req, res, next) {
    PostModel.find(function (err, post) {
        console.log(post);
        res.send(post);
    });
    //res.send([
    //    {
    //        author: 'darKS',
    //        data: '123',
    //        post: this.newPost
    //    },
    //    {
    //        author: 'darKS',
    //        data: '123',
    //        post: this.newPost
    //    }
    //]);
});

router.post('/send', function (req, res, next) {
    var postEntity = new PostModel(req.query);

    postEntity.save();

    res.send(true);
});

module.exports = router;
