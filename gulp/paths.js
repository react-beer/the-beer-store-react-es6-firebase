'use strict';

module.exports = {
  source: {
    bowerDir: './bower_components',
    img: './src/img/**/*',
    styl: {
      folder: './src/styl/**/*'
    },
    files: {
      styl: './src/styl/style.styl'
    }
  },

  build: {
    css: './build/css',
    fonts: './build/fonts',
    img: './build/img',
    js: './build/js'
  },

  deploy: {
    pages: ['./.gitignore', './**/*']
  }
};
