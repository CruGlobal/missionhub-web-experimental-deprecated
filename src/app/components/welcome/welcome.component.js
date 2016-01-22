(function() {
  'use strict';

  angular
    .module('missionhub.welcome')
    .component('welcome', {
      controller: WelcomeController,
      controllerAs: 'welcome',
      templateUrl: 'app/components/welcome/welcome.html'
    });

  /** @ngInject */
  function WelcomeController(authenticator, $state) {
    var vm = this;
    vm.authenticate = authenticate;
    vm.authenticating = false;
    vm.error = false;

    activate();

    function activate() {
      if(authenticator.isAuthenticated()){
        $state.transitionTo("dashboard");
      }
    }

    function authenticate(provider){
      vm.error = false;
      vm.authenticating = true;
      authenticator.authenticate(provider)
        .then(function(){
          vm.authenticating = false;
        })
        .catch(function(){
          vm.authenticating = false;
          vm.error = true;
        });
    }
  }
})();
