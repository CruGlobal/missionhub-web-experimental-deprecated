(function () {
  'use strict';

  describe('service authenticator', function () {
    var self = {};
    beforeEach(module('missionhub.auth', 'stateMock'));

    beforeEach(function(){
      module(function($provide) {
        $provide.factory('$auth', function($http, $window){
          return {
            authenticate: function (provider) {
              $window.localStorage.setItem('mh.satellizer_token', '<jwt token>');
              return $http.post('/auth/' + provider);
            },
            getPayload: function(){
              return null;
            },
            logout: function(){
              $window.localStorage.removeItem('mh.satellizer_token');
            }
          };
        });
      });

      inject(function($window, $http, $httpBackend, $auth, authenticator, $state, localStorageService) {
        self.$window = $window;
        self.$http = $http;
        self.$httpBackend = $httpBackend;
        self.$auth = $auth;
        self.authenticator = authenticator;
        self.$state = $state;
        self.localStorageService = localStorageService;
        self.user_details = {
          token: '<jwt token>',
          first_name: 'Joe',
          last_name: 'Smith',
          person_id: '1234',
          profile_image_url: 'someUrl',
          recent_organization_id: '4321'
        };
      });
    });

    it('should be registered', function () {
      expect(self.authenticator).toBeDefined();
    });

    describe('authenticate function', function () {
      it('should login using facebook and return user data', function () {
        self.$state.expectTransitionTo('dashboard');
        self.$httpBackend.expectPOST('/auth/facebook').respond(200, self.user_details);
        self.authenticator.authenticate('facebook').then(function () {
          expect(self.localStorageService.get('firstName')).toEqual(self.user_details.first_name);
          expect(self.localStorageService.get('lastName')).toEqual(self.user_details.last_name);
          expect(self.localStorageService.get('personId')).toEqual(self.user_details.person_id);
          expect(self.localStorageService.get('profilePicture')).toEqual(self.user_details.profile_image_url);
          expect(self.localStorageService.get('currentOrganization')).toEqual(self.user_details.recent_organization_id);
          expect(self.$window.localStorage.getItem('mh.satellizer_token')).toEqual(self.user_details.token);
        });
        self.$httpBackend.flush();
        self.$state.ensureAllTransitionsHappened();
      });
      it('should login using google and return user data', function () {
        self.$state.expectTransitionTo('dashboard');
        self.$httpBackend.expectPOST('/auth/google').respond(200, self.user_details);
        self.authenticator.authenticate('google').then(function () {
          expect(self.localStorageService.get('firstName')).toEqual(self.user_details.first_name);
          expect(self.localStorageService.get('lastName')).toEqual(self.user_details.last_name);
          expect(self.localStorageService.get('personId')).toEqual(self.user_details.person_id);
          expect(self.localStorageService.get('profilePicture')).toEqual(self.user_details.profile_image_url);
          expect(self.localStorageService.get('currentOrganization')).toEqual(self.user_details.recent_organization_id);
          expect(self.$window.localStorage.getItem('mh.satellizer_token')).toEqual(self.user_details.token);
        });
        self.$httpBackend.flush();
        self.$state.ensureAllTransitionsHappened();
      });
      it('should handle authentication failure', function () {
        var response = null;
        self.$httpBackend.expectPOST('/auth/google').respond(400, {error: 'some error message'});
        self.authenticator.authenticate('google').then(function() {
          response = 'success';
        }, function(errorResponse){
          response = errorResponse;
        });
        self.$httpBackend.flush();
        expect(response).toEqual({error: 'some error message'});
      });
    });

    function callAuthProcess(){
      self.$state.expectTransitionTo('dashboard');
      self.$httpBackend.whenPOST('/auth/google').respond(200, self.user_details);
      self.authenticator.authenticate('google');
      self.$httpBackend.flush();
    }

    describe('logout function', function(){
      beforeEach(function(){
        callAuthProcess();
      });
      it('should delete all localStorage keys and transition to welcome state', function(){
        self.$state.expectTransitionTo('welcome');
        expect(self.$window.localStorage.getItem('mh.satellizer_token')).toEqual('<jwt token>');
        self.authenticator.logout();
        expect(self.localStorageService.keys()).toEqual([]);
        expect(self.$window.localStorage.getItem('mh.satellizer_token')).toEqual(null);
        self.$state.ensureAllTransitionsHappened();
      });
    });
  });
})();

