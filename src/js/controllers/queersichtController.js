/* Main Controller */
(function(){
	'use strict';

	angular.module('Queersicht.controllers')
	.controller('QueersichtController', queersichtController)

	 queersichtController.$inject = ['$scope'];
	 function queersichtController($scope){
		var vm = this;

		vm.affectTitle = affectTitle;

		$scope.$on('menu-title', function(event, args) {
			affectTitle(args.title);
        });

        function affectTitle(title){
            vm.navigation = title;
        }
	}

})();