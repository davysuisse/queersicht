(function () {
  'use strict';

  angular.module('Queersicht').config(queersichtConfig).run(queersichtRun);

  queersichtConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function queersichtConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/movie');
    $stateProvider.state('favoris', {
      url            : '/favoris',
      templateUrl    : 'favoris.html',
      controller     : 'FavorisController',
      controllerAs   : 'favC',
      reloadOnSearch : false
    }).state('date', {
      url            : '/date',
      templateUrl    : 'program_per_date.html',
      controller     : 'ProgramPerDateController',
      controllerAs   : 'ppdC',
      reloadOnSearch : false
    }).state('movie', {
      url            : '/movie',
      templateUrl    : 'program_per_movie.html',
      controller     : 'ProgramPerMovieController',
      controllerAs   : 'ppmC',
      reloadOnSearch : false
    }).state('cinema', {
      url            : '/cinema',
      templateUrl    : 'program_per_cinema.html',
      controller     : 'ProgramPerCinemaController',
      controllerAs   : 'ppcC',
      reloadOnSearch : false
    }).state('detail', {
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

  queersichtRun.$inject = ['$rootScope', '$location', 'BackHistoryService'];
  function queersichtRun($rootScope, $location, BackHistoryService) {
    $rootScope.$on("$stateChangeStart", function (ev, to, toParams, from,
                                                  fromParams) {
      BackHistoryService.setHistory({
        route  : from.name,
        params : fromParams
      });
    });
  }

})();