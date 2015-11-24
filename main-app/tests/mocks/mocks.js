var mocks;
(function () {
    'use strict';
    mocks = {
        AuthenticationService: {
            createLoginData: function (usernameType, passwordType) {
            },
            callApiLogin: function (callName, requestData) {
            },
            login: function (usernameType, passwordType) {
            }
        },
        GameApi: {
            nextButton: function (token) {
            },
            buyIn: function (token) {
            },
            getCall: function (token) {
            },
            logout: function (token) {
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
            pushArray: function () {
            },
        },
        ProxyConstants: {
            baseURL: "http://eutaveg-01.tombola.emea:30069/"
        },
        BingoCall: {},
        SessionDetails: {},
        BingoCardNumbers: {},
        GameProxy : {
        callApi: function () {
        }
    }
    };
})();





