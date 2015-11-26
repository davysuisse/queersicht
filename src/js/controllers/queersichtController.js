(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = ['$scope', 'QSConstants', 'TranslationService'];
  function queersichtController($scope, QSConstants, TranslationService) {
    var vm = this;

    init();

    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      affectTitle(args.title);
    });

    function affectTitle(title) {
      vm.navigation = title;
    }

    function init() {
      TranslationService.setLanguage(null); // Applying null, will set the actual language
    }
  }
})();