(function () {
    'use strict';
    describe('Testing the proxy constant', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Games.Bingo90.Core');
            inject(function ($injector) {
                constants = $injector.get('ProxyConstants');
            });
        });

        it('Ensures the string is equal to the correct url', function () {
            constants.baseURL.should.equal('http://eutaveg-01.tombola.emea:30069/');
        });

    });

})();