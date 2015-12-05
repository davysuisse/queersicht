(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('InfoController', infoController)
    .directive('infoModal', infoModal);

  /**
   * Controller that manages the info's modal
   */
  infoController.$inject = ['TranslationService', '$filter'];
  function infoController(TranslationService, $filter) {
    var vm = this;

    vm.getKeys  = getKeys;
    vm.init     = init;

    function init() {
      vm.infos = {};

      angular.forEach(vm.movie.informations, function (value, key) {
        // Translate keys and values
        var myKey       = $filter('translate')($filter('uppercase')(key));
        var myValue     = $filter('translate')(value);
        vm.infos[myKey] = myValue;

      }, vm.infos);
    }

    function getKeys(infos) {
      return infos ? Object.keys(infos) : [];
    }
  }

  /**
   * Directive that shows a movie preview
   */
  infoModal.$inject = ['$templateCache'];
  function infoModal($templateCache) {
    return {
      restrict         : 'AE',
      template         : $templateCache.get('infos.html'),
      controller       : 'InfoController',
      controllerAs     : 'infoC',
      bindToController : true,
      scope            : {
        movie : '='
      }
    };
  }
})();