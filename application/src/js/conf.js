(function () {
  'use strict';

  angular.module('Queersicht').config(queersichtConfig);

  queersichtConfig.$inject = [
    '$stateProvider', '$urlRouterProvider', 'QSCStates', '$translateProvider', 'QSLangEn', 'QSLangFr', 'QSLangDe'
  ];
  function queersichtConfig($stateProvider, $urlRouterProvider, QSCStates, $translateProvider, QSLangEn, QSLangFr, QSLangDe) {
    $urlRouterProvider.when('', '/');
    $stateProvider.state(QSCStates.stateNews, {
      url            : '/',
      templateUrl    : 'news.html',
      controller     : 'NewsController',
      controllerAs   : 'newsC',
      reloadOnSearch : false
    }).state(QSCStates.stateSettings, {
      url            : '/settings',
      templateUrl    : 'settings.html',
      controller     : 'SettingsController',
      controllerAs   : 'settingsC',
      reloadOnSearch : false
    }).state(QSCStates.stateFavoris, {
      url            : '/favoris',
      templateUrl    : 'favoris.html',
      controller     : 'FavorisController',
      controllerAs   : 'favC',
      reloadOnSearch : false
    }).state(QSCStates.stateDate, {
      url            : '/date',
      templateUrl    : 'program_per_date.html',
      controller     : 'ProgramPerDateController',
      controllerAs   : 'ppdC',
      reloadOnSearch : false
    }).state(QSCStates.stateMovie, {
      url            : '/movie',
      templateUrl    : 'program_per_movie.html',
      controller     : 'ProgramPerMovieController',
      controllerAs   : 'ppmC',
      reloadOnSearch : false
    }).state(QSCStates.stateCinema, {
      url            : '/cinema',
      templateUrl    : 'program_per_cinema.html',
      controller     : 'ProgramPerCinemaController',
      controllerAs   : 'ppcC',
      reloadOnSearch : false
    }).state(QSCStates.stateDetail, {
      url            : '/detail',
      templateUrl    : 'detail.html',
      controller     : 'ProgramDetailController',
      controllerAs   : 'pdC',
      reloadOnSearch : false,
      params         : {
        movie : null
      }
    }).state(QSCStates.stateError, {
      url            : '/error',
      templateUrl    : 'error.html',
      controller     : 'ErrorController',
      controllerAs   : 'errorC',
      reloadOnSearch : false,
      params         : {
        callback : null
      }
    });
    $urlRouterProvider.otherwise('/');

    // Translation part
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.translations('en', QSLangEn);
    $translateProvider.translations('fr', QSLangFr);
    $translateProvider.translations('de', QSLangDe);
    $translateProvider.useLocalStorage();
  }
})();