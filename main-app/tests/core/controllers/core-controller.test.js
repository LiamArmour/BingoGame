(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            controller,
            $rootScope,
            loginSpy,
            stateSpy;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');

            loginSpy = sinon.sandbox.spy(mocks.LoginApi, 'loginButton');
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();

                controller = $controller('MainController', {
                    $scope: $scope,
                    $state:mocks.$state,
                    LoginApi: mocks.LoginApi,
                    GameApi: mocks.GameApi,
                    BingoTicket: mocks.BingoTicket,
                    BingoCall: mocks.BingoCall,
                    SessionDetails: mocks.SessionDetails
                });
            });
        });

        it('Ensures the login api can be called', function () {
            $scope.gameApi.should.equal(mocks.GameApi);
        });

        it.skip('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce.calledWithExactly('lobby');
        });

    });

})();