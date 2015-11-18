(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',
        ['$state', 'GameProxy', 'BingoTicket', 'BingoCall','CoreApiConverter', function ($state, gameProxy, bingoTicket,
                                                                                        bingoCall, coreApiConverter) {
            var me = this,
                callApi = function (apiName, action, data) {
                    gameProxy.callApi(apiName, action, data)
                        .then(function (data) {
                            me.returnedMessage = data;

                            coreApiConverter.convert(data);

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
                    userId: coreApiConverter.logindata.userinfo.username,
                    balance: coreApiConverter.logindata.userinfo.balance
                };
                callApi("game/buyticket", "POST", buyInData);
            };
        }]);
})();