angular.module('Queersicht.services.ProgramService', [])
.service('CommonService', function($window, $location, $rootScope, $http) {
	this.addFavoris = function(movieToAdd) {
		var favoris = this.getFavoris();
		if(favoris.indexOf(movieToAdd.id) < 0){
			favoris.push(movieToAdd.id);
			$window.localStorage.setItem("favoris", JSON.stringify(favoris));
		}
	};

	this.deleteFavoris = function(movieToDelete) {
		var favoris = this.getFavoris();
		var idx = favoris.indexOf(movieToDelete.id);
		if(idx > -1){
			favoris.splice(idx, 1);
			this.setFavoris(favoris);
		}
	};

	this.isInFavoris = function(movie) {
		var favoris = this.getFavoris();
		for(var i in favoris){
			if(angular.equals('' + favoris[i], '' + movie.id)){
				return true;
			}
		}
		return false;
	};

	this.getFavoris = function(){
		return JSON.parse($window.localStorage.getItem('favoris') || '[]');
	};

	this.setFavoris = function(favoris){
		$window.localStorage.setItem("favoris", JSON.stringify(favoris));
	};

	this.goDetail = function(movieId){
		$location.path('/detail/' + movieId);
	};

	this.initTitle = function(myTitle){
		$rootScope.$broadcast('menu-title', { title : myTitle });
	};

	this.getDetail = function(id){
		return $http.get('/queersicht/services/detail/' + id);
	};

	this.getProgramPerMovie = function(){
		return $http.get('/queersicht/webservice/programs/movie');
	};

	this.getProgramPerCinema = function(){
		return $http.get('/queersicht/webservice/programs/cinema');
	};

	this.getProgramPerDate = function(){
		return $http.get('/queersicht/webservice/programs/date');
	};
});