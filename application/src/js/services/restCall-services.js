(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('RestCallService', restCallService);

  restCallService.$inject = ['$http', 'QSConstants', 'SettingsService', 'StorageService', '$q'];
  function restCallService($http, QSConstants, SettingsService, StorageService, $q) {
    var service = {
      callService  : callService,
      forceService : forceService
    };

    return service;

    /**
     * @public
     * Call the REST api from server (if not already in local)
     * @param service
     * @return {*}
     */
    function callService(service) {
      if (SettingsService.getSetting(QSConstants.saveStorageProperty)) {
        var objectInStorage = StorageService.getObjectInStorage(service.key);
        if (objectInStorage != null) {
          var defer = $q.defer();
          defer.resolve({'data' : objectInStorage});
          return defer.promise;
        }
      }
      return forceService(service);
    }

    /**
     * @public
     * Call the REST api from server
     * @param service
     * @returns {*}
     */
    function forceService(service) {
      var defer = $q.defer();
      $http.get(getUrl(service.url), {timeout: QSConstants.maxTimeout}).then(function (response) {
        StorageService.setObjectInStorage(service.key, response.data);
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    /**
     * @private
     * Get the full path
     * @param partialPath
     * @returns string of the full path
     */
    function getUrl(partialPath) {
      return QSConstants.urlService + partialPath;
    }
  }
})();