(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  /**
   * Get all the common functions that are used in the application
   */
  commonService.$inject = ['$state', '$rootScope'];
  function commonService($state, $rootScope) {
    var service = {
      initTitle           : initTitle,
      lengthMap           : lengthMap,
      goDetail            : goDetail,
      isDefinedAndNotNull : isDefinedAndNotNull
    };

    return service;

    function initTitle(myTitle) {
      $rootScope.$broadcast('menu-title', {
        title : myTitle
      });
    }

    function goDetail(movieId) {
      $state.go('detail', {
        id : movieId
      });
    }

    function lengthMap(map) {
      return Object.keys(map).length;
    }

    function isDefinedAndNotNull(obj) {
      return angular.isDefined(obj) && obj != null;
    }
  }
})();