(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','gameApi','LoginProxy',  function($scope, loginApi, loginProxy) {
            $scope.gameTitle = 'tombola';
            $scope.model = loginProxy;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };

            $scope.nextGame = function (){
                gameApi.nextButton($scope.model.playerToken);
                console.log($scope.model.playerToken);
            };

        }]);
})();