(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .directive('personCard', personCard);

  /** @ngInject */
  function personCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/card/card.html',
      controller: PersonCardController,
      controllerAs: 'card',
      bindToController: true,
      scope: {

      }
    };

    return directive;

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
  }
})();
