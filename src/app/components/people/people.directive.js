(function() {
  'use strict';

  angular
    .module('missionhub.people')
    .directive('people', people);

  /** @ngInject */
  function people() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/people/people.html',
      controller: PeopleController,
      controllerAs: 'people',
      scope: {

      },
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PeopleController() {
      var vm = this;

      activate();

      function activate() {

      }
    }
  }
})();
