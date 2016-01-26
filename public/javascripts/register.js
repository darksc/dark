'use strict';
var user = {};

var login = new Vue({
    el: '#register',
    data: {
        user: user
    },
    ready: function() {

    },
    methods: {
        signup: function(event) {
            var self = this;
            self.$http.post('/register/signup', function (data, status, request) {
                if(data) {
                    alert('注册成功');
                    window.location = '/';
                } else {
                    alert('注册失败');
                }
            }, {
                params: self.user
            });
        }
    }
});