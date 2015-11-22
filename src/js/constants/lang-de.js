/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangDe', qsLangDe());

  function qsLangDe() {
    return {
      MENU : 'Menu',

      // Title
      FAVORIS_TITLE         : 'Favoriten',
      DETAIL_TITLE          : 'Detail',
      PROG_PER_CINEMA_TITLE : 'Programm nach Kino',
      PROG_PER_DATE_TITLE   : 'Programm nach Datum',
      PROG_PER_MOVIE_TITLE  : 'Programm nach movie'
    };
  }

})();