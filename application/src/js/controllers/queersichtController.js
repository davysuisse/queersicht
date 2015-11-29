(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = [
    '$scope', 'QSConstants', 'TranslationService', 'SettingsService', 'CommonService'
  ];
  function queersichtController($scope, QSConstants, TranslationService, SettingsService, CommonService) {
    var vm = this;

    vm.isRefresh   = isRefresh;

    init();

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      vm.navigation      = args.title;
      vm.refreshCallback = args.refreshCallback;
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

    function isRefresh() {
      return SettingsService.getSetting('selectedSaveStorage') && CommonService.isDefinedAndNotNull(vm.refreshCallback);
    }
  }
})();