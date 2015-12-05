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
      urlService   : 'http://localhost:8081/api', //localhost 192.168.192.100

      // Property passed through states
      movieProperty     : 'movie',
      parameterProperty : 'parameters',
      callbackProperty  : 'callback',

      // Finding property localised in Settings
      saveStorageProperty : 'selectedSaveStorage',

      // LocalStorage Key
      favorisKey     : 'favoris',
      settingsKey    : 'settings',
      programService : {'key' : 'program', url : '/program'},
      newsService    : {'key' : 'news', url : '/news'},

      formatFullDate : 'ddd DD MMM YY',
      formatDate     : 'DD.MM.YY',
      formatTime     : 'HH:MM',

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