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
  function PeopleFilterController(_, api) {
    var vm = this;
    vm.autocompleteFieldQuery = autocompleteFieldQuery;
    vm.transformChip = transformChip;
    vm.searchPossibleValues = searchPossibleValues;

    activate();

    function activate() {

    }

    function autocompleteFieldQuery(query){
      var allFields = [
        {
          name: 'Assigned To',
          type: 'filter',
          possibilities: 'assignedTo'
        },
        {
          name: 'Interaction',
          type: 'filter',
          possibilities: 'interactions'
        },
        {
          name: 'Group',
          type: 'filter',
          possibilities: 'groups'
        },
        {
          name: 'Follow-up Status',
          type: 'filter',
          possibilities: 'status'
        },
        {
          name: 'Permissions',
          type: 'filter',
          possibilities: 'permissions'
        },
        {
          name: 'Gender',
          type: 'filter',
          possibilities: 'gender'
        },
        {
          name: 'Faculty',
          type: 'filter',
          possibilities: 'faculty'
        },
        {
          name: 'Survey',
          type: 'filter',
          possibilities: 'surveys'
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

    function searchPossibleValues(type, query) {
      return api.filters.possibilities[type]().then(function (possibilities){
        return fuzzyFilter(possibilities, query);
      });
    }
  }
})();
