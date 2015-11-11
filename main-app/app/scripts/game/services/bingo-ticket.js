(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoTicket', [function() {
            var me = this;
            var tickets = [];

            me.balls = [];

            me.pushArray = function (card) {
                var cardss = "054963758028345266770611596982054963758028345266770611596982";
                generateTheTicket(card);
            };

            var generateTheTicket = function (ticket) {
                var startOfString = 0;
                var endOfString = 30;
                for(startOfString; startOfString < ticket.length; startOfString += 30){
                    tickets.push(ticket.slice(startOfString, endOfString));
                    endOfString += 30;
                }

                for(ticket in tickets){
                    splitUpTheTicket(tickets[ticket]);
                }
            };

            var splitUpTheTicket = function (ticket) {
                var startOfString = 0;
                var endOfString = 2;
                for(startOfString; startOfString < ticket.length; startOfString += 2){
                    me.balls.push(ticket.slice(startOfString, endOfString));
                    endOfString += 2;
                }
                console.log(me.balls);
            };



        }]);
})();