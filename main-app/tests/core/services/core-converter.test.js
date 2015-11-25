(function () {
    'use strict';
    describe('Test the core converter service', function () {
        var sandbox,
            converter,
            loginConvertSpy,
            nextGameConvertSpy,
            buyInConvertSpy;

        beforeEach(function () {
            module('Tombola.Games.Bingo90.Core');
            inject(function ($injector) {
                converter = $injector.get('CoreApiConverter');
            });

            sandbox = sinon.sandbox.create();
            loginConvertSpy = sandbox.spy(converter, 'convertLoginData');
            nextGameConvertSpy = sandbox.spy(converter, 'convertNextGameData');
            buyInConvertSpy = sandbox.spy(converter, 'convertTicketPurchaseData');
        });

        it('Ensure the login response can be converted', function () {
            var loginResponse =  {
                "message": "LoginSuccess",
                "payload": {
                    "user": {
                        "username": "drwho",
                        "balance": 20000,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                    }
                }
            };
            var loginConvert = converter.convertLoginData(loginResponse);
            loginConvertSpy.should.have.been.calledOnce.calledWithExactly(loginResponse);
        });

        it('Ensure the next game data can be converted', function () {
            var nextGameResponse =  {
                "message": "NextGame",
                "payload": {
                    "gameId": 1,
                    "ticketPrice": 10,
                    "start": "2015-11-25T13:45:11.007Z"
                }
            };
            var nextGameConvert = converter.convertNextGameData(nextGameResponse);
            nextGameConvertSpy.should.have.been.calledOnce.calledWithExactly(nextGameResponse);
        });

        it('Ensure the buy in data can be converted', function () {
            var purchaseResponse =  {
                message: "TicketBought",
                payload: {
                    gameId: 1,
                    card: "054963758028345266770611596982"
                }
            };
            var nextGameConvert = converter.convertTicketPurchaseData(purchaseResponse);
            buyInConvertSpy.should.have.been.calledOnce.calledWithExactly(purchaseResponse);
        });

        afterEach(function () {
            sandbox.restore();
        });

    });
})();