(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','GameApi','LoginProxy','BingoTicket','BingoCall',  function($scope, loginApi, gameApi, loginProxy, bingoTicket, bingoCall) {
            $scope.gameTitle = 'tombola';
            $scope.model = loginProxy;
            $scope.gameModel = gameApi;
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
            };
            $scope.logout = function (){
                gameApi.logout($scope.model.playerToken);
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

            $scope.bingoCardNumbers = bingoTicket.balls;

        }]);
})();