(function () {
    'use strict';
    angular.module('app').controller('TaskListCtrl', TaskListCtrl);
    /** @ngInject */
    function TaskListCtrl(apiService, urls, $uibModal) {
        // init
        var vm = this;
        vm.tasks = null;

        // functions
        vm.getAllTask = getAllTask;
        vm.deleteTask = deleteTask;
        vm.manageTask = manageTask;

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
            _.remove(vm.tasks, {_id: id});
            function onSuccess(response) {
                alert(response.data.message);
            }

            function onError(error) {
                alert(error.data.message);
            }
        }
        
        function manageTask(oTask) {
            vm.taskModal = $uibModal.open({
                animation: true,
                templateUrl: 'app/task/manage.html',
                // size: 'lg',
                controller: ['$uibModalInstance', 'oTask', taskManageController],
                controllerAs: 'vm',
                resolve: {
                    oTask: function () {
                        return oTask;
                    }
                }
            });

            vm.taskModal.result.then(function (newTask) {
                vm.tasks.push(newTask);
            });
        }

        function taskManageController($uibModalInstance, oTask) {
            var vm = this;
            vm.oTask = oTask;
            // function
            vm.saveTask = saveTask;

            // defination
            function saveTask() {
                apiService.addRecord(urls.TASK_REST_API, vm.oTask, onSuccess, onError);

                function onSuccess(response) {
                    $uibModalInstance.close(response.data);
                }

                function onError(error) {
                    alert('fail');
                }
            }
        }
    }
})();
