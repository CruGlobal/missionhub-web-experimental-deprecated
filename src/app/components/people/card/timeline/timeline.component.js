(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('timeline', {
      controller: TimelineController,
      templateUrl: 'app/components/people/card/timeline/timeline.html',
      bindings: {
        events: '=',
        loading: '='
      }
    });

  /** @ngInject */
  function TimelineController(moment) {
    var vm = this;
    vm.moment = moment;
    vm.interactionTypes = geInteractionTypes();
    vm.visibleEventTypes = {
      interaction: true,
      survey: true,
      message: true
    };

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
})();
