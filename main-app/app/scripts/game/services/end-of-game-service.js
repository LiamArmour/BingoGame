(function() {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('EndOfGame', ['$interval', '$state', function($interval, $state) {
            var me = this;

            me.checkForWinner = function(response) {
                if (response.message === "Line") {
                    me.checkForLine(response);
                }
                if (response.message === "Winner") {
                    me.checkForHouse(response);
                }
            };

            me.checkForLine = function(response) {
                alert('--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
            };

            me.checkForHouse = function(response) {
                alert('--House Prize\nWinner: ' + response.payload.winnerInfo.housewinnername + '\nAmount Won: ' + response.payload.winnerInfo.houseprize + '\n--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
                me.gameEnded();
            };

            me.gameEnded = function() {
                $interval.cancel(me.gameLoop);
                $interval(function() {
                    $state.go('lobby');
                }, 5000, 1);
            };

        }]);
})();