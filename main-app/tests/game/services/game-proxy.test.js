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

        it('Ensures the newgame function is working and returns values', function () {
            var theResponse = {'outcome': 'Continue', 'gameboard': '000000000', 'winner': 0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {'player1': "human", 'player2': "human"})
                .respond(theResponse);
            var returnedPromise = gameProxy.apiCall("newgame",{'player1' : "human", 'player2' : "human"});
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the makemove function is working and returns values', function () {
            var theResponse = {'outcome': 'Continue', 'gameboard': '100000000', 'winner': 0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove", {"playerNumber": "1", "chosenSquare": "0"})
                .respond(theResponse);
            var returnedPromise = gameProxy.apiCall("makemove", {'playerNumber': "1", 'chosenSquare': "0"}),
                result;
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