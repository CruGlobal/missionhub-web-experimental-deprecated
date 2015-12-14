(function() {
  'use strict';

  angular
    .module('missionhub.people')
    .component('peopleFilter', {
      controller: PeopleFilterController,
      templateUrl: 'app/components/people/filter/peopleFilter.html',
      bindings: {
        filters: '='
      }
    });

  /** @ngInject */
  function PeopleFilterController(_, api, $element, $timeout) {
    var vm = this;
    vm.autocompleteFieldQuery = autocompleteFieldQuery;
    vm.transformChip = transformChip;
    vm.searchPossibleValues = searchPossibleValues;
    vm.selectAppendedChip = selectAppendedChip;
    vm.selectChipAutocomplete = selectChipAutocomplete;

    activate();

    function activate() {

    }

    function autocompleteFieldQuery(query){
      var allFields = [
        {
          name: 'Assigned To',
          type: 'filter',
          possibilities: ['assignedTo']
        },
        {
          name: 'Interaction',
          type: 'filter',
          possibilities: ['interactions']
        },
        {
          name: 'Group',
          type: 'filter',
          possibilities: ['groups']
        },
        {
          name: 'Follow-up Status',
          type: 'filter',
          possibilities: ['status']
        },
        {
          name: 'Permissions',
          type: 'filter',
          possibilities: ['permissions']
        },
        {
          name: 'Gender',
          type: 'filter',
          possibilities: ['gender']
        },
        {
          name: 'Faculty',
          type: 'filter',
          possibilities: ['faculty']
        },
        {
          name: 'Survey',
          type: 'filter',
          possibilities: [
            'surveys',
            'questions',
            'answers'
          ]
        }
      ];

      return fuzzyFilter(allFields, query);
    }

    function fuzzyFilter(possibilities, query) {
      if(query === '' || query === null){
        return possibilities;
      }
      query = query.toLowerCase();
      return _.filter(possibilities, function(possibility) {
        return fuzzyMatch(possibility.name.toString().toLowerCase(), query);
      });
    }

    function fuzzyMatch(str, pattern) {
      pattern = pattern.split("").reduce(function(a,b){ return a+'[^'+b+']*'+b; });
      return (new RegExp(pattern)).test(str);
    }

    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return angular.copy(chip);
      }
      // Otherwise, create a new one
      return { name: chip, type: 'search' };
    }

    function searchPossibleValues(type, query, values) {
      values = _.map(values, function(value){
        return value ? value.name : null
      });
      console.log(values)
      return api.filters.possibilities[type](values[0], values[1]).then(function (possibilities){
        return fuzzyFilter(possibilities, query);
      });
    }

    function selectAppendedChip(){
      $timeout(function(){
        var mdChipsCtrl = angular.element($element[0].querySelector('md-chips')).controller('mdChips');
        var lastChipIndex = mdChipsCtrl.items.length - 1;
        mdChipsCtrl.selectAndFocusChipSafe(lastChipIndex);
      });
    }

    function selectChipAutocomplete(){
      var mdChipsCtrl = angular.element($element[0].querySelector('md-chips')).controller('mdChips');
      var chipAutocomplete = $element[0].querySelector('md-chip[index="' + mdChipsCtrl.selectedChip + '"] input');
      if(chipAutocomplete){
        chipAutocomplete.focus();
      }
    }
  }
})();
