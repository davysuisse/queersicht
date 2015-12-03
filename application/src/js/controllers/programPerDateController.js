(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  /**
   * Manage the program per Date
   */
  programPerDateController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants', 'TranslationService'];
  function programPerDateController(CommonService, RestCallService, QSCStates, QSConstants, TranslationService) {
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

        // Sorting movies by date
        angular.forEach(response.data, function (data) {
          var date = TranslationService.getMoment(data.date, QSConstants.formatFullDate);
          if (!CommonService.isDefinedAndNotNull(this[date])) {
            this[date] = [];
          }
          this[date].push(data);
        }, vm.dates);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }
  }
})();