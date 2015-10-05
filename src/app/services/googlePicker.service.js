/* global google:false, gapi:false */
(function() {
  'use strict';

  angular
    .module('missionhub.genericServices')
    .factory('googlePicker', googlePickerService);

  /** @ngInject */
  function googlePickerService($window, $q, authenticator, _){
    var factory = {
      openPicker: openPicker
    };

    $window.onApiLoad = onApiLoad;
    var pickerApiLoaded = false;
    var pickerPromise;
    return factory;

    function onApiLoad(){
      gapi.load('picker', {'callback': onPickerApiLoad});
    }

    function onPickerApiLoad(){
      pickerApiLoaded = true;
    }

    function openPicker(){
      pickerPromise = $q.defer();
      var oauthToken = authenticator.getGoogleAccessToken();
      if (pickerApiLoaded && oauthToken) {
        var picker = new google.picker.PickerBuilder()
          .setOAuthToken(oauthToken)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .addView(new google.picker.DocsView()
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
            .setOwnedByMe(true))
          .addView(new google.picker.DocsUploadView()
            .setIncludeFolders(true))
          .setCallback(pickerCallback)
          .build();
        picker.setVisible(true);
      }

      return pickerPromise.promise;
    }

    function pickerCallback(data) {
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        var files = data[google.picker.Response.DOCUMENTS];
        var urls = _.map(files, function(file){
          return file[google.picker.Document.URL];
        });
        pickerPromise.resolve(urls);
      }else if (data[google.picker.Response.ACTION] === google.picker.Action.LOADED) {
        pickerPromise.notify({message: 'Picker Loaded'});
      }else{
        pickerPromise.reject({error: 'Response from the Google Picker was not the picked action. Instead it was the ' + data[google.picker.Response.ACTION] + ' action.'});
      }
    }
  }

})();
