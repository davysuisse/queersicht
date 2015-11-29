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
      callProgram : callProgram,
      getDetail   : getDetail,
      getNews     : getNews,
      getProgram  : getProgram
    };

    return service;

    /**
     * Get news
     * @return an array of news
     */
    function getNews() {
      return $http.get(getUrl('/news'));
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
     * Get a list of movies from storage or server (Depends on the settings choice)
     * @returns a promise
     */
    function getProgram() {
      if (SettingsService.getSetting(QSConstants.saveStorageProperty)) {
        var objectInStorage = StorageService.getObjectInStorage(QSConstants.programKey);
        if (objectInStorage.length > 0) {
          var defer = $q.defer();
          defer.resolve({'data' : objectInStorage});
          return defer.promise;
        }
      }
      return callProgram();
    }

    /**
     * Get a list of movies from server and store them in local
     * @returns {*}
     */
    function callProgram() {
      var defer = $q.defer();
      $http.get(getUrl('/program')).then(function (response) {
        if (SettingsService.getSetting(QSConstants.saveStorageProperty)) {
          StorageService.setObjectInStorage(QSConstants.programKey, response.data);
        }
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function getUrl(partialPath) {
      return QSConstants.urlService + partialPath;
    }
  }
})();