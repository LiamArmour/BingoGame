(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Login', []);
    angular.module('Tombola.Games.Bingo90.Core', []);
    angular.module('Tombola.Games.Bingo90.Game', []);

    angular.module('Tombola.Games.Bingo90', ['ui.router',
        'Tombola.Games.Bingo90.Login',
        'Tombola.Games.Bingo90.Core',
        'Tombola.Games.Bingo90.Game'])

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/loginScreen");
        $stateProvider
            .state('login', {
                url: "/loginScreen",
                templateUrl: "partials/login.html"
            })
            .state('lobby', {
                url: "/lobby",
                templateUrl: "partials/lobby.html"
            });

    }]);

})();