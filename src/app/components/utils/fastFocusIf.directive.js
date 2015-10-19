(function() {
  'use strict';

  //based on https://github.com/hiebj/ng-focus-if

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
      if ($attrs.fastFocusIf) {
        dom.focus();
      }
    }
  }
})();
