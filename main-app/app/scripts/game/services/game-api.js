(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',  ['GameProxy', function (gameProxy) {
            var me = this,
                buyInData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 19990
                },
                getCallData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 19990,
                    callnumber: 1
                },

                //{gameId: config.game.gameId, card: config.game.card, user: player }

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

<<<<<<< HEAD
            me.buyIn = function (token) {
                callApi("game/buyticket", "POST", buyInData, token);
            };

            me.getCall = function (token) {
                callApi("game/getcall", "POST", getCallData, token);
=======
            me.logout = function (token) {
                callApi("users/logout", "POST", "", token);
>>>>>>> master
            };
        }]);
})();