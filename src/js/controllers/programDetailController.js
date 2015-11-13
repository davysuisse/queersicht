/* Main Controller */
(function(){
	'use strict';

	angular.module('Queersicht.controllers')
    .controller('ProgramDetailController', programDetailController)

	programDetailController.$inject = ['$stateParams', 'CommonService'];
	function programDetailController($stateParams, CommonService){
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
	}
})();