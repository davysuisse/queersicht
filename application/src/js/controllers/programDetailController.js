(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  programDetailController.$inject = [
    '$stateParams', 'CommonService', 'QSConstants', '$injector', 'QSCStates', 'TranslationService'
  ];
  function programDetailController($stateParams, CommonService, QSConstants, $injector, QSCStates, TranslationService) {
    var vm = this;

    vm.lengthMap      = CommonService.lengthMap;
    vm.getDescription = getDescription;

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
  }
})();