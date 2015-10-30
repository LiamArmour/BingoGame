(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('partials/login.html', '<div class="playerSelection"> ' +
                '<h2>Game Lobby</h2> <p>Click on the images to change the opponent</p> ' +
                '</div>');
            $templateCache.put('partials/lobby.html', '<div class="playerSelection"> ' +
                '<h2>Your Logged In</h2> <p>WHEYYYYY!!</p> ' +
                '</div>');
        }
    ]);

})();