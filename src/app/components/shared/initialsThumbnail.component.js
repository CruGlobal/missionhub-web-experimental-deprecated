(function() {
  'use strict';

  angular
    .module('missionhub.shared')
    .component('initials', {
      controller: InitialsController,
      controllerAs: 'initials',
      templateUrl: 'app/components/shared/initialsThumbnail.html',
      bindings: {
        first: '=',
        last: '=',
        fullName: '='
      }
    });

  /** @ngInject */
  function InitialsController() {
    var vm = this;

    activate();

    function activate() {

    }
  }
})();
