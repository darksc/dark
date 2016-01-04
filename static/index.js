'use strict';
// 文章
var posts = [
    {
        author: 'darK',
        data: '1997-08-29',
        post: '测试文章'
    },
    {
        author: 'darK',
        data: '1997-08-29',
        post: '测试文章'
    },
    {
        author: 'darK',
        data: '1997-08-29',
        post: '测试文章'
    },
    {
        author: 'darK',
        data: '1997-08-29',
        post: '测试文章'
    },
    {
        author: 'darK',
        data: '1997-08-29',
        post: '测试文章'
    }
];

// 文章实例
var post = new Vue({
    el: '#post',
    data: {
        post: posts
    }
});

// 新文章
var send = new Vue({
    el: '#send',
    data: {
        newPost: ''
    },
    methods: {
        send: function (event) {
            if(this.newPost == '') {
                alert('请输入内容!');
                return;
            }
            var myPost = {
                author: 'darK',
                data: moment().format('YYYY-MM-DD'),
                post: this.newPost
            };

            posts.unshift(myPost);

            this.newPost = '';
        }
    }
});


console.log('vue end...');