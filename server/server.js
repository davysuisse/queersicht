(function () {
  'use strict';

  var mysql   = require("mysql");
  var express = require('express');
  var fs      = require('fs');
  var buffer  = require('buffer');

  var app         = express();
  var router      = express.Router();

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
    con.query('SELECT * FROM program, movie where program.movie_id = movie.movieId order by movie.title', function (err, rows) {
      if (err) throw err;

      var programs = [];
      if (rows) {
        rows.forEach(function (row) {
          var movie = {};

          // Program
          movie.id      = row.programId;
          movie.movieId = row.movieId;
          movie.date    = row.date;
          movie.cinema  = row.cinema;

          // Movie
          movie.title          = row.title;
          movie.image          = row.image;
          movie.image          = encodeImage(row.image);
          movie.description_de = row.description_de;
          movie.description_fr = row.description_fr;

          // Further information of the movie
          movie.informations          = {};
          movie.informations.duration = row.duration;
          movie.informations.year     = row.year;
          movie.informations.country  = row.country;
          movie.informations.language = row.language;
          movie.informations.subtitle = row.subtitle;
          movie.informations.author    = row.author;

          programs.push(movie);
        });
      }

      res.json(programs);
    });
  });

  /**
   * News appear in the home page of the application.
   * This route will get the 10 last news
   */
  router.get('/news', function (req, res) {
    con.query('SELECT * FROM news ORDER BY newsId DESC LIMIT 10', function (err, rows) {
      if (err) throw err;

      var newsList = [];
      if (rows) {
        rows.forEach(function (row) {
          var news = {};

          // News
          news.id             = row.newsId;
          news.date           = row.date;
          news.image          = encodeImage(row.image);
          news.title          = row.title;
          news.title_fr       = row.title_fr;
          news.description_de = row.description_de;
          news.description_fr = row.description_fr;

          newsList.push(news);
        });
      }

      res.json(newsList);
    });
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

  function encodeImage(file) {
    var path = (file) ? file : 'images/default/queersicht.png';
    // read binary data
    var image = fs.readFileSync(path);
    // convert binary data to base64 encoded string
    return new Buffer(image).toString('base64');
  }

})();