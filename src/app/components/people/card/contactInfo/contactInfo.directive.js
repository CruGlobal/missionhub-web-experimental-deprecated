(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .directive('contactInfo', contactInfo);

  /** @ngInject */
  function contactInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/card/contactInfo/contactInfo.html',
      controller: ContactInfoController,
      controllerAs: 'contactInfo',
      bindToController: true,
      scope: {
        title: '@',
        label: '@',
        data: '=',
      }
    };

    return directive;

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
  }
})();
