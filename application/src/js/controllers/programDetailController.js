(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = ['$stateParams', 'CommonService', 'QSConstants', '$injector', 'QSCStates'];
  function programDetailController($stateParams, CommonService, QSConstants, $injector, QSCStates) {
    var vm = this;

    vm.lengthMap = CommonService.lengthMap;

    init();

    function init() {
      CommonService.init("DETAIL_TITLE");
      vm.detail = $stateParams[QSConstants.movieProperty];

      if (!CommonService.isDefinedAndNotNull(vm.detail)) {
        $injector.get('$state').go(QSCStates.stateMovie);
      }
    }
  }
})();