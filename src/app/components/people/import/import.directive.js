(function() {
  'use strict';

  angular
    .module('missionhub.people.import')
    .directive('peopleImport', peopleImport);

  /** @ngInject */
  function peopleImport() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/people/import/import.html',
      controller: PeopleImportController,
      controllerAs: 'peopleImport',
      bindToController: true,
      scope: {

      }
    };

    return directive;

    /** @ngInject */
    function PeopleImportController() {
      var vm = this;

      activate();

      function activate() {

      }
    }
  }
})();
