"use strict";

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),  // Concatenates files
    connect    = require('gulp-connect'), // Runs a local dev server
    eslint     = require('gulp-eslint'),  // Lint JS files, including JSX
    open       = require('gulp-open'),    // Opens a URL in a web browser
    browserify = require('browserify'),   // Bundles JS
    reactify   = require('reactify'),     // Transforms React JSX to JS
    shell      = require('gulp-shell'),   // Command line interface for gulp
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
      'src/stylesheets/base.css',
      'src/stylesheets/epic.css'
    ],
    dist: './dist',
    mainJs: './src/main.js',
    tests: './src/**/__tests__/*.js'
  }
};

// start a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    base: config.devBaseUrl,
    port: config.port,
    livereload: true
  });
});

// open the index page for the app
gulp.task('open', ['connect'], function() {
  return gulp.src('dist/index.html')
             .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

// copy html from the src to the dist dir and trigger a reload
gulp.task('html', function() {
  return gulp.src(config.paths.html)
             .pipe(gulp.dest(config.paths.dist))
             .pipe(connect.reload());
});

// transform jsx files into javascript, resolve require() calls for the browser,
// and bundle into 1 .js file.  copy to dist and reload the browser.
gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

// bundle css files into 1 bundle.css file and copy to dist
gulp.task('css', function() {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
      .pipe(connect.reload());
});

// copy images to dist, note that we could optimize images here
gulp.task('images', function() {
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());
});

// lint all javascript
gulp.task('lint', function() {
  return gulp.src(config.paths.js)
             .pipe(eslint('.eslintrc'))
             .pipe(eslint.format());
});

gulp.task('test', shell.task('npm test', {
  // So our task doesn't error out when a test fails
  ignoreErrors: true
}));

// watch for file changes, and run tasks when files change
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['lint', 'js']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch([config.paths.js, config.paths.tests], ['test'])
});

// task that is run by default
gulp.task('default', [
  'lint',   // check javascript code for common mistakes
  'html',   // move html to dist/
  'js',     // browserify, reactify, and bundle js to dist/scripts/
  'css',    // bundle css to dist/css
  'images', // move images to dist/images
  'open',   // open the app in the browser
  'test',   // run the test suite
  'watch'   // watch for html and js changes, process them, and reload the app
]);
