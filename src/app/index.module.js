(function() {
  'use strict';

  angular
    .module('missionhub', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'restangular',
      'ui.router',
      'ui.bootstrap',

      'missionhub.dashboard'
    ]);

})();
