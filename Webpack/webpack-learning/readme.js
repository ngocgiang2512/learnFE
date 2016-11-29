/*
 * source: https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
 */


/*
 * install webpack
 */
$ npm install --save-dev -g webpack

/*
 * configuration
 */
module.exports = {
    entry: {
        helloWorld: './js/helloworld'
    },
    output: {
        filename: 'public/[name].js'
    }
};

// purpose: take ./js/helloworld as an input and to process it into a public/helloWorld.js file

/*
 * compile
 */
$ webpack

/*
 * compile + minify
 */
$ webpack --production
$ webpack -p

/*
 * use npm script
 */
{
  // ...
  "scripts": {
    "start": "webpack -p"
  },
  // ...
}

/*
 * install webpack dev server
 */
$ npm install --save-dev webpack-dev-server
// This module serves all your compiled files through a web server (by default on localhost:8080)

/*
 * run webpack dev server
 */
$ webpack-dev-server --progress --colors

/*
 * Live reload
 */
// Webpack uses Socket.io to know when to refresh browser. We launched the Socket.io server, but didn’t update our client script. Webpack eases our work with a pre-built module. Just modify your entry parameter:

module.exports = {
    entry: {
        helloWorld: [
            'webpack-dev-server/client?http://localhost:8080',
            './js/helloworld.js',
        ]
    }
    // ...
};


/*
 * Compile SASS
 */
// To compile SASS files, you need a SASS loader of course, but also a CSS and a style loaders. Indeed, Webpack understands only JS. when we write a require('style.scss'), SASS loader turns it into style.css, which should then be turned into JavaScript with CSS loader, and finally embedded as styles using the style loader.

/*
 * install package
 */
$ npm install --save-dev sass-loader css-loader style-loader

/*
 * configuration
 */
module.exports = {
    // ...
    module: {
        loaders: [
            // ...
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}

/*
 * Move CSS in external stylesheet
 */

/*
 * install package
 */
$ npm install --save-dev extract-text-webpack-plugin

/*
 * configuration
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // ...
    module: {
        loaders: [
            // ...
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
}