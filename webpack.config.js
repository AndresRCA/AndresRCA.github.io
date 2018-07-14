/*jshint esversion: 6*/
const path = require('path');

module.exports = {
  entry: {
    app: './src/scrollreveal.js',
    print: './src/swipe.js'
  },
  output: {
  	filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{ 
  			test: /\.(sass|scss)$/,
  			use: ['style-loader', 'css-loader', 'sass-loader']
  		},
  		{
       	test: /\.(png|jp(e*)g|jpg)$/,
      	use: ['file-loader']
      }
  	]
  },
  mode: 'development'
};