(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerMovieController', programPerMovieController);

  /**
   * Manage the program per Movie
   */
  programPerMovieController.$inject = ['CommonService', 'RestCallService', 'QSConstants'];
  function programPerMovieController(CommonService, RestCallService, QSConstants) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle(QSConstants.programPerMovieTitle);

      RestCallService.getProgramPerMovie().then(function (response) {
        vm.movies = response.data;
      }, function (error) {
        vm.movies = RestCallService.getMovies();
      });
    }
  }
})();