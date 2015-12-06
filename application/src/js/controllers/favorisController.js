(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('FavorisController', favorisController);

  favorisController.$inject = [
    'CommonService', 'RestCallService', 'StorageService', 'QSCStates', 'QSConstants', 'TranslationService'
  ];
  function favorisController(CommonService, RestCallService, StorageService, QSCStates, QSConstants, TranslationService) {
    var vm = this;

    vm.getFullDate            = getFullDate;
    vm.getKeys                = CommonService.getKeys;
    vm.headerStillHaveFavoris = headerStillHaveFavoris;
    vm.refresh                = refresh;

    init();

    /**
     * @private
     * Initialize the page by loading the program
     */
    function init() {
      CommonService.init("FAVORIS_TITLE", vm.refresh);
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
     * The response is a list of movies that will be sorted by dates
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.dates = {};

        // Only take movies that are in the favoris storage
        var favoris = sortFavoris(response.data);

        // Sorting favoris by date
        angular.forEach(favoris, function (data) {
          var date = TranslationService.getMoment(data.date, QSConstants.formatNormDate);
          if (!CommonService.isDefined(this[date])) {
            this[date] = [];
          }
          this[date].push(data);
        }, vm.dates);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateFavoris);
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

    /**
     * @public
     * When the user delete a favoris where there are no movie anymore at the actual date
     * @param programs
     * @returns {boolean}
     */
    function headerStillHaveFavoris(programs) {
      return sortFavoris(programs).length > 0;
    }

    /**
     * @private
     * Add all movies that are in the favoris
     * @param movies
     */
    function sortFavoris(movies) {
      var favoris = [];
      if (CommonService.isDefined(movies)) {
        for (var i = 0; i < movies.length; i++) {
          if (StorageService.isObjectInStorage(QSConstants.favorisKey, movies[i].id)) {
            favoris.push(movies[i]);
          }
        }
      }
      return favoris;
    }
  }
})();
