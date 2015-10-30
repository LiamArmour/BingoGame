(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Lobby', []);
    angular.module('Tombola.Games.Bingo90.Core', []);
    angular.module('Tombola.Games.Bingo90.Game', []);

    angular.module('Tombola.Games.Bingo90', ['ui.router',
        'Tombola.Games.Bingo90.Lobby',
        'Tombola.Games.Bingo90.Core',
        'Tombola.Games.Bingo90.Game'])

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/loginScreen");
        $stateProvider
            .state('login', {
                url: "/loginScreen",
                controller:'LobbyController',
                templateProvider:function ($templateCache){ return $templateCache.get("partials/login.html");}
            })
            .state('lobby', {
                url: "/lobby",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/lobby.html");}
            });
    }]);

})();