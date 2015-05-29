angular.module('Queersicht.directives.MoviesDirective', [])
.controller('MoviesController', function($scope, CommonService){
	$scope.addFavoris = function(movieToAdd) {
		CommonService.addFavoris(movieToAdd);
	};

	$scope.isInFavoris = function(movie) {
		return CommonService.isInFavoris(movie);
	};

	$scope.getFavoris = function() {
		return CommonService.getFavoris();
	};

	$scope.deleteFavoris = function(movieToDelete) {
		CommonService.deleteFavoris(movieToDelete);
	};

	$scope.goDetail = function(movieId){
		CommonService.goDetail(movieId);
	};
})
.directive('movies', function($templateCache) {
  return {
  	restrict: 'AE',
  	controller: 'MoviesController',
  	scope: {
      movies: '=movies'
    },
    template: $templateCache.get('movies.html')
  };
});