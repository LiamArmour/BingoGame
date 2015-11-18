(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',
        ['$state', 'GameProxy', 'BingoTicket', 'BingoCall', 'SessionDetails', function ($state, gameProxy, bingoTicket,
                                                                                        bingoCall, sessionDetails) {
            var me = this,
                callApi = function (apiName, action, data) {
                    gameProxy.callApi(apiName, action, data)
                        .then(function (data) {
                            me.returnedMessage = data;
                            console.log(sessionDetails.login);
                            $state.go(data.message);
                            if (data.message == "TicketBought") {
                                bingoTicket.pushArray(data.payload.card);
                                bingoCall.getCall();
                            }
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.nextButton = function () {
                //Todo: expose getNextGame on game proxy
                callApi("game/next", "GET", "");
            };

            me.buyIn = function () {
                //Todo: expose butTicket on game proxy
                var buyInData = {
                    gameId: 1,
                    userId: sessionDetails.login.username,
                    balance: sessionDetails.login.balance
                };
                console.log(buyInData);
                console.log(sessionDetails.login.username);
                console.log(sessionDetails.login.balance);
                callApi("game/buyticket", "POST", buyInData);
            };
        }]);
})();