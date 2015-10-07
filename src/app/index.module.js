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
      'ui.bootstrap',
      'ngMaterial',
      'ngMdIcons',
      'satellizer',

      //app directive modules
      'missionhub.navbar',
      'missionhub.welcome',
      'missionhub.dashboard',
      'missionhub.people',

      //Filters
      'missionhub.filters',

      //app service modules
      'missionhub.auth',
      'missionhub.genericServices'
    ]);

})();
