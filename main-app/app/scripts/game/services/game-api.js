(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',  ['$state', 'GameProxy','BingoTicket','BingoCall', function ($state, gameProxy, bingoTicket, bingoCall) {
            var me = this,
                buyInData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000
                },

            callApi = function(apiName, action, data, token){
                    gameProxy.callApi(apiName, action, data, token)
                        .then(function (data) {
                            me.returnedMessage = data;
                            $state.go(data.message);
                            console.log(data);
                            if(data.message == "TicketBought"){
                                bingoTicket.pushArray(data.payload.card);
                                bingoCall.getCall(token);
                            }
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

<<<<<<< HEAD
=======
            me.getCall = function (token) {
                callApi("game/getcall", "POST", getCallData, token);
=======
            me.logout = function (token) {
                callApi("users/logout", "POST", "", token);
>>>>>>> master
            };
>>>>>>> master
        }]);
})();