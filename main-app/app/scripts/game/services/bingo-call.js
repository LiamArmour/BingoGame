(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['BingoTicket','GameApi', function (bingoTicket, gameApi) {
            var me = this,

            me.getCall = function (token) {
                gameApi.callApi("game/getcall", "POST", getCallData, token);
            };
        }]);
})();