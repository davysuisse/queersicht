(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('InfoController', infoController)
    .directive('infoModal', infoModal);

  /**
   * Controller that manages the info's modal
   */
  infoController.$inject = ['movie', 'TranslationService', '$uibModalInstance', '$filter'];
  function infoController(movie, TranslationService, $uibModalInstance, $filter) {
    var vm = this;

    vm.movie    = movie;
    vm.getTitle = getTitle;
    vm.getKeys  = getKeys;
    vm.close    = $uibModalInstance.close;
    vm.init     = init;

    function init() {
      vm.infos = {};

      angular.forEach(movie.informations, function (value, key) {
        // Translate keys and values
        var myKey       = $filter('translate')($filter('uppercase')(key));
        var myValue     = $filter('translate')(value);
        vm.infos[myKey] = myValue;

      }, vm.infos);
    }

    function getTitle(movie) {
      return TranslationService.getTitle(movie);
    }

    function getKeys(infos) {
      return infos ? Object.keys(infos) : [];
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