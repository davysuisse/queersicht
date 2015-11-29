(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ErrorController', errorController);

  /**
   * Manage the error
   */
  errorController.$inject = ['$stateParams', 'CommonService', 'QSConstants', 'QSCStates', '$injector'];
  function errorController($stateParams, CommonService, QSConstants, QSCStates, $injector) {
    var vm = this;

    vm.retry = retry;

    init();

    function init() {
      CommonService.init("ERROR_TITLE");

      vm.callback  = $stateParams[QSConstants.callbackProperty] || QSCStates.stateNews;
      vm.paramters = $stateParams[QSConstants.parameterProperty] || null;
    }

    function retry() {
      $injector.get('$state').go(vm.callback, vm.paramters);
    }
  }
})();