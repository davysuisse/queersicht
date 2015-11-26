(function () {
  'use strict';

  angular.module('Queersicht.services')
    .factory('RestCallService', restCallService);

  /**
   * Get all the REST calls for the application
   */
  restCallService.$inject = ['$http', 'QSConstants'];
  function restCallService($http, QSConstants) {
    var service = {
      getDetail           : getDetail,
      getProgramPerMovie  : getProgramPerMovie,
      getProgramPerCinema : getProgramPerCinema,
      getProgramPerDate   : getProgramPerDate,

      // MOCKS
      getDetailMock       : getDetailMock,
      getMovies           : getMovies,
      getCinemas          : getCinemas,
      getDates            : getDates
    };

    return service;

    /**
     * Get a detail of a movie from its id
     * @param id
     * @return a movie
     */
    function getDetail(id) {
      return $http.get(getUrl('/detail/' + id));
    }

    /**
     * Get a list of movies sorted by movies
     * @returns list []
     */
    function getProgramPerMovie() {
      return $http.get(getUrl('/programs/movies'));
    }

    /**
     * Get a list of movies sorted by cinemas
     * @returns list []
     */
    function getProgramPerCinema() {
      return $http.get(getUrl('/programs/cinemas'));
    }

    /**
     * Get a list of movies sorted by dates
     * @returns list []
     */
    function getProgramPerDate() {
      return $http.get(getUrl('/programs/dates'));
    }

    function getUrl(partialPath){
      return QSConstants.urlService + partialPath;
    }

    // TODO : To Delete when api created
    function getDetailMock() {
      return {
        id          : '2',
        title       : 'Pitch Perfect 2',
        image       : 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg',
        text        : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers mit einem furiosen A-Cappella-Auftritt gewonnen haben. Mittlerweile sind Fat Amy (Rebel Wilson) und Beca (Anna Kendrick) in den letzten Zügen ihres Studiums an der Barden Universität und bereiten sich darauf vor, schon bald in der Berufswelt Fuß zu fassen – Beca verbringt außerdem viel Zeit mit ihrem neuen Freund Jesse (Skylar Astin). Und so ist allen in der Gesangsgruppe klar, dass sie bald getrennte Wege gehen müssen. Aber wie soll es da mit der gemeinsamen Freundschaft weitergehen? Diese Frage stellen sich alle Barden Bellas, unter ihnen auch Chloe (Brittany Snow), Stacie (Alexis Knapp), Emily (Hailee Steinfeld) und Lilly Okanakamura (Hana Mae Lee). Angesichts dieses unangenehmen Themas ist den Mädels Ablenkung sehr recht, wie sie in Form der A-Capella-Weltmeisterschaft in Kopenhagen ansteht…',
        description : {
          'Time'     : '21:30',
          'Country'  : 'USA',
          'Autor'    : 'Thomas Vorwerk',
          'Duration' : '120',
          'Cinema'   : 'Cinematte'
        }
      };
    }

    // TODO : To Delete when api created
    function getMovies() {
      return [
        {
          id      : '1',
          title   : 'Mad Max: Fury Road',
          image   : 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg',
          summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...',
          time    : '20:30'
        },
        {
          id      : '3',
          title   : 'Ostwind 2',
          image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg',
          summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
          time    : '18:15'
        },
        {
          id      : '2',
          title   : 'Pitch Perfect 2',
          image   : 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg',
          summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...',
          time    : '21:30'
        },
        {
          id      : '4',
          title   : 'Zweite Chance',
          image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg',
          summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...',
          time    : '21:30'
        }
      ];
    }

    // TODO : To Delete when api created
    function getCinemas() {
      return {
        'Cinematte'  : [
          {
            id      : '1',
            title   : 'Mad Max: Fury Road',
            image   : 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg',
            summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...',
            time    : '20:30'
          }
        ],
        'KellerKino' : [
          {
            id      : '3',
            title   : 'Ostwind 2',
            image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg',
            summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
            time    : '18:15'
          },
          {
            id      : '2',
            title   : 'Pitch Perfect 2',
            image   : 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg',
            summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...',
            time    : '21:30'
          },
          {
            id      : '4',
            title   : 'Zweite Chance',
            image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg',
            summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...',
            time    : '21:30'
          }
        ]
      };
    }

    // TODO : To Delete when api created
    function getDates() {
      return {
        '12.03.2015' : [
          {
            id      : '1',
            title   : 'Mad Max: Fury Road',
            image   : 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg',
            summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...',
            time    : '20:30'
          },
          {
            id      : '2',
            title   : 'Pitch Perfect 2',
            image   : 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg',
            summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...',
            time    : '21:30'
          }
        ],
        '13.03.2015' : [
          {
            id      : '3',
            title   : 'Ostwind 2',
            image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg',
            summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
            time    : '18:15'
          },
          {
            id      : '4',
            title   : 'Zweite Chance',
            image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg',
            summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...',
            time    : '21:30'
          }
        ]
      };
    }
  }
})();