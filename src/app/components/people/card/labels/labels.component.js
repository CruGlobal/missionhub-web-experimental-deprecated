(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('personLabels', {
      controller: PersonLabelsController,
      controllerAs: 'personLabels',
      templateUrl: 'app/components/people/card/labels/labels.html',
      bindings: {
        labels: '='
      }
    });

  /** @ngInject */
  function PersonLabelsController(_, search) {
    var vm = this;
    vm.labelSearch = labelSearch;

    activate();

    function activate() {

    }

    function labelSearch(query){
      return search.fuzzySearch(allLabels, query);
    }

    var allLabels = [
      'Involved',
      'Engaged Disciple',
      'Leader',
      'Some Bible Study',
      'Worship Leader'
    ];
  }
})();
