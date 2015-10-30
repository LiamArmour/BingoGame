(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','GameProxy',  function($scope, gameProxy) {
            $scope.gameTitle = 'tombola';

            $scope.login = function (){
                gameProxy.makeNewGame($scope.username, $scope.password);
                //$state.go('gameBaord');
            };

        }]);
})();