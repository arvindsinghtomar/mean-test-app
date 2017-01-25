(function () {
    'use strict';
    angular.module('app.services', []).factory('Task', function ($resource) {
        return $resource('/api/tasks/:id', {id: '@_id'}, {
            update: {
                method: 'PUT',
            }
        });
    })
})();