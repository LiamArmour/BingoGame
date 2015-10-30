(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.Core', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.Game', []);

    angular.module('Tombola.Games.NoughtsAndCrosses', ['ui.router',
        'Tombola.Games.NoughtsAndCrosses.Lobby',
        'Tombola.Games.NoughtsAndCrosses.Core',
        'Tombola.Games.NoughtsAndCrosses.Game'])

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/playerSelection");
        $stateProvider
            .state('playerSelection', {
                url: "/playerSelection",
                controller:'LobbyController',
                templateProvider:function ($templateCache){ return $templateCache.get("partials/player-selection.html");}
            })
            .state('gameBoard', {
                url: "/gameBoard",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-board.html");}
            })
            .state('gameRules', {
                url: "/rules",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-rules.html");}
            })
            .state('gameAbout', {
                url: "/gameAbout",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-about.html");}
            })
            .state('gameWin', {
                url: "/win",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-win.html");}
            })
            .state('gameDraw', {
                url: "/draw",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-draw.html");}
            });
    }]);

})();