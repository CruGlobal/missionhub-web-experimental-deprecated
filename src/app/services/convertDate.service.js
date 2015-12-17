(function() {
  'use strict';

  angular
    .module('missionhub.genericServices')
    .factory('convertDates', convertDatesService);

  /** @ngInject */
  function convertDatesService(_, moment){
    var factory = {
      stringToMoment: convertStringsToMoment
    };
    return factory;

    function convertStringsToMoment(arr, keys){
      console.log('converting dates', arr, keys);
      return _.map(arr, function(obj){
        _.forEach(keys, function(key){
          obj[key] = moment(obj[key]);
        });
        return obj
      });
    }
  }

})();
