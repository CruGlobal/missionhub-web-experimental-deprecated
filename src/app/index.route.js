(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        template: '<welcome></welcome>'
      })
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
        authenticate: true
      })
      .state('people', {
        url: '/people',
        template: '<ui-view/>',
        abstract: true,
        authenticate: true
      });

    $urlRouterProvider.otherwise('/welcome');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
