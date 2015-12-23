(function () {
    'use strict';
    describe('Testing my game proxy', function () {
        var httpBackend,
            gameProxy,
            authenticationService;

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Game');
            module(function ($provide) {
                $provide.value('ProxyConstants', mocks.ProxyConstants);
                $provide.value('AuthenticationService', mocks.AuthenticationService);
            });

            inject(function ($injector) {
                httpBackend = $injector.get('$httpBackend');
                gameProxy = $injector.get('GameProxy');
                authenticationService = $injector.get('AuthenticationService');
            });
        });

        it('Ensures the get next game is working and returns values', function () {
            var theResponse =  {
                "message": "NextGame",
                "payload": {
                    "gameId": 1,
                    "start": "2015-07-24T13:02:03.496Z",
                    "ticketPrice": 10
                }
            };

            httpBackend.expectGET("http://eutaveg-01.tombola.emea:30069/game/next", {
                "content-type":"application/json",
                "Accept":"application/json, text/plain, */*"
            })
                .respond(theResponse);
            var returnedPromise = gameProxy.callApi("game/next", "GET", "");
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the buy in is working and returns value', function () {
            var theResponse = {
                "message": "TicketBought",
                "payload": {
                    gameId: 1,
                    card: "054963758028345266770611596982"
                },
                "card": "054963758028345266770611596982",
                    "gameId": 1,
                    "user": {
                        "username": "drwho",
                        "balance": 19990,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                }
            };

            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/buyticket", "")
                .respond(theResponse);
            var returnedPromise = gameProxy.callApi("game/buyticket", "POST", "");
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the get call works perfectly', function () {
            var theResponse = {
                "message": "Call",
                "payload": {
                    "gameId": 1,
                    "callnumber": 1,
                    "call": 54,
                    "user": {
                        "username": "drwho",
                        "balance": 19990,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                    }
                }
            };

            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/getcall", "")
                .respond(theResponse);
            var returnedPromise = gameProxy.callApi("game/getcall", "POST", "");
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the get call LINE works', function () {
            var theResponse = {
                "message": "Line",
                "payload": {
                    "gameId": 1,
                    "callnumber": 85,
                    "call": 5,
                    "user": {
                        "username": "drwho",
                        "balance": 19991,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                    },
                    "winnerInfo": {
                        "linewinnername": "drwho",
                        "lineprize": 1
                    }
                }
            };

            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/getcall", "")
                .respond(theResponse);
            var returnedPromise = gameProxy.callApi("game/getcall", "POST", "");
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the get call HOUSE works', function () {
            var theResponse = {
                "message": "Winner",
                "payload": {
                    "gameId": 1,
                    "callnumber": 89,
                    "call": 6,
                    "user": {
                        "username": "drwho",
                        "balance": 19995,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                    },
                    "winnerInfo": {
                        "linewinnername": "drwho",
                        "lineprize": 1,
                        "housewinnername": "drwho",
                        "houseprize": 5
                    }
                }
            };

            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:30069/game/getcall", "")
                .respond(theResponse);
            var returnedPromise = gameProxy.callApi("game/getcall", "POST", "");
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