(function() {
  'use strict';

  angular
    .module('missionhub.dashboard')
    .directive('dashboard', dashboard);

  /** @ngInject */
  function dashboard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: DashboardController,
      controllerAs: 'dashboard',
      bindToController: true,
      scope: {

      }
    };

    return directive;

    /** @ngInject */
    function DashboardController() {
      var vm = this;
      vm.showCardDetails = showCardDetails;

      activate();

      function activate() {

      }

      function showCardDetails(){
      }

      vm.labels = [
        {
          name: 'Involved',
          count: 55,
          location: 'Student Center',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Discipleship',
          leader: 'Rhonda Kelleher',
          count: 15,
          location: 'On Campus'
        },
        {
          name: 'Leader',
          count: 10,
          location: 'Church Office',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Freshmen Bible Study',
          leader: 'Robin Martin',
          count: 8,
          location: 'South Dorm',
          surveys: ['Welcome Week Survey', 'Leadership Application'],
          locationImg: 'https://maps.googleapis.com/maps/api/staticmap?center=28.603546,-81.204751&zoom=18&size=720x200&key=AIzaSyBs8ow6oJrRQUJ2mSotRvDs_F51xeij17A'
        },
        {
          name: 'Upper Classmen',
          leader: 'Natalie Spencer',
          count: 7,
          location: 'Natalie\'s Apt',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Greek',
          leader: 'Jerry Tucker',
          count: 4,
          location: 'Greek Row',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Athletes in Action',
          leader: 'Marion Crutcher',
          count: 30,
          location: 'Lecture Hall',
          surveys: []
        },
        {
          name: 'Outreach Team',
          leader: 'Archie Rodriguez',
          count: 5,
          location: 'Quad',
          surveys: ['Perspectives Outreach']
        }
      ];

    }
  }
})();
