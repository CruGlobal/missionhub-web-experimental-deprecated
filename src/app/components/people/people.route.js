(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('people.index', {
        url: '',
        template: '<people></people>'
      })
      .state('people.import', {
        url: '/import',
        template: '<people-import></people-import>'
      });

  }
})();
