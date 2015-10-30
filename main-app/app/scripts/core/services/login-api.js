(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginApi',  ['GameProxy', function (gameProxy) {
            var me = this,
                createLoginData = function(usernameType, passwordType){
                    return {
                        "username": usernameType,
                        "password": passwordType
                    };
                },
                callApi = function(callName, requestData){
                    gameProxy.apiCall(callName, requestData)
                        .then(function (data) {
                            //updateCallback(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.loginButton = function (usernameType, passwordType) {
                callApi("users/login", createLoginData(usernameType, passwordType));
            };
        }]);
})();