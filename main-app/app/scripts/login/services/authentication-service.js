(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('AuthenticationService', ['$state','AuthenticationProxy','SessionDetails', function ($state, authenticationProxy, sessionDetails) {
            var me = this,
                currentToken = '',
                createLoginData = function(usernameType, passwordType){
                    return {
                        "username": usernameType,
                        "password": passwordType
                    };
                },

                callApiLogin = function(callName, requestData){
                    authenticationProxy.apiCallLogin(callName, requestData)
                        .then(function (data) {
                            //TODO: convert into friendly object in auth proxy.
                            sessionDetails.login = data.payload.user;
                            me.currentToken = data.payload.user.token;
                            $state.go('lobby');
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };
            me.getToken = function(){
              return currentToken;
            };


            me.isAuthenticated = function(){
                return currentToken !== '';
            };

            me.logout = function(){
                //TODO: wrote logout method like logon above, on authentictionProxy
                //authProxy.logout(getToken())
                //callApi("users/logout", "POST", "", token);

                currentToken = '';
            };

            me.login = function (usernameType, passwordType) {
                callApiLogin("users/login", createLoginData(usernameType, passwordType));
            };

        }]);
})();