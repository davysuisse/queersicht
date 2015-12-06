(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('CommonService', commonService);

  commonService.$inject = ['$timeout', 'QSCStates', '$injector', 'SharedItemsService'];
  function commonService($timeout, QSCStates, $injector, SharedItemsService) {
    var service = {
      errorMessage : errorMessage,
      getKeys      : getKeys,
      init         : init,
      isDefined    : isDefined,
      lengthMap    : lengthMap,
      stringify    : stringify
    };

    return service;

    /**
     * @public
     * Title of the application and the refresh callback
     * @param title
     * @param callback
     */
    function init(title, callback) {
      SharedItemsService.title           = title;
      SharedItemsService.refreshCallback = callback;
    }

    /**
     * @public
     * Display an error message and redirect to callback with its params
     * @param errorMessage to broadcast
     * @param state where to go (when retrying)
     * @param parameters of the state (if any)
     */
    function errorMessage(errorMessage, state, parameters) {
      SharedItemsService.errorMessage = errorMessage;

      $timeout(function () {
        SharedItemsService.errorMessage = undefined;
      }, 5000);

      if (isDefined(state)) {
        $injector.get('$state').go(QSCStates.stateError, {callback : state, parameters : parameters});
      }
    }

    /**
     * @public
     * Tells if the obj is defined and not null
     * @param obj
     * @returns {*|boolean}
     */
    function isDefined(obj) {
      return angular.isDefined(obj) && obj != null;
    }

    /**
     * @public
     * Determines the size of the map
     * @param map
     * @returns {Number}
     */
    function lengthMap(map) {
      return map ? Object.keys(map).length + 1 : 0;
    }

    /**
     * @public
     * Used when comparing a "possible" number with a string
     * @param obj
     * @returns {string}
     */
    function stringify(obj) {
      return '' + obj;
    }

    /**
     * @public
     * Get keys from a hash
     * @param hash
     * @returns {Array}
     */
    function getKeys(hash) {
      return hash ? Object.keys(hash) : [];
    }
  }
})();