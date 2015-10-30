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
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: "/login",
                controller:'LobbyController',
                templateProvider:function ($templateCache){ return $templateCache.get("partials/login.html");}
            })
    }]);

})();