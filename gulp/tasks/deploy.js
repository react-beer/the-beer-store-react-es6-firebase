'use strict';

// Necessary plugins
var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');
var paths   = require('../paths');

// Deploy to GitHub pages
module.exports = gulp.task('deploy', function() {
  return gulp.src(paths.deploy.pages)
    .pipe(ghPages());
});
