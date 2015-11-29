(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerCinemaController', programPerCinemaController);

  /**
   * Manage the program per Cinema
   */
  programPerCinemaController.$inject = ['CommonService', 'RestCallService', 'QSCStates'];
  function programPerCinemaController(CommonService, RestCallService, QSCStates) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_CINEMA_TITLE", vm.refresh);
      loadDatas(RestCallService.getProgram());
    }

    function refresh() {
      loadDatas(RestCallService.callProgram());
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.cinemas = response.data;
      }, function (error) {
        vm.cinemas = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateCinema);
      });
    }
  }
})();