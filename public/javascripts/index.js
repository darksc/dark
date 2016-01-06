'use strict';

var index = new Vue({
    el: '#index',
    data: {
        post: [],
        newPost: ''
    },
    // 初始化
    ready: function () {
        var self = this;
        getPost(self);
    },
    methods: {
        // 发送文章
        send: function (event) {
            var self = this;

            if (self.newPost == '') {
                alert('请输入内容!');
                return;
            }

            var myPost = {
                author: 'darK',
                data: moment().format('YYYY-MM-DD'),
                post: self.newPost,
                only: 'dark' + new Date().getTime()
            };

            self.$http.post('/send', function (data, status, request) {
                if (data) {
                    self.$set('newPost', '');
                    self.post.unshift(myPost);
                } else {
                    alert('发送失败!');
                }
            }, {
                params: myPost
            });


        },
        // 删除文章
        remove: function (p) {
            var self = this;
            self.$http.post('/remove', function (data, status, request) {
                if (data) {
                    self.post.$remove(p);
                } else {
                    alert('删除失败!');
                }
            }, {
                params: {
                    only: p.only
                }
            });
        }
    }
});

// 获取文章
function getPost(self) {
    self.$http.get('/post').then(function (response) {
        self.$set('post', response.data);
    });
}