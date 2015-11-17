(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameProxy', ['$http', '$q', 'ProxyConstants', 'AuthenticationService', function($http, $q, proxyConstants, authenticationService){
            var me = this;

            me.callApi = function (apiName, action, data) {
                var deferred = $q.defer();
                var req = {
                    method: action,
                    url: proxyConstants.baseURL + apiName,
                    data: data,
                    headers: {
                        'x-token': authenticationService.getToken,
                        'content-type': 'application/json'
                    }
                };
                $http(req).
                    then(function (response) {
                        deferred.resolve(response.data);
                    }).catch(function (response) {
                        deferred.reject(response.data);
                        console.log('Error coming from proxy:' + response);
                    });

                return deferred.promise;
            };

        }]);
})();