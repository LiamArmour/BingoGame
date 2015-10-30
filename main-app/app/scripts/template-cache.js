(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('partials/login.html', '<div class="playerSelection"> ' +
                '<h2>Game Lobby</h2> <p>Click on the images to change the opponent</p> ' +
                '<div ng-click="playerSelection.selectPlayer(1)" class="{{playerSelection.player1Type}}" ng-model="playerSelection.player1Type"></div> ' +
                '<div ng-click="playerSelection.selectPlayer(2)" class="{{playerSelection.player2Type}}" ng-model="playerSelection.player2Type"></div> ' +
                '<div> ' +
                '<input type="button" value="Start Game!" ng-click="makeNewGame()"> </div> ' +
                '</div>');

        }
    ]);

})();