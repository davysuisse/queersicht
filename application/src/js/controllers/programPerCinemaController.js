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

    init();

    function init() {
      CommonService.initTitle("PROG_PER_CINEMA_TITLE");

      RestCallService.getProgram().then(function (response) {
        vm.cinemas = response.data;
      }, function (error) {
        vm.cinemas = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateCinema);
      });
    }
  }
})();