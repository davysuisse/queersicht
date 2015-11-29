(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('StorageService', storageService);

  /**
   * Get all the possibilities to store objects in localStorage that are used in the application
   */
  storageService.$inject = ['$window', 'CommonService'];
  function storageService($window, CommonService) {
    var service = {
      addObjectInStorage    : addObjectInStorage,
      deleteObjectInStorage : deleteObjectInStorage,
      isObjectInStorage     : isObjectInStorage,
      getObjectInStorage    : getObjectInStorage,
      setObjectInStorage    : setObjectInStorage
    };

    return service;

    /**
     * @parameter objectToAdd is the object that we want to add in the localStorage
     */
    function addObjectInStorage(key, objectToAdd) {
      if (isValidObject(objectToAdd)) {
        var object = getObjectInStorage(key);
        if (object.indexOf(key, objectToAdd) < 0) {
          object.push(objectToAdd);
          $window.localStorage.setItem(key, JSON.stringify(object));
        }
      }
    }

    /**
     * Delete a Object from the localStorage
     * @parameter objectToDelete is the object that we want to delete
     */
    function deleteObjectInStorage(key, objectToDelete) {
      if (isValidObject(objectToDelete)) {
        var object = getObjectInStorage(key);
        var idx    = object.indexOf(objectToDelete);
        if (idx > -1) {
          object.splice(idx, 1);
          setObjectInStorage(key, object);
        }
      }
    }

    /**
     * Test if the object is already in the localStorage
     * @parameter object
     * return {boolean}
     */
    function isObjectInStorage(key, objectToTest) {
      if (isValidObject(objectToTest)) {
        var list = getObjectInStorage(key);
        for (var i in list) {
          if (angular.equals(CommonService.stringify(list[i]), CommonService.stringify(objectToTest))) {
            return true;
          }
        }
      }
      return false;
    }

    /**
     * Tells if an object is defined
     * @returns {*|boolean}
     */
    function isValidObject(obj) {
      return CommonService.isDefinedAndNotNull(obj);
    }

    /**
     * Get the object from the localStorage
     * @return either a list of object or an empty array
     */
    function getObjectInStorage(key) {
      return JSON.parse($window.localStorage.getItem(key) || '[]');
    }

    /**
     * Set object in the localStorage
     */
    function setObjectInStorage(key, object) {
      $window.localStorage.setItem(key, JSON.stringify(object));
    }
  }
})();