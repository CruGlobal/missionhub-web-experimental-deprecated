(function() {
  'use strict';

  angular
    .module('missionhub')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider, $mdIconProvider) {
    //Generated from http://mcg.mbitson.com/
    $mdThemingProvider.definePalette('cruGold', {"50":"#fef8e9","100":"#fde9be","200":"#fcdb92","300":"#fbce6e","400":"#fac249","500":"#f9b625","600":"#da9f20","700":"#bb891c","800":"#9c7217","900":"#7d5b13","A100":"#fde9be","A200":"#fcdb92","A400":"#fac249","A700":"#bb891c"});
    $mdThemingProvider.definePalette('cruOrange', {"50":"#fcf2e8","100":"#f5d8bb","200":"#eebe8d","300":"#e8a867","400":"#e39341","500":"#dd7d1b","600":"#c16d18","700":"#a65e14","800":"#8a4e11","900":"#6f3f0e","A100":"#f5d8bb","A200":"#eebe8d","A400":"#e39341","A700":"#a65e14"});
    $mdThemingProvider.definePalette('cruDeepBlue', {"50":"#e6f1f5","100":"#b3d5e0","200":"#80b9cc","300":"#55a2ba","400":"#2a8aa9","500":"#007398","600":"#006585","700":"#005672","800":"#00485f","900":"#003a4c","A100":"#b3d5e0","A200":"#80b9cc","A400":"#2a8aa9","A700":"#005672", 'contrastDefaultColor': 'light'});
    $mdThemingProvider.definePalette('cruBrightBlue', {"50":"#ecf7fa","100":"#c5e8ef","200":"#9fd8e4","300":"#7ecbda","400":"#5ebed1","500":"#3eb1c8","600":"#369baf","700":"#2f8596","800":"#276f7d","900":"#1f5964","A100":"#c5e8ef","A200":"#9fd8e4","A400":"#5ebed1","A700":"#2f8596"});
    $mdThemingProvider.definePalette('cruGray', {"50":"#f0efef","100":"#d1cfd0","200":"#b3b0b1","300":"#999596","400":"#7f7a7c","500":"#666062","600":"#595456","700":"#4d484a","800":"#403c3d","900":"#333031","A100":"#d1cfd0","A200":"#b3b0b1","A400":"#7f7a7c","A700":"#4d484a", 'contrastDefaultColor': 'light'});

    $mdThemingProvider.theme('cruGold')
      .primaryPalette('cruGold')
      .accentPalette('cruDeepBlue');

    $mdThemingProvider.theme('cruOrange')
      .primaryPalette('cruOrange')
      .accentPalette('cruGold');

    $mdThemingProvider.theme('cruDeepBlue')
      .primaryPalette('cruDeepBlue')
      .accentPalette('cruBrightBlue');

    $mdThemingProvider.theme('cruBrightBlue')
      .primaryPalette('cruBrightBlue')
      .accentPalette('cruDeepBlue');

    $mdThemingProvider.theme('cruGray')
      .primaryPalette('cruGray')
      .accentPalette('cruGold');

    $mdThemingProvider.setDefaultTheme('cruGold');

    $mdIconProvider
      .icon('google', 'assets/icons/google-g-logo-2015.svg');
  }

})();
