(function () {
    'use strict';

    angular.module('Queersicht.services')
        .factory('BackHistoryService', backHistoryService);

    /**
     * Manage the back buttons
     */
    backHistoryService.$inject = ['$rootScope', '$state'];
    function backHistoryService($rootScope, $state) {
        var history = [];

        var service = {
            goBack: goBack,
            isBackPossible: isBackPossible,
            setHistory: setHistory
        };

        return service;

        // Each time the location changes its name, this function will be cast
        function setHistory(path) {
            history.push(path);
        }

        // Go to the previous path
        function goBack() {
            var prevUrl = history.length > 1 ? history.splice(-1)[0] : {
                route: "movie",
                params: ''
            };
            if (prevUrl.params) {
                $state.go(prevUrl.route, prevUrl.params);
            } else {
                $state.go(prevUrl.route);
            }
        }

        function isBackPossible() {
            return history.length > 0;
        }
    }
})();