(function () {
    'use strict';
    describe('Testing my game proxy', function () {
        var httpBackend,
            gameProxy;

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Core');
            module(function ($provide) {
                $provide.value('ProxyConstants', mocks.ProxyConstants);
                $provide.value('AuthenticationService', mocks.AuthenticationService);
            });

            inject(function ($injector) {
                httpBackend = $injector.get('$httpBackend');
                gameProxy = $injector.get('GameProxy');
            });

        });

        it('Ensures the get next game is working and returns values', function () {
            var theResponse =  {"message": "NextGame", "payload": {"gameId": 1, "start": "2015-07-24T13:02:03.496Z", "ticketPrice": 10 }};

            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/next", {'player1': "human", 'player2': "human"})
                .respond(theResponse);
            var returnedPromise = gameProxy.apiCall("newgame",{'player1' : "human", 'player2' : "human"});
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });





        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

    });

}());