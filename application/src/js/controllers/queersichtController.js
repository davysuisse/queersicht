(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = ['$scope', 'QSConstants', 'TranslationService', 'SettingsService'];
  function queersichtController($scope, QSConstants, TranslationService, SettingsService) {
    var vm = this;

    vm.settings = SettingsService;

    init();

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      vm.navigation = args.title;
    });

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.loadingSpinner, function (event, args) {
      vm.loading = args.loading;
    });

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.errorMessage, function (event, args) {
      vm.errorMessage = args.error;
    });

    // Applying null, will set the actual language
    function init() {
      TranslationService.setLanguage(null);
    }
  }
})();