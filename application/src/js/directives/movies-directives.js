(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  /**
   * Controller that manages movies
   */
  moviesController.$inject = [
    'StorageService', 'QSConstants', 'TranslationService', '$attrs', '$injector', 'QSCStates'
  ];
  function moviesController(StorageService, QSConstants, TranslationService, $attrs, $injector, QSCStates) {
    var vm = this;

    vm.getTitle           = getTitle;
    vm.getDescription     = getDescription;
    vm.addOrDeleteFavoris = addOrDeleteFavoris;
    vm.isInFavoris        = isInFavoris;
    vm.goDetail           = goDetail;
    vm.getImage           = getImage;
    vm.isFavoris          = $attrs && $attrs.isFavoris;
    vm.isNews             = $attrs && $attrs.isNews;
    vm.reverse            = $attrs.reverse || false;

    /**
     * Get the movies title in function of some criteria
     * @param movie
     * @returns {*}
     */
    function getTitle(movie) {
      var title = TranslationService.getTitle(movie);

      if ($attrs && $attrs.isPerCinema || $attrs.isNews) {
        title += ' - ' + formatDate(movie.date) + ' ' + formatTime(movie.date);
      }
      else if ($attrs && ($attrs.isPerDate || $attrs.isFavoris)) {
        title += ' - ' + movie.cinema + ' - ' + formatTime(movie.date);
      }

      return title;
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

    /**
     * Get image of the movie, if none get the default one
     * @param movie
     * @returns {*|string}
     */
    function getImage(movie) {
      return movie.image || QSConstants.defaultImage;
    }

    /**
     * Go to the details, only if it's not the news page
     * @param movie
     */
    function goDetail(movie) {
      if (!vm.isNews) {
        $injector.get('$state').go(QSCStates.stateDetail, {'movie' : movie});
      }
    }

    function formatDate(date) {
      return TranslationService.getMoment(date, QSConstants.formatDate);
    }

    function formatTime(date) {
      return TranslationService.getMoment(date, QSConstants.formatTime);
    }

    function getDescription(movie) {
      return TranslationService.getDescription(movie);
    }

    function isInFavoris(movieId) {
      return StorageService.isObjectInStorage(QSConstants.favorisKey, movieId);
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
      controllerAs     : 'mC',
      template         : $templateCache.get('movies.html'),
      bindToController : true,
      scope            : {
        movies    : '=',
        predicate : '@'
      }
    };
  }
})();