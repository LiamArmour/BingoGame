(function () {
    'use strict';
    describe('Testing my game service', function () {
        var sandbox,
            gameService,
            $stateSpy,
            gameProxySpy,
            $rootScope,
            nextGameData = {"message": "NextGame", "payload": {"gameId": 1, "start": "2015-07-24T13:02:03.496Z", "ticketPrice": 10}},
            buyInData = {gameId: 1, userId: "drwho", balance: 200000};

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.Bingo90.Game');
            module(function ($provide) {
                $provide.value('$state', mocks.$state);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('BingoTicket', mocks.BingoTicket);
                $provide.value('BingoCall', mocks.BingoCall);
                $provide.value('CoreApiConverter', mocks.CoreApiConverter);
            });

            sandbox = sinon.sandbox.create();
            gameProxySpy = sinon.sandbox.spy(mocks.GameProxy, 'callApi');
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $injector) {
                $rootScope = _$rootScope_;
                gameService = $injector.get('GameService');
            });

        });

        //httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/buyticket", "")
        //    .respond(theResponse);
        //var returnedPromise = gameProxy.callApi("game/buyticket", "POST", "");
        //var result;
        //returnedPromise.then(function (response) {
        //    result = response;
        //    result.should.be.deep.equal(theResponse);
        //});
        //httpBackend.flush();

        it.skip('Ensures the next game button works', function () {
            gameService.nextGame("game/buyticket", "POST", buyInData);
            console.log('Hello?');

            //DO I NEED A PROMISE ??

            gameProxySpy.should.have.been.calledOnce.calledWithExactly({
                method: POST,
                url: "http://eutaveg-01.tombola.emea:30069/game/next",
                data: buyInData,
                headers: {
                    'x-token': "f36bb73b-83cc-4539-aac0-893914bc73ec",
                    'content-type': 'application/json'
                }
            });
            console.log('is it me your looking for');
            $stateSpy.should.have.been.calledOnce.calledWithExactly('NextGame');
            $rootScope.$digest();
        });

        afterEach(function () {
            sinon.stub.reset();
            sandbox.restore();
        });

    });

}());