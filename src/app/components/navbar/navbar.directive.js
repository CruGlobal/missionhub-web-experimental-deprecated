(function() {
  'use strict';

  angular
    .module('missionhub.navbar')
    .directive('mhNavbar', mhNavbar);

  /** @ngInject */
  function mhNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true,
      replace: true,
      scope: {

      }
    };

    return directive;

    /** @ngInject */
    function NavbarController(authenticator) {
      var vm = this;
      vm.auth = authenticator;

      activate();

      function activate() {

      }
    }
  }
})();
