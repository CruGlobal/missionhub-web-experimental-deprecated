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
    function NavbarController(authenticator, api, userDetails) {
      var vm = this;
      vm.auth = authenticator;
      vm.userDetails = userDetails;

      activate();

      function activate() {
        loadOrganizations();
        loadCurrentOrganization();
      }

      function loadOrganizations(){
        api.organizations.all().then(function(data){
          vm.orgs = data;
        });
      }
      function loadCurrentOrganization(){
        api.organizations.current().then(function(data){
          vm.currentOrg = data;
        });
      }
    }
  }
})();
