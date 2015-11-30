(function() {
  'use strict';

  angular
    .module('missionhub.messages')
    .component('messages', {
      controller: MessagesController,
      templateUrl: 'app/components/messages/messages.html'
    });

  /** @ngInject */
  function MessagesController() {
    var vm = this;

    activate();

    function activate() {

    }
  }
})();
