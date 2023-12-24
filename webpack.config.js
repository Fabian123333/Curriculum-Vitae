const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = [
  // Client Side Rendering Configuration
  {
    entry: './src/index.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(true),
      }),
      new MiniCssExtractPlugin()
    ]
  },
  // Server Side Rendering Configuration
  {
    entry: './src/server.jsx',
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()], 
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(false),
      }),
      new CopyPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, 'public'), 
            to: path.resolve(__dirname, 'build') 
          },
        ],
      }),
    ]
  }
];
