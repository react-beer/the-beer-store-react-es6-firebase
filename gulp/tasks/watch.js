'use strict';

// Necessary plugins
var gulp        = require('gulp');
var buildScript = require('./scripts');
var paths       = require('../paths');
var figlet      = require('figlet');
var chalk       = require('chalk');

// Call Watch
module.exports = gulp.task('watch', function() {
  figlet(' The Beer Store', {
      font: 'Slant'
    }, function(err, data) {
    console.log(chalk.yellow.bold(data) + '\n');
    console.log(' Hit \'' + chalk.blue('<ctrl-c>') + '\' to shutdown.\n');
  });
  
  gulp.watch(paths.source.styl.folder, ['styles']);
  gulp.watch(paths.source.img, ['images']);
  return buildScript('App.js', true);
});
