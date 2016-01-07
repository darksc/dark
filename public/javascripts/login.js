'use strict';
var user = {
    usrname: 'dark'
};

var login = new Vue({
    el: '#login',
    data: {
        user: user
    },
    ready: function() {
        this.$http.get('/post').then(function (response) {

            // get status
            response.status;

            // get all headers
            response.headers();

            // get 'expires' header
            response.headers('expires');

            //this.$set('user', user)

        }, function (response) {

            // handle error
        });
    }
});