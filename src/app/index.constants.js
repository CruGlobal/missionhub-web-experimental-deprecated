/* global window:false */
(function() {
  'use strict';

  angular
    .module('missionhub')
    .constant('moment', window.moment)
    .constant('_', window._);

})();
