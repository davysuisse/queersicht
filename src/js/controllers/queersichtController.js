(function() {
  'use strict';

  angular.module('Queersicht.controllers').controller('QueersichtController',
          queersichtController)

  /**
   * The Queersicht Controlle [MainController]
   */
  queersichtController.$inject = ['$scope'];
  function queersichtController($scope) {
    var vm = this;

    $scope.$on('menu-title', function(event, args) {
      affectTitle(args.title);
    });

    function affectTitle(title) {
      vm.navigation = title;
    }
  }
})();