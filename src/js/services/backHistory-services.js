(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('BackHistoryService', backHistoryService);

  /**
   * Manage the back buttons
   */
  backHistoryService.$inject = ['$state'];
  function backHistoryService($state) {
    var history = [];

    var service = {
      goBack         : goBack,
      isBackPossible : isBackPossible,
      setHistory     : setHistory
    };

    return service;

    /**
     * Each time the location changes its name, this function will be cast
     * @param path
     */
    function setHistory(path) {
      history.push(path);
    }

    /**
     * Go back action
     */
    function goBack() {
      // If there is no history, we go to the home page (and will redirect to the 'movie' state)
      var prevUrl = history.length > 2 ? history.splice(-1)[0] : {
        route  : '',
        params : ''
      };

      if (prevUrl.params) {
        $state.go(prevUrl.route, prevUrl.params);
      } else {
        $state.go(prevUrl.route);
      }
    }

    /**
     * Is it possible to  go back ?
     * @returns {boolean}
     */
    function isBackPossible() {
      return history.length > 0;
    }
  }
})();