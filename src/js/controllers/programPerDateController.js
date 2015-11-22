(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService', 'QSConstants'];
  function programPerDateController(CommonService, RestCallService, QSConstants) {
    var vm = this;

    init();

    function init() {
      CommonService.initTitle(QSConstants.programPerDateTitle);

      RestCallService.getProgramPerDate().then(function (response) {
        vm.dates = response.data;
      }, function (error) {
        vm.dates = RestCallService.getDates();
      });
    }
  }
})();