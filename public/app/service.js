(function () {
    'use strict';
    angular.module('app.services', []).factory('apiService', apiService);

    /** @ngInject */
    function apiService($http) {
        var service = {
            getAll: getAll,
            deleteRecord: deleteRecord
        };

        return service;

        function getAll(url, onSuccess, onError) {
            return $http.get(url).then(onSuccess).catch(onError);
        }

        function deleteRecord(url, id, onSuccess, onError) {
            return $http.delete(url + '/' + id).then(onSuccess).catch(onError);
        }
    }
})();