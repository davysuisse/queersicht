(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('MoviesController', moviesController)
    .directive('movies', moviesDirective);

  moviesController.$inject = [
    'StorageService', 'QSConstants', 'TranslationService', '$attrs',
    '$injector', 'QSCStates', 'RestCallService', 'CommonService'
  ];
  function moviesController(StorageService, QSConstants, TranslationService, $attrs, $injector, QSCStates, RestCallService, CommonService) {
    var vm = this;

    // Functions
    vm.addOrDeleteFavoris = addOrDeleteFavoris;
    vm.displayFavoris     = displayFavoris;
    vm.getDescription     = getDescription;
    vm.getTitle           = getTitle;
    vm.goDetail           = goDetail;
    vm.isInFavoris        = isInFavoris;
    vm.loadImage          = loadImage;

    // Variables and attributes
    vm.isFavoris = $attrs && $attrs.isFavoris;
    vm.isNews    = $attrs && $attrs.isNews;
    vm.reverse   = $attrs.reverse || false

    /**
     * @public
     * Get the movies title in function of some criteria
     * @param movie
     * @returns {*}
     */
    function getTitle(movie) {
      var title = TranslationService.getTitle(movie);
      if ($attrs && $attrs.isPerCinema || $attrs.isNews) {
        title += ' - ' + formatDate(movie.date, QSConstants.formatDate) + ' ' + formatDate(movie.date, QSConstants.formatTime);
      } else if ($attrs && ($attrs.isPerDate || $attrs.isFavoris)) {
        title += ' - ' + movie.cinema + ' - ' + formatDate(movie.date, QSConstants.formatTime);
      }
      return title;
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
     * Go to the movie's detail, only if it's not the news page
     * @param movie
     */
    function goDetail(movie) {
      if (!vm.isNews) {
        $injector.get('$state').go(QSCStates.stateDetail, {'movie' : movie});
      }
    }

    /**
     * @public
     * Get the translated description
     * @param movie
     * @returns {*}
     */
    function getDescription(movie) {
      return TranslationService.getDescription(movie);
    }

    /**
     * @public
     * Tell if a movie is in the favoris
     * @param movieId
     * @returns {boolean}
     */
    function isInFavoris(movieId) {
      return StorageService.isObjectInStorage(QSConstants.favorisKey, movieId);
    }

    /**
     * @public
     * Display the favoris if it's not the (news | programPerMovie) page
     * @returns {*|boolean}
     */
    function displayFavoris() {
      return $attrs && !($attrs.isNews || $attrs.isPerMovie);
    }

    /**
     * @private
     * Format a date to a certain format
     * @param date
     * @param format
     * @returns {*}
     */
    function formatDate(date, format) {
      return TranslationService.getMoment(date, format);
    }

    /**
     * Load images from local Storage if they exist, otherwise from url
     * @param movie
     */
    function loadImage(movie) {
      var service = {};
      service.key = movie.image;
      service.url = QSConstants.imageService.url + movie.image;

      RestCallService.callService(service).then(function (response) {
        movie.imageLoaded = "data:image/png;base64," + response.data.image;
      }, function (error) {
        // Apply default image for news page
        if (vm.isNews) {
          movie.imageLoaded = QSConstants.defaultImage;
        } else {
          movie.imageLoaded = QSConstants.errorImage;
          CommonService.errorMessage(error.data.message);
        }
      });
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