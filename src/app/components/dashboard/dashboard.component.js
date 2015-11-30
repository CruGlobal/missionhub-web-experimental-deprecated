(function() {
  'use strict';

  angular
    .module('missionhub.dashboard')
    .component('dashboard', {
      controller: DashboardController,
      templateUrl: 'app/components/dashboard/dashboard.html'
    });

  /** @ngInject */
  function DashboardController() {
    var vm = this;

    activate();

    function activate() {

    }

    vm.labels = [
      {
        name: 'Involved',
        count: 55,
        location: 'Student Center',
        surveys: ['Welcome Week Survey', 'Leadership Application'],
        people: [
          {
            name: 'David Donovan',
            phone: '507-495-1916',
            email: 'DavidADonovan@jourrapide.com',
            picture: 'https://graph.facebook.com/v2.5/704802237/picture'
          },
          {
            name: 'Andrew Owens',
            phone: '530-879-3383',
            email: 'AndrewJOwens@dayrep.com'
          },
          {
            name: 'Lisa Shore',
            phone: '216-518-9651',
            email: 'LisaAShore@rhyta.com'
          },
          {
            name: 'Sheila Jackson',
            phone: '301-793-3261',
            email: 'SheilaLJackson@armyspy.com'
          },
          {
            name: 'Geraldine Haynes',
            phone: '803-320-4277',
            email: 'GeraldineRHaynes@dayrep.com'
          },
          {
            name: 'John N. Ferry',
            phone: '989-722-1676',
            email: 'JohnNFerry@teleworm.us'
          }
        ]
      },
      {
        name: 'Discipleship',
        involvement: 'member',
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
        involvement: 'leader',
        leaders: [
          'Robin Martin',
          'Micheal Poe'

        ],
        count: 8,
        location: 'South Dorm',
        surveys: ['Welcome Week Survey', 'Leadership Application'],
        locationImg: 'https://maps.googleapis.com/maps/api/staticmap?center=28.603546,-81.204751&zoom=18&size=720x200&key=AIzaSyBs8ow6oJrRQUJ2mSotRvDs_F51xeij17A',
        people: [
          {
            name: 'David Donovan',
            phone: '507-495-1916',
            email: 'DavidADonovan@jourrapide.com',
            picture: 'https://graph.facebook.com/v2.5/704802237/picture'
          },
          {
            name: 'Andrew Owens',
            phone: '530-879-3383',
            email: 'AndrewJOwens@dayrep.com'
          },
          {
            name: 'Lisa Shore',
            phone: '216-518-9651',
            email: 'LisaAShore@rhyta.com'
          },
          {
            name: 'Sheila Jackson',
            phone: '301-793-3261',
            email: 'SheilaLJackson@armyspy.com'
          },
          {
            name: 'Geraldine Haynes',
            phone: '803-320-4277',
            email: 'GeraldineRHaynes@dayrep.com'
          },
          {
            name: 'John N. Ferry',
            phone: '989-722-1676',
            email: 'JohnNFerry@teleworm.us'
          }
        ]
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
        involvement: 'member',
        leaders: [
          'Archie Rodriguez'
        ],
        count: 5,
        location: 'Quad',
        surveys: ['Perspectives Outreach']
      }
    ];
  }
})();
