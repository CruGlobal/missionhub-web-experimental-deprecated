(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .factory('authenticator', authenticatorService);

  /** @ngInject */
  function authenticatorService($log, $auth, $rootScope, $state){
    var factory = {
      authenticate: authenticate,
      logout: logout,
      isAuthenticated: isAuthenticated,
      initialize: initialize
    };

    function authenticate(provider){
      return $auth.authenticate(provider)
        .then(function() {
          $log.info("JWT Payload:", $auth.getPayload());
          $state.transitionTo("dashboard");
        })
        .catch(function(response) {
          $log.error("Authentication failed:", response);
        });
    }

    function logout(){
      $auth.logout();
      $state.transitionTo("welcome");
    }

    function isAuthenticated(){
      return $auth.isAuthenticated();
    }

    function initialize() {
      $rootScope.$on("$stateChangeStart", function (event, toState) {
        if (toState.authenticate && !factory.isAuthenticated()) {
          // User isn’t authenticated
          $state.transitionTo("welcome");
          event.preventDefault();
        }
      });
    }

    return factory;
  }

})();
