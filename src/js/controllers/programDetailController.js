(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController);

  /**
   * Manage the program detail
   */
  programDetailController.$inject = ['$stateParams', 'CommonService', 'RestCallService'];
  function programDetailController($stateParams, CommonService, RestCallService) {
    var vm       = this;
    vm.init      = init;
    vm.lengthMap = CommonService.lengthMap;

    // Called from the GUI
    function init() {
      CommonService.initTitle('Detail');

      RestCallService.getDetail($stateParams['id']).then(function (response) {
        vm.detail = response.data;
      }, function (error) {
        vm.detail = RestCallService.getDetailMock(); // Mocking because the REST api is not created yet
      });
    }
  }
})();