(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginConverter', [
            function () {
                var me = this;
                me.convertLoginData = function (response) {
                    var userData = {
                        username: response.payload.user.username,
                        balance: response.payload.user.balance,
                        token: response.payload.user.token
                    };
                };
            }]);
})();