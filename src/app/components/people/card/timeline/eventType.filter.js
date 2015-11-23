(function() {
  'use strict';

  angular.module('missionhub.people.card')
    .filter('eventType', function (_) {
      return function(events, selectedTypes) {
        return _.filter(events, function(event){
          return selectedTypes[event.eventType];
        });
      };
    });
})();
