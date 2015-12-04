(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('InfoController', infoController)
    .directive('infoModal', infoModal);

  /**
   * Controller that manages the info's modal
   */
  infoController.$inject = ['movie', 'TranslationService'];
  function infoController(movie, TranslationService) {
    var vm = this;

    vm.movie              = movie;
    vm.getTitle           = getTitle;

    function getTitle(movie) {
      return TranslationService.getTitle(movie);
    }
  }

  /**
   * Directive that shows a movie preview
   */
  infoModal.$inject = ['$templateCache', '$uibModal'];
  function infoModal($templateCache, $uibModal) {
    return {
      restrict : 'AE',
      scope    : {
        movie : '='
      },
      link     : link
    };

    function link(scope, element) {
      function openInfo() {
        $uibModal.open({
          animation    : true,
          template     : $templateCache.get('infos.html'),
          controller   : 'InfoController',
          controllerAs : 'infoC',
          size         : 'sm',
          resolve      : {
            movie : function () {
              return scope.movie;
            }
          }
        });
      }

      element.bind('click', function () {
        openInfo();
      });
    }
  }
})();