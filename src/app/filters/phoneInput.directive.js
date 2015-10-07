(function() {
  'use strict';

  angular
    .module('missionhub.filters')
    .directive('phoneInput', phoneInput);

  /** @ngInject */
  function phoneInput($filter) {
    var directive = {
      restrict: 'A',
      link: PhoneInputLink,
      require: 'ngModel'
    };

    return directive;

    /** @ngInject */
    function PhoneInputLink(scope, element, attrs, ngModelController) {
      ngModelController.$formatters.push($filter('phone'));
      ngModelController.$parsers.push($filter('digits'));
    }
  }
})();
