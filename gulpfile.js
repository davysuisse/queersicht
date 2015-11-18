/*=====================================
 =        Default Configuration        =
 =====================================*/

// Please use config.js to override these selectively:

var config = {
  dest          : 'www',
  cordova       : true,
  minify_images : true,

  vendor : {
    js : [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/js/scripts/mobile-angular-ui.js'
    ],

    fonts : [
      './node_modules/font-awesome/fonts/fontawesome-webfont.*',
      './src/css/GloberRegular.otf'
    ]
  },

  server : {
    host : '0.0.0.0',
    port : '8000'
  },

  weinre : {
    httpPort     : 8001,
    boundHost    : 'localhost',
    verbose      : false,
    debug        : false,
    readTimeout  : 5,
    deathTimeout : 15
  }
};


if (require('fs').existsSync('./config.js')) {
  var configFn = require('./config');
  configFn(config);
}

/*-----  End of Configuration  ------*/


/*========================================
 =            Requiring stuffs            =
 ========================================*/

var gulp           = require('gulp'),
    seq            = require('run-sequence'),
    connect        = require('gulp-connect'),
    sourcemaps     = require('gulp-sourcemaps'),
    cssmin         = require('gulp-cssmin'),
    concat         = require('gulp-concat'),
    rimraf         = require('gulp-rimraf'),
    imagemin       = require('gulp-imagemin'),
    pngcrush       = require('imagemin-pngcrush'),
    templateCache  = require('gulp-angular-templatecache'),
    ngAnnotate     = require('gulp-ng-annotate'),
    replace        = require('gulp-replace'),
    ngFilesort     = require('gulp-angular-filesort'),
    streamqueue    = require('streamqueue'),
    rename         = require('gulp-rename'),
    path           = require('path'),
    jasmineBrowser = require('gulp-jasmine-browser'),
    watch          = require('gulp-watch');

/*================================================
 =            Report Errors to Console            =
 ================================================*/

gulp.on('error', function (e) {
  throw(e);
});


/*=========================================
 =            Clean dest folder            =
 =========================================*/

gulp.task('clean', function () {
  return gulp.src([
      path.join(config.dest, 'index.html'),
      path.join(config.dest, 'images'),
      path.join(config.dest, 'css'),
      path.join(config.dest, 'js'),
      path.join(config.dest, 'fonts')
    ], {read : false})
    .pipe(rimraf());
});


/*==========================================
 =            Start a web server            =
 ==========================================*/

gulp.task('connect', function () {
  if (typeof config.server === 'object') {
    connect.server({
      root       : config.dest,
      host       : config.server.host,
      port       : config.server.port,
      livereload : true
    });
  } else {
    throw new Error('Connect is not configured');
  }
});


/*==============================================================
 =            Setup live reloading on source changes            =
 ==============================================================*/

gulp.task('livereload', function () {
  gulp.src(path.join(config.dest, '*.html'))
    .pipe(connect.reload());
});


/*=====================================
 =            Minify images            =
 =====================================*/

gulp.task('images', function () {
  var stream = gulp.src('src/images/**/*');

  if (config.minify_images) {
    stream = stream.pipe(imagemin({
      progressive : true,
      svgoPlugins : [{removeViewBox : false}],
      use         : [pngcrush()]
    }));
  }

  return stream.pipe(gulp.dest(path.join(config.dest, 'images')));
});


/*==================================
 =            Copy fonts            =
 ==================================*/

gulp.task('fonts', function () {
  return gulp.src(config.vendor.fonts)
    .pipe(gulp.dest(path.join(config.dest, 'fonts')));
});


/*=================================================
 =            Copy html files to dest              =
 =================================================*/

gulp.task('html', function () {
  var inject = [];
  gulp.src(['src/html/**/*.html'])
    .pipe(replace('<!-- inject:js -->', inject.join('\n    ')))
    .pipe(gulp.dest(config.dest));
});

/*====================================================================
 =            Compile and minify js generating source maps            =
 ====================================================================*/
// - Orders ng deps automatically
// - Precompile templates to ng templateCache

gulp.task('js', function () {
  streamqueue({objectMode : true},
    gulp.src(config.vendor.js),
    gulp.src('./src/js/**/*.js').pipe(ngFilesort()),
    gulp.src(['src/templates/**/*.html']).pipe(templateCache({module : 'Queersicht'}))
  )
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(rename({suffix : '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(config.dest, 'js')));
});

/*====================================================================
 =            Compile and minify css                                  =
 ====================================================================*/
// - Orders ng deps automatically
// - Precompile templates to ng templateCache

gulp.task('css', function () {
  gulp.src('./src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest(path.join(config.dest, 'css')))
});

/*===================================================================
 =            Watch for source changes and rebuild/reload            =
 ===================================================================*/

gulp.task('watch', function () {
  if (typeof config.server === 'object') {
    gulp.watch([config.dest + '/**/*'], ['livereload']);
  }
  gulp.watch(['./src/html/**/*'], ['html']);
  gulp.watch(['./src/js/**/*', './src/templates/**/*', config.vendor.js], ['js']);
  gulp.watch(['./src/css/*'], ['css']);
  gulp.watch(['./src/images/**/*'], ['images']);
});


/*===================================================
 =            Starts a Weinre Server                 =
 ===================================================*/

gulp.task('weinre', function () {
  if (typeof config.weinre === 'object') {
    var weinre = require('./node_modules/weinre/lib/weinre');
    weinre.run(config.weinre);
  } else {
    throw new Error('Weinre is not configured');
  }
});


/*======================================
 =            Build Sequence            =
 ======================================*/

gulp.task('build', function (done) {
  var tasks = ['html', 'fonts', 'images', 'js', 'css'];
  seq('clean', tasks, done);
});

/*====================================
 =            Jasmine Task            =
 ====================================*/

gulp.task('jasmine-browser', function () {
  var filesForTest = ['src/**/*.js', 'spec/**/*.spec.js'];
  return streamqueue({objectMode : true},
    gulp.src(config.vendor.js),
    gulp.src(filesForTest))
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port : 8888}));
});

/*====================================
 =            Default Task            =
 ====================================*/

gulp.task('default', function (done) {
  var tasks = [];

  if (typeof config.weinre === 'object') {
    tasks.push('weinre');
  }

  if (typeof config.server === 'object') {
    tasks.push('connect');
  }

  tasks.push('watch');


  seq('build', tasks, done);
});