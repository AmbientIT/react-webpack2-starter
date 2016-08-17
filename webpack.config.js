/*eslint-disable*/

'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ENV = require('yargs').argv.env || 'development';

module.exports = webpackMerge.smart(require(`./webpack/${ENV}`), {
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
     {
       test: /\.jsx|.js$/,
       loaders: ['eslint-loader', 'source-map-loader'],
       exclude: /node_modules/,
     },
   ],
    loaders: [
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ 'es2015-native-modules', 'stage-0', 'react' ],
          plugins: ['transform-decorators-legacy'],
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file?name=dist/images/[name].[ext]'
      },
      {
        test: /\.woff2?$/,
        loader: 'url?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
       },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file?name=dist/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${ENV}"`
      }
    }),
  ]
})
