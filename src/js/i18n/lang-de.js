/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangDe', qsLangDe());

  function qsLangDe() {
    return {
      DETAIL_TITLE            : 'Detail',
      FAVORIS_TITLE           : 'Favoriten',
      LANG_GERMAN             : 'Deutsch',
      LANG_ENGLISH            : 'Englisch',
      LANG_FRENCH             : 'Französisch',
      LANGUAGE_SETTINGS_TITLE : 'Sprache',
      MENU                    : 'Menu',
      PROG_PER_CINEMA_TITLE   : 'Programm nach Kino',
      PROG_PER_DATE_TITLE     : 'Programm nach Datum',
      PROG_PER_MOVIE_TITLE    : 'Programm nach movie',
      SETTINGS_TITLE          : 'Einstellungen'
    };
  }

})();