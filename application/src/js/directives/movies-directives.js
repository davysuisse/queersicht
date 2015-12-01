(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  /**
   * Controller that
   */
  moviesController.$inject = ['StorageService', 'QSConstants', 'TranslationService'];
  function moviesController(StorageService, QSConstants, TranslationService) {
    var vm = this;

    console.log(vm.predicate);
    vm.translationService = TranslationService;

    // Get functions' references from FavorisService
    vm.keyFavoris    = QSConstants.favorisKey;
    vm.addFavoris    = StorageService.addObjectInStorage;
    vm.isInFavoris   = StorageService.isObjectInStorage;
    vm.deleteFavoris = StorageService.deleteObjectInStorage;
  }

  /**
   * Directive that shows a movie preview
   */
  moviesDirective.$inject = ['$templateCache'];
  function moviesDirective($templateCache) {
    return {
      restrict         : 'AE',
      controller       : 'MoviesController',
      controllerAs     : 'moviesCtrl',
      template         : $templateCache.get('movies.html'),
      bindToController : true,
      scope            : {
        movies : '=',
        predicate : '@'
      }
    };
  }
})();