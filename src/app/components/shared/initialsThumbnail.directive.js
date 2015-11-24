(function() {
  'use strict';

  angular
    .module('missionhub.shared')
    .directive('initials', initials);

  /** @ngInject */
  function initials() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/shared/initialsThumbnail.html',
      controller: InitialsController,
      controllerAs: 'initials',
      bindToController: true,
      scope: {
        first: '=',
        last: '=',
        fullName: '='
      }
    };

    return directive;

    /** @ngInject */
    function InitialsController() {
      var vm = this;

      activate();

      function activate() {

      }
    }
  }
})();
