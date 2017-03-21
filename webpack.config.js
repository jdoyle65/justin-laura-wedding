var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js');
var APP_DIR = path.resolve(__dirname, 'assets/js');

var config = {
    entry: [
        'whatwg-fetch',
        APP_DIR + '/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
