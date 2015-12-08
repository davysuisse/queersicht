/**
 * Created by Davy Claude on 28.11.2015.
 */
(function () {
  'use strict';

  angular.module('Queersicht.services')
    .config(httpInterceptor)
    .factory('QSHttpInterceptor', qsHttpInterceptor);

  qsHttpInterceptor.$inject = ['$q', 'SharedItemsService'];
  function qsHttpInterceptor($q, SharedItemsService) {
    return {
      'request' : function (config) {
        SharedItemsService.isLoading = true;
        return config;
      },

      'requestError' : function (rejection) {
        SharedItemsService.isLoading = true;
        return $q.reject(rejection);
      },

      'response' : function (response) {
        SharedItemsService.isLoading = false;
        return response;
      },

      'responseError' : function (rejection) {
        SharedItemsService.isLoading = false;
        return $q.reject(rejection);
      }
    };
  }

  httpInterceptor.$inject = ['$httpProvider', 'QSConstants'];
  function httpInterceptor($httpProvider, QSConstants) {
    $httpProvider.defaults.timeout = QSConstants.maxTimeout;
    $httpProvider.interceptors.push('QSHttpInterceptor');
  }
})();