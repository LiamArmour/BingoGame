(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','AuthenticationService','SessionDetails','GameApi','BingoTicket','BingoCall',  function($scope, authenticationService, sessionDetails, gameApi, bingoTicket, bingoCall) {
            $scope.sessionDetailsLogin = sessionDetails.login;
            $scope.gameApi = gameApi;
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;
            $scope.bingoCardNumbers = bingoTicket.balls;
            $scope.markedNumbers = bingoTicket.markedNumbers;

            $scope.login = function (){
                authenticationService.login($scope.username, $scope.password);
            };

            $scope.logout = function (){
                gameApi.logout();
            };

            $scope.nextGame = function (){
                gameApi.nextButton();
            };

            $scope.buyInGame = function (){
                gameApi.buyIn();
            };

            $scope.getFirstCall = function (){
                gameApi.getCall();
            };

        }]);
})();