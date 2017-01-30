(function(){
  'use strict';
  angular.module('app', ['ui.router', 'ngResource','app.services','ui.bootstrap','ngAnimate']);
  angular.module('app')
    .constant('urls', {
        BASE: 'http://localhost:3000',
        TASK_REST_API: '/api/tasks'
    })
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('task', {
          url: '/task',
          templateUrl: 'app/task/index.html',
          controller: 'TaskListCtrl',
          controllerAs: 'vm'
      })
    })
    .run(function ($state) {
      $state.go('task');
    });
})();
