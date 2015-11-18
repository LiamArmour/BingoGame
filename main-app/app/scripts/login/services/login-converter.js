(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoCall',
        [
            function () {
                var me = this;

                me.removeFirstElement = function () {
                    if (me.lastCallsDisplay.length >= 6) {
                        me.lastCallsDisplay.splice(0, 1);
                    }
                };

            }]);
})();