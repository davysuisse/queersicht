(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('ErrorController', errorController);

  /**
   * Manage the error and refresh the actual page by calling the callback function and parameters if any
   */
  errorController.$inject = ['$stateParams', 'CommonService', 'QSConstants', 'QSCStates', '$injector'];
  function errorController($stateParams, CommonService, QSConstants, QSCStates, $injector) {
    var vm = this;

    vm.retry = retry;

    init();

    /**
     * @private
     * Initialize by setting the variables in the controller
     */
    function init() {
      CommonService.init("ERROR_TITLE");

      vm.callback   = $stateParams[QSConstants.callbackProperty] || QSCStates.stateNews;
      vm.parameters = $stateParams[QSConstants.parameterProperty] || null;
    }

    /**
     * @public
     * Clicking by retry will attempt to go once again on the actual page
     */
    function retry() {
      $injector.get('$state').go(vm.callback, vm.parameters);
    }
  }
})();