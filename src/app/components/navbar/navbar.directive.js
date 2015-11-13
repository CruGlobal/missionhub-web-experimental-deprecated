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
    function NavbarController(authenticator, userDetails, api) {
      var vm = this;
      vm.auth = authenticator;
      vm.userDetails = userDetails;

      activate();

      function activate() {
        if(vm.auth.isAuthenticated()) {
          loadOrganizations();
        }
      }

      function loadOrganizations(){
        api.organizations.all().then(function(data){
          vm.orgs = data;
        });
      }
    }
  }
})();
