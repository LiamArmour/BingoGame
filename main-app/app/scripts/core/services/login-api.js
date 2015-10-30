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
                createNextGameData = function(tokenType){
                    return {
                        "token": tokenType
                    };
                },
                callApiPOST = function(callName, requestData){
                    gameProxy.apiCallPOST(callName, requestData)
                        .then(function (data) {
                            //updateCallback(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                },
                callApiGET = function(callName, requestData){
                    gameProxy.apiCallGET(callName, requestData)
                        .then(function (data) {
                            //updateCallback(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.loginButton = function (usernameType, passwordType) {
                callApiPOST("users/login", createLoginData(usernameType, passwordType));
            };

            me.nextButton = function (tokenType) {
                callApiGET("game/next", createNextGameData(tokenType));
            };
        }]);
})();