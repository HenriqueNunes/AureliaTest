var path = require('path');

var appRoot = 'src/';
var outputRoot = 'wwwroot/debug/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  maps: appRoot + '**/*.js.map',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
