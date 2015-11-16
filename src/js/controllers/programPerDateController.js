(function() {
  'use strict';

  angular.module('Queersicht.controllers').controller(
          'ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService'];
  function programPerDateController(CommonService) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle('Program per Date');
      CommonService.getProgramPerDate().then(function(response) {
        vm.dates = response.data;
      }, function(error) {
        vm.dates = CommonService.getDates();
      });
    }
  }
})();