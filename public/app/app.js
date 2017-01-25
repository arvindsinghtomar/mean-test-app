(function(){
  'use strict';
  angular.module('app', ['ui.router', 'ngResource','app.services']);
  angular.module('app')
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
