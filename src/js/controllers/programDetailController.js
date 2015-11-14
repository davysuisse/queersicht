(function(){
	'use strict';

	angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController)

    /**
    * Manage the program detail
    */
	programDetailController.$inject = ['$stateParams', 'CommonService'];
	function programDetailController($stateParams, CommonService){
		var vm = this;
		vm.init = init;
		vm.lengthMap = CommonService.lengthMap;

        // Called from the GUI
		function init(){
			CommonService.initTitle('Detail');

			CommonService.getDetail($stateParams['id']).then(function(response){
				vm.detail = response.data;
			},
			function(error){
				vm.detail = CommonService.getDetailMock(); // Mocking because the REST api is not created yet
			});
		};

	}
})();