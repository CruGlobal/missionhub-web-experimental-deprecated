(function() {
  'use strict';

  angular
    .module('missionhub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, authenticator) {

    $log.debug('runBlock end');
    authenticator.initialize();
  }

})();
