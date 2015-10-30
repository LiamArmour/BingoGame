(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Core')
        .service('GameProxy', ['$http', '$q', function($http, $q){
            var me = this;

            me.loginCall = function(username, password){
                var defered = $q.defer();
                $http.post("http://eutaveg-01.tombola.emea:30069/" + username, password, {"withCredentials": "true"}).
                    then(function(response) {
                        console.log(response);
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();