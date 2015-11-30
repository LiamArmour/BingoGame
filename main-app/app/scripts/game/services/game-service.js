(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Game')
        .service('GameService',
        ['$state', 'GameProxy', 'BingoTicket', 'BingoCall', 'CoreApiConverter', function ($state, gameProxy,
                                                                                          bingoTicket,
                                                                                          bingoCall, coreApiConverter) {
            var me = this;

            me.nextGame = function (endPoint, type, data) {
                gameProxy.callApi(endPoint, type, data)
                    .then(function (data) {
                        coreApiConverter.convertNextGameData(data);
                        $state.go("NextGame");
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

            me.buyInGame = function (endPoint, type, data) {
                gameProxy.callApi(endPoint, type, data)
                    .then(function (data) {
                        coreApiConverter.convertTicketPurchaseData(data);
                        $state.go("TicketBought");
                        bingoTicket.pushArray(data.payload.card);
                        bingoCall.getCall();
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

        }]);
})();