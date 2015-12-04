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
      setLanguage    : setLanguage,
      getLanguage    : getLanguage,
      getDescription : getDescription,
      getTitle       : getTitle,
      getMoment      : getMoment
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


    /**
     * Determined the correct description to give
     * @param movie
     * @returns {*}
     */
    function getDescription(movie) {
      switch (getLanguage()) {
        case QSConstants.defaultSettings.languageOptions.LANG_FRENCH:
          return movie.description_fr || movie.description_de;
        default :
          return movie.description_de;
      }
    }

    /**
     * Determined the correct title to give
     * @param movie
     * @returns {*}
     */
    function getTitle(movie) {
      switch (getLanguage()) {
        case QSConstants.defaultSettings.languageOptions.LANG_FRENCH:
          return movie.title_fr || movie.title;
        default :
          return movie.title;
      }
    }

    function getMoment(date, format) {
      return moment(date).locale(getLanguage()).format(format);
    }
  }
})();