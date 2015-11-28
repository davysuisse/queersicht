(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('TranslationService', translationService);

  /**
   * Get all the translate functions that are used in the application
   */
  translationService.$inject = ['QSConstants', 'CommonService', '$translate'];
  function translationService(QSConstants, CommonService, $translate) {
    var service = {
      setLanguage         : setLanguage,
      getLanguage         : getLanguage
    };

    return service;

    /**
     * Set language if defined, otherwise take default or current one
     * @param language
     */
    function setLanguage(language) {
      if (CommonService.isDefinedAndNotNull(language)) {
        $translate.use(language);
      } else {
        $translate.use(getLanguage());
      }
    }

    /**
     * Get the current language or the defaule one if none
     * @returns {Object|string|string}
     */
    function getLanguage() {
      return $translate.use() || QSConstants.defaultSettings.selectedLanguage;
    }
  }
})();