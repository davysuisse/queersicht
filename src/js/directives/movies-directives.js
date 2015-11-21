(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  /**
   * Controller that
   */
  moviesController.$inject = ['FavorisService'];
  function moviesController(FavorisService) {
    var vm = this;

    // Get functions' references from FavorisService
    vm.addFavoris    = FavorisService.addFavoris;
    vm.isInFavoris   = FavorisService.isInFavoris;
    vm.deleteFavoris = FavorisService.deleteFavoris;
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