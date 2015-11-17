(function () {
    'use strict';

    describe("Testing the session details value", function() {
        var sessionDetails;
        beforeEach(function() {
            module('Tombola.Games.Bingo90.Core');
            inject(function($injector) {
                sessionDetails = $injector.get('SessionDetails');
            });
        });

        it('Ensures rge session details login value starts as blank', function() {
            sessionDetails.should.deep.equal({login: {}});
        });

    });
})();