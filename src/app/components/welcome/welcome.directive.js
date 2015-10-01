(function() {
  'use strict';

  angular
    .module('missionhub.welcome')
    .directive('welcome', welcome);

  /** @ngInject */
  function welcome() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/welcome/welcome.html',
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
      vm.auth = authenticator;

      activate();

      function activate() {

      }
    }
  }
})();
