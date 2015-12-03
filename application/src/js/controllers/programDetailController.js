(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = [
    '$stateParams', 'CommonService', 'QSConstants', '$injector', 'QSCStates', 'TranslationService', '$uibModal',
    '$templateCache'
  ];
  function programDetailController($stateParams, CommonService, QSConstants, $injector, QSCStates, TranslationService, $uibModal, $templateCache) {
    var vm = this;

    vm.lengthMap      = CommonService.lengthMap;
    vm.getImage       = getImage;
    vm.getDescription = getDescription;
    vm.openInfo       = openInfo;

    init();

    function init() {
      CommonService.init("DETAIL_TITLE");
      vm.detail = $stateParams[QSConstants.movieProperty];

      if (!CommonService.isDefinedAndNotNull(vm.detail)) {
        $injector.get('$state').go(QSCStates.stateMovie);
      }
    }

    /**
     * Get image of the movie, if none get the default one
     * @param movie
     * @returns {*|string}
     */
    function getImage(movie) {
      if (CommonService.isDefinedAndNotNull(movie.image)){
        return movie.image;
      }
      return QSConstants.defaultImage;
    }

    function getDescription(movie) {
      return TranslationService.getDescription(movie);
    }

    function openInfo(movie) {
      $uibModal.open({
        animation    : true,
        template     : $templateCache.get('infos.html'),
        controller   : function (movie) {
          var vm   = this;
          vm.movie = movie;
        },
        controllerAs : 'infoC',
        size         : 'sm',
        resolve      : {
          movie : function () {
            return movie;
          }
        }
      });
    }
  }
})();