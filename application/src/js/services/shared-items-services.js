(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('SharedItemsService', sharedItemsService);

  function sharedItemsService() {
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