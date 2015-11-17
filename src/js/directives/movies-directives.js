(function () {
	'use strict';

	angular.module('Queersicht.directives')
		.controller('MoviesController', moviesController)
		.directive('movies', moviesDirective);

	/**
	 * Controller that
	 */
	moviesController.$inject = ['CommonService'];
	function moviesController(CommonService) {
		var vm = this;

		// Get functions' references from CommonService
		vm.addFavoris    = CommonService.addFavoris;
		vm.isInFavoris   = CommonService.isInFavoris;
		vm.deleteFavoris = CommonService.deleteFavoris;
	}

	/**
	 * Directive that shows a movie preview
	 */
	moviesDirective.$inject = ['$templateCache'];
	function moviesDirective($templateCache) {
		return {
			restrict         : 'AE',
			controller       : 'MoviesController',
			controllerAs     : 'moviesCtrl',
			template         : $templateCache.get('movies.html'),
			bindToController : true,
			scope            : {
				movies : '=movies'
			}
		};
	}
})();