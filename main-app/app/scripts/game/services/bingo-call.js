(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['$interval','BingoTicket','GameProxy', function ($interval, bingoTicket, gameProxy) {
            var me = this;

            me.lastCallsDisplay = [];

            var getCallData = {
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
                        alert('Line Prize' + response.payload.winnerInfo.linewinnername + response.payload.winnerInfo.lineprize);
                    }
                },

                checkForHouse = function (response) {
                    if(response.message === "Winner"){
                        alert('House Prize' + response.payload.winnerInfo.linewinnername + response.payload.winnerInfo.lineprize);
                        $interval.cancel(me.getCall());
                    }
                },

            makeApiCall = function(apiName, action, data, token){
                gameProxy.callApi(apiName, action, data, token)
                    .then(function (data) {
                        me.callMessage = data;
                        me.lastCallsDisplay.push(data.payload.call);
                        console.log(data);
                        removeFirstElement();
                        checkForLine(data);
                        checkForHouse(data);
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

            me.getCall = function (token) {
                $interval(function(){
                    makeApiCall("game/getcall", "POST", getCallData, token);
                    getCallData.callnumber += 1;
                    console.log(getCallData.callnumber);
                },1000);

            };

        }]);
})();