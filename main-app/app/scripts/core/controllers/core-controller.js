(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','GameApi','LoginProxy','BingoTicket',  function($scope, loginApi, gameApi, loginProxy, bingoTicket) {
            $scope.gameTitle = 'tombola';
            $scope.model = loginProxy;
            $scope.gameModel = gameApi;
            $scope.bingoTicket = bingoTicket;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };

            $scope.nextGame = function (){
                gameApi.nextButton($scope.model.playerToken);
            };

            $scope.buyInGame = function (){
                gameApi.buyIn($scope.model.playerToken);
            };

            $scope.getFirstCall = function (){
                gameApi.getCall($scope.model.playerToken);
            };

        }]);
})();