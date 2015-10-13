(function() {
  'use strict';

  //based on https://github.com/hiebj/ng-focus-if but without the $timeout

  angular
    .module('missionhub.utils')
    .directive('fastFocusIf', fastFocusIf);

  /** @ngInject */
  function fastFocusIf() {
    var directive = {
      restrict: 'A',
      link: FastFocusIfLink
    };

    return directive;

    /** @ngInject */
    function FastFocusIfLink($scope, $element, $attrs) {
      var dom = $element[0];
      if ($attrs.focusIf) {
        $scope.$watch($attrs.focusIf, focus);
      } else {
        focus(true);
      }
      function focus(condition) {
        if (condition) {
          //$timeout(function() {
          dom.focus();
          //}, $scope.$eval($attrs.focusDelay) || 0);
        }
      }
    }
  }
})();
