(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .factory('authenticator', authenticatorService);

  /** @ngInject */
  function authenticatorService($log, $auth, $rootScope, $state, userDetails, $q){
    var factory = {
      authenticate: authenticate,
      logout: logout,
      isAuthenticated: isAuthenticated,
      getGoogleAccessToken: getGoogleAccessToken,
      initialize: initialize
    };
    return factory;

    function authenticate(provider){
      return $auth.authenticate(provider)
        .then(function(response) {
          userDetails.setFirstName(response.data.first_name);
          userDetails.setLastName(response.data.last_name);
          userDetails.setPersonId(response.data.person_id);
          userDetails.setProfilePicture(response.data.profile_image_url);
          userDetails.setCurrentOrganization(response.data.recent_organization_id);
          $log.info("JWT Payload:", $auth.getPayload());
          $state.transitionTo("dashboard");
          return true;
        }, function(response) {
          $log.error("Authentication failed:", response);
          return $q.reject(response.data);
        });
    }

    function logout(){
      $auth.logout();
      userDetails.clearAll();
      $state.transitionTo("welcome");
    }

    function isAuthenticated(){
      return $auth.isAuthenticated();
    }

    function getGoogleAccessToken(){
      return 'secret token'; //TODO: implement requesting this from server
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
  }

})();
