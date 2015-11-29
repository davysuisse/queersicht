/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangFr', qsLangFr());

  function qsLangFr() {
    return {
      DETAIL_TITLE            : 'Détail',
      ERROR_500               : 'Erreur: Le serveur n\'est pour le moment pas disponible. Veuillez réessayer plus tard.',
      ERROR_TITLE             : 'Erreur',
      FAVORIS_TITLE           : 'Favoris',
      LANG_GERMAN             : 'Allemand',
      LANG_ENGLISH            : 'Anglais',
      LANG_FRENCH             : 'Français',
      LANGUAGE_SETTINGS_TITLE : 'Langue',
      LOCAL_MOVIE_TITLE       : 'Sauvegarder le programme',
      MENU                    : 'Menu',
      NEWS_TITLE              : 'News',
      NO                      : 'Non',
      PROG_PER_CINEMA_TITLE   : 'Programme par cinéma',
      PROG_PER_DATE_TITLE     : 'Programme par date',
      PROG_PER_MOVIE_TITLE    : 'Programme par film',
      SETTINGS_TITLE          : 'Configurations',
      SPINNER_TITLE           : 'Icône de chargement',
      YES                     : 'Oui'
    };
  }

})();