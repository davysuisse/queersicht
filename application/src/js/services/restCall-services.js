(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('RestCallService', restCallService);

  /**
   * Get all the REST calls for the application
   */
  restCallService.$inject = ['$http', 'QSConstants'];
  function restCallService($http, QSConstants) {
    var service = {
      getDetail           : getDetail,
      getProgramPerMovie  : getProgramPerMovie,
      getProgramPerCinema : getProgramPerCinema,
      getProgramPerDate   : getProgramPerDate,

      // MOCKS
      getDetailMock       : getDetailMock,
      getMovies           : getMovies,
      getCinemas          : getCinemas,
      getDates            : getDates
    };

    return service;

    /**
     * Get a detail of a movie from its id
     * @param id
     * @return a movie
     */
    function getDetail(id) {
      return $http.get(getUrl('/detail/' + id));
    }

    /**
     * Get a list of movies sorted by movies
     * @returns list []
     */
    function getProgramPerMovie() {
      return $http.get(getUrl('/programs/movies'));
    }

    /**
     * Get a list of movies sorted by cinemas
     * @returns list []
     */
    function getProgramPerCinema() {
      return $http.get(getUrl('/programs/cinemas'));
    }

    /**
     * Get a list of movies sorted by dates
     * @returns list []
     */
    function getProgramPerDate() {
      return $http.get(getUrl('/programs/dates'));
    }

    function getUrl(partialPath){
      return QSConstants.urlService + partialPath;
    }
  }
})();