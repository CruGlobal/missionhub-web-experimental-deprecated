(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config($logProvider, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


    //Authentication Config
    $authProvider.baseUrl = 'http://localhost:8080/api/v1/';
    $authProvider.withCredentials = false; //TODO: Remove if not needed in production. Enables wildcard in 'Access-Control-Allow-Origin'

    $authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    $authProvider.google({
      clientId: '*******************.apps.googleusercontent.com'
    });
  }

})();
