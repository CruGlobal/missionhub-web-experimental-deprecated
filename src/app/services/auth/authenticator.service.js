(function() {
  'use strict';

  angular
    .module('missionhub.auth')
    .factory('authenticator', authenticatorService);

  /** @ngInject */
  function authenticatorService($log, $auth, $rootScope, $state, localStorageService){
    var factory = {
      authenticate: authenticate,
      logout: logout,
      isAuthenticated: isAuthenticated,
      getGoogleAccessToken: getGoogleAccessToken,
      initialize: initialize,
      user: {
        getFirstName: getFirstName,
        getLastName: getLastName,
        getPersonId: getPersonId,
        getProfilePicture: getProfilePicture,
        getCurrentOrg: getCurrentOrg,
        setCurrentOrg: setCurrentOrg
      }
    };
    return factory;

    function authenticate(provider){
      return $auth.authenticate(provider)
        .then(function(response) {
          localStorageService.set('firstName', response.data.first_name);
          localStorageService.set('lastName', response.data.last_name);
          localStorageService.set('personId', response.data.person_id);
          localStorageService.set('profilePicture', response.data.profile_image_url);
          localStorageService.set('currentOrganization', response.data.recent_organization_id);
          $log.info("JWT Payload:", $auth.getPayload());
          $state.transitionTo("dashboard");
        })
        .catch(function(response) {
          $log.error("Authentication failed:", response);
        });
    }

    function logout(){
      $auth.logout();
      localStorageService.clearAll();
      $state.transitionTo("welcome");
    }

    function isAuthenticated(){
      return $auth.isAuthenticated();
    }

    function getGoogleAccessToken(){
      return 'secret token'; //TODO: implement requesting this from server
    }

    function getFirstName(){
      return localStorageService.get('firstName');
    }

    function getLastName(){
      return localStorageService.get('lastName');
    }

    function getPersonId(){
      return localStorageService.get('personId');
    }

    function getProfilePicture(){
      return localStorageService.get('profilePicture');
    }

    function getCurrentOrg(){
      return localStorageService.get('currentOrganization');
    }

    function setCurrentOrg(newOrg){
      return localStorageService.set('currentOrganization', newOrg);
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
