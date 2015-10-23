(function() {
  'use strict';

  angular.module('missionhub.filters')
    .filter('capitalize', function () {
      return function(input) {
        if (input != null){
          return input.charAt(0).toUpperCase() + input.slice(1);
        }else{
          return input;
        }
      }
    });
})();
