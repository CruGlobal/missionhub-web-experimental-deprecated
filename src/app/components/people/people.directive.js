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
    function PeopleController() {
      var vm = this;
      vm.people = generatePeople();
      vm.selected = [];
      vm.query = {
        filter: '',
        order: 'name',
        limit: 5,
        page: 1
      };

      activate();

      function activate() {

      }

      function generatePeople(){
        return [
          {fname: 'Joe', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe2', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe3', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe4', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe5', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe6', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe7', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe8', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe9', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe10', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe11', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe12', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
          {fname: 'Joe13', lname: 'Smith', gender: 'Male', status: 'Uncontacted'},
        ];
      }
    }
  }
})();
