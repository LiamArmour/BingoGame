(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginApi', ['$state','LoginProxy', function ($state, loginProxy) {
            var me = this,
                createLoginData = function(usernameType, passwordType){
                    return {
                        "username": usernameType,
                        "password": passwordType
                    };
                },

                callApiLogin = function(callName, requestData){
                    loginProxy.apiCallLogin(callName, requestData)
                        .then(function (data) {
                            me.playerBalance = data.payload.user.balance;
                            me.playerToken = data.payload.user.token;
                            me.playerUsername = data.payload.user.username;
                            $state.go('lobby');
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.loginButton = function (usernameType, passwordType) {
                callApiLogin("users/login", createLoginData(usernameType, passwordType));
            };

        }]);
})();