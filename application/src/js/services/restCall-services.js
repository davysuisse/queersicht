(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('RestCallService', restCallService);

  /**
   * Get all the REST calls for the application
   */
  restCallService.$inject = ['$http', 'QSConstants', 'SettingsService', 'StorageService', '$q'];
  function restCallService($http, QSConstants, SettingsService, StorageService, $q) {
    var service = {
      callService  : callService,
      forceService : forceService,
      getDetail    : getDetail
    };

    return service;

    /**
     * Get news
     * @return an array of news
     */
    function callService(key, url) {
      if (SettingsService.getSetting(QSConstants.saveStorageProperty)) {
        var objectInStorage = StorageService.getObjectInStorage(key);
        if (objectInStorage.length > 0) {
          var defer = $q.defer();
          defer.resolve({'data' : objectInStorage});
          return defer.promise;
        }
      }
      return forceService(key, url);
    }

    /**
     * Get a list of movies from server and store them in local
     * @returns {*}
     */
    function forceService(key, url) {
      var defer = $q.defer();
      $http.get(getUrl(url)).then(function (response) {
        if (SettingsService.getSetting(QSConstants.saveStorageProperty)) {
          StorageService.setObjectInStorage(key, response.data);
        }
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    /**
     * Get a detail of a movie from its id
     * @param id
     * @return a movie
     */
    function getDetail(id) {
      return $http.get(getUrl('/detail/' + id));
    }

    /**
     * Get the full path
     * @param partialPath
     * @returns string of the full path
     */
    function getUrl(partialPath) {
      return QSConstants.urlService + partialPath;
    }
  }
})();