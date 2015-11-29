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

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_MOVIE_TITLE", vm.refresh);
      loadDatas(RestCallService.getProgram());
    }

    function refresh() {
      loadDatas(RestCallService.callProgram());
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.movies = response.data;
      }, function (error) {
        vm.movies = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateMovie);
      });
    }
  }
})();