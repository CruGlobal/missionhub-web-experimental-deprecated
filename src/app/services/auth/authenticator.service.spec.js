/* global localStorage:false */
(function () {
  'use strict';

  describe('service authenticator', function () {
    var $httpBackend, authenticator, $state, $window, localStorageService, user_details;

    beforeEach(module('missionhub.auth', 'stateMock'));
    beforeEach(function(){
      user_details = {
        token: '<jwt token>',
        first_name: 'Joe',
        last_name: 'Smith',
        person_id: '1234',
        profile_image_url: 'someUrl',
        recent_organization_id: '4321'
      };

      module(function($provide) {
        $provide.factory('$auth', function($http){
          return {
            authenticate: function (provider) {
              localStorage.setItem('mh.satellizer_token', '<jwt token>');
              return $http.post('/auth/' + provider);
            },
            getPayload: function(){
              return null;
            }
          };
        });
      });

      inject(function (_$httpBackend_, _authenticator_, _$state_, _localStorageService_, _$window_) {
        $httpBackend = _$httpBackend_;
        authenticator = _authenticator_;
        $state = _$state_;
        $window = _$window_;
        localStorageService = _localStorageService_;
      });
    });

    it('should be registered', function () {
      expect(authenticator).not.toEqual(null);
    });

    describe('authenticate function', function () {
      it('should login using facebook and return user data', function () {
        $state.expectTransitionTo('dashboard');
        $httpBackend.expectPOST('/auth/facebook').respond(200, user_details);
        authenticator.authenticate('facebook').then(function () {
          expect(localStorageService.get('firstName')).toEqual(user_details.first_name);
          expect(localStorageService.get('lastName')).toEqual(user_details.last_name);
          expect(localStorageService.get('personId')).toEqual(user_details.person_id);
          expect(localStorageService.get('profilePicture')).toEqual(user_details.profile_image_url);
          expect(localStorageService.get('currentOrganization')).toEqual(user_details.recent_organization_id);
          expect(localStorage.getItem('mh.satellizer_token')).toEqual(user_details.token);
        });
        $httpBackend.flush();
        $state.ensureAllTransitionsHappened();
      });
      it('should login using google and return user data', function () {
        $state.expectTransitionTo('dashboard');
        $httpBackend.expectPOST('/auth/google').respond(200, user_details);
        authenticator.authenticate('google').then(function () {
          expect(localStorageService.get('firstName')).toEqual(user_details.first_name);
          expect(localStorageService.get('lastName')).toEqual(user_details.last_name);
          expect(localStorageService.get('personId')).toEqual(user_details.person_id);
          expect(localStorageService.get('profilePicture')).toEqual(user_details.profile_image_url);
          expect(localStorageService.get('currentOrganization')).toEqual(user_details.recent_organization_id);
          expect(localStorage.getItem('mh.satellizer_token')).toEqual(user_details.token);
        });
        $httpBackend.flush();
        $state.ensureAllTransitionsHappened();
      });
    });

    describe('user details getters', function(){
      beforeEach(function(){
        authenticator.authenticate('facebook');
      });
      describe('getFirstName function', function(){
        it('should return the user\'s first name', function(){
          expect(authenticator.user.getFirstName()).toEqual(user_details.first_name);
        });
      });
      describe('getLastName function', function(){
        it('should return the user\'s last name', function(){
          expect(authenticator.user.getLastName()).toEqual(user_details.last_name);
        });
      });
      describe('getPersonId function', function(){
        it('should return the user\'s person id', function(){
          expect(authenticator.user.getPersonId()).toEqual(user_details.person_id);
        });
      });
      describe('getProfilePicture function', function(){
        it('should return the user\'s profile picture', function(){
          expect(authenticator.user.getProfilePicture()).toEqual(user_details.profile_image_url);
        });
      });
      describe('getCurrentOrg function', function(){
        it('should return the user\'s current org', function(){
          expect(authenticator.user.getCurrentOrg()).toEqual(user_details.recent_organization_id);
        });
      });
      describe('setCurrentOrg function', function(){
        it('should change the user\'s current org', function(){
          authenticator.user.setCurrentOrg('newOrg');
          expect(authenticator.user.getCurrentOrg()).toEqual('newOrg');
        });
      });
    });
  });
})();

