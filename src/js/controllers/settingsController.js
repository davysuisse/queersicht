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
      var l_setting      = SettingsService.defaultSettings();
      var stored_setting = SettingsService.getSettings();
      console.log(l_setting);
      console.log(stored_setting);
      console.log(angular.extend(l_setting, stored_setting));
      vm.settings        = angular.extend({}, stored_setting, l_setting);
      vm.languageOptions = QSConstants.languageOptions;

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
