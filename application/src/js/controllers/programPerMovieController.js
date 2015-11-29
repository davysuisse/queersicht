(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerMovieController', programPerMovieController);

  /**
   * Manage the program per Movie
   */
  programPerMovieController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function programPerMovieController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_MOVIE_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService.key, QSConstants.programService.url));
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