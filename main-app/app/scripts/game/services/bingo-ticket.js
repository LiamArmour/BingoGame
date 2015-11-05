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

            //NOW WE NEED TO PUSH THESE TO THE BINGO BOARD
            //{{strip[0][0]}}
            //{{strip[1][0]}}
            //{{strip[2][0]}}
            //
            //Colum one is stip number and next is cell number 0-8

        }]);
})();