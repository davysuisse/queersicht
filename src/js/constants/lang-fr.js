/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangFr', qsLangFr());

  function qsLangFr() {
    return {
      MENU : 'Menu',

      // Title
      FAVORIS_TITLE         : 'Favoris',
      DETAIL_TITLE          : 'Détail',
      PROG_PER_CINEMA_TITLE : 'Programme par cinéma',
      PROG_PER_DATE_TITLE   : 'Programme par date',
      PROG_PER_MOVIE_TITLE  : 'Programme par film'
    };
  }

})();