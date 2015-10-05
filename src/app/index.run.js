(function() {
  'use strict';

  angular
    .module('missionhub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, authenticator) {

    authenticator.initialize();
    $log.debug('runBlock end');
  }

})();
