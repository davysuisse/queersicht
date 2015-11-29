(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = [
    'TranslationService', 'SettingsService', 'CommonService', 'SharedItemsService'
  ];
  function queersichtController(TranslationService, SettingsService, CommonService, SharedItemsService) {
    var vm = this;

    vm.isRefresh          = isRefresh;
    vm.sharedItemsService = SharedItemsService;
    vm.settings           = SettingsService;

    init();

    // Applying null, will set the actual language
    function init() {
      TranslationService.setLanguage(null);
    }

    function isRefresh() {
      return vm.settings.getSetting('selectedSaveStorage') && CommonService.isDefinedAndNotNull(vm.sharedItemsService.refreshCallback);
    }
  }
})();