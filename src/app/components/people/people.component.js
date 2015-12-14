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
    vm.loadPeople = loadPeople;
    vm.selected = [];
    vm.query = {
      filter: '',
      order: 'last_name',
      limit: 25,
      page: 1
    };
    //TODO: load total users from server with loadPeople request
    vm.total = 100;
    vm.filters = [];

    activate();

    function activate() {
      loadPeople();
    }

    function loadPeople(){
      var order = vm.query.order;
      var limit = vm.query.limit;
      var offset = limit * (vm.query.page - 1);
      if(order.charAt(0) === '-'){
        order = order.slice(1) + ' DESC';
      }

      vm.peoplePromise = api.people.all(order, limit, offset).then(function(data){
        vm.people = data;
      });
    }
  }
})();
