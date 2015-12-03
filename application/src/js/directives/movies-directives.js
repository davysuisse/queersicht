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

    function getTitle(movie) {
      var title = movie.title;

      if ($attrs && $attrs.isPerCinema) {
        title += ' - ' + formatDate(movie.date) + ' ' + formatTime(movie.date);
      }
      else if ($attrs && ($attrs.isPerDate || $attrs.isFavoris)) {
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

    function getDescription(movie) {
      return TranslationService.getDescription(movie);
    }

    function isInFavoris(movieId) {
      return StorageService.isObjectInStorage(QSConstants.favorisKey, movieId);
    }

    function addOrDeleteFavoris(movieId) {
      if (!StorageService.isObjectInStorage(QSConstants.favorisKey, movieId)) {
        StorageService.addObjectInStorage(QSConstants.favorisKey, movieId);
      } else {
        StorageService.deleteObjectInStorage(QSConstants.favorisKey, movieId);
      }
    }

    function getImage(movie) {
      return movie.image || 'http://placeimg.com/400/200/people';
    }

    function goDetail(movie) {
      if (!vm.isNews) {
        $injector.get('$state').go(QSCStates.stateDetail, {'movie' : movie});
      }
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