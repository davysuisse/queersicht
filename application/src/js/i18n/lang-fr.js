/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangFr', qsLangFr());

  function qsLangFr() {
    return {
      ERROR_500               : 'Stefane est un ...',
      DETAIL_TITLE            : 'Détail',
      FAVORIS_TITLE           : 'Favoris',
      LANG_GERMAN             : 'Allemand',
      LANG_ENGLISH            : 'Anglais',
      LANG_FRENCH             : 'Français',
      LANGUAGE_SETTINGS_TITLE : 'Langue',
      MENU                    : 'Menu',
      NEWS_TITLE              : 'News',
      PROG_PER_CINEMA_TITLE   : 'Programme par cinéma',
      PROG_PER_DATE_TITLE     : 'Programme par date',
      PROG_PER_MOVIE_TITLE    : 'Programme par film',
      SETTINGS_TITLE          : 'Configurations'
    };
  }

})();