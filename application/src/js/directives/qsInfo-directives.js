(function () {
  'use strict';

  angular.module('Queersicht.directives')
    .controller('InfoController', infoController)
    .directive('qsInfo', qsInfo);

  infoController.$inject = ['$filter', 'CommonService'];
  function infoController($filter, CommonService) {
    var vm = this;

    vm.getKeys = CommonService.getKeys;
    vm.init    = init;

    /**
     * @public
     * Initialize the movie's information and translate it
     */
    function init() {
      vm.infos = {};

      if (CommonService.isDefined(vm.movie.informations)) {
        angular.forEach(vm.movie.informations, function (value, key) {
          // Translate keys and values
          var myKey       = $filter('translate')($filter('uppercase')(key));
          vm.infos[myKey] = $filter('translate')(value);

        }, vm.infos);
      }
    }
  }

  /**
   * Directive that shows information from a movie
   */
  qsInfo.$inject = ['$templateCache'];
  function qsInfo($templateCache) {
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