/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangEn', qsLangEn());

  function qsLangEn() {
    return {
      MENU : 'Menu',

      // Title
      FAVORIS_TITLE         : 'Favoris',
      DETAIL_TITLE          : 'Detail',
      PROG_PER_CINEMA_TITLE : 'Program per cinema',
      PROG_PER_DATE_TITLE   : 'Program per date',
      PROG_PER_MOVIE_TITLE  : 'Program per movie'
    };
  }

})();