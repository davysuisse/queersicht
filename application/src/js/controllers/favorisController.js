(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('FavorisController', favorisController);

  /**
   * Manage the favoris from the localStorage
   */
  favorisController.$inject = ['CommonService', 'RestCallService', 'StorageService', 'QSCStates', 'QSConstants'];
  function favorisController(CommonService, RestCallService, StorageService, QSCStates, QSConstants) {
    var vm = this;

    vm.favoris       = [];
    vm.addFavoris    = StorageService.addObjectInStorage;
    vm.isInFavoris   = StorageService.isObjectInStorage;
    vm.deleteFavoris = StorageService.deleteObjectInStorage;
    vm.keyFavoris    = QSConstants.favorisKey;
    vm.init          = init;

    init();

    // Initialize by loading all the movies and takes only those that are in the favoris
    function init() {
      CommonService.init("FAVORIS_TITLE", init);

      RestCallService.getProgram().then(function (response) {
        var movies = response.data;
        sortFavoris(movies || []);
      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateFavoris);
      });
    }

    /**
     * Add all movies that are in the favoris
     * @param movies
     */
    function sortFavoris(movies) {
      for (var i = 0; i < movies.length; i++) {
        if (StorageService.isObjectInStorage(vm.keyFavoris, movies[i].id)) {
          vm.favoris.push(movies[i]);
        }
      }
    }
  }
})();
