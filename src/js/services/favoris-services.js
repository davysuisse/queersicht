(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('FavorisService', favorisService);

  /**
   * Get all the favoris functions that are used in the application [It will be splitted in the future]
   */
  favorisService.$inject = ['$window'];
  function favorisService($window) {
    var service = {
      addFavoris          : addFavoris,
      deleteFavoris       : deleteFavoris,
      isInFavoris         : isInFavoris,
      getFavoris          : getFavoris,
      setFavoris          : setFavoris
    };

    return service;

    /**
     * @parameter movieToAdd is the movie that we want to add in the localStorage
     */
    function addFavoris(movieToAdd) {
      var favoris = getFavoris();
      if (favoris.indexOf(movieToAdd.id) < 0) {
        favoris.push(movieToAdd.id);
        $window.localStorage.setItem("favoris", JSON.stringify(favoris));
      }
    }

    /**
     * Delete a favoris from the localStorage
     * @parameter movieToDelete is the movie that we want to delete
     */
    function deleteFavoris(movieToDelete) {
      var favoris = getFavoris();
      var idx     = favoris.indexOf(movieToDelete.id);
      if (idx > -1) {
        favoris.splice(idx, 1);
        setFavoris(favoris);
      }
    }

    /**
     * Test if the movie is already in the localStorage
     * @parameter movie
     * return {boolean}
     */
    function isInFavoris(movie) {
      var favoris = getFavoris();
      for (var i in favoris) {
        if (angular.equals('' + favoris[i], '' + movie.id)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Get the favoris from the localStorage
     */
    function getFavoris() {
      return JSON.parse($window.localStorage.getItem('favoris') || '[]');
    }

    /**
     * Set favoris in the localStorage
     */
    function setFavoris(favoris) {
      $window.localStorage.setItem("favoris", JSON.stringify(favoris));
    }
  }
})();