'use strict';

// Necessary plugins
var gulp               = require('gulp');
var browserSync        = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

// Call Browsersync
module.exports = gulp.task('browser-sync', function() {
    browserSync({
        // We need to disable clicks and forms for when we test multiple rooms
        server: {},
        middleware: [historyApiFallback()],
        ghostMode: false
    });
});
