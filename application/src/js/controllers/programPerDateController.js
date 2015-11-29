(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService', 'QSCStates'];
  function programPerDateController(CommonService, RestCallService, QSCStates) {
    var vm = this;

    vm.init = init;

    init();

    function init() {
      CommonService.init("PROG_PER_DATE_TITLE", vm.init);

      RestCallService.getProgram().then(function (response) {
        vm.dates = response.data;
      }, function (error) {
        vm.dates = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }
  }
})();