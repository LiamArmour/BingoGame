(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','GameApi','BingoTicket','BingoCall',  function($scope, loginApi, gameApi, bingoTicket, bingoCall) {
            $scope.loginApi = loginApi;
            $scope.gameApi = gameApi;
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;
            $scope.bingoCardNumbers = bingoTicket.balls;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };

            $scope.logout = function (){
                gameApi.logout($scope.model.playerToken);
            };

            $scope.nextGame = function (){
                gameApi.nextButton($scope.loginProxy.playerToken);
            };

            $scope.buyInGame = function (){
                gameApi.buyIn($scope.loginProxy.playerToken);
            };

            $scope.getFirstCall = function (){
                gameApi.getCall($scope.loginProxy.playerToken);
            };

        }]);
})();