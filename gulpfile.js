/*=====================================
 =        Default Configuration        =
 =====================================*/

// Please use config.js to override these selectively:

var config = {
  dest    : 'www',
  cordova : true,

  vendor : {
    js : [
      './node_modules/angular/angular.js',
      './node_modules/angular-sanitize/angular-sanitize.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-translate/dist/angular-translate.js',
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

var concat         = require('gulp-concat'),
    connect        = require('gulp-connect'),
    cssmin         = require('gulp-cssmin'),
    gulp           = require('gulp'),
    jasmineBrowser = require('gulp-jasmine-browser'),
    minify         = require('gulp-minify'),
    ngFilesort     = require('gulp-angular-filesort'),
    path           = require('path'),
    rename         = require('gulp-rename'),
    replace        = require('gulp-replace'),
    rimraf         = require('gulp-rimraf'),
    seq            = require('run-sequence'),
    sourcemaps     = require('gulp-sourcemaps'),
    streamqueue    = require('streamqueue'),
    templateCache  = require('gulp-angular-templatecache'),
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

/*=================================================
 =            Copy images to dest                  =
 =================================================*/

gulp.task('images', function () {
  var inject = [];
  gulp.src(['src/images/**/*'])
    .pipe(gulp.dest(path.join(config.dest, 'images')));
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
    .pipe(minify())
    .pipe(gulp.dest(path.join(config.dest, 'js')));
});

gulp.task('js-dev', function () {
  streamqueue({objectMode : true},
    gulp.src(config.vendor.js),
    gulp.src('./src/js/**/*.js').pipe(ngFilesort()),
    gulp.src(['src/templates/**/*.html']).pipe(templateCache({module : 'Queersicht'}))
  )
    .pipe(sourcemaps.init())
    .pipe(concat('app-min.js'))
    .pipe(gulp.dest(path.join(config.dest, 'js')));
});


/*====================================================================
 =            Compile and minify css                                  =
 ====================================================================*/
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


/*======================================
 =            Build Sequence            =
 ======================================*/

gulp.task('build', function (done) {
  var tasks = ['html', 'fonts', 'images', 'js', 'css'];
  seq('clean', tasks, done);
});

/*======================================
 =            Build Test Sequence       =
 ======================================*/

gulp.task('build-dev', function (done) {
  var tasks = ['html', 'fonts', 'images', 'js-dev', 'css'];
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

  if (typeof config.server === 'object') {
    tasks.push('connect');
  }

  tasks.push('watch');
  tasks.push('jasmine-browser');

  seq('build', tasks, done);
});

/*====================================
 =            Dev Task            =
 ====================================*/

gulp.task('dev', function (done) {
  var tasks = [];

  if (typeof config.server === 'object') {
    tasks.push('connect');
  }

  tasks.push('watch');
  tasks.push('jasmine-browser');

  seq('build-dev', tasks, done);
});