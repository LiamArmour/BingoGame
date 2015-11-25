(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $q,
            $scope,
            coreApiConverter,
            $controller,
            controller,
            deferred,
            $rootScope,
            loginSpy,
            logoutSpy,
            newGameStub,
            buyInGameStub,
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
                $provide.value('GameService', mocks.GameService);
            });


            inject(function (_$q_, _$rootScope_, _$controller_, CoreApiConverter) {
                $q = _$q_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                coreApiConverter = CoreApiConverter;
                $scope.username = 'username';
                $scope.password = 'password';
                controller = $controller('MainController', {
                    $scope: $scope
                });
            });

            sandbox = sinon.sandbox.create();
            loginSpy = sandbox.spy(mocks.AuthenticationService, 'login');
            logoutSpy = sandbox.spy(mocks.AuthenticationService, 'logout');
            goSpy = sandbox.spy(mocks.$state, 'go');

            deferred = $q.defer();
            newGameStub = sandbox.stub(mocks.GameService, 'nextGame');
            buyInGameStub = sandbox.stub(mocks.GameService, 'buyInGame');
        });

        it('Ensures the login works and changes the state', function () {
            $scope.username = "drwho";
            $scope.password = "tardis123!";
            $scope.login();
            loginSpy.should.have.been.calledOnce.calledWithExactly($scope.username, $scope.password);
        });

        it('Ensures the logout works and retuns to login', function () {
            $scope.logout();
            logoutSpy.should.have.been.calledOnce.calledWithExactly();
        });


        it('Ensures the next game button works', function () {
            $scope.nextGame();
            newGameStub.should.have.been.calledOnce;
        });

        it('Ensures the buy in game button works', function () {
            mocks.CoreApiConverter.loginData = {
                "token": "token",
                "userinfo": {
                    "username": "drwho",
                    "balance": 200000
                }
            };
            $scope.buyInGame();
            buyInGameStub.should.have.been.calledOnce;
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

})();