(function() {
  'use strict';

  angular
    .module('missionhub.messages')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('messages.index', {
        url: '',
        template: '<messages></messages>',
        authenticate: true
      })
      .state('messages.newEmail', {
        url: '/new/email',
        template: '<messages new="email"></messages>',
        authenticate: true
      })
      .state('messages.newEmailWithRecipient', {
        url: '/new/email/:recipientId',
        template: '<messages new="email"></messages>',
        authenticate: true
      })
      .state('messages.newText', {
        url: '/new/text',
        template: '<messages new="text"></messages>',
        authenticate: true
      })
      .state('messages.newTextWithRecipient', {
        url: '/new/text/:recipientId',
        template: '<messages new="text"></messages>',
        authenticate: true
      })
      .state('messages.view', {
        url: '/:messageId',
        template: '<messages id="messageId"></messages>',
        authenticate: true
      });

  }
})();
