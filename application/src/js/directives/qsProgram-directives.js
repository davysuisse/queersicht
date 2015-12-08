(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('ProgramController', programController)
    .directive('qsProgram', qsProgramDirective);

  programController.$inject = [
    'TranslationService', 'CommonService', 'QSConstants', 'RestCallService', 'StorageService'
  ];
  function programController(TranslationService, CommonService, QSConstants, RestCallService, StorageService) {
    var vm = this;

    vm.addOrDeleteFavoris = addOrDeleteFavoris;
    vm.isInFavoris        = isInFavoris;

    init();

    /**
     * @private
     * Load the program from local storage or from server
     */
    function init() {
      loadDatas(RestCallService.callService(QSConstants.programService));
    }

    /**
     * @private
     * A promise is passed in the function
     * Get all the program where the movie is and extract infos from it
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.programs = [];

        // Sorting movies by title and ignoring duplicating ones
        angular.forEach(response.data, function (data) {
          if (angular.equals(CommonService.stringify(vm.movie.movieId), CommonService.stringify(data.movieId))) {
            var program = {};

            // program's id => Favoris purpose
            program.id      = data.id;
            program.date    = TranslationService.getMoment(data.date, QSConstants.formatDateTime);
            program.dateRaw = data.date;
            program.cinema  = data.cinema;

            this.push(program);
          }
        }, vm.programs);

      }, function (error) {
        CommonService.errorMessage('ERROR_500');
      });
    }

    /**
     * @public
     * Delete or Add a favoris
     * @param movieId
     */
    function addOrDeleteFavoris(movieId) {
      if (!StorageService.isObjectInStorage(QSConstants.favorisKey, movieId)) {
        StorageService.addObjectInStorage(QSConstants.favorisKey, movieId);
      } else {
        StorageService.deleteObjectInStorage(QSConstants.favorisKey, movieId);
      }
    }

    /**
     * @public
     * Tell if a movie is already in the favoris
     * @param movieId
     * @returns {*}
     */
    function isInFavoris(movieId) {
      return StorageService.isObjectInStorage(QSConstants.favorisKey, movieId);
    }
  }

  /**
   * Directive that shows all the programs for a movie
   */
  qsProgramDirective.$inject = ['$templateCache'];
  function qsProgramDirective($templateCache) {
    return {
      restrict         : 'AE',
      template         : $templateCache.get('program.html'),
      controller       : 'ProgramController',
      controllerAs     : 'pmC',
      bindToController : true,
      scope            : {
        movie : '='
      }
    };
  }
})();