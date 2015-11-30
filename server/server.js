(function () {
  'use strict';

  var express = require('express');
  var app     = express();
  var router  = express.Router();

  var mysql = require("mysql");

  // First you need to create a connection to the db
  var con = mysql.createConnection({
    host     : "localhost",
    user     : "clauded",
    password : "****",
    database : "queersicht"
  });

  con.connect(function (err) {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  router.get('/program', function (req, res) {
    con.query('SELECT * FROM program, movie where program.movie_id = movie.id order by movie.title', function (err, rows) {
      if (err) throw err;

      var programs = [];
      if (rows) {
        rows.forEach(function (row) {
          var movie = {};

          // Program
          movie.id     = row.programId;
          movie.date   = row.date;
          movie.cinema = row.cinema;

          // Movie
          movie.title          = row.title;
          movie.image          = row.image;
          movie.description_de = row.description_de;
          movie.description_fr = row.description_fr;

          movie.informations          = {};
          movie.informations.duration = row.duration;
          movie.informations.year     = row.year;
          movie.informations.country  = row.country;
          movie.informations.language = row.language;
          movie.informations.subtitle = row.subtitle;
          movie.informations.autor    = row.autor;

          programs.push(movie);
        });
      }

      res.json(programs);
    });
  });

  router.get('/news', function (req, res) {
    res.json([
      {
        title   : 'Ostwind 2',
        summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
        time    : '18:15'
      },
      {
        title   : 'Zweite Chance',
        image   : 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg',
        summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...',
        time    : '21:30'
      }
    ]);
  });

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use('/api', router);

  app.listen(8081);

})();