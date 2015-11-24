(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core').
        directive('ticketSquare', function(){
            return {
                restrict: 'A',
                template: function(element, attributes){
                    var html = '<div ng-class="markedNumbers['+attributes.ticketSquare+']" ng-click="clickBox('+attributes.ticketSquare+')">{{bingoCardNumbers['+attributes.ticketSquare+']}}</div>';
                    return html;
                }
            };
        });
})();