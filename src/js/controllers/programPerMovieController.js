(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerMovieController', programPerMovieController);

  /**
   * Manage the program per Movie
   */
  programPerMovieController.$inject = ['CommonService', 'RestCallService'];
  function programPerMovieController(CommonService, RestCallService) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle("PROG_PER_MOVIE_TITLE");

      RestCallService.getProgramPerMovie().then(function (response) {
        vm.movies = response.data;
      }, function (error) {
        vm.movies = RestCallService.getMovies();
      });
    }
  }
})();