var mocks;
(function () {
    'use strict';
    mocks = {
        AuthenticationService: {
            createLoginData: function (usernameType, passwordType) {},
            callApiLogin: function (callName, requestData) {},
            login: function (usernameType, passwordType) {},
            logout: function (token) {}
        },
        GameApi: {
            nextButton: function (token) {
            },
            buyIn: function (token) {
            },
            getCall: function (token) {
            }
        },
        $state: {
            go: function () {
            },
            $current: 'playerSelection'
        },
        BingoTicket: {
            balls: [],
            markedNumbers: [],
            pushArray: function () {}
        },
        ProxyConstants: {
            baseURL: "http://eutaveg-01.tombola.emea:30069/"
        },
        BingoCall: {

        },
        SessionDetails: {

        },
        BingoCardNumbers: {

        },

        GameService: {
            nextGame: function (endPoint, type, data) {},
            buyInGame: function (endPoint, type, data) {}
        },

        GameProxy: {
            callApi: function () {
            }
        },

        CoreApiConverter: {
            convertLoginData: function (response) {},
            loginData: {},
            convertNextGameData: function (response) {},
            convertTicketPurchaseData: function (response) {}

        }

    };
})();





