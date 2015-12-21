(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Game')
        .service('BingoCall',
        ['$interval', '$state', 'BingoTicket', 'GameProxy', 'EndOfGame', 'CoreApiConverter', function ($interval,
                                                                                                       $state,
                                                                                                       bingoTicket,
                                                                                                       gameProxy,
                                                                                                       endOfGame,
                                                                                                       coreApiConverter) {
            var me = this,
                lastCalls = function (calls) {
                    me.lastCallsDisplay.push(calls);
                    if (me.lastCallsDisplay.length >= 6) {
                        me.lastCallsDisplay.splice(0, 1);
                    }
                },

                checkForNumber = function (callNumber) {
                    if (callNumber.toString().length < 2) {
                        callNumber = "0" + callNumber.toString();
                    }

                    if (bingoTicket.balls.indexOf(callNumber.toString()) !== -1) {
                        bingoTicket.markedNumbers[bingoTicket.balls.indexOf(callNumber.toString())] = "markedCell";
                    }
                },

                makeApiCall = function (apiName, action, data) {
                    gameProxy.callApi(apiName, action, data)
                        .then(function (data) {
                            me.callMessage = data;
                            lastCalls(data.payload.call);
                            endOfGame.checkForWinner(data);
                            checkForNumber(data.payload.call);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.lastCallsDisplay = [];

            me.getCall = function () {
                var getCallData = {
                    gameId: 1,
                    userId: coreApiConverter.loginData.userinfo.username,
                    balance: coreApiConverter.loginData.userinfo.balance,
                    callnumber: 0
                };
                me.gameLoop = $interval(function () {
                    makeApiCall("game/getcall", "POST", getCallData);
                    getCallData.callnumber += 1;
                }, 1000, 90);

            };

        }]);
})();