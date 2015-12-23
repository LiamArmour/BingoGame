(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Login')
        .service('AuthenticationProxy', ['$http', '$q', 'ProxyConstants', function($http, $q, proxyConstants){
            var me = this;

            me.apiCallLogin = function(apiName, data){
                var defered = $q.defer();

                $http.post(proxyConstants.baseURL + apiName, data).
                    then(function(response) {
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };
        }]);
})();