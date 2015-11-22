(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerCinemaController', programPerCinemaController);

  /**
   * Manage the program per Cinema
   */
  programPerCinemaController.$inject = ['CommonService', 'RestCallService', 'QSConstants'];
  function programPerCinemaController(CommonService, RestCallService, QSConstants) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle(QSConstants.programPerCinemaTitle);

      RestCallService.getProgramPerCinema().then(function (response) {
        vm.cinemas = response.data;
      }, function (error) {
        vm.cinemas = RestCallService.getCinemas();
      });
    }
  }
})();