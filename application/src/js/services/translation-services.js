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
      getDescription      : getDescription,
      getLanguage         : getLanguage,
      getMoment           : getMoment,
      getMomentFromString : getMomentFromString,
      getTitle            : getTitle,
      setLanguage         : setLanguage
    };

    return service;

    /**
     * @public
     * Set language if defined, otherwise set a default or current one
     * @param language
     */
    function setLanguage(language) {
      if (CommonService.isDefined(language)) {
        $translate.use(language);
      } else {
        $translate.use(getLanguage());
      }
    }

    /**
     * @public
     * Get the current language or the default one if none
     * @returns {Object|string|string}
     */
    function getLanguage() {
      return $translate.use() || QSConstants.defaultSettings.selectedLanguage;
    }


    /**
     * @public
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
     * @public
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

    /**
     * @public
     * Get a date with a specific format and the current language
     * @param date
     * @param format
     * @returns {string|*}
     */
    function getMoment(date, format) {
      return moment(date).locale(getLanguage()).format(format);
    }

    /**
     * @public
     * Get a date with a specific format and the current language from a known format
     * @param date
     * @param beforeFormat
     * @param afterFormat
     * @returns {string|*}
     */
    function getMomentFromString(date, beforeFormat, afterFormat) {
      return moment(date, beforeFormat).locale(getLanguage()).format(afterFormat);
    }
  }
})();