(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            $controller,
            controller,
            $rootScope,
            loginSpy,
            logoutSpy,
            sandbox;

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');
            module(function ($provide) {

                $provide.value('LoginApi', mocks.LoginApi);
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
            loginSpy = sinon.sandbox.spy(mocks.LoginApi, 'loginButton');
            logoutSpy = sinon.sandbox.spy(mocks.GameApi, 'logout');
        });

        it('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce.calledWithExactly('username', 'password');
        });

        it.skip('Ensures the logout works and retuns to login', function () {
            $scope.logout();
            logoutSpy.should.have.been.calledOnce;
        });

        afterEach(function () {
            sandbox.restore();
        });

    });

})();


//    $scope.login = function (){
//        loginApi.loginButton($scope.username, $scope.password);
//    };
//
//    $scope.logout = function (){
//        gameApi.logout($scope.sessionDetailsLogin.token);
//    };
//
//    $scope.nextGame = function (){
//        gameApi.nextButton($scope.sessionDetailsLogin.token);
//    };
//
//    $scope.buyInGame = function (){
//        gameApi.buyIn($scope.sessionDetailsLogin.token);
//    };
//
//    $scope.getFirstCall = function (){
//        gameApi.getCall($scope.sessionDetailsLogin.token);
//    };