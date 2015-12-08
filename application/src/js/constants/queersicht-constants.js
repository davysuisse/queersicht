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
      urlService : 'http://192.168.192.100:8081/api', //localhost 192.168.192.100
      maxTimeout : 5000,

      defaultImage : 'images/default/queersicht.png',
      errorImage   : 'images/error/notfound.jpg',

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
      imageService   : {'key' : null, url : '/image?urlImg='},

      formatFullDate : 'ddd DD MMM YY',
      formatDateTime : 'DD.MM.YY HH:MM',
      formatNormDate : 'YY.MM.DD',
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