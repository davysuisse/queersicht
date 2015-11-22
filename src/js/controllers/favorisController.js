(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('FavorisController', favorisController);

  /**
   * Manage the favoris from the localStorage
   */
  favorisController.$inject = ['CommonService', 'RestCallService', 'FavorisService', 'QSConstants'];
  function favorisController(CommonService, RestCallService, FavorisService, QSConstants) {
    var vm = this;

    vm.favoris       = [];
    vm.addFavoris    = FavorisService.addFavoris;
    vm.isInFavoris   = FavorisService.isInFavoris;
    vm.deleteFavoris = FavorisService.deleteFavoris;

    init();

    function init() {
      CommonService.initTitle(QSConstants.favorisTitle);

      RestCallService.getProgramPerMovie().then(function (response) {
        var movies = response.data;
        sortFavoris(movies || []);
      }, function (error) {
        var movies = RestCallService.getMovies();
        sortFavoris(movies || []);
      });
    }

    function sortFavoris(movies) {
      for (var i = 0; i < movies.length; i++) {
        if (FavorisService.isInFavoris(movies[i])) {
          vm.favoris.push(movies[i]);
        }
      }
    }
  }
})();
