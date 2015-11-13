(function() {
  'use strict';

  angular.module('Queersicht', [
    'ui.router',
    'mobile-angular-ui',
    'Queersicht.controllers.Program',
    'Queersicht.services.ProgramService',
    'Queersicht.directives.MoviesDirective'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/movie');
    $stateProvider
    .state('favoris', {
      url: '/favoris',
      templateUrl: 'favoris.html', 
      controller: 'FavorisController', 
      controllerAs: 'favC',
      reloadOnSearch: false
    })
    .state('date', {
      url: '/date',
      templateUrl: 'program_per_date.html', 
      controller: 'ProgramPerDateController', 
      controllerAs: 'ppdC',
      reloadOnSearch: false
    })
    .state('movie', {
      url: '/movie',
      templateUrl: 'program_per_movie.html', 
      controller: 'ProgramPerMovieController', 
      controllerAs: 'ppmC',
      reloadOnSearch: false
    })
    .state('cinema', {
      url: '/cinema',
      templateUrl: 'program_per_cinema.html', 
      controller: 'ProgramPerCinemaController', 
      controllerAs: 'ppcC',
      reloadOnSearch: false
    })
    .state('detail', {
      url: '/detail',
      templateUrl: 'detail.html', 
      controller: 'ProgramDetailController', 
      controllerAs: 'pdC',
      reloadOnSearch: false,
      params: {
        id: null
      }
    });
  }]);
})();