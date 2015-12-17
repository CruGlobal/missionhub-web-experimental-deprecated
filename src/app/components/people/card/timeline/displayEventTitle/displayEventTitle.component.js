(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('displayEventTitle', {
      templateUrl: 'app/components/people/card/timeline/displayEventTitle/displayEventTitle.html',
      bindings: {
        event: '='
      }
    });
})();
