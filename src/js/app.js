angular.module('Queersicht', [
  'ngRoute',
  'mobile-angular-ui',
  'Queersicht.controllers.Program',
  'Queersicht.services.ProgramService',
  'Queersicht.directives.MoviesDirective'
])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {templateUrl:'program_per_movie.html', controller: 'ProgramPerMovieController', reloadOnSearch:false})
  .when('/favoris', {templateUrl:'favoris.html', controller: 'FavorisController', reloadOnSearch:false})
  .when('/date', {templateUrl:'program_per_date.html', controller: 'ProgramPerDateController', reloadOnSearch:false})
  .when('/movie', {templateUrl:'program_per_movie.html', controller: 'ProgramPerMovieController', reloadOnSearch:false})
  .when('/cinema', {templateUrl:'program_per_cinema.html', controller: 'ProgramPerCinemaController', reloadOnSearch:false})
  .when('/detail/:id', {templateUrl:'detail.html', controller: 'ProgramDetailController', reloadOnSearch:false})
  .otherwise('/');
});