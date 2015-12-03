(function () {
  'use strict';

  var mysql   = require("mysql");
  var express = require('express');
  var app     = express();
  var router  = express.Router();

  // Configuration of the DB
  var con = mysql.createConnection({
    host     : "localhost",
    user     : "clauded", // To change
    password : "clauded", // To change
    database : "queersicht"
  });

  // Connecting the database
  con.connect(function (err) {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  /**
   * Movies are organized per program, because a movie can appear in two programs.
   * This route will get all the programs
   */
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

          // Further information of the movie
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
        description_de : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
        description_fr : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
        time    : '30.09.2015 18:15'
      },
      {
        title   : 'Zweite Chance',
        description_de : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
        description_fr : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...',
        time    : '30.09.2015 21:30'
      }
    ]);
  });

  // The application will be able to call our REST api with a different url
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use('/api', router);

  app.listen(8081);

})();