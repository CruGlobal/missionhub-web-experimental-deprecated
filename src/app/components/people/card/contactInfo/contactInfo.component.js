(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .component('contactInfo', {
      controller: ContactInfoController,
      templateUrl: 'app/components/people/card/contactInfo/contactInfo.html',
      bindings: {
        title: '@',
        label: '@',
        data: '='
      }
    });

  /** @ngInject */
  function ContactInfoController() {
    var vm = this;
    vm.addInfo = addInfo;
    vm.removeInfo = removeInfo;

    activate();

    function activate() {

    }

    function addInfo(){
      var newInfoObj = {
        autoFocus: true
      };
      switch (vm.label){
        case 'Email':
          newInfoObj.email = vm.newInfo;
          break;
        case 'Phone Number':
          newInfoObj.number = vm.newInfo;
          break;
        case 'Address':
          newInfoObj.address1 = vm.newInfo;
          break;
      }
      vm.data.push(newInfoObj);
      vm.newInfo = '';
    }

    function removeInfo(index){
      vm.data.splice(index, 1);
    }
  }
})();
