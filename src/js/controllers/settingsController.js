(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('SettingsController', settingsController);

  /**
   * Manage the settings page
   */
  settingsController.$inject = ['CommonService', 'QSConstants', 'SettingsService', '$filter', '$translate'];
  function settingsController(CommonService, QSConstants, SettingsService, $filter, $translate) {
    var vm = this;

    vm.getLabel      = getLabel;
    vm.applyLanguage = applyLanguage;

    init();

    function init() {
      CommonService.initTitle("SETTINGS_TITLE");

      vm.settings        = SettingsService.getSettings() || {};
      vm.languageOptions = QSConstants.languageOptions;
    }

    function getLabel(value) {
      return $filter('translate')(value);
    }

    function applyLanguage() {
      if (CommonService.isDefinedAndNotNull(vm.settings.selectedLanguage)) {
        $translate.use(vm.settings.selectedLanguage);
      }

      saveSettings();
    }

    function saveSettings() {
      SettingsService.setSettings(vm.settings);
    }
  }
})();
