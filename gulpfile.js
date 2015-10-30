"use strict";

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),  // Concatenates files
    connect    = require('gulp-connect'), // Runs a local dev server
    eslint     = require('gulp-eslint'),  // Lint JS files, including JSX
    open       = require('gulp-open'),    // Opens a URL in a web browser
    browserify = require('browserify'),   // Bundles JS
    reactify   = require('reactify'),     // Transforms React JSX to JS
    source     = require('vinyl-source-stream'); // Use conventional text
                                                 // streams in Gulp

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'src/stylesheets/epic.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

// Start a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    base: config.devBaseUrl,
    port: config.port,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  return gulp.src('dist/index.html')
             .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  return gulp.src(config.paths.html)
             .pipe(gulp.dest(config.paths.dist))
             .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
      .pipe(connect.reload());
});

// Migrates images to dist dolfder
// Note that I could even optimize images here
gulp.task('images', function() {
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
             .pipe(eslint('.eslintrc'))
             .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['lint', 'js']);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', [
  'lint',   // check javascript code for common mistakes
  'html',   // move html to dist/
  'js',     // browserify, reactify, and bundle js to dist/scripts/
  'css',    // bundle css to dist/css
  'images', // move images to dist/images
  'open',   // open the app in the browser
  'watch'   // watch for html and js changes, process them, and reload the app
]);
