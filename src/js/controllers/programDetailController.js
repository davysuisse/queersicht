(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = ['$stateParams', 'CommonService', 'RestCallService', 'QSConstants'];
  function programDetailController($stateParams, CommonService, RestCallService, QSConstants) {
    var vm       = this;
    vm.init      = init;
    vm.lengthMap = CommonService.lengthMap;

    // Called from the GUI
    function init() {
      CommonService.initTitle("FAVORIS_TITLE");

      RestCallService.getDetail($stateParams[QSConstants.idProperty]).then(function (response) {
        vm.detail = response.data;
      }, function (error) {
        vm.detail = RestCallService.getDetailMock();
      });
    }
  }
})();