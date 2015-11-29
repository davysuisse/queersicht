(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = ['$stateParams', 'CommonService', 'RestCallService', 'QSConstants', 'QSCStates'];
  function programDetailController($stateParams, CommonService, RestCallService, QSConstants, QSCStates) {
    var vm       = this;
    vm.lengthMap = CommonService.lengthMap;
    vm.init      = init;

    init();

    function init() {
      CommonService.init("FAVORIS_TITLE", vm.init);

      var idDetail = $stateParams[QSConstants.idProperty];
      RestCallService.getDetail($stateParams[QSConstants.idProperty]).then(function (response) {
        vm.detail = response.data;
      }, function (error) {
        vm.detail = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDetail, idDetail);
      });
    }
  }
})();