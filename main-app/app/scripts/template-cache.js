(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('partials/login.html', '<div class="playerSelection"> ' +
                '<h2>Game Lobby</h2> <p>Click on the images to change the opponent</p> ' +
                '</div>');

        }
    ]);

})();