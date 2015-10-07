(function() {
  'use strict';

  // Adapted from: http://stackoverflow.com/questions/12700145/how-to-format-a-telephone-number-in-angularjs

  angular.module('missionhub.filters')
    .filter('digits', function () {
      return function (string) {
        if (!string) {
          return '';
        }

        //strip everything except digits
        return string.toString().trim().replace(/\D/g, '');
      };
    });
})();
