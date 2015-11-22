(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  /**
   * Get all the common functions that are used in the application
   */
  commonService.$inject = ['$state', '$rootScope', 'QSConstants'];
  function commonService($state, $rootScope, QSConstants) {
    var service = {
      initTitle           : initTitle,
      lengthMap           : lengthMap,
      goDetail            : goDetail,
      stringify           : stringify,
      isDefinedAndNotNull : isDefinedAndNotNull
    };

    return service;

    function initTitle(myTitle) {
      $rootScope.$broadcast(QSConstants.broadCastTitle, {
        title : myTitle
      });
    }

    function goDetail(movieId) {
      $state.go(QSConstants.stateDetail, {
        id : movieId
      });
    }

    function lengthMap(map) {
      return Object.keys(map).length;
    }

    function isDefinedAndNotNull(obj) {
      return angular.isDefined(obj) && obj != null;
    }

    function stringify(obj) {
      return '' + obj;
    }
  }
})();