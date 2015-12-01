(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = [
    '$stateParams', 'CommonService', 'QSConstants', '$injector', 'QSCStates', 'TranslationService'
  ];
  function programDetailController($stateParams, CommonService, QSConstants, $injector, QSCStates, TranslationService) {
    var vm = this;

    vm.translationService = TranslationService;
    vm.lengthMap          = CommonService.lengthMap;
    vm.formatDate         = formatDate;
    vm.formatTime         = formatTime;

    init();

    function init() {
      CommonService.init("DETAIL_TITLE");
      vm.detail = $stateParams[QSConstants.movieProperty];

      if (!CommonService.isDefinedAndNotNull(vm.detail)) {
        $injector.get('$state').go(QSCStates.stateMovie);
      }
    }

    function formatDate(date) {
      return TranslationService.getMoment(date, QSConstants.formatDate);
    }

    function formatTime(date) {
      return TranslationService.getMoment(date, QSConstants.formatTime);
    }
  }
})();