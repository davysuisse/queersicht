/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSConstants', qsConstants());
  function qsConstants() {
    return {
      idProperty     : 'id',
      broadCastTitle : 'menu-title',
      urlService     : 'http://localhost:8081/api',

      // LocalStorage Key
      localStorageKey : 'favoris',
      settingsKey     : 'settings',

      defaultSettings : {
        'selectedLanguage' : 'de',
        'languageOptions'  : {
          'de' : 'LANG_GERMAN',
          'en' : 'LANG_ENGLISH',
          'fr' : 'LANG_FRENCH'
        }
      }
    };
  }

})();