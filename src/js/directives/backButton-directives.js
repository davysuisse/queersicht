(function () {
    'use strict';

    angular.module('Queersicht.directives')
        .directive('backButton', backButtonDirective);

    /**
     * Directive that shows a movie preview
     */
    backButtonDirective.$inject = ['BackHistoryService'];
    function backButtonDirective(BackHistoryService) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.bind('click', goBack);

                function goBack() {
                    BackHistoryService.goBack();
                }

                scope.$watch('BackHistoryService.isBackPossible', function (newVal) {
                    if (newVal === 'true') {
                        element.addClass('disabled');
                    } else {
                        element.removeClass('disabled');
                    }
                });
            }
        };
    }
})();