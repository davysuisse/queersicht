/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSConstants', qsConstants())
    .constant('QSCStates', qsCStates());

  function qsConstants() {
    return {
      idProperty     : 'id',
      broadCastTitle : 'menu-title',

      // LocalStorage Key
      localStorageKey : 'favoris',
      settingsKey     : 'settings',

      languageOptions : {
        'de' : 'LANG_GERMAN',
        'en' : 'LANG_ENGLISH',
        'fr' : 'LANG_FRENCH'
      }
    };
  }

  function qsCStates() {
    return {
      // States
      stateDetail   : 'detail',
      stateFavoris  : 'favoris',
      stateCinema   : 'cinema',
      stateMovie    : 'movie',
      stateDate     : 'date',
      stateSettings : 'settings'
    };
  }

})();