(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('personCard', {
      controller: PersonCardController,
      controllerAs: 'card',
      templateUrl: 'app/components/people/card/card.html'
    });

  /** @ngInject */
  function PersonCardController($scope, $stateParams, _, $log, api, convertDates) {
    var vm = this;
    vm.personId = $stateParams.personId;
    vm.events = [];
    vm.loading = true;

    activate();

    function activate() {
      loadPerson();
    }

    function loadPerson(){
      vm.loading = true;
      api.people.get(vm.personId)
        .bind($scope, 'card.person', 'people')
        .observable
        .safeApply($scope, function(data) {
          if (data) {
            var interactions = _.map(data.interactions, function (interaction) {
              return _.assign(interaction, {eventType: 'interaction'});
            });

            var messages = _.map(data.messages, function (message) {
              return _.assign(message, {eventType: 'message'});
            });
            var events = _.union(interactions, messages);
            vm.events = convertDates.stringToMoment(events, ['timestamp']);
            vm.loading = false;
          }
        })
        .subscribe(
          function(data) {
          console.log('receiving vm.person subscription', data);
          },
          function(error){
            $log.error('Error loading person:', error);
            vm.loading = false;
          }
        );
    }
  }
})();
