(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameApi',  ['GameProxy', function (gameProxy) {
            var me = this,
                buyInData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000
                },
                getCallData = {
                    gameId: 1,
                    userId: "drwho",
                    balance: 100000000000,
                    callnumber: 1
                },

            callApi = function(apiName, action, data, token){
                    gameProxy.callApi(apiName, action, data, token)
                        .then(function (data) {
                            console.log(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.nextButton = function (token) {
                callApi("game/next", "GET", "", token)
                .then(function (response) {
                    me.returnedMessage = response.data;
                    $state.go(response.data.message);
                }).catch(function (response) {
                    console.log('Error coming from proxy:' + response);
                });
            };

            me.buyIn = function (token) {
                callApi("game/buyticket", "POST", buyInData, token)
                .then(function (response) {
                        me.returnedMessage = response.data;
                        $state.go(response.data.message);
                    }).catch(function (response) {
                        console.log('Error coming from proxy:' + response);
                    });
            };

            me.getCall = function (token) {
                callApi("game/getcall", "POST", getCallData, token)
                    .then(function (response) {
                        me.returnedMessage = response.data;
                        $state.go(response.data.message);
                    }).catch(function (response) {
                        console.log('Error coming from proxy:' + response);
                    });
            };
        }]);
})();