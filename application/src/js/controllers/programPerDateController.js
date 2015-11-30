(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants', '$filter'];
  function programPerDateController(CommonService, RestCallService, QSCStates, QSConstants, $filter) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_DATE_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.dates = {};

        angular.forEach(response.data, function (data) {
          var date = $filter('date')(data.date, 'EEE dd.MM.yyyy');
          console.log(date);
          if (!CommonService.isDefinedAndNotNull(this[date])) {
            this[date] = [];
          }
          this[date].push(data);
        }, vm.dates);

      }, function (error) {
        vm.dates = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }
  }
})();