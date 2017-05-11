const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

let config = {
    entry: ['./app/index.js', './app/styles.sass'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(['css-loader','postcss-loader', 'sass-loader'])}
        ]  
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [ 
        new HTMLWebpackPlugin({
            template: 'app/index.html'
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;