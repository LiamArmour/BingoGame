(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('BingoTicket', [function() {

            var pushArray = function () {

            };

            var bingoTicket = gameModel.returnedMessage.payload.card,
                ticketLength = bingoTicket.length,
                tickets = [];

            //$scope.bingoStrip = [];

            //var createBingoTicketGrid = function () {
            //    me.ticketGrid = [
            //        [null, null,null,null,null,null,null,null,null],
            //        [null, null,null,null,null,null,null,null,null],
            //        [null, null,null,null,null,null,null,null,null]
            //    ];
            //};

            //var generateTheTicket = function (ticket) {
            //    var startOfString = 0;
            //    var endOfString = 30;
            //    for(startOfString; startOfString < ticket.length; startOfString += 30){
            //        tickets.push(ticket.slice(startOfString, endOfString));
            //        endOfString += 30;
            //    }
            //};

        }]);
})();