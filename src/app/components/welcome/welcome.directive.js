(function() {
  'use strict';

  angular
    .module('missionhub.welcome')
    .directive('welcome', welcome);

  /** @ngInject */
  function welcome() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/welcome/welcome.html',
      controller: WelcomeController,
      controllerAs: 'welcome',
      scope: {

      },
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WelcomeController(authenticator) {
      var vm = this;
      vm.authenticate = authenticate;
      vm.authenticating = false;

      activate();

      function activate() {

      }

      function authenticate(provider){
        vm.authenticating = true;
        authenticator.authenticate(provider)
          .then(function(){
            vm.authenticating = false;
          })
          .catch(function(){
            //TODO: error handling
            vm.authenticating = false;
          });
      }
    }
  }
})();
