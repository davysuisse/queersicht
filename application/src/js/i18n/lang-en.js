/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangEn', qsLangEn());

  function qsLangEn() {
    return {
      AUTHOR                   : 'Author',
      COUNTRY                 : 'Country',
      CLOSE                   : 'Close',
      DETAIL_TITLE            : 'Detail',
      DURATION                : 'Duration',
      ERROR_500               : 'Error: Server is temporarily not available. Please try it again later.',
      ERROR_TITLE             : 'Error',
      FAVORIS_TITLE           : 'Favoris',
      LANGUAGE                : 'Language',
      LANGUAGE_SETTINGS_TITLE : 'Language',
      LOCAL_MOVIE_TITLE       : 'Save program',
      MENU                    : 'Menu',
      MORE_INFOS              : 'Infos',
      NEWS_TITLE              : 'News',
      NO                      : 'No',
      PROG_PER_CINEMA_TITLE   : 'Program per cinema',
      PROG_PER_DATE_TITLE     : 'Program per date',
      PROG_PER_MOVIE_TITLE    : 'Program per movie',
      PROGRAM                 : 'Program',
      RESET                   : 'Reset',
      SETTINGS_TITLE          : 'Settings',
      SPINNER_TITLE           : 'Loading Icon',
      SUBTITLE                : 'Subtitle',
      YEAR                    : 'Year',
      YES                     : 'Yes',

      // Country
      CH : 'Switzerland',
      FR : 'France',
      GB : 'Great Britain',
      GE : 'Germany',
      SP : 'Spain',

      // Language
      LANG_ENGLISH : 'English',
      LANG_FRENCH  : 'French',
      LANG_GERMAN  : 'German',
      LANG_RUSSIAN : 'Russian',
      LANG_SPANISH : 'Spanish'
    };
  }

})();