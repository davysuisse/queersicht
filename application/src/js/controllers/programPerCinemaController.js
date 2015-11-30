(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerCinemaController', programPerCinemaController);

  /**
   * Manage the program per Cinema
   */
  programPerCinemaController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function programPerCinemaController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("PROG_PER_CINEMA_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService.key, QSConstants.programService.url));
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.cinemas = {};

        angular.forEach(response.data, function(data){
          if(!CommonService.isDefinedAndNotNull(this[data.cinema])) {
            this[data.cinema] = [];
          }
          this[data.cinema].push(data);
        }, vm.cinemas);

      }, function (error) {
        vm.cinemas = [];
        CommonService.errorMessage('ERROR_500', QSCStates.stateCinema);
      });
    }
  }
})();