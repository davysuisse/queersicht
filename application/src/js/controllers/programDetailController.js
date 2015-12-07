(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  programDetailController.$inject = [
    '$stateParams', 'CommonService', 'QSConstants', '$injector', 'QSCStates', 'TranslationService', 'RestCallService'
  ];
  function programDetailController($stateParams, CommonService, QSConstants, $injector, QSCStates, TranslationService, RestCallService) {
    var vm = this;

    vm.lengthMap      = CommonService.lengthMap;
    vm.getDescription = getDescription;
    vm.loadImage      = loadImage;

    init();

    /**
     * @private
     * Initialize the detail page by taking the detail in the $stateParams
     * If there is no detail, the user will be redirected to the stateMovie
     */
    function init() {
      CommonService.init("DETAIL_TITLE");
      vm.detail = $stateParams[QSConstants.movieProperty];

      if (!CommonService.isDefined(vm.detail)) {
        $injector.get('$state').go(QSCStates.stateMovie);
      }
    }

    /**
     * @public
     * Get the translated description of a movie
     * @param movie
     * @returns {*}
     */
    function getDescription(movie) {
      return TranslationService.getDescription(movie);
    }

    /**
     * @public
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
        errorImage(error, movie);
      })
    }

    /**
     * @private
     * Error can occurs if the server doesn't find a specific image
     * It will send a message with a status
     * 1) In case of the news page, a default image will be assigned
     * @param error
     * @param movie
     */
    function errorImage(error, movie) {
      // Apply default image for news page
      if (vm.isNews) {
        movie.imageLoaded = QSConstants.defaultImage;
      } else {
        movie.imageLoaded = QSConstants.errorImage;
        CommonService.errorMessage(error.data.message);
      }
    }
  }
})();