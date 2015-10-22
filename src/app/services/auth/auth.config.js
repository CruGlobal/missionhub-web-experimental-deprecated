(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .config(config);

  /** @ngInject */
  function config($authProvider, authKeys, localStorageServiceProvider) {
    //Authentication Config
    //$authProvider.baseUrl is set in index.config.js based on environment
    $authProvider.withCredentials = false; //TODO: Remove if not needed in production. Enables wildcard in 'Access-Control-Allow-Origin'
    $authProvider.tokenPrefix = 'mh.satellizer';

    $authProvider.google({
      clientId: authKeys.google.clientId,
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive']
    });

    $authProvider.facebook({
      clientId: authKeys.facebook.clientId
    });

    localStorageServiceProvider.setPrefix('mh.user');
  }

})();
