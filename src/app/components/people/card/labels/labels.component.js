(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('personLabels', {
      controller: PersonLabelsController,
      templateUrl: 'app/components/people/card/labels/labels.html',
      bindings: {
        labels: '='
      }
    });

  /** @ngInject */
  function PersonLabelsController(_) {
    var vm = this;
    vm.labelSearch = labelSearch;

    activate();

    function activate() {

    }

    function labelSearch(query){
      if(query === '' || query === null){
        return allLabels;
      }
      query = query.toLowerCase();
      return _.filter(allLabels, function(label){
        return fuzzyMatch(label.toString().toLowerCase(), query);
      });
    }

    function fuzzyMatch(str,pattern){
      pattern = pattern.split("").reduce(function(a,b){ return a+'[^'+b+']*'+b; });
      return (new RegExp(pattern)).test(str);
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
