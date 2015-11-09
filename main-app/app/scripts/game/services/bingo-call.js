(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',  ['$interval','BingoTicket','GameProxy', function ($interval, bingoTicket, gameProxy) {
            var me = this;

            me.lastCalls = [];
            me.lastCallsDisplay = [];

            var getCallData = {
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
                        me.lastCalls.push(data.payload.call);
                        me.lastCallsDisplay.push(data.payload.call);
                        console.log(data);
                        removeFirstElement();
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
                },5000);

            };

        }]);
})();