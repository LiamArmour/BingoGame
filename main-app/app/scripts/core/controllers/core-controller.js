(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController', ['$scope','LoginApi','GameApi','LoginProxy','BingoTicket','BingoCall',  function($scope, loginApi, gameApi, loginProxy, bingoTicket, bingoCall) {
            $scope.loginProxy = loginProxy;
            $scope.gameApi = gameApi;
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;

            $scope.login = function (){
                loginApi.loginButton($scope.username, $scope.password);
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

            $scope.bingoCardNumbers = bingoTicket.balls;

        }]);
})();