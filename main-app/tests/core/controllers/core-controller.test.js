(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            controller,
            sandbox,
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
                    LoginProxy: mocks.LoginProxy,
                    GameProxy: mocks.GameProxy
                });
            });
        });

        it('Ensures the game title is correct', function () {
            $scope.gameTitle.should.equal('tombola');
        });

        it.skip('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce.calledWithExactly('lobby');
        });

        afterEach(function(){
            //sandbox.restore();
        });

    });

})();