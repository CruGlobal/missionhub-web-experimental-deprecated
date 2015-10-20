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
    function TimelineController(moment) {
      var vm = this;
      vm.moment = moment;
      vm.interactionTypes = geInteractionTypes();

      activate();

      function activate() {

      }

      function geInteractionTypes(){
        return [
          'Spiritual Conversation',
          'Comment',
          'Personal Evangelism',
          'Personal Evangelism Decisions',
          'Holy Spirit Presentation',
          'Graduating on Mission'
        ];
      }
    }
  }
})();
