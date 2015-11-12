var mocks;
(function () {
    'use strict';
    mocks = {
        LoginApi: {
            createLoginData: function(usernameType, passwordType){},
            callApiLogin: function(callName, requestData){},
            loginButton: function (usernameType, passwordType) {}
        },
        GameApi: {
            nextButton: function (token) {},
            buyIn: function (token) {},
            getCall: function (token) {},
            logout: function (token) {}
        },
        $state:{
            go: function () {},
            $current: 'playerSelection'
        },
        BingoTicket:{

        },
        BingoCall:{

        },
        SessionDetails:{

        }
    };
})();





