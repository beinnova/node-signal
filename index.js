'use strict';

var http = require('http');
var http = require('http');
var server = http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
}).listen(3000, '0.0.0.0');

console.log("Started");
var SIGNAL = {
	'SIGINIT':2,
	'SIGTERM':15
};

function ShutDown(signal, value) {

	server.close(function() {
		console.log("Stopped from signal:", signal);
		process.exit(128 + value);

	});
}

Object.keys(SIGNAL).forEach(function(signal) {
	process.on(signal, function() {
		ShutDown(signal, SIGNAL[signal]);
		ShutDown(signal, SIGNAL[signal]);
	});
});
