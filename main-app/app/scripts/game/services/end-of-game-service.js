(function() {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Game')
        .service('EndOfGame', ['$interval', '$state', function($interval, $state) {
            var me = this;

            me.checkForWinner = function(response) {
                if (response.message === "Line") {
                    me.checkForLineAlert(response);
                }
                if (response.message === "Winner") {
                    me.checkForHouseAlert(response);
                }
            };

            //todo: i need a better way for this
            me.checkForLineAlert = function(response) {
                alert('--Line Prize\nWinner: ' + response.payload.winnerInfo.linewinnername + '\nAmount Won: ' + response.payload.winnerInfo.lineprize);
            };

            me.checkForHouseAlert = function(response) {
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