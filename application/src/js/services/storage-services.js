(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('StorageService', storageService);

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
     * @public
     * Add an object in the localStorage
     * @param key
     * @param objectToAdd is the object that we want to add in the localStorage
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
     * @public
     * Delete an object in the localStorage
     * @param key
     * @param objectToDelete is the object that we want to delete in the localStorage
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
     * @public
     * Test if the object is already in the localStorage
     * @param key
     * @param objectToTest
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
     * @public
     * Get the object from the localStorage
     * @return either a list of object or an empty array
     */
    function getObjectInStorage(key) {
      return JSON.parse($window.localStorage.getItem(key) || '[]');
    }

    /**
     * @public
     * Set objects in the localStorage
     * @param key
     * @param object
     */
    function setObjectInStorage(key, objects) {
      $window.localStorage.setItem(key, JSON.stringify(objects));
    }

    /**
     * @private
     * Tell if an object is defined
     * @returns {*|boolean}
     */
    function isValidObject(obj) {
      return CommonService.isDefined(obj);
    }
  }
})();