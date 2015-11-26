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

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      vm.navigation = args.title;
    });

    // Applying null, will set the actual language
    function init() {
      TranslationService.setLanguage(null);
    }
  }
})();