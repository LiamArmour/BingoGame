(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',
        ['$interval', '$state', 'BingoTicket', 'GameProxy', 'EndOfGame', 'SessionDetails', function ($interval, $state,
                                                                                                     bingoTicket,
                                                                                                     gameProxy,
                                                                                                     endOfGame,
                                                                                                     sessionDetails) {
            var me = this,
                removeFirstElement = function () {
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
                            me.lastCallsDisplay.push(data.payload.call);
                            removeFirstElement();
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
                    userId: sessionDetails.login.username,
                    balance: sessionDetails.login.balance,
                    callnumber: 0
                };
                me.gameLoop = $interval(function () {
                    makeApiCall("game/getcall", "POST", getCallData);
                    getCallData.callnumber += 1;
                }, 1000, 90);

            };

        }]);
})();