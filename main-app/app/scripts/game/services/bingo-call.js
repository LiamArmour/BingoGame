(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['$interval','$state','BingoTicket','GameProxy','EndOfGame', function ($interval, $state, bingoTicket, gameProxy, endOfGame) {
            var me = this;
            me.lastCallsDisplay = [];
            var gameLoop,
                getCallData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000,
                    callnumber: 0
                },

                removeFirstElement = function () {
                    if(me.lastCallsDisplay.length >= 6){
                        me.lastCallsDisplay.splice(0, 1);
                    }
                },

                makeApiCall = function(apiName, action, data, token){
                    gameProxy.callApi(apiName, action, data, token)
                        .then(function (data) {
                            me.callMessage = data;
                            me.lastCallsDisplay.push(data.payload.call);
                            removeFirstElement();
                            endOfGame.checkForWinner(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.getCall = function (token) {
                me.gameLoop = $interval(function(){
                    makeApiCall("game/getcall", "POST", getCallData, token);
                    getCallData.callnumber += 1;
                },1000, 90);

            };

        }]);
})();