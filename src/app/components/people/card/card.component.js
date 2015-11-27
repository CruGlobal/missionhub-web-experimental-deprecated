(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('personCard', {
      controller: PersonCardController,
      templateUrl: 'app/components/people/card/card.html',
      controllerAs: 'card'
    });

  /** @ngInject */
  function PersonCardController($stateParams, _, moment, api) {
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
      api.people.get(vm.personId).then(function(data){
        vm.person = data;
        var interactions = _.map(data.interactions, function(interaction){
          return _.assign(interaction, {eventType: 'interaction'});
        });
        var messages = _.map(data.messages, function(message){
          return _.assign(message, {eventType: 'message'});
        });
        vm.events = _.union(vm.events, interactions, messages);
        vm.loading = false;
      }, function(error){
        vm.loading = false;
      });
    }
  }
})();
