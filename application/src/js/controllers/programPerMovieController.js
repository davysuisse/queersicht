(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerMovieController', programPerMovieController);

  /**
   * Manage the program per Movie
   */
  programPerMovieController.$inject = ['CommonService', 'RestCallService', 'QSCStates'];
  function programPerMovieController(CommonService, RestCallService, QSCStates) {
    var vm = this;

    vm.init = init;

    init();

    function init() {
      CommonService.initTitle("PROG_PER_MOVIE_TITLE", vm.init);

      RestCallService.getProgram().then(function (response) {
        vm.movies = response.data;
      }, function (error) {
        vm.movies = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateMovie);
      });
    }
  }
})();