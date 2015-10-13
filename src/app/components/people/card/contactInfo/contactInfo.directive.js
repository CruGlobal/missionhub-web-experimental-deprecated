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
        types: '='
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
        vm.data.push({
          type: 'Home',
          address: vm.newInfo,
          primary: false,
          autoFocus: true
        });
        vm.newInfo = '';
      }

      function removeInfo(index){
        vm.data.splice(index, 1);
      }
    }
  }
})();
