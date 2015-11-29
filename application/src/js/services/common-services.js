(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  /**
   * Get all the common functions that are used in the application
   */
  commonService.$inject = ['$rootScope', 'QSConstants', '$timeout', 'QSCStates', '$injector', 'SharedItemsService'];
  function commonService($rootScope, QSConstants, $timeout, QSCStates, $injector, SharedItemsService) {
    var service = {
      errorMessage        : errorMessage,
      init                : init,
      isDefinedAndNotNull : isDefinedAndNotNull,
      lengthMap           : lengthMap,
      stringify           : stringify
    };

    return service;

    /**
     * Title of the application and the refresh callback
     * @param title
     * @param callback
     */
    function init(title, callback) {
      SharedItemsService.title           = title;
      SharedItemsService.refreshCallback = callback;
    }

    /**
     * Display an error message and redirect to callback with its params
     * @param errorMessage to broadcast
     * @param state where to go (when retrying)
     * @param parameters of the state (if any)
     */
    function errorMessage(errorMessage, state, parameters) {
      SharedItemsService.errorMessage = errorMessage;

      $timeout(function () {
        SharedItemsService.errorMessage = undefined;
      }, 5000);

      if (isDefinedAndNotNull(state)) {
        $injector.get('$state').go(QSCStates.stateError, {callback : state, parameters : parameters});
      }
    }

    /**
     * Tells if the obj is defined and not null
     * @param obj
     * @returns {*|boolean}
     */
    function isDefinedAndNotNull(obj) {
      return angular.isDefined(obj) && obj != null;
    }

    /**
     * Determines the size of the map
     * @param map
     * @returns {Number}
     */
    function lengthMap(map) {
      return Object.keys(map).length;
    }

    /**
     * Used when comparing a "possible" number with a string
     * @param obj
     * @returns {string}
     */
    function stringify(obj) {
      return '' + obj;
    }
  }
})();