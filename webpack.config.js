var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.(js|jsx)$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "stage-0"
      ],
      "plugins": []
    }
  } ,
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader!postcss-loader'
  },
  {
    test: /\.sass/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
  },
  {
    test: /\.scss/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
  },
  {
    test: /\.less/,
    loader: 'style-loader!css-loader!postcss-loader!less-loader'
  },
  {
    test: /\.styl/,
    loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
  },
  {
    test: /\.(png|jpg|gif|woff|woff2)$/,
    loader: 'url-loader?limit=8192'
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js']
  },
};
