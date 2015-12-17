(function() {
  'use strict';

  angular
    .module('missionhub.genericServices')
    .factory('search', searchService);

  /** @ngInject */
  function searchService(_){
    var factory = {
      fuzzySearch: fuzzySearch
    };
    return factory;

    function fuzzySearch(possibilities, query, key){
      if(query === '' || query === null){
        return possibilities;
      }
      query = query.toLowerCase();
      return _.filter(possibilities, function(possibility){
        if(key !== undefined){
          return fuzzyMatch(possibility[key].toString().toLowerCase(), query);
        }else{
          return fuzzyMatch(possibility.toString().toLowerCase(), query);
        }
      });
    }

    function fuzzyMatch(str, pattern){
      pattern = pattern.split("").reduce(function(a,b){ return a+'[^'+b+']*'+b; });
      return (new RegExp(pattern)).test(str);
    }
  }

})();
