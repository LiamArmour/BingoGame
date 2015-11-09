var mocks;
(function () {
    'use strict';
    mocks = {
        LoginApi: {
            createLoginData: function(usernameType, passwordType){},
            callApiLogin: function(callName, requestData){},
            loginButton: function (usernameType, passwordType) {}
        },
        $state:{
            go: function () {},
            $current: 'playerSelection'
        },
        BingoTicket:{

        }
    };
})();





