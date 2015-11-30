(function () {
    'use strict';
    describe('Testing my game service', function () {
        var httpBackend,
            sandbox,
            bingoTicket,
            bingoCall,
            coreApiConverter,
            gameProxy;

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Game');
            module(function ($provide) {
                $provide.value('ProxyConstants', mocks.ProxyConstants);
            });

            inject(function ($injector) {
                httpBackend = $injector.get('$httpBackend');
                gameProxy = $injector.get('GameProxy');
                bingoTicket = $injector.get('BingoTicket');
                bingoCall = $injector.get('BingoCall');
                coreApiConverter = $injector.get('CoreApiConverter');
            });

        });

        it.skip('Ensures the next game button works', function () {
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

        it.skip('Ensures the buy in game button works', function () {
            $scope.buyInGame();
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

}());