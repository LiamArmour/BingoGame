(function () {
    'use strict';
    describe('Bingo ticket directive test', function() {
        var $compile,
            $rootScope;

        beforeEach(function(){
            module('Tombola.Games.Bingo90.Core');
            inject(function(_$compile_, _$rootScope_){
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
        });

        it.skip('Ensure that the bingo ticket contains data for cell 4', function() {
            var directiveElement = '<div ng-class="bingoCell" ng-click="4"></div>';

            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var subElement = element.find('div');

            subElement.attr('ng-class').should.equal('markedNumbers4');
            subElement.attr('ng-click').should.equal(4);
        });

    });
}());