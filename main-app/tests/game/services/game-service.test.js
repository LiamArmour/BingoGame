(function () {
    'use strict';
    describe('Testing my game service', function () {
        var sandbox,
            gameService;

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Game');
            module(function ($provide) {
                $provide.value('ProxyConstants', mocks.ProxyConstants);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('$state', mocks.$state);
            });

            inject(function (_$rootScope_, $injector) {
                $rootScope = _$rootScope_;
                gameService = $injector.get('GameService');
            });

        });

        it('Ensures the next game button works', function () {
            var returnedData = {
                "message": "NextGame",
                "payload": {
                    "gameId": 1,
                    "start": "2015-07-24T13:02:03.496Z",
                    "ticketPrice": 10
                }
            };
            $scope.nextGame();
            //coreApiConverter.convertNextGameData(returnedData);
            console.log('im here');
            goSpy.should.have.been.calledOnce.calledWithExactly('NextGame');

            deferred.resolve({message: "NextGame", payload: {gameId: 1, ticketPrice: 10, start: "2015-11-24T10:05:19.123Z"}});
            $rootScope.$digest();
        });

        it('Ensures the buy in game button works', function () {
            $scope.buyInGame();
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

}());