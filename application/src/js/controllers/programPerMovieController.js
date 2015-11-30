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
        vm.movies = [];

        // Sorting movies by title and ignoring duplicating ones
        angular.forEach(response.data, function (data) {
          if (!isInList(data, this)) {
            this.push(data);
          }
        }, vm.movies);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateMovie);
      });
    }

    function isInList(data, list) {
      for (var i = 0; i < list.length; i++) {
        if (angular.equals(data.title, list[i].title)) {
          return true;
        }
      }
      return false;
    }
  }
})();