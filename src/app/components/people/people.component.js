(function() {
  'use strict';

  angular
    .module('missionhub.people')
    .component('people', {
      controller: PeopleController,
      templateUrl: 'app/components/people/people.html'
    });

  /** @ngInject */
  function PeopleController(api) {
    var vm = this;
    vm.onOrderChange = onOrderChange;
    vm.selected = [];
    vm.query = {
      filter: '',
      order: 'last_name',
      limit: 5,
      page: 1
    };
    vm.filters = [];

    activate();

    function activate() {
      loadPeople(vm.query.order);
    }

    function loadPeople(order){
      if(order.charAt(0) === '-'){
        order = order.slice(1) + ' DESC';
      }

      vm.peoplePromise = api.people.all(order).then(function(data){
        vm.people = data;
      });
    }

    function onOrderChange(){
      loadPeople(vm.query.order);
    }
  }
})();
