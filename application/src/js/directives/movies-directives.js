(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  /**
   * Controller that
   */
  moviesController.$inject = ['StorageService', 'QSConstants', 'TranslationService', '$attrs'];
  function moviesController(StorageService, QSConstants, TranslationService, $attrs) {
    var vm = this;

    vm.formatDate = formatDate;
    vm.formatTime = formatTime;
    vm.getTitle   = getTitle;

    vm.isPerDate          = $attrs && $attrs.isPerDate;
    vm.isPerCinema        = $attrs && $attrs.isPerCinema;
    vm.translationService = TranslationService;

    // Get functions' references from FavorisService
    vm.keyFavoris    = QSConstants.favorisKey;
    vm.addFavoris    = StorageService.addObjectInStorage;
    vm.isInFavoris   = StorageService.isObjectInStorage;
    vm.deleteFavoris = StorageService.deleteObjectInStorage;

    function getTitle(movie) {
      var title = movie.title;

      if (vm.isPerCinema) {
        title += ' - ' + formatDate(movie.date) + ' ' + formatTime(movie.date);
      }
      else if (vm.isPerDate) {
        title += ' - ' + movie.cinema + ' - ' + formatTime(movie.date);
      }

      return title;
    }

    function formatDate(date) {
      return TranslationService.getMoment(date, QSConstants.formatDate);
    }

    function formatTime(date) {
      return TranslationService.getMoment(date, QSConstants.formatTime);
    }
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
        movies    : '=',
        predicate : '@'
      }
    };
  }
})();