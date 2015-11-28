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

    init();

    function init() {
      CommonService.initTitle("FAVORIS_TITLE");

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