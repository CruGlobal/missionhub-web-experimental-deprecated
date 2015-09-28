(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
