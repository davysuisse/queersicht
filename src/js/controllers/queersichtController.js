(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = ['$scope', 'QSConstants'];
  function queersichtController($scope, QSConstants) {
    var vm = this;

    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      affectTitle(args.title);
    });

    function affectTitle(title) {
      vm.navigation = title;
    }
  }
})();