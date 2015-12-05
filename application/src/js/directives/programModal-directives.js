(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('ProgramModalController', programModalController)
    .directive('programModal', programModalDirective);

  /**
   * Controller that manages the program's modal
   */
  programModalController.$inject = [
    'TranslationService', 'CommonService', 'QSConstants', 'RestCallService', 'StorageService'
  ];
  function programModalController(TranslationService, CommonService, QSConstants, RestCallService, StorageService) {
    var vm = this;

    vm.addOrDeleteFavoris = addOrDeleteFavoris;
    vm.isInFavoris        = isInFavoris;

    init();

    function init() {
      loadDatas(RestCallService.callService(QSConstants.programService));
    }

    /**
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
            program.date    = TranslationService.getMoment(data.date, QSConstants.formatFullDate);
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

    function isInFavoris(movieId) {
      return StorageService.isObjectInStorage(QSConstants.favorisKey, movieId);
    }
  }

  /**
   * Directive that shows a movie preview
   */
  programModalDirective.$inject = ['$templateCache'];
  function programModalDirective($templateCache) {
    return {
      restrict         : 'AE',
      template         : $templateCache.get('program.html'),
      controller       : 'ProgramModalController',
      controllerAs     : 'pmC',
      bindToController : true,
      scope            : {
        movie : '='
      }
    };
  }
})();