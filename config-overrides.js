const webpack = require('webpack');
const os = require('os');
const https = require('https');
const stream = require('stream');

module.exports = function override(config, env) {
  // Add polyfills for os, https, and stream
  config.resolve.fallback = {
    os: require.resolve('os-browserify/browser'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
  };

  // Add a plugin to provide process and global variables in the browser
  config.plugins.push(new webpack.ProvidePlugin({
    process: 'process/browser',
    global: require.resolve('global'),
  }));

  return config;
}