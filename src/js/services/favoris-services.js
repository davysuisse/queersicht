(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('FavorisService', favorisService);

  /**
   * Get all the favoris functions that are used in the application [It will be splitted in the future]
   */
  favorisService.$inject = ['$window', 'CommonService', 'QSConstants'];
  function favorisService($window, CommonService, QSConstants) {
    var service = {
      addFavoris    : addFavoris,
      deleteFavoris : deleteFavoris,
      isInFavoris   : isInFavoris,
      getFavoris    : getFavoris,
      setFavoris    : setFavoris
    };

    return service;

    /**
     * @parameter movieToAdd is the movie that we want to add in the localStorage
     */
    function addFavoris(movieToAdd) {
      console.log(QSConstants.localStorageKey);
      if (CommonService.isDefinedAndNotNull(movieToAdd) && movieToAdd.hasOwnProperty(QSConstants.idProperty)) {
        var favoris = getFavoris();
        if (favoris.indexOf(movieToAdd.id) < 0) {
          favoris.push(movieToAdd.id);
          $window.localStorage.setItem(QSConstants.localStorageKey, JSON.stringify(favoris));
        }
      }
    }

    /**
     * Delete a favoris from the localStorage
     * @parameter movieToDelete is the movie that we want to delete
     */
    function deleteFavoris(movieToDelete) {
      if (CommonService.isDefinedAndNotNull(movieToDelete) && movieToDelete.hasOwnProperty(QSConstants.idProperty)) {
        var favoris = getFavoris();
        var idx     = favoris.indexOf(movieToDelete.id);
        if (idx > -1) {
          favoris.splice(idx, 1);
          setFavoris(favoris);
        }
      }
    }

    /**
     * Test if the movie is already in the localStorage
     * @parameter movie
     * return {boolean}
     */
    function isInFavoris(movie) {
      if (CommonService.isDefinedAndNotNull(movie) && movie.hasOwnProperty(QSConstants.idProperty)) {
        var favoris = getFavoris();
        for (var i in favoris) {
          if (angular.equals(CommonService.stringify(favoris[i]), CommonService.stringify(movie.id))) {
            return true;
          }
        }
      }
      return false;
    }

    /**
     * Get the favoris from the localStorage
     * @return either a list a favoris or an empty array
     */
    function getFavoris() {
      return JSON.parse($window.localStorage.getItem(QSConstants.localStorageKey) || '[]');
    }

    /**
     * Set favoris in the localStorage
     */
    function setFavoris(favoris) {
      $window.localStorage.setItem(QSConstants.localStorageKey, JSON.stringify(favoris));
    }
  }
})();