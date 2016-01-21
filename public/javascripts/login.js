'use strict';
var user = {};

var login = new Vue({
    el: '#login',
    data: {
        user: user
    },
    methods: {
        singin: function(event) {
            var self = this;
            self.$http.get('/login/signin', function (data, status, request) {
                if(data) {
                    window.location = '/';
                } else {
                    alert('登陆失败');
                }
            }, {
                params: self.user
            });
        }
    }
});