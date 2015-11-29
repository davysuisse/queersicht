(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('SharedItemsService', sharedItemsService);

  /**
   * Get all the shared items that are used in the application
   */
  function sharedItemsService() {
    // Defined variables that will be setted and getted by the application
    var title           = undefined,
        refreshCallback = undefined,
        errorMessage    = undefined,
        isLoading       = undefined;

    return {
      title           : title,
      refreshCallback : refreshCallback,
      errorMessage    : errorMessage,
      isLoading       : isLoading
    };
  }
})();