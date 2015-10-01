(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config(lkGoogleSettingsProvider) {
    lkGoogleSettingsProvider.configure({
      apiKey: '**********',
      clientId: '***********.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/drive'],
      locale: 'en',
      views: ['DocsView().setIncludeFolders(true)', 'DocsUploadView().setIncludeFolders(true)']
    });
  }
})();
