(function() {
  'use strict';

  angular
    .module('missionhub', [
      //vendor modules
      'ngAnimate',
      'ngSanitize',
      'restangular',
      'ui.router',
      'environment',

      //app theme modules
      'missionhub.themes',

      //app directive modules
      'missionhub.navbar',
      'missionhub.welcome',
      'missionhub.dashboard',
      'missionhub.people',
      'missionhub.messages',

      //app service modules
      'missionhub.auth',
      'missionhub.genericServices',
      'missionhub.api'
    ]);

})();
