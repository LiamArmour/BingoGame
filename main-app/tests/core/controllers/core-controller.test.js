(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            $controller,
            controller,
            $rootScope,
            loginSpy,
            stateSpy,
            sandbox,
            gameApi,
            bingoTicket,
            bingoCall,
            sessionDetails;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');

            loginSpy = sinon.sandbox.spy(mocks.LoginApi, 'loginButton');
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, _$controller_) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;

                controller = $controller('MainController', {
                    $scope: $scope,
                    $state: mocks.$state
                });

            });
            sandbox = sinon.sandbox.create();
            gameApi = sinon.sandbox.mock(mocks.gameApi);
            bingoTicket = sinon.sandbox.mock(mocks.bingoTicket);
            bingoCall = sinon.sandbox.mock(mocks.bingoCall);
            sessionDetails = sinon.sandbox.mock(mocks.sessionDetails);

            controller.gameApi = mocks.GameApi;
            controller.bingoTicket = mocks.BingoTicket;
            controller.bingoCall = mocks.BingoCall;
            controller.sessionDetails = mocks.SessionDetails;
        });

        it('Ensures the login api can be called', function () {
            controller.gameApi.should.equal(mocks.GameApi);
        });

        it('Ensures the bingo ticket can be called', function () {
            controller.bingoTicket.should.equal(mocks.BingoTicket);
        });

        it('Ensures the bingo call can be called', function () {
            controller.bingoCall.should.equal(mocks.BingoCall);
        });

        it('Ensures the bingo call can be called', function () {
            controller.sessionDetails.should.equal(mocks.SessionDetails);
        });

        it('Ensures the login works and changes the state', function () {
            $scope.login();
            loginSpy.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce.calledWithExactly('lobby');
        });

        afterEach(function(){
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