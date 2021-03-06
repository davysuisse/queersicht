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

    /**
     * @private
     * Load the setting from the local storage and load also the actual language
     */
    function init() {
      CommonService.init("SETTINGS_TITLE");
      vm.settings = SettingsService.getSettings();
      // Language is stored elsewhere (angular-translate)
      vm.selectedLanguage = TranslationService.getLanguage();

      saveSettings();
    }

    /**
     * @public
     * Get the key value of a translation
     * @param value
     * @returns the translated value or the actual value
     */
    function getLabel(value) {
      return $filter('translate')(value);
    }

    /**
     * @public
     * Apply language and save the settings afterwards
     */
    function applyLanguage() {
      TranslationService.setLanguage(vm.selectedLanguage);
      saveSettings();
    }

    /**
     * @public
     * Store the settings in the local storage
     */
    function saveSettings() {
      SettingsService.setSettings(vm.settings);
    }

    /**
     * @public
     * By resetting, default settings will be applied.
     * Selected language will be set
     */
    function resetSettings() {
      vm.settings = QSConstants.defaultSettings;

      // Language settings
      TranslationService.setLanguage(QSConstants.defaultSettings.selectedLanguage);
      vm.selectedLanguage = TranslationService.getLanguage();

      saveSettings();
    }
  }
})();
