(function() {
  'use strict';

  angular.module('Queersicht.controllers').controller(
          'ProgramPerCinemaController', programPerCinemaController)

  /**
   * Manage the program per Cinema
   */
  programPerCinemaController.$inject = ['CommonService'];
  function programPerCinemaController(CommonService) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle('Program per Cinema');

      CommonService.getProgramPerCinema().then(function(response) {
        vm.cinemas = response.data;
      }, function(error) {
        vm.cinemas = CommonService.getCinemas();
      });
    }
  }
})();