(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService'];
  function programPerDateController(CommonService, RestCallService) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle('Program per Date');

      RestCallService.getProgramPerDate().then(function (response) {
        vm.dates = response.data;
      }, function (error) {
        vm.dates = RestCallService.getDates();
      });
    }
  }
})();