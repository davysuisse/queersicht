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

    function setLanguage(language) {
      if (CommonService.isDefinedAndNotNull(language)) {
        $translate.use(language);
      } else {
        $translate.use(getLanguage());
      }
    }

    function getLanguage() {
      return $translate.use() || $translate.preferredLanguage() || QSConstants.defaultSettings.selectedLanguage;
    }
  }
})();