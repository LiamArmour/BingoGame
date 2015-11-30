(function () {
    'use strict';
    describe('Testing my game service', function () {
        var sandbox,
            gameService,
            $stateSpy,
            gameProxySpy,
            $rootScope,
            nextGameData = {"message": "NextGame", "payload": {"gameId": 1, "start": "2015-07-24T13:02:03.496Z", "ticketPrice": 10}};

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Game');
            module(function ($provide) {
                $provide.value('ProxyConstants', mocks.ProxyConstants);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('$state', mocks.$state);
            });

            sandbox = sinon.sandbox.create();
            gameProxySpy = sinon.sandbox.spy(mocks.GameProxy, 'callApi');
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $injector) {
                $rootScope = _$rootScope_;
                gameService = $injector.get('GameService');
            });

        });

        it('Ensures the next game button works', function () {
            $scope.nextGame();

            $stateSpy.should.have.been.calledOnce.calledWithExactly('NextGame');
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