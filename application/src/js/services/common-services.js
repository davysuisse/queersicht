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
     * Display an error message and redirect to home
     * @param title
     */
    function errorMessage(errorMessage, redirecting) {
      $rootScope.$broadcast(QSConstants.errorMessage, {
        error : errorMessage
      });

      $timeout(hideErrorMessage, 5000);

      if(isDefinedAndNotNull(redirecting) && redirecting) {
        $injector.get('$state').go(QSCStates.stateNews);
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