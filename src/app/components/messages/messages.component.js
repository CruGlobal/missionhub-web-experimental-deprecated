(function() {
  'use strict';

  angular
    .module('missionhub.messages')
    .component('messages', {
      controller: MessagesController,
      templateUrl: 'app/components/messages/messages.html',
      bindings: {
        new: '='
      }
    });

  /** @ngInject */
  function MessagesController($stateParams) {
    var vm = this;
    vm.recipientId = $stateParams.recipientId;

    activate();

    function activate() {

    }
  }
})();
