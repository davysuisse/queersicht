(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerMovieController', programPerMovieController);

  programPerMovieController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function programPerMovieController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    /**
     * @private
     * Initialize the page by loading the program
     */
    function init() {
      CommonService.init("PROG_PER_MOVIE_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService));
    }

    /**
     * @public
     * This function will be used when an error occurs
     */
    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService));
    }

    /**
     * @private
     * A promise is passed in the function
     * The response is a list of movies that will be sorted by title
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.movies = [];

        // Sorting movies by title and ignoring duplicated ones
        angular.forEach(response.data, function (program) {
          if (!isInList(program, this)) {
            this.push(program);
          }
        }, vm.movies);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateMovie);
      });
    }

    /**
     * @private
     * Tell if a movie's title is already in the list
     * @param program
     * @param list
     * @returns {boolean}
     */
    function isInList(program, list) {
      for (var i = 0; i < list.length; i++) {
        if (angular.equals(program.title, list[i].title)) {
          return true;
        }
      }
      return false;
    }
  }
})();