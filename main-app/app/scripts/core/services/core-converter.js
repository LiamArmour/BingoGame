(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('CoreApiConverter', [
            function () {
                var me = this;
                me.convertLoginData = function (response) {
                    var userData = {
                        token: response.payload.user.token,
                        userinfo: {
                            username: response.payload.user.username,
                            balance: response.payload.user.balance
                        }
                    };
                    me.loginData = userData;
                };

                me.convertNextGameData = function (response) {
                    var nextGameData = {
                        nextgame: response.payload.start,
                        gameinfo: {
                            gameid: response.payload.gameId,
                            ticketprice: response.payload.ticketprice
                        }
                    };
                    me.nextGameData = nextGameData;
                };

                me.convertTicketPurchaseData = function (response) {
                    var ticketPurchaseData = {
                        gameid: response.payload.gameId,
                        ticketinfo: {
                            ticket: response.payload.card,
                            updateduser: {
                                balance: response.payload.user.balance
                            }
                        }
                    };
                    me.ticketData = ticketPurchaseData;
                };

            }]);
})();