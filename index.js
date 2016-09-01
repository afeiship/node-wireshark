(function() {

  'use strict';

  var http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({
      secure:false
    });


  module.exports = function(inOptions) {
    var targetHost = 'http://' + inOptions.target.hostname + ':' + inOptions.target.port;
    var callback = inOptions.callback || function(req, res) {
      console.log('Current request url is :', req.url);
    };
    var server = http.createServer(function(req, res) {
      callback(req, res);
      proxy.web(req, res, {
        target: targetHost
      });
    });
    server.listen(inOptions.proxy.port);
    console.log("listening on port " + inOptions.proxy.port);
  };


}())
