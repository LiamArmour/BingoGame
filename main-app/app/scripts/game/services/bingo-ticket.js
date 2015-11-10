(function() {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoTicket', [function() {
            var me = this,
                tickets = [],
                lines = [];

            me.balls = [];

            me.pushArray = function(card) {
                var cardss = "054963758028345266770611596982054963758028345266770611596982";
                generateTheTicket(card);
            };

            var generateTheTicket = function(ticket) {
                    var startOfString = 0,
                        endOfString = 30;
                    for (startOfString; startOfString < ticket.length; startOfString += 30) {
                        tickets.push(ticket.slice(startOfString, endOfString));
                        endOfString += 30;
                    }

                    for (ticket in tickets) {
                        splitUpTheTicket(tickets[ticket]);
                    }
                },

                eightOrLess = function(number) {
                    return number < 9 ? number : 8;
                },

                splitUpTheTicket = function(ticket) {
                    var startOfString = 0,
                        endOfString = 2,
                        i;
                    for (startOfString; startOfString < ticket.length; startOfString += 2) {
                        lines.push(ticket.slice(startOfString, endOfString));
                        endOfString += 2;
                    }
                    for (i = 0; i < lines.length; i++) {
                        me.balls[parseInt((9 * (Math.floor(i / 5)))) + parseInt(eightOrLess(lines[i][0]))] = lines[i];
                    }
                };

        }]);
})();