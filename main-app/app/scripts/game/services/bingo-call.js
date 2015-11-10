(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['$interval','$state','BingoTicket','GameProxy', function ($interval, $state, bingoTicket, gameProxy) {
            var me = this;
            me.lastCallsDisplay = [];
            var gameLoop,
                getCallData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000,
                    callnumber: 80
                },

                removeFirstElement = function () {
                    if(me.lastCallsDisplay.length >= 6){
                        me.lastCallsDisplay.splice(0, 1);
                    }
                },

                checkForLine = function (response) {
                    if(response.message === "Line"){
                        alert('--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
                    }
                },

                checkForHouse = function (response) {
                    if(response.message === "Winner"){
                        alert('--House Prize\nWinner: ' + response.payload.winnerInfo.housewinnername + '\nAmount Won: ' + response.payload.winnerInfo.houseprize + '\n--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
                        gameEnded();
                    }
                },

                gameEnded = function () {
                    $interval.cancel(gameLoop);
                    $interval(function(){
                        $state.go('lobby');
                    },5000, 1);
                },

                makeApiCall = function(apiName, action, data, token){
                    gameProxy.callApi(apiName, action, data, token)
                        .then(function (data) {
                            me.callMessage = data;
                            me.lastCallsDisplay.push(data.payload.call);
                            removeFirstElement();
                            checkForLine(data);
                            checkForHouse(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.getCall = function (token) {
                gameLoop = $interval(function(){
                    makeApiCall("game/getcall", "POST", getCallData, token);
                    getCallData.callnumber += 1;
                },1000, 90);

            };

        }]);
})();