(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('LoginProxy', ['$http', '$q','$state', 'ProxyConstants', function($http, $q, $state, proxyConstants){
            var me = this;

            me.apiCallLogin = function(apiName, data){
                var defered = $q.defer();

                $http.post(proxyConstants.baseURL + apiName, data).
                    then(function(response) {
                        defered.resolve(response.data);
                        me.playerBalance = response.data.payload.user.balance;
                        me.playerToken = response.data.payload.user.token;
                        me.playerUsername = response.data.payload.user.username;
                        $state.go('lobby');
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();