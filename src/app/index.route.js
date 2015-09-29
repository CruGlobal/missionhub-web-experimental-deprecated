(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      })
      .state('people', {
        url: '/people',
        abstract: true,
        template: '<ui-view/>'
      });

    $urlRouterProvider.otherwise('/dashboard');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
