// @see
// https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
// https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.65ts5n1sw
'use strict';
var webpack = require('webpack'),
    path = require('path'),
    context = path.resolve(__dirname, 'src/client'),
    BUILD_DIR = path.join(context, 'public'),
    APP_DIR = path.join(context, 'app'),
    config;

config = {
    //context: context, // does not seem to do shiznit
    entry: {
        core: [
            path.join(APP_DIR, '_setup.js'),
            path.join(APP_DIR, 'pages/core.jsx'),
        ],
        'project-home': path.join(APP_DIR, 'pages/project-home.jsx'),
        'get-started': path.join(APP_DIR, 'pages/get-started.jsx')

    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */ "core",
            /* filename= */ "core.bundle.js"
        ),

        // moment js does not allow for individual locales to be imported, so exlcude the extras
        // @see http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack/25426019
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/, /xxxx/
        )
        // new webpack.ContextReplacementPlugin(
        //  /moment[\/\\]locale$/, /de|fr|hu/
        // )
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

    ]
};

module.exports = config;
