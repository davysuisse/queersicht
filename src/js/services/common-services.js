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

    function initTitle(myTitle) {
      $rootScope.$broadcast(QSConstants.broadCastTitle, {
        title : myTitle
      });
    }

    function isDefinedAndNotNull(obj) {
      return angular.isDefined(obj) && obj != null;
    }

    function lengthMap(map) {
      return Object.keys(map).length;
    }

    function stringify(obj) {
      return '' + obj;
    }
  }
})();