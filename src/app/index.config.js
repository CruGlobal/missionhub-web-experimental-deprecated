(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config($logProvider, envServiceProvider, $authProvider) {
    envServiceProvider.config({
      domains: {
        development: ['localhost'],
        staging: ['stage.missionhub.com'],
        production: ['missionhub.com', 'www.missionhub.com']
      },
      vars: {
        development: {
          apiBaseUri: 'http://localhost:3000/apis/v4/'
        },
        staging: {
          apiBaseUri: 'https://stage.missionhub.com/apis/v4/'
        },
        production: {
          apiBaseUri: 'https://www.missionhub.com/apis/v4/'
        }
      }
    });

    // run the environment check, so the comprobation is made
    // before controllers and services are built
    envServiceProvider.check();

    if (envServiceProvider.is('production')) {
      /// Disable log
      $logProvider.debugEnabled(false);
    } else {
      // Enable log
      $logProvider.debugEnabled(true);
    }

    $authProvider.baseUrl = envServiceProvider.read('apiBaseUri'); //rest of $auth config is in services/auth/auth.config.js
  }

})();
