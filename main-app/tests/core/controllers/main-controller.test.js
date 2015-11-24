(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            coreApiConverter,
            $controller,
            controller,
            $rootScope,
            loginSpy,
            logoutSpy,
            gameProxySpy,
            buyInGamespy,
            sandbox;

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');
            module(function ($provide) {
                
                $provide.value('AuthenticationService', mocks.AuthenticationService);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('BingoTicket', {});
                $provide.value('BingoCall', {});
                $provide.value('CoreApiConverter', {});
            });


            inject(function (_$rootScope_, _$controller_) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                $scope.username='username';
                $scope.password = 'password';

                controller = $controller('MainController', {
                    $scope: $scope,
                    CoreApiConverter: coreApiConverter
                });
            });

            sandbox = sinon.sandbox.create();
            loginSpy = sinon.sandbox.spy(mocks.AuthenticationService, 'login');
            logoutSpy = sinon.sandbox.spy(mocks.AuthenticationService, 'logout');
            gameProxySpy = sinon.sandbox.spy(mocks.GameProxy, 'callApi');
            buyInGamespy = sinon.sandbox.spy(mocks.CoreApiConverter, 'convertTicketPurchaseData');

        });

        it('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce.calledWithExactly('username', 'password');
        });

        it('Ensures the logout works and retuns to login', function () {
            $scope.logout();
            logoutSpy.should.have.been.calledOnce.calledWithExactly('token');
        });

        it('Ensures the next game button works', function () {
            $scope.nextGame();
            gameProxySpy.should.have.been.calledOnce;
        });

        it('Ensures the buy in game button works', function () {
            $scope.buyInGame();
            gameProxySpy.should.have.been.calledOnce;
            buyInGamespy.should.have.been.calledOnce;
        });

        //it('Ensures the get first call works', function () {
        //    $scope.getFirstCall();
        //    gameProxySpy.should.have.been.calledOnce;
        //});

        afterEach(function () {
            sandbox.restore();
        });

    });

})();