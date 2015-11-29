(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  /**
   * Controller that
   */
  moviesController.$inject = ['StorageService', 'QSConstants'];
  function moviesController(StorageService, QSConstants) {
    var vm = this;

    // Get functions' references from FavorisService
    vm.addFavoris    = StorageService.addObjectInStorage;
    vm.isInFavoris   = StorageService.isObjectInStorage;
    vm.deleteFavoris = StorageService.deleteObjectInStorage;
    vm.keyFavoris    = QSConstants.favorisKey;
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
        movies : '=movies'
      }
    };
  }
})();