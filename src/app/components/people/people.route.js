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
        template: '<people></people>',
        authenticate: true
      })
      .state('people.import', {
        url: '/import',
        template: '<people-import></people-import>',
        authenticate: true
      }).state('people.card', {
        url: '/:personId',
        template: '<person-card></person-card>',
        authenticate: true
      });

  }
})();
