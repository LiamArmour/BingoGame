(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','GameProxy',  function($scope, loginApi, gameProxy) {
            $scope.gameTitle = 'tombola';
            $scope.model = gameProxy;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };

        }]);
})();