(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config($logProvider) {

    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
