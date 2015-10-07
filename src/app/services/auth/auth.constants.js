(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .constant('authKeys', {
      google: {
        clientId: '140268666048-fu90krfrmib8qg9dr3vnfpn7spktub0u.apps.googleusercontent.com'
      },
      facebook: {
        clientId: '233292170040365'
      }
    });

})();
