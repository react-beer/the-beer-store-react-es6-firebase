# The Beer Store React + ES6 + Firebase

## Demo

[![the-beer-store-react-es6-firebase](https://raw.githubusercontent.com/react-beer/the-beer-store-react-es6-firebase/master/the-beer-store.png)](http://react-beer.github.io/the-beer-store-react-es6-firebase/)

> [Check it live](http://react-beer.github.io/the-beer-store-react-es6-firebase/).

## Getting Started

### Installation

First of all, install the dependencies to run this App.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:react-beer/the-beer-store-react-es6-firebase.git
$ cd the-beer-store-react-es6-firebase

# install dependencies
$ npm install
# run tasks and serve
$ gulp
```

With the commands above, you have everything to start.

```
.
├── bower.json
├── build
│   ├── css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap-theme.min.css
│   │   ├── jquery.bootstrap-touchspin.min.css
│   │   └── style.css
│   ├── fonts
│   │   ├── glyphicons-halflings-regular.eot
│   │   ├── glyphicons-halflings-regular.svg
│   │   ├── glyphicons-halflings-regular.ttf
│   │   ├── glyphicons-halflings-regular.woff
│   │   └── glyphicons-halflings-regular.woff2
│   ├── img
│   │   ├── beers
│   │   │   ├── bamberg-o-calibre.png
│   │   │   ├── biritis.png
│   │   │   ├── blue-moon.png
│   │   │   ├── brewdog-punk-ipa.png
│   │   │   ├── burgman-lager.png
│   │   │   ├── cascahell.png
│   │   │   ├── chimay-rouge.png
│   │   │   ├── eisenbahn-pilsen.png
│   │   │   ├── goose-island.png
│   │   │   ├── gordelicia.png
│   │   │   ├── hellbeirao-pils.png
│   │   │   ├── juan-caloto.png
│   │   │   ├── jupiter-ipa.png
│   │   │   ├── leffe-radieuse.png
│   │   │   ├── madalena-stout.png
│   │   │   └── schornstein-ipa.png
│   │   ├── bg-header.jpg
│   │   ├── favicon-128.png
│   │   ├── favicon-32.png
│   │   ├── favicon.ico
│   │   └── fork-ribbon.png
│   └── js
│       ├── App.js
│       ├── bootstrap.min.js
│       ├── html5shiv.min.js
│       ├── jquery.bootstrap-touchspin.min.js
│       ├── jquery.min.js
│       └── respond.min.js
├── CONTRIBUTING.md
├── gulp
│   ├── index.js
│   ├── paths.js
│   └── tasks
│       ├── bower-install.js
│       ├── browser-sync.js
│       ├── default.js
│       ├── deploy.js
│       ├── help.js
│       ├── images.js
│       ├── scripts.js
│       ├── styles.js
│       └── watch.js
├── gulpfile.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── img
│   │   ├── beers
│   │   │   ├── bamberg-o-calibre.png
│   │   │   ├── biritis.png
│   │   │   ├── blue-moon.png
│   │   │   ├── brewdog-punk-ipa.png
│   │   │   ├── burgman-lager.png
│   │   │   ├── cascahell.png
│   │   │   ├── chimay-rouge.png
│   │   │   ├── eisenbahn-pilsen.png
│   │   │   ├── goose-island.png
│   │   │   ├── gordelicia.png
│   │   │   ├── hellbeirao-pils.png
│   │   │   ├── juan-caloto.png
│   │   │   ├── jupiter-ipa.png
│   │   │   ├── leffe-radieuse.png
│   │   │   ├── madalena-stout.png
│   │   │   └── schornstein-ipa.png
│   │   ├── bg-header.jpg
│   │   ├── favicon-128.png
│   │   ├── favicon-32.png
│   │   ├── favicon.ico
│   │   └── fork-ribbon.png
│   ├── js
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Cart.js
│   │   │   ├── Footer.js
│   │   │   ├── GitHubFork.js
│   │   │   ├── Header.js
│   │   │   ├── Product.js
│   │   │   ├── Products.js
│   │   │   └── Store.js
│   │   └── utils
│   │       └── data-beers.js
│   └── styl
│       ├── _components.styl
│       ├── _footer.styl
│       ├── _global.styl
│       ├── _responsive.styl
│       ├── style.styl
│       ├── _toc.styl
│       └── _variables.styl
└── the-beer-store.png
```

## Tasks

- `gulp`: Initialize watch for changes and a server (localhost:3000);
- `gulp bower-install`: Move dependencies to folder `build/`;
- `gulp scripts`: Execute js files;
- `gulp styles`: Compile stylus files;
- `gulp images`: Compress image files;
- `gulp watch`: Call for watch files;
- `gulp browser-sync`: Call for browsersync;
- `gulp help`: Show help with gulp options;
- `gulp deploy`: Deploy compiled files at `build/` to `github` on branch `gh-pages`.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_48x48.png) | **Android** | **iOS** | **Windows Phone** |
:---: | :---: | :---: | :---: | :---: |  :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

If you want to help, please read the [Contributing](https://github.com/react-beer/the-beer-store-react-es6-firebase/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, check [Releases](https://github.com/react-beer/the-beer-store-react-es6-firebase/releases).

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
