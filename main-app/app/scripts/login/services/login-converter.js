(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginConverter', [
            function () {
                var me = this;
                me.convertLoginData = function (response) {
                    var userData = {
                        token: response.payload.user.token,
                        userinfo: {
                            username: response.payload.user.username,
                            balance: response.payload.user.balance,
                        }
                    };
                };

                me.convertNextGameData = function (response) {
                    var nextGameData = {
                        nextgame: response.payload.start,
                        gameinfo: {
                            gameid: response.payload.gameId,
                            ticketprice: response.payload.ticketprice,
                        }
                    };
                };
            }]);
})();