/* Main Controller */
(function(){
	'use strict';

	angular.module('Queersicht.controllers.Program', [])
	.controller('QueersichtController', ['$scope', 'CommonService', function($scope, CommonService){
		var vm = this;

		$scope.$on('menu-title', function(event, args) {
			vm.navigation = args.title;
		});
	}])
	.controller('ProgramPerMovieController', ['$scope', 'CommonService', function($scope, CommonService){
		var vm = this;
		vm.init = init;
		init();

		function init(){
			CommonService.initTitle('Program per Movie');
			CommonService.getProgramPerMovie().then(function(response){
				// vm.movies = response.data;
			},
			function(error){
				vm.movies = [
				{ id: '1', title: 'Mad Max: Fury Road', image: 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg', summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...', time: '20:30' },
				{ id: '3', title: 'Ostwind 2', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg', summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...', time: '18:15' },
				{ id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...', time: '21:30' },
				{ id: '4', title: 'Zweite Chance', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg', summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...', time: '21:30' }];
			});
		};
	}])
	.controller('ProgramPerCinemaController', ['CommonService', function(CommonService){
		var vm = this;
		vm.init = init;
		init();

		function init(){
			CommonService.initTitle('Program per Cinema');
			CommonService.getProgramPerCinema().then(function(response){
				// vm.cinemas = response.data;
			},
			function(error){
				vm.cinemas = {
					'Cinematte' : [
						{ id: '1', title: 'Mad Max: Fury Road', image: 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg', summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...', time: '20:30' }],
					'KellerKino' : [
						{ id: '3', title: 'Ostwind 2', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg', summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...', time: '18:15' },
						{ id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...', time: '21:30' },
						{ id: '4', title: 'Zweite Chance', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg', summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...', time: '21:30' }]
				};
			});
		};
	}])
	.controller('ProgramPerDateController', ['CommonService', function(CommonService){
		var vm = this;
		vm.init = init;
		init();

		function init(){
			CommonService.initTitle('Program per Date');
			CommonService.getProgramPerDate().then(function(response){
				// vm.dates = response.data;
			},
			function(error){
				// vm.dates = undefined;
				vm.dates = {
					'12.03.2015' : [
						{ id: '1', title: 'Mad Max: Fury Road', image: 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg', summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...', time: '20:30' },
						{ id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...', time: '21:30' }],
					'13.03.2015' : [
						{ id: '3', title: 'Ostwind 2', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg', summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...', time: '18:15' },
						{ id: '4', title: 'Zweite Chance', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg', summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...', time: '21:30' }]
				};	
			});
		};
	}])
	.controller('FavorisController', ['CommonService', function(CommonService){
		var vm = this;
		vm.init = init;
		vm.addFavoris = addFavoris;
		vm.isInFavoris = isInFavoris;
		vm.addFavoris = addFavoris;
		vm.deleteFavoris = deleteFavoris;

		init();

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

		function init(){
			CommonService.initTitle('Favoris');
			CommonService.getProgramPerDate().then(function(response){
				// vm.favoris = response.data;
			}, function(error){
				vm.favoris = [
				{ id: '1', title: 'Mad Max: Fury Road', image: 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg', summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...', time: '20:30' },
				{ id: '3', title: 'Ostwind 2', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg', summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...', time: '18:15' },
				{ id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...', time: '21:30' },
				{ id: '4', title: 'Zweite Chance', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg', summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...', time: '21:30' }];
			});
		};
	}])
	.controller('ProgramDetailController', ['$stateParams', 'CommonService', function($stateParams, CommonService){
		var vm = this;
		vm.init = init;
		vm.lengthMap = lengthMap;

		function init(){
			CommonService.initTitle('Detail');
			CommonService.getDetail($stateParams['id']).then(function(response){
				// vm.detail = response.data;
			},
			function(error){
				vm.detail = CommonService.getDetailMock();
			});
		};

		function lengthMap(map){
			return Object.keys(map).length;
		};
	}]);
})();