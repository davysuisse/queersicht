(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = ['TranslationService', 'SettingsService', 'CommonService', 'SharedItemsService'];
  function queersichtController(TranslationService, SettingsService, CommonService, SharedItemsService) {
    var vm = this;

    vm.cleanErrorMessage  = cleanErrorMessage;
    vm.isRefreshAvailable = isRefreshAvailable;
    vm.sharedItemsService = SharedItemsService;
    vm.settings           = SettingsService;

    init();

    // Applying null, will set the actual language or default one
    function init() {
      TranslationService.setLanguage(null);
    }

    function isRefreshAvailable() {
      return vm.settings.getSetting('selectedSaveStorage') && CommonService.isDefinedAndNotNull(vm.sharedItemsService.refreshCallback);
    }

    function cleanErrorMessage() {
      console.log("dsad");
      vm.sharedItemsService.errorMessage = undefined;
    }
  }
})();