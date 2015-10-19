(function() {
  'use strict';

  angular
    .module('missionhub', [
      //vendor modules
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'restangular',
      'ui.router',
      'satellizer',

      //app theme modules
      'missionhub.themes',

      //app directive modules
      'missionhub.navbar',
      'missionhub.welcome',
      'missionhub.dashboard',
      'missionhub.people',

      //app service modules
      'missionhub.auth',
      'missionhub.genericServices',
      'missionhub-js'
    ]);

})();
