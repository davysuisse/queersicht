(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  /**
   * Get all the common functions that are used in the application
   */
  commonService.$inject = ['$rootScope', 'QSConstants'];
  function commonService($rootScope, QSConstants) {
    var service = {
      initTitle           : initTitle,
      isDefinedAndNotNull : isDefinedAndNotNull,
      lengthMap           : lengthMap,
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