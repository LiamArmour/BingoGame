(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('AuthenticationService', ['$state','AuthenticationProxy','SessionDetails','CoreApiConverter', function ($state, authenticationProxy, sessionDetails, coreApiConverter) {
            var me = this,
                createLoginData = function(usernameType, passwordType){
                    return {
                        "username": usernameType,
                        "password": passwordType
                    };
                },

                callApi = function(callName, requestData){
                    authenticationProxy.apiCallLogin(callName, requestData)
                        .then(function (data) {
                            //TODO: convert into friendly object in auth proxy.

                            sessionDetails.login = data.payload.user;
                            coreApiConverter.convert(data);
                            me.currentToken = data.payload.user.token;

                            $state.go('lobby');
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.currentToken = '';

            me.getToken = function(){
              return me.currentToken;
            };

            me.isAuthenticated = function(){
                return me.currentToken !== '';
            };

            me.logout = function(){
                callApi("users/logout", "POST", "", me.get());
                me.currentToken = '';
            };

            me.login = function (usernameType, passwordType) {
                callApi("users/login", createLoginData(usernameType, passwordType));
            };

        }]);
})();