'use strict';

// Necessary plugins
var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var paths    = require('../paths');

// Call Images
module.exports = gulp.task('images', function() {
  return gulp.src(paths.source.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest(paths.build.img));
});
