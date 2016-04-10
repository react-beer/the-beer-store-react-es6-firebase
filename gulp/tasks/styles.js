'use strict';

// Necessary plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var stylus       = require('gulp-stylus');
var poststylus   = require('poststylus');
var autoprefixer = require('autoprefixer');
var csscomb      = require('gulp-csscomb');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var paths        = require('../paths');

// Call Styles
module.exports = gulp.task('styles', function() {
  var processors = [
    autoprefixer
  ];
  return gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus({
      use: [
        poststylus(processors)
      ]  
    }))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.build.css))
    .pipe(reload({ stream: true }));
});
