(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            controller,
            $rootScope,
            stateSpy;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.Bingo90.Core');
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                controller = $controller('MainController', {
                    $scope: $scope,
                    $state:mocks.$state,
                });
            });
        });

        it.skip('Ensures the game title is correct', function () {
            $scope.gameTitle.should.equal('tombola');
        });

    });

})();