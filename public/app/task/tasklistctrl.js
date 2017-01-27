(function () {
    'use strict';
    angular.module('app').controller('TaskListCtrl', TaskListCtrl);
    /** @ngInject */
    function TaskListCtrl(apiService, urls) {
        // init
        var vm = this;
        vm.tasks = null;

        // functions
        vm.getAllTask = getAllTask;
        vm.deleteTask = deleteTask;

        // init calls
        vm.getAllTask();

        // functions defination
        function getAllTask() {
            apiService.getAll(urls.BASE + urls.TASK_REST_API, onSuccess, onError);

            function onSuccess(response) {
                vm.tasks = response.data;
            }

            function onError(error) {
                alert(error.data.message);
            }
        }

        function deleteTask(id) {
            apiService.deleteRecord(urls.BASE + urls.TASK_REST_API, id, onSuccess, onError);
            
            function onSuccess(response) {
                alert(response.data.message);
            }

            function onError(error) {
                alert(error.data.message);
            }
        }
    }
})();
