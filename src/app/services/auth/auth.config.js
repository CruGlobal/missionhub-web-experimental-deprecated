(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .config(config);

  /** @ngInject */
  function config($authProvider, authKeys) {
    //Authentication Config
    $authProvider.baseUrl = 'http://localhost:3000/apis/v4/';
    $authProvider.withCredentials = false; //TODO: Remove if not needed in production. Enables wildcard in 'Access-Control-Allow-Origin'

    $authProvider.google({
      clientId: authKeys.google.clientId,
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive']
    });

    $authProvider.facebook({
      clientId: authKeys.facebook.clientId,
      url: 'sessions/?provider=facebook'
    });
  }

})();
