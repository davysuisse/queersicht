(function () {
  'use strict';

  angular.module('Queersicht').config(queersichtConfig).run(queersichtRun);

  queersichtConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'QSCStates'];
  function queersichtConfig($stateProvider, $urlRouterProvider, QSCStates) {
    $urlRouterProvider.when('', '/movie');
    $stateProvider.state(QSCStates.stateFavoris, {
      url            : '/favoris',
      templateUrl    : 'favoris.html',
      controller     : 'FavorisController',
      controllerAs   : 'favC',
      reloadOnSearch : false
    }).state(QSCStates  .stateDate, {
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