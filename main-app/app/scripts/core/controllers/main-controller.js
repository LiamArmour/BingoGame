(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController',
        ['$state', '$scope', 'AuthenticationService', 'GameProxy', 'BingoTicket', 'BingoCall', 'CoreApiConverter','GameService', function ($state,
                                                                                                                             $scope,
                                                                                                                             authenticationService,
                                                                                                                             gameProxy,
                                                                                                                             bingoTicket,
                                                                                                                             bingoCall,
                                                                                                                             coreApiConverter, gameService) {
            $scope.bingoTicket = bingoTicket;
            $scope.bingoCall = bingoCall;
            $scope.bingoCardNumbers = bingoTicket.balls;
            $scope.markedNumbers = bingoTicket.markedNumbers;

            $scope.login = function () {
                authenticationService.login($scope.username, $scope.password);
            };

            $scope.logout = function () {
                authenticationService.logout();
            };

            $scope.nextGame = function () {
                gameService.nextGame("game/next", "GET", "");
            };

            $scope.buyInGame = function () {
                var buyInData = {
                    gameId: 1,
                    userId: coreApiConverter.loginData.userinfo.username,
                    balance: coreApiConverter.loginData.userinfo.balance
                };
                gameService.buyInGame("game/buyticket", "POST", buyInData);
            };

        }]);
})();