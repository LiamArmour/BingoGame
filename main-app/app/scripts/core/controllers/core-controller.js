(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','SessionDetails','GameApi','BingoTicket','BingoCall',  function($scope, loginApi, sessionDetails, gameApi, bingoTicket, bingoCall) {
            $scope.sessionDetailsLogin = sessionDetails.login;
            $scope.gameApi = gameApi;
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;
            $scope.bingoCardNumbers = bingoTicket.balls;
            $scope.markedNumbers = bingoTicket.markedNumbers;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };

            $scope.logout = function (){
                gameApi.logout($scope.sessionDetailsLogin.token);
            };

            $scope.nextGame = function (){
                gameApi.nextButton($scope.sessionDetailsLogin.token);
            };

            $scope.buyInGame = function (){
                gameApi.buyIn($scope.sessionDetailsLogin.token);
            };

            $scope.getFirstCall = function (){
                gameApi.getCall($scope.sessionDetailsLogin.token);
            };

        }]);
})();