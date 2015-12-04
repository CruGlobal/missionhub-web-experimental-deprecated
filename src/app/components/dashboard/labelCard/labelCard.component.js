(function() {
  'use strict';

  angular
    .module('missionhub.dashboard')
    .component('labelCard', {
      controller: LabelCardController,
      templateUrl: 'app/components/dashboard/labelCard/labelCard.html',
      bindings: {
        data: '='
      }
    });

  /** @ngInject */
  function LabelCardController($mdDialog) {
    var vm = this;
    vm.showCardDetails = showCardDetails;

    activate();

    function activate() {

    }

    function showCardDetails(label){
      $mdDialog.show({
        templateUrl: 'app/components/dashboard/labelCard/label.modal.html',
        controller: LabelModalController,
        controllerAs: 'labelModal',
        bindToController: true,
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        locals: {
          label: label
        },
        fullscreen: true
      });

      /** @ngInject */
      function LabelModalController($mdDialog, $state) {
        var vm = this;
        vm.close = close;
        vm.viewAll = viewAll;
        vm.goToPerson = goToPerson;
        vm.sendText = sendText;
        vm.sendEmail = sendEmail;

        function close() {
          $mdDialog.hide();
        }

        function viewAll(){
          $mdDialog.hide();
          $state.go('people.index');
        }

        function goToPerson(person){
          console.log('navigating to person');
        }

        function sendEmail(person){
          console.log('sent email');
        }

        function sendText(person){
          console.log('sent text');
        }
      }
    }
  }
})();
