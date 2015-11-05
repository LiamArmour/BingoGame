(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoTicket', [ function() {
            var me = this;
            var tickets = [],
                balls = [];

            me.pushArray = function (card) {
                var cardss = "054963758028345266770611596982054963758028345266770611596982";
                generateTheTicket(cardss);
            };

            var createBingoTicketGrid = function () {
                me.ticketGrid = [
                    [null, null,null,null,null,null,null,null,null],
                    [null, null,null,null,null,null,null,null,null],
                    [null, null,null,null,null,null,null,null,null]
                ];
            };

            var generateTheTicket = function (ticket) {
                var startOfString = 0;
                var endOfString = 30;
                for(startOfString; startOfString < ticket.length; startOfString += 30){
                    tickets.push(ticket.slice(startOfString, endOfString));
                    endOfString += 30;
                }
                splitUpTheTicket(tickets[0]);
                console.log(tickets);
            };

            var splitUpTheTicket = function (ticket) {
                var startOfString = 0;
                var endOfString = 2;
                for(startOfString; startOfString < ticket.length; startOfString += 2){
                    balls.push(ticket.slice(startOfString, endOfString));
                    endOfString += 2;
                }
                console.log(balls);
            };

        }]);
})();