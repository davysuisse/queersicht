(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = ['$scope', 'QSConstants', '$translate'];
  function queersichtController($scope, QSConstants, $translate) {
    var vm = this;

    vm.changeLanguage = changeLanguage;

    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      affectTitle(args.title);
    });

    function affectTitle(title) {
      vm.navigation = title;
    }

    function changeLanguage(lang) {
      $translate.use(lang);
    }
  }
})();