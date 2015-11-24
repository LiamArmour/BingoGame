(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            $controller,
            controller,
            $rootScope,
            loginSpy,
            logoutSpy,
            nextGameSpy,
            buyInGameSpy,
            getCallSpy,
            sandbox;

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');
            module(function ($provide) {

                $provide.value('AuthenticationService', mocks.AuthenticationService);
                $provide.value('GameApi', mocks.GameApi);

                //These need proper mocks if not already written
                $provide.value('SessionDetails', {});
                $provide.value('BingoTicket', {});
                $provide.value('BingoCall', {});
            });


            inject(function (_$rootScope_, _$controller_) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                $scope.username='username';
                $scope.password = 'password';

                controller = $controller('MainController', {
                    $scope: $scope
                });
            });

            sandbox = sinon.sandbox.create();
            loginSpy = sinon.sandbox.spy(mocks.AuthenticationService, 'login');
            logoutSpy = sinon.sandbox.spy(mocks.GameApi, 'logout');
            nextGameSpy = sinon.sandbox.spy(mocks.GameApi, 'nextButton');
            buyInGameSpy = sinon.sandbox.spy(mocks.GameApi, 'buyIn');
            getCallSpy = sinon.sandbox.spy(mocks.GameApi, 'getCall');
        });

        it('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce.calledWithExactly('username', 'password');
        });

        it('Ensures the logout works and retuns to login', function () {
            $scope.logout();
            logoutSpy.should.have.been.calledOnce;
        });

        it('Ensures the next game button works', function () {
            $scope.nextGame();
            nextGameSpy.should.have.been.calledOnce;
        });

        it('Ensures the buy in game button works', function () {
            $scope.buyInGame();
            buyInGameSpy.should.have.been.calledOnce;
        });

        it('Ensures the get first call works', function () {
            $scope.getFirstCall();
            getCallSpy.should.have.been.calledOnce;
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

})();