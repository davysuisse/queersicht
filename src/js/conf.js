(function () {
  'use strict';

  angular.module('Queersicht').config(queersichtConfig).run(queersichtRun);

  queersichtConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'QSConstants'];
  function queersichtConfig($stateProvider, $urlRouterProvider, QSConstants) {
    $urlRouterProvider.when('', '/movie');
    $stateProvider.state(QSConstants.stateFavoris, {
      url            : '/favoris',
      templateUrl    : 'favoris.html',
      controller     : 'FavorisController',
      controllerAs   : 'favC',
      reloadOnSearch : false
    }).state(QSConstants.stateDate, {
      url            : '/date',
      templateUrl    : 'program_per_date.html',
      controller     : 'ProgramPerDateController',
      controllerAs   : 'ppdC',
      reloadOnSearch : false
    }).state(QSConstants.stateMovie, {
      url            : '/movie',
      templateUrl    : 'program_per_movie.html',
      controller     : 'ProgramPerMovieController',
      controllerAs   : 'ppmC',
      reloadOnSearch : false
    }).state(QSConstants.stateCinema, {
      url            : '/cinema',
      templateUrl    : 'program_per_cinema.html',
      controller     : 'ProgramPerCinemaController',
      controllerAs   : 'ppcC',
      reloadOnSearch : false
    }).state(QSConstants.stateDetail, {
      url            : '/detail',
      templateUrl    : 'detail.html',
      controller     : 'ProgramDetailController',
      controllerAs   : 'pdC',
      reloadOnSearch : false,
      params         : {
        id : null
      }
    });
  }

  queersichtRun.$inject = ['$rootScope', 'BackHistoryService'];
  function queersichtRun($rootScope, BackHistoryService) {
    $rootScope.$on("$stateChangeStart", function (ev, to, toParams, from, fromParams) {
      BackHistoryService.setHistory({
        route  : from.name,
        params : fromParams
      });
    });
  }
})();