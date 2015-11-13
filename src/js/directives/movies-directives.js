(function(){
	'use strict';

	angular.module('Queersicht.directives')
	.controller('MoviesController', moviesController)
	.directive('movies', moviesDirective);

	moviesController.$inject = ['CommonService'];
	function moviesController(CommonService){
		var vm = this;
		
		vm.addFavoris = addFavoris;
		vm.isInFavoris = isInFavoris;
		vm.addFavoris = addFavoris;
		vm.deleteFavoris = deleteFavoris;
		
		function addFavoris(movieToAdd) {
			CommonService.addFavoris(movieToAdd);
		};

		function isInFavoris(movie) {
			return CommonService.isInFavoris(movie);
		};

		function getFavoris() {
			return CommonService.getFavoris();
		};

		function deleteFavoris(movieToDelete) {
			CommonService.deleteFavoris(movieToDelete);
		};
	}

	moviesDirective.$inject = ['$templateCache'];
	function moviesDirective($templateCache) {
		return {
			restrict: 'AE',
			controller: 'MoviesController',
			controllerAs: 'moviesCtrl',
			template: $templateCache.get('movies.html'),
			bindToController: true,
			scope: {
				movies: '=movies'
			}
		};
	}
})();