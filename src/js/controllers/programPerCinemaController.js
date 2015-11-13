/* Main Controller */
(function(){
	'use strict';

	angular.module('Queersicht.controllers')
	.controller('ProgramPerCinemaController', programPerCinemaController)

    programPerCinemaController.$inject = ['CommonService'];
	function programPerCinemaController(CommonService){
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
	}

})();