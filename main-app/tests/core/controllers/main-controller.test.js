(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $q,
            $scope,
            $controller,
            controller,
            deferred,
            $rootScope,
            loginSpy,
            logoutSpy,
            gameProxyStub,
            proxyBuyInStub,
            convertNextGameDataSpy,
            goSpy,

            sandbox;

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');
            module(function ($provide) {
                $provide.value('AuthenticationService', mocks.AuthenticationService);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('BingoTicket', {});
                $provide.value('BingoCall', {});
                $provide.value('CoreApiConverter', mocks.CoreApiConverter);
            });


            inject(function (_$q_, _$rootScope_, _$controller_) {
                $q = _$q_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                $scope.username = 'username';
                $scope.password = 'password';
                controller = $controller('MainController', {
                    $scope: $scope
                });
            });

            sandbox = sinon.sandbox.create();
            loginSpy = sandbox.spy(mocks.AuthenticationService, 'login');
            logoutSpy = sandbox.spy(mocks.AuthenticationService, 'logout');
            convertNextGameDataSpy = sandbox.spy(mocks.CoreApiConverter, 'convertNextGameData');
            goSpy = sandbox.spy(mocks.$state, 'go');

            deferred = $q.defer();
            gameProxyStub = sandbox.stub(mocks.GameProxy, 'callApi', function(){
                return deferred.promise;
            });

        });

        it.skip('Ensures the login works and changes the state', function () {
            $scope.username = "drwho";
            $scope.password = "tardis123!";
            $scope.login();
            loginSpy.should.have.been.calledOnce.calledWithExactly($scope.username, $scope.password);
        });

        it.skip('Ensures the logout works and retuns to login', function () {
            $scope.logout();
            logoutSpy.should.have.been.calledOnce.calledWithExactly();
        });

        it.skip('Ensures the next game button works', function () {
            $scope.nextGame();
            gameProxyStub.should.have.been.calledOnce;
            convertNextGameDataSpy.should.have.been.calledOnce;
            goSpy.should.have.been.calledOnce.calledWithExactly('NextGame');

            deferred.resolve({message: "NextGame", payload: {gameId: 1, ticketPrice: 10, start: "2015-11-24T10:05:19.123Z"}});
            $rootScope.$digest();
        });

        it.skip('Ensures the buy in game button works', function () {
            $scope.buyInGame();
            proxyBuyInStub = sinon.stub(mocks.GameProxy, '1, 4, updateCallback');
            gameProxyStub.should.have.been.calledOnce;
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

})();