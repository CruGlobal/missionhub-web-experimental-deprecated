(function() {
  'use strict';

  angular
    .module('missionhub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
