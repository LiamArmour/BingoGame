(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['BingoTicket','GameProxy', function (bingoTicket, gameProxy) {
            var me = this,
                getCallData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000,
                    callnumber: 1
                },

            makeApiCall = function(apiName, action, data, token){
                gameProxy.callApi(apiName, action, data, token)
                    .then(function (data) {
                        me.callMessage = data;
                        console.log(data);
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

            me.getCall = function (token, callNumber) {
                makeApiCall("game/getcall", "POST", getCallData, token);
            };
        }]);
})();