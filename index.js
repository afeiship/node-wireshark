(function() {

  'use strict';

  var config = require('./proxy_config.json');
  var http = require('http'),
    httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer({});
  var targetHost = 'http://' + config.target.hostname + ':' + config.target.port;
  var server = http.createServer(function(req, res) {
    console.log('Current request url is :',req.url);
    proxy.web(req, res, {
      target: targetHost
    });
  });
  server.listen(config.proxy.port);
  console.log("listening on port " + config.proxy.port);
  
}())
