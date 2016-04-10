'use strict';

// Necessary plugins
var gulp  = require('gulp');
var chalk = require('chalk');

// Call Help
module.exports = gulp.task('help', function() {
  console.log(chalk.bold('\nOptions:'));
  console.log(chalk.blue('\n-----------------------------------------------------------------------------'));
  console.log(chalk.blue.bold(' gulp ') + '- Initialize watch for changes and a server (localhost:3000)');
  console.log(chalk.blue.bold(' gulp bower-install ') + '- Move dependencies to folder build/');
  console.log(chalk.blue.bold(' gulp scripts ') + '- Execute js files');
  console.log(chalk.blue.bold(' gulp styles ') + '- Compile stylus files');
  console.log(chalk.blue.bold(' gulp images ') + '- Compress image files');
  console.log(chalk.blue.bold(' gulp watch ') + '- Call for watch files');
  console.log(chalk.blue.bold(' gulp browser-sync ') + '- Call for browsersync');
  console.log(chalk.blue.bold(' gulp deploy ') + '- Deploy compiled files at build/ to github on branch gh-pages');
  console.log(chalk.blue('-----------------------------------------------------------------------------\n'));
  console.log(' Documentation can be found at: https://github.com/react-beer\n');
});
