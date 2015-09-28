(function() {
  'use strict';

  angular
    .module('missionhub.dashboard')
    .directive('dashboard', dashboard);

  /** @ngInject */
  function dashboard() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/dashboard/dashboard.html',
      controller: DashboardController,
      controllerAs: 'dashboard',
      scope: {

      },
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DashboardController() {
      var vm = this;

      activate();

      function activate() {

      }
    }
  }
})();
