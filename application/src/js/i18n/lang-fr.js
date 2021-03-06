/**
 * Created by Davy Claude on 22.11.2015.
 */
(function () {
  "use strict";

  angular.module('Queersicht.constants')
    .constant('QSLangFr', qsLangFr());

  function qsLangFr() {
    return {
      AUTHOR                  : 'Auteur',
      CLOSE                   : 'Fermer',
      COUNTRY                 : 'Pays',
      DETAIL_TITLE            : 'Détail',
      DURATION                : 'Durée',
      ERROR_500               : 'Erreur: Le serveur n\'est pour le moment pas disponible. Veuillez réessayer plus tard.',
      ERROR_TITLE             : 'Erreur',
      FAVORIS_TITLE           : 'Favoris',
      ERROR_LOAD_IMAGE        : 'Une photo n\'a pas pu être chargée.',
      LANGUAGE                : 'Langue',
      LANGUAGE_SETTINGS_TITLE : 'Langue',
      LOCAL_MOVIE_TITLE       : 'Sauvegarder le programme',
      MENU                    : 'Menu',
      MORE_INFOS              : 'Infos',
      NEWS_TITLE              : 'News',
      NO                      : 'Non',
      PROG_PER_CINEMA_TITLE   : 'Programme par cinéma',
      PROG_PER_DATE_TITLE     : 'Programme par date',
      PROG_PER_MOVIE_TITLE    : 'Programme par film',
      PROGRAM                 : 'Programme',
      RESET                   : 'Réinitialiser',
      SETTINGS_TITLE          : 'Configurations',
      SPINNER_TITLE           : 'Icône de chargement',
      SUBTITLE                : 'Sous-titre',
      YEAR                    : 'Année',
      YES                     : 'Oui',

      // Country
      CH : 'Suisse',
      FR : 'France',
      GB : 'Grande Bretagne',
      GE : 'Allemagne',
      SP : 'Espagne',

      // Language
      LANG_ENGLISH : 'Anglais',
      LANG_FRENCH  : 'Français',
      LANG_GERMAN  : 'Allemand',
      LANG_RUSSIAN : 'Russe',
      LANG_SPANISH : 'Espagnol'
    };
  }

})();