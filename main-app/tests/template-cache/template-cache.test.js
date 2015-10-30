(function () {
    'use strict';
    describe('Testing all of states within the application', function () {
        var sandbox,
            $timeout,
            $state,
            $rootscope,
            $templateCache;

        beforeEach(function () {
            module('Tombola.Games.Bingo90');
            sandbox = sinon.sandbox.create();
            inject(function ($injector, _$state_, _$timeout_, _$rootScope_, _$templateCache_) {
                $timeout = _$timeout_;
                $state = _$state_;
                $rootscope = _$rootScope_;
                $templateCache = _$templateCache_;
            });
            $templateCache.put('partials/login.html', 'partials/login.html');
            $rootscope.$digest();

        });

        it('Make sure the default state is login', function () {
            var state = $state.get('login');
            //should.exist(state);
            //state.url.should.equal('/loginScreen');
            //state.templateProvider($templateCache).should.equal($templateCache.get('partials/login.html'));
        });

    });

})();