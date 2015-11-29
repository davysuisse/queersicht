(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('SharedItemsService', sharedItemsService);

  /**
   * Get all the shared items that are used in the application
   */
  function sharedItemsService() {
    var title           = undefined,
        refreshCallback = undefined,
        errorMessage    = undefined,
        isLoading       = undefined;

    var service = {
      title           : title,
      refreshCallback : refreshCallback,
      errorMessage    : errorMessage,
      isLoading       : isLoading
    };

    return service;

  }
})();