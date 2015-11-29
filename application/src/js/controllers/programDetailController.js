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
    vm.idDetail  = $stateParams[QSConstants.idProperty];
    vm.refresh      = refresh;

    init();

    function init() {
      CommonService.init("DETAIL_TITLE", vm.refresh);
      loadDatas(RestCallService.getDetail(vm.idDetail));
    }

    function refresh() {
      loadDatas(RestCallService.getDetail(vm.idDetail));
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.detail = response.data;
      }, function (error) {
        vm.detail = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDetail, idDetail);
      });
    }
  }
})();