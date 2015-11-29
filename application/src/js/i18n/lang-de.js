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
      ERROR_500               : 'Fehler: Server ist zurzeit nicht verfügbar. Bitte versuchen sie es später noch einmal.',
      ERROR_TITLE             : 'Error',
      FAVORIS_TITLE           : 'Favoriten',
      LANG_GERMAN             : 'Deutsch',
      LANG_ENGLISH            : 'Englisch',
      LANG_FRENCH             : 'Französisch',
      LANGUAGE_SETTINGS_TITLE : 'Sprache',
      LOCAL_MOVIE_TITLE       : 'Programm speichern',
      MENU                    : 'Menu',
      NEWS_TITLE              : 'News',
      NO                      : 'Nein',
      PROG_PER_CINEMA_TITLE   : 'Programm nach Kino',
      PROG_PER_DATE_TITLE     : 'Programm nach Datum',
      PROG_PER_MOVIE_TITLE    : 'Programm nach movie',
      SETTINGS_TITLE          : 'Einstellungen',
      SPINNER_TITLE           : 'Laden Icon',
      YES                     : 'Ja'
    };
  }

})();