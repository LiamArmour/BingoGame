(function() {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('EndOfGame', ['$interval', '$state', function($interval, $state) {
            var me = this;

            me.checkForWinner = function(response) {
                if (response.message === "Line") {
                    checkForLine(response);
                }
                if (response.message === "Winner") {
                    checkForWinner(response);
                }
            },

            checkForLine = function(response) {
                alert('--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
            },

            checkForHouse = function(response) {
                alert('--House Prize\nWinner: ' + response.payload.winnerInfo.housewinnername + '\nAmount Won: ' + response.payload.winnerInfo.houseprize + '\n--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
                gameEnded();
            },

            gameEnded = function() {
                $interval.cancel(gameLoop);
                $interval(function() {
                    $state.go('lobby');
                }, 5000, 1);
            };

        }]);
})();