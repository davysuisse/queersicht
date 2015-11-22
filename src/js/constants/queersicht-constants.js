/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants').value('QSConstants', {
    idProperty      : 'id',
    localStorageKey : 'favoris',

    // Title
    broadCastTitle        : 'menu-title',
    favorisTitle          : 'Favoris',
    detailTitle           : 'Detail',
    programPerCinemaTitle : 'Program per cinema',
    programPerDateTitle   : 'Program per date',
    programPerMovieTitle  : 'Program per movie',

    // States
    stateDetail  : 'detail',
    stateFavoris : 'favoris',
    stateCinema  : 'cinema',
    stateMovie   : 'movie',
    stateDate    : 'date'
  });

})();