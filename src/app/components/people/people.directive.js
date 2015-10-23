(function() {
  'use strict';

  angular
    .module('missionhub.people')
    .directive('people', people);

  /** @ngInject */
  function people() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/people.html',
      controller: PeopleController,
      controllerAs: 'people',
      scope: {

      },
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PeopleController($http) {
      var vm = this;
      vm.onOrderChange = onOrderChange;
      vm.selected = [];
      vm.query = {
        filter: '',
        order: 'last_name',
        limit: 5,
        page: 1
      };

      activate();

      function activate() {
        getPeople(vm.query.order);
      }

      function getPeople(order){
        if(order.charAt(0) == '-'){
          order = order.slice(1) + ' DESC';
        }
        vm.peoplePromise = $http.get('http://localhost:3000/apis/v4/people?organization_id=8258&order=' + order).then(function(data){
          vm.people = data.data.people;
        });
      }

      function onOrderChange(){
        getPeople(vm.query.order);
      }
    }
  }
})();
