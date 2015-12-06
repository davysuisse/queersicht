(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ProgramPerDateController', programPerDateController);

  programPerDateController.$inject = [
    'CommonService', 'RestCallService', 'QSCStates', 'QSConstants', 'TranslationService'
  ];
  function programPerDateController(CommonService, RestCallService, QSCStates, QSConstants, TranslationService) {
    var vm = this;

    vm.getFullDate = getFullDate;
    vm.getKeys     = CommonService.getKeys;
    vm.refresh     = refresh;

    init();

    /**
     * @private
     * Initialize the page by loading the program
     */
    function init() {
      CommonService.init("PROG_PER_DATE_TITLE", vm.refresh);
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
     * The response is a list of movies that will be sorted by date
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.dates = {};

        // Sorting movies by date
        angular.forEach(response.data, function (data) {
          var date = TranslationService.getMoment(data.date, QSConstants.formatNormDate);
          if (!CommonService.isDefined(this[date])) {
            this[date] = [];
          }
          this[date].push(data);
        }, vm.dates);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateDate);
      });
    }

    /**
     * @public
     * Transform the YY.MM.DD to a full date
     * Example : 15.06.10 => Montag 10 Jun. 2015
     * @param dateStr
     * @returns {*}
     */
    function getFullDate(dateStr) {
      return TranslationService.getMomentFromString(dateStr, QSConstants.formatNormDate, QSConstants.formatFullDate);
    }
  }
})();