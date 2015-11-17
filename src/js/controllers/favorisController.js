(function () {
	'use strict';

	angular.module('Queersicht.controllers')
		.controller('FavorisController', favorisController);

	/**
	 * Manage the favoris from the localStorage
	 */
	favorisController.$inject = ['CommonService'];
	function favorisController(CommonService) {
		var vm = this;

		vm.favoris       = [];
		vm.addFavoris    = CommonService.addFavoris;
		vm.isInFavoris   = CommonService.isInFavoris;
		vm.deleteFavoris = CommonService.deleteFavoris;

		init();

		function init() {
			CommonService.initTitle('Favoris');

			CommonService.getProgramPerMovie().then(function (response) {
				var movies = response.data;
				sortFavoris(movies || []);
			}, function (error) {
				var movies = CommonService.getMovies(); // TODO: To Delete when api created
				sortFavoris(movies || []);
			});
		}

		function sortFavoris(movies) {
			for (var i = 0; i < movies.length; i++) {
				if (CommonService.isInFavoris(movies[i])) {
					vm.favoris.push(movies[i]);
				}
			}
		}
	}
})();
