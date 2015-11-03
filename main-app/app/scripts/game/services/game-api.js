(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',  ['GameProxy', function (gameProxy) {
            var me = this,

                callApi = function(apiName, action, data, token){
                    gameProxy.callApi(apiName, action, data, token)
                        .then(function (data) {
                            console.log(data);
                            //updateCallback(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.nextButton = function (token) {
                callApi("game/next", "GET", "", token);
            };

            me.buyIn = function (token) {
                callApi("game/next", "GET", "", token);
            };
        }]);
})();