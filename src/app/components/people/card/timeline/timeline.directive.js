(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .directive('cardTimeline', timeline);

  /** @ngInject */
  function timeline() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/card/timeline/timeline.html',
      controller: TimelineController,
      controllerAs: 'timeline',
      bindToController: true,
      scope: {
        events: '='
      }
    };

    return directive;

    /** @ngInject */
    function TimelineController() {
      var vm = this;

      activate();

      function activate() {

      }

    }
  }
})();
