/**
 * Created by Davy Claude on 28.11.2015.
 */
(function () {
  'use strict';

  angular.module('Queersicht.services')
    .config(httpInterceptor)
    .factory('QSHttpInterceptor', qsHttpInterceptor);

  qsHttpInterceptor.$inject = ['$q', 'CommonService'];
  function qsHttpInterceptor($q, CommonService) {
    return {
      'request' : function (config) {
        CommonService.loadingSpinner(true);
        return config;
      },

      'requestError' : function (rejection) {
        CommonService.loadingSpinner(true);
        return $q.reject(rejection);
      },

      'response' : function (response) {
        CommonService.loadingSpinner(false);
        return response;
      },

      'responseError' : function (rejection) {
        CommonService.loadingSpinner(false);
        return $q.reject(rejection);
      }
    };
  }

  httpInterceptor.$inject = ['$httpProvider'];
  function httpInterceptor($httpProvider) {
    $httpProvider.interceptors.push('QSHttpInterceptor');
  }
})();