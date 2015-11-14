(function(){
	'use strict';

	angular.module('Queersicht.controllers')
	.controller('ProgramPerMovieController', programPerMovieController)

    /**
    * Manage the program per Movie
    */
	programPerMovieController.$inject = ['CommonService'];
	function programPerMovieController(CommonService){
		var vm = this;

		init();

		function init(){
			CommonService.initTitle('Program per Movie');

			CommonService.getProgramPerMovie().then(function(response){
				vm.movies = response.data;
			},
			function(error){
				vm.movies = CommonService.getMovies(); // TODO: To Delete when api created
		    });
		}
	}

})();