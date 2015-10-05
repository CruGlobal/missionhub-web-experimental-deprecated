(function() {
  'use strict';

  angular
    .module('missionhub.people.import')
    .directive('peopleImport', peopleImport);

  /** @ngInject */
  function peopleImport() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/import/import.html',
      controller: PeopleImportController,
      controllerAs: 'peopleImport',
      bindToController: true,
      scope: {

      }
    };

    return directive;

    /** @ngInject */
    function PeopleImportController(googlePicker) {
      var vm = this;
      vm.chooseFiles = chooseFiles;

      activate();

      function activate() {

      }

      function chooseFiles() {
        googlePicker.openPicker().then(function(files){
            console.log('picked files:', files);
          },
          function(reason){
            console.log('Error picking files:', reason);
          });
      }
    }
  }
})();
