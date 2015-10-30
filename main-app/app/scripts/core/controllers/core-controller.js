(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi',  function($scope, loginApi) {
            $scope.gameTitle = 'tombola';

            $scope.login = function (){
                //loginApi.loginButton($scope.username, $scope.password);
            };

        }]);
})();