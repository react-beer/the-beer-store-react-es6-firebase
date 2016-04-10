'use strict';

// Necessary plugins
var gulp = require('gulp');

// Call Default
module.exports = gulp.task('default',
  ['styles', 'images', 'scripts', 'browser-sync', 'watch']
);
