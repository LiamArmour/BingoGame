(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')

        .controller('MainController',
        ['$scope', 'AuthenticationService', 'GameProxy', 'BingoTicket', 'BingoCall','CoreApiConverter', function ($scope,
                                                                                             authenticationService,
                                                                                             gameProxy, bingoTicket,
                                                                                             bingoCall, coreApiConverter) {
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
                gameProxy.callApi("game/next", "GET", "")
                    .then(function (data) {
                        coreApiConverter.convertNextGameData(data);
                        $state.go("NextGame");
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

            $scope.buyInGame = function () {
                var buyInData = {
                    gameId: 1,
                    userId: coreApiConverter.loginData.userinfo.username,
                    balance: coreApiConverter.loginData.userinfo.balance
                };
                gameProxy.callApi("game/buyticket", "POST", buyInData)
                    .then(function (data) {
                        coreApiConverter.convertTicketPurchaseData(data);
                        $state.go("TicketBought");
                        bingoTicket.pushArray(data.payload.card);
                        bingoCall.getCall();
                    }).catch(function (data) {
                        /* Error stub */
                        console.log(data);
                    });
            };

        }]);
})();