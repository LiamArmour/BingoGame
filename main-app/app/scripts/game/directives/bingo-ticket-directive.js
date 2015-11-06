(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Core').
        directive('TicketSquare', function(){
            return {
                restrict: 'A',
                template: function(element, attributes){
                    var html = '<div ng-click="clickBox('+attributes.ticketSquare+')">{{ticketNumbers['+attributes.ticketSquare+']}}</div>';
                    return html;
                }
            };
        });
})();