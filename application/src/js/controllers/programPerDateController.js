(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function programPerDateController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_DATE_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.dates = response.data;
      }, function (error) {
        vm.dates = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }
  }
})();