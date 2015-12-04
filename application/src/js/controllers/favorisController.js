(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('FavorisController', favorisController);

  /**
   * Manage the favoris stored in the localStorage
   */
  favorisController.$inject = [
    'CommonService', 'RestCallService', 'StorageService', 'QSCStates', 'QSConstants', 'TranslationService'
  ];
  function favorisController(CommonService, RestCallService, StorageService, QSCStates, QSConstants, TranslationService) {
    var vm = this;

    vm.refresh      = refresh;
    vm.stillFavoris = stillFavoris;

    init();

    // Initialize by loading all the movies and takes only those that are in the favoris
    function init() {
      CommonService.init("FAVORIS_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.programService));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.programService));
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.dates = {};

        // Sorting favoris by date
        var favoris = sortFavoris(response.data);
        angular.forEach(favoris, function (data) {
          var date = TranslationService.getMoment(data.date, QSConstants.formatFullDate);
          if (!CommonService.isDefinedAndNotNull(this[date])) {
            this[date] = [];
          }
          this[date].push(data);
        }, vm.dates);

      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateFavoris);
      });
    }

    function stillFavoris(movies) {
      return sortFavoris(movies).length > 0;
    }

    /**
     * Add all movies that are in the favoris
     * @param movies
     */
    function sortFavoris(movies) {
      var favoris = [];
      for (var i = 0; i < movies.length; i++) {
        if (StorageService.isObjectInStorage(QSConstants.favorisKey, movies[i].id)) {
          favoris.push(movies[i]);
        }
      }
      return favoris;
    }
  }
})();
