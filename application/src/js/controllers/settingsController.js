(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('SettingsController', settingsController);

  /**
   * Manage the settings page
   */
  settingsController.$inject = ['CommonService', 'SettingsService', '$filter', 'TranslationService', 'QSConstants'];
  function settingsController(CommonService, SettingsService, $filter, TranslationService, QSConstants) {
    var vm = this;

    vm.getLabel      = getLabel;
    vm.applyLanguage = applyLanguage;
    vm.resetSettings = resetSettings;
    vm.saveSettings  = saveSettings;

    init();

    function init() {
      CommonService.init("SETTINGS_TITLE");

      vm.settings = SettingsService.getSettings();

      // Language is stored elsewhere (angular-translate)
      vm.selectedLanguage = TranslationService.getLanguage();

      saveSettings();
    }

    /**
     * Get the key value of a translation
     * @param value
     * @returns the translated value or an empty string
     */
    function getLabel(value) {
      return $filter('translate')(value);
    }

    // Apply language setting and save the settings afterwards
    function applyLanguage() {
      TranslationService.setLanguage(vm.selectedLanguage);
      saveSettings();
    }

    // Store the settings in the local storage
    function saveSettings() {
      SettingsService.setSettings(vm.settings);
    }

    function resetSettings() {
      vm.settings = QSConstants.defaultSettings;

      // Language settings
      TranslationService.setLanguage(QSConstants.defaultSettings.selectedLanguage);
      vm.selectedLanguage = TranslationService.getLanguage();

      saveSettings();
    }
  }
})();
