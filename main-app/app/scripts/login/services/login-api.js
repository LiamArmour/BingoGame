(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginApi', ['LoginProxy', function (loginProxy) {
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
                            //updateCallback(data);
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