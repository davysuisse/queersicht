(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerCinemaController', programPerCinemaController);

  /**
   * Manage the program per Cinema
   */
  programPerCinemaController.$inject = ['CommonService', 'RestCallService'];
  function programPerCinemaController(CommonService, RestCallService) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle("PROG_PER_CINEMA_TITLE");

      RestCallService.getProgramPerCinema().then(function (response) {
        vm.cinemas = response.data;
      }, function (error) {
        vm.cinemas = [];
        // TODO : Error Message
      });
    }
  }
})();