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
    function PersonCardController($stateParams) {
      var vm = this;
      vm.personId = $stateParams.personId;
      vm.showInteractions = true;
      vm.showSurveys = true;
      vm.showMessages = true;

      activate();

      function activate() {

      }
    }
  }
})();
