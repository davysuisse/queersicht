/* Main Controller */
(function(){
	'use strict';

	angular.module('Queersicht.controllers')
	.controller('QueersichtController', queersichtController)

	 queersichtController.$inject = ['$scope'];
	 function queersichtController($scope){
		var vm = this;

		$scope.$on('menu-title', function(event, args) {
			vm.navigation = args.title;
        });
	}

})();