(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameProxy', ['$http', '$q', function($http, $q){
            var me = this;

            me.loginCall = function(apiName, data){
                var defered = $q.defer();
                $http.post(proxyConstants.baseURL + apiName, data, {"withCredentials": "true"}).
                    then(function(response) {
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();