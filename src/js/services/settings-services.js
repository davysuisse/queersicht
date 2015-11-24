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
      getSettings    : getSettings,
      setSettings    : setSettings
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
     * Set settings in the localStorage
     */
    function setSettings(settings) {
      settings = angular.extend({}, settings);
      $window.localStorage.setItem(QSConstants.settingsKey, JSON.stringify(settings));
    }
  }
})();