(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerCinemaController', programPerCinemaController);

  programPerCinemaController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function programPerCinemaController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    /**
     * @private
     * Initialize the page by loading the program
     */
    function init() {
      CommonService.init("PROG_PER_CINEMA_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService));
    }

    /**
     * @public
     * This function will be used when an error occurs
     */
    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService));
    }

    /**
     * @private
     * A promise is passed in the function
     * The response is a list of movies that will be sorted by cinema
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.cinemas = {};

        // Sorting movies per cinema
        angular.forEach(response.data, function (data) {
          if (!CommonService.isDefined(this[data.cinema])) {
            this[data.cinema] = [];
          }
          this[data.cinema].push(data);
        }, vm.cinemas);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateCinema);
      });
    }
  }
})();