var express = require('express');
var app     = express();
var router  = express.Router();

/**
 * Get a basic message from queersicht application
 */
router.get('/detail/:id', function (req, res) {
  res.json({
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
  });
});

router.get('/program/movies', function (req, res) {
  res.json([
    {
      id      : '1',
      title : 'Mad Max: Fury Road',
      image : 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg',
      summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...',
      time    : '20:30'
    },
    {
      id      : '3',
      title : 'Ostwind 2',
      image : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg',
      summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
      time    : '18:15'
    },
    {
      id      : '2',
      title : 'Pitch Perfect 2',
      image : 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg',
      summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...',
      time    : '21:30'
    },
    {
      id      : '4',
      title : 'Zweite Chance',
      image : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg',
      summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...',
      time    : '21:30'
    }]);
});

router.get('/program/cinemas', function (req, res) {
  res.json({
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
  });
});

router.get('/program/dates', function (req, res) {
  res.json({
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
  });
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', router);

app.listen(8081);