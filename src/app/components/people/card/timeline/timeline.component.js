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
  function TimelineController($mdDialog) {
    var vm = this;
    vm.visibleEventTypes = {
      interaction: true,
      survey: true,
      message: true
    };
    vm.showInteractionDialog = showInteractionDialog;

    activate();

    function activate() {

    }

    function showInteractionDialog(event) {
      $mdDialog.show({
        templateUrl: 'app/components/people/card/timeline/interactionDialog/interaction.dialog.html',
        controller: InteractionDialogController,
        controllerAs: 'interaction',
        bindToController: true,
        clickOutsideToClose: false,
        locals: {
          event: angular.copy(event)
        },
        fullscreen: true
      }).then(function(modifiedEvent){
        angular.copy(modifiedEvent, event);
      });

      /** @ngInject */
      function InteractionDialogController($mdDialog, moment, search, api) {
        var vm = this;
        vm.close = close;
        vm.save = save;
        vm.interactionTypes = getInteractionTypes();
        vm.timestampModel = vm.event.timestamp.toDate();
        vm.updateTimestamp = updateTimestamp;
        vm.initiatorSearch = initiatorSearch;

        function close() {
          $mdDialog.cancel();
        }

        function save() {
          $mdDialog.hide(vm.event);
        }

        function initiatorSearch(query){
          return api.filters.possibilities.initiators().then(function (possibilities){
            return search.fuzzySearch(possibilities, query, 'name');
          });
        }

        function getInteractionTypes() {
          return [
            'Spiritual Conversation',
            'Comment',
            'Personal Evangelism',
            'Personal Evangelism Decisions',
            'Holy Spirit Presentation',
            'Graduating on Mission'
          ];
        }

        function updateTimestamp(){
          vm.event.timestamp = moment(vm.timestampModel);
          console.log('updated date', vm.event.timestamp, vm.timestampModel);
        }
      }
    }
  }
})();
