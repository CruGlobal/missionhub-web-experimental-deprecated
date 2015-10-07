(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider, $logProvider) {
    var cruThemeMap = $mdThemingProvider.extendPalette('yellow', {
      '500': 'f9b625'
    });
    $mdThemingProvider.definePalette('cruTheme', cruThemeMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('cruTheme')
      .accentPalette('blue');

    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
