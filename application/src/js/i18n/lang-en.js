/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangEn', qsLangEn());

  function qsLangEn() {
    return {
      DETAIL_TITLE            : 'Detail',
      ERROR_500               : 'Error: Server is temporarily not available. Please try it again later.',
      ERROR_TITLE             : 'Error',
      FAVORIS_TITLE           : 'Favoris',
      LANG_GERMAN             : 'German',
      LANG_ENGLISH            : 'English',
      LANG_FRENCH             : 'French',
      LANGUAGE_SETTINGS_TITLE : 'Language',
      MENU                    : 'Menu',
      NEWS_TITLE              : 'News',
      PROG_PER_CINEMA_TITLE   : 'Program per cinema',
      PROG_PER_DATE_TITLE     : 'Program per date',
      PROG_PER_MOVIE_TITLE    : 'Program per movie',
      SETTINGS_TITLE          : 'Settings',
      SPINNER_TITLE           : 'Loading Icon'
    };
  }

})();