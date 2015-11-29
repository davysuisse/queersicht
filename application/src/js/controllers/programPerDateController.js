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

    init();

    function init() {
      CommonService.initTitle("PROG_PER_DATE_TITLE");

      RestCallService.getProgram().then(function (response) {
        vm.dates = response.data;
      }, function (error) {
        vm.dates = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }
  }
})();