(function() {
  'use strict';

  angular
    .module('missionhub.people.card')
    .directive('personCard', personCard);

  /** @ngInject */
  function personCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/people/card/card.html',
      controller: PersonCardController,
      controllerAs: 'card',
      bindToController: true,
      scope: {

      }
    };

    return directive;

    /** @ngInject */
    function PersonCardController($stateParams, _, moment) {
      var vm = this;
      vm.personId = $stateParams.personId;
      vm.showInteractions = true;
      vm.showSurveys = true;
      vm.showMessages = true;
      vm.person = getPerson();
      vm.labelSearch = labelSearch;

      activate();

      function activate() {

      }

      function labelSearch(query){
        if(query === '' || query === null){
          return allLabels;
        }
        query = query.toLowerCase();
        return _.filter(allLabels, function(label){
          return fuzzyMatch(label.toLowerCase(), query);
        });
      }

      function fuzzyMatch(str,pattern){
        pattern = pattern.split("").reduce(function(a,b){ return a+'[^'+b+']*'+b; });
        return (new RegExp(pattern)).test(str);
      }

      var allLabels = [
        'Involved',
        'Engaged Disciple',
        'Leader',
        'Some Bible Study',
        'Worship Leader'
      ];

      function getPerson(){
        return {
          fname: 'Scotty',
          lname: 'Wagggoner',
          role: 'Intern',
          enrollment: 'Masters/Doctorate',
          gender:'Male',
          emails: [
            {
              type: 'Home',
              address: 'my.home.email@gmail.com',
              primary: true
            },
            {
              type: 'Work',
              address: 'my.work.email@cru.org',
              primary: false
            }
          ],
          phones: [
            {
              type: 'Home',
              number: '1234567890',
              primary: true
            },
            {
              type: 'Mobile',
              number: '0987654321',
              primary: false
            }
          ],
          addresses: [
            {
              type: 'Home',
              address: '123 Something St',
              address2: 'Apt 234',
              city: "My City",
              state: 'CA',
              zip: 12345,
              primary: true
            }
          ],
          labels: [
            'Leader',
            'Involved',
            'Some Bible Study'
          ],
          events: [
            {
              type: 'Spiritual Conversation',
              comment: 'Had a very long conversation about something important.',
              initiator: 'Anonymous Cru Staff',
              creator: 'Some Other Cru Staff',
              time:  moment().subtract(20, 'minutes'),
              org: 'Cru Hackathon'
            },
            {
              type: 'Email',
              emailBody: '<p>Hey Scotty,</p>\
              <p>Please come to our event.</p>\
              <p>Thanks!</p>',
              initiator: 'Anonymous Cru Staff',
              time:  moment().subtract(1, 'hour'),
              org: 'Cru Hackathon'
            },
            {
              type: 'Completed Survey',
              answers: [],
              initiator: 'Anonymous Cru Staff',
              time:  moment().subtract(2, 'days'),
              org: 'Cru Hackathon',
              survey: [
                {
                  question: 'Dorm Area',
                  answer: 'Tercero'
                },
                {
                  question: 'Year',
                  answer: 'Senior'
                },
                {
                  question: 'Spiritual Background',
                  answer: 'Christian'
                }
              ]
            }
          ]
        }
      }
    }
  }
})();
