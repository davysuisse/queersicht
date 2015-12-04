(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('ProgramModalController', programModalController)
    .directive('programModal', programModalDirective);

  /**
   * Controller that manages the program's modal
   */
  programModalController.$inject = [
    'movie', 'TranslationService', 'CommonService', 'QSConstants', 'RestCallService', 'StorageService'
  ];
  function programModalController(movie, TranslationService, CommonService, QSConstants, RestCallService, StorageService) {
    var vm = this;

    vm.movie              = movie;
    vm.getTitle           = getTitle;
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
          if (angular.equals(vm.movie.movieId, data.movieId)) {
            var program = {};

            // program's id => Favoris purpose
            program.id     = data.id;
            program.date   = TranslationService.getMoment(data.date, QSConstants.formatFullDate);
            program.cinema = data.cinema;

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

    function getTitle(movie) {
      return TranslationService.getTitle(movie);
    }
  }

  /**
   * Directive that shows a movie preview
   */
  programModalDirective.$inject = ['$templateCache', '$uibModal'];
  function programModalDirective($templateCache, $uibModal) {
    return {
      restrict : 'AE',
      scope    : {
        movie : '='
      },
      link     : link
    };

    function link(scope, element) {
      function openModal() {
        $uibModal.open({
          animation    : true,
          template     : $templateCache.get('program.html'),
          controller   : 'ProgramModalController',
          controllerAs : 'pmC',
          size         : 'sm',
          resolve      : {
            movie : function () {
              return scope.movie;
            }
          }
        });
      }

      element.bind('click', function () {
        openModal();
      });
    }
  }
})();