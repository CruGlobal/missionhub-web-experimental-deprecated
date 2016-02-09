(function() {
  'use strict';

  angular
    .module('missionhub.people')
    .component('people', {
      controller: PeopleController,
      controllerAs: 'people',
      templateUrl: 'app/components/people/people.html'
    });

  /** @ngInject */
  function PeopleController($scope, api, $log) {
    var vm = this;
    vm.loadPeople = loadPeople;
    vm.selected = [];
    vm.query = {
      filter: '',
      order: 'lastName'
    };
    //TODO: load total users from server with loadPeople request
    vm.total = 100;
    vm.filters = [];

    activate();

    function activate() {
      loadPeople();
    }

    function loadPeople(){
      var query = null;
      var order = {
        property: vm.query.order,
        descending: false
      };
      if(order.property.charAt(0) === '-'){
        order.property = vm.query.order.slice(1);
        order.descending = true;
      }

      api.people.all(query, order).safeApply($scope,
        function(data){
          vm.people = data;
        })
        .subscribe(
          function(data){
            console.log('receiving vm.people subscription', vm.people);
          },
          function(err){ $log.error('Observable error in people component:', err)},
          function(){ console.log('people component observable completed')}
        );
    }
  }
})();
