/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSCStates', qsCStates());

  function qsCStates() {
    return {
      // States
      stateCinema   : 'cinema',
      stateDate     : 'date',
      stateDetail   : 'detail',
      stateFavoris  : 'favoris',
      stateMovie    : 'movie',
      stateSettings : 'settings'
    };
  }

})();