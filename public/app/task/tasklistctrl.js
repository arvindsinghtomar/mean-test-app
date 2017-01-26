(function () {
    'use strict';
    angular.module('app').controller('TaskListCtrl', TaskListCtrl);
    /** @ngInject */
    function TaskListCtrl($scope, Task) {
        // init
        var vm = this;

        vm.name = "Hello";
        vm.tasks = Task.query();
    }
})();
