const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack');
const config = require('./webpack.config');
const complier = webpack(config);

const app = express();

app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('server is running!')
});
