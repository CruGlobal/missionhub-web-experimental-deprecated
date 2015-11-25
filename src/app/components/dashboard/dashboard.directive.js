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
    function DashboardController($mdDialog) {
      var vm = this;
      vm.showCardDetails = showCardDetails;

      activate();

      function activate() {

      }

      function showCardDetails(label){
        $mdDialog.show({
          templateUrl: 'app/components/dashboard/label.modal.html',
          controller: LabelModalController,
          controllerAs: 'labelModal',
          bindToController: true,
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          locals: {
            label: label
          }
        });

        /** @ngInject */
        function LabelModalController($mdDialog, $state) {
          var vm = this;
          vm.close = close;
          vm.viewAll = viewAll;

          function close() {
            $mdDialog.hide();
          }

          function viewAll(){
            $mdDialog.hide();
            $state.go('people.index')
          }
        }

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
          leaders: [
            'Rhonda Kelleher',
            'Garry Knutson',
            'Christine Vandyke'
          ],
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
          leaders: [
            'Robin Martin',
            'Micheal Poe'

          ],
          count: 8,
          location: 'South Dorm',
          surveys: ['Welcome Week Survey', 'Leadership Application'],
          locationImg: 'https://maps.googleapis.com/maps/api/staticmap?center=28.603546,-81.204751&zoom=18&size=720x200&key=AIzaSyBs8ow6oJrRQUJ2mSotRvDs_F51xeij17A'
        },
        {
          name: 'Upper Classmen',
          leaders: [
            'Natalie Spencer'
          ],
          count: 7,
          location: 'Natalie\'s Apt',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Greek',
          leaders: [
            'Jerry Tucker'
          ],
          count: 4,
          location: 'Greek Row',
          surveys: ['Welcome Week Survey', 'Leadership Application']
        },
        {
          name: 'Athletes in Action',
          leaders: [
            'Marion Crutcher'
          ],
          count: 30,
          location: 'Lecture Hall',
          surveys: []
        },
        {
          name: 'Outreach Team',
          leaders: [
            'Archie Rodriguez'
          ],
          count: 5,
          location: 'Quad',
          surveys: ['Perspectives Outreach']
        }
      ];

    }
  }
})();
