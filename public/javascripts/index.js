'use strict';

// 文章
var posts = [];

// 文章实例
var post = new Vue({
    el: '#post',
    ready: function() {

        // GET request
        this.$http.get('/post').then(function (response) {

            // get status
            response.status;

            // get all headers
            response.headers();

            // get 'expires' header
            response.headers('expires');

            // set data on vm
            posts = response.data;

            this.$set('post', posts)

        }, function (response) {

            // handle error
        });

    },
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
            var myPost = {
                author: 'darK',
                data: moment().format('YYYY-MM-DD'),
                post: this.newPost
            };

            this.$http.post('/send', function(data) {
                console.log(data);
            }, {
                params: myPost
            });

            if(this.newPost == '') {
                alert('请输入内容!');
                return;
            }


            posts.unshift(myPost);

            this.newPost = '';
        }
    }
});

console.log('vue end...');