(function() {
  'use strict';

  angular
    .module('missionhub.people.import')
    .component('peopleImport', {
      controller: PeopleImportController,
      templateUrl: 'app/components/people/import/import.html'
    });

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
})();
