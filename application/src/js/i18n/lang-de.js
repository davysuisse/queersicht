/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangDe', qsLangDe());

  function qsLangDe() {
    return {
      AUTHOR                   : 'Autor',
      CLOSE                   : 'Schliessen',
      COUNTRY                 : 'Land',
      DETAIL_TITLE            : 'Detail',
      DURATION                : 'Länge',
      ERROR_500               : 'Fehler: Server ist zurzeit nicht verfügbar. Bitte versuchen sie es später noch einmal.',
      ERROR_TITLE             : 'Error',
      FAVORIS_TITLE           : 'Favoriten',
      LANGUAGE                : 'Sprache',
      LANGUAGE_SETTINGS_TITLE : 'Sprache',
      LOCAL_MOVIE_TITLE       : 'Programm speichern',
      MENU                    : 'Menu',
      MORE_INFOS              : 'Infos',
      NEWS_TITLE              : 'News',
      NO                      : 'Nein',
      PROG_PER_CINEMA_TITLE   : 'Programm nach Kino',
      PROG_PER_DATE_TITLE     : 'Programm nach Datum',
      PROG_PER_MOVIE_TITLE    : 'Programm nach movie',
      PROGRAM                 : 'Programm',
      RESET                   : 'Zurücksetzung',
      SETTINGS_TITLE          : 'Einstellungen',
      SPINNER_TITLE           : 'Laden Icon',
      SUBTITLE                : 'Untertitel',
      YEAR                    : 'Jahr',
      YES                     : 'Ja',

      // Country
      CH : 'Schweiz',
      FR : 'Frankreich',
      GB : 'Grossbritannien',
      GE : 'Deutschland',
      SP : 'Spanien',

      // Language
      LANG_ENGLISH : 'Englisch',
      LANG_FRENCH  : 'Französisch',
      LANG_GERMAN  : 'Deutsch',
      LANG_RUSSIAN : 'Russisch',
      LANG_SPANISH : 'Spanisch'
    };
  }

})();