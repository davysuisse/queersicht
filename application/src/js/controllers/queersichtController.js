(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  queersichtController.$inject = ['TranslationService', 'SettingsService', 'CommonService', 'SharedItemsService'];
  function queersichtController(TranslationService, SettingsService, CommonService, SharedItemsService) {
    var vm = this;

    vm.isRefreshAvailable = isRefreshAvailable;
    vm.sharedItemsService = SharedItemsService;
    vm.settings           = SettingsService;

    init();

    /**
     * @private
     * Applying null will set the actual language or the default one
     */
    function init() {
      TranslationService.setLanguage(null);
    }

    /**
     * @public
     * To see the refresh icon:
     * 1) the user has to have chosen "SelectedSaveStorage
     * 2) this page supports the refresh by giving a callback
     * @returns {boolean}
     */
    function isRefreshAvailable() {
      return vm.settings.getSetting('selectedSaveStorage') && CommonService.isDefined(vm.sharedItemsService.refreshCallback);
    }
  }
})();