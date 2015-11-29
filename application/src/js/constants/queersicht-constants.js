/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSConstants', qsConstants());
  function qsConstants() {
    return {
      // Server url
      urlService : 'http://localhost:8081/api',

      // Property passed through states
      idProperty        : 'id',
      parameterProperty : 'parameters',
      callbackProperty  : 'callback',

      // Broadcast variables
      broadCastTitle : 'menu-title',
      errorMessage   : 'errorMessage',
      loadingSpinner : 'loadingSpinner',

      // Finding property localised in Settings
      saveStorageProperty : 'selectedSaveStorage',

      // LocalStorage Key
      favorisKey  : 'favoris',
      settingsKey : 'settings',
      programKey  : 'program',

      // Default settings
      defaultSettings : {
        'selectedSpinner'     : 'fa-spinner',
        'selectedLanguage'    : 'de',
        'selectedSaveStorage' : false,
        'languageOptions'     : {
          'LANG_GERMAN'  : 'de',
          'LANG_ENGLISH' : 'en',
          'LANG_FRENCH'  : 'fr'
        },
        'spinnerOptions'      : {
          'spinner' : 'fa-spinner',
          'refresh' : 'fa-refresh',
          'cog'     : 'fa-cog'
        },
        'yesOrNoOptions'      : {
          'YES' : true,
          'NO'  : false
        }
      }
    };
  }

})();