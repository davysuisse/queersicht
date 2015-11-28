(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('SettingsService', settingsService);

  /**
   * Get all the settings functions that are used in the application
   */
  settingsService.$inject = ['$window', 'QSConstants'];
  function settingsService($window, QSConstants) {
    var service = {
      getSetting  : getSetting,
      getSettings : getSettings,
      setSettings : setSettings
    };

    return service;

    /**
     * Get the settings from the localStorage
     * @return either a list of settings or an empty array
     */
    function getSettings() {
      return JSON.parse($window.localStorage.getItem(QSConstants.settingsKey)) || QSConstants.defaultSettings;
    }

    /**
     * Get the settings from the localStorage
     * @return either a list of settings or an empty array
     */
    function getSetting(setting) {
      // In case we ask for a setting that is new, but we do already have stored our settings
      return getSettings()[setting] || QSConstants.defaultSettings[setting];
    }

    /**
     * Set settings in the localStorage
     */
    function setSettings(settings) {
      settings = angular.extend({}, settings); // To be able to stringify, it's needed to wrap it in an object
      $window.localStorage.setItem(QSConstants.settingsKey, JSON.stringify(settings));
    }
  }
})();