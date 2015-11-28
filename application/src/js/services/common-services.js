(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  /**
   * Get all the common functions that are used in the application
   */
  commonService.$inject = ['$rootScope', 'QSConstants', '$timeout', 'QSCStates', '$injector'];
  function commonService($rootScope, QSConstants, $timeout, QSCStates, $injector) {
    var service = {
      errorMessage        : errorMessage,
      initTitle           : initTitle,
      isDefinedAndNotNull : isDefinedAndNotNull,
      lengthMap           : lengthMap,
      loadingSpinner      : loadingSpinner,
      stringify           : stringify
    };

    return service;

    /**
     * Title of the application
     * @param title
     */
    function initTitle(title) {
      $rootScope.$broadcast(QSConstants.broadCastTitle, {
        title : title
      });
    }

    /**
     * Display an error message and redirect to callback with its params
     * @param errorMessage to broadcast
     * @param state where to go (when retrying)
     * @param parameters of the state (if any)
     */
    function errorMessage(errorMessage, state, parameters) {
      $rootScope.$broadcast(QSConstants.errorMessage, {
        error : errorMessage
      });

      $timeout(hideErrorMessage, 5000);

      if (isDefinedAndNotNull(state)) {
        $injector.get('$state').go(QSCStates.stateError, {callback : state, parameters : parameters});
      }
    }

    /**
     * Title of the application
     * @param title
     */
    function hideErrorMessage() {
      $rootScope.$broadcast(QSConstants.errorMessage, {
        error : undefined
      });
    }

    /**
     * Show/Hide Loading Spinner
     * @param title
     */
    function loadingSpinner(show) {
      $rootScope.$broadcast(QSConstants.loadingSpinner, {
        loading : show
      });
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