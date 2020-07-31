// 1. create web server
//
var http = require('http');
var router = require('./router.js');
http.createServer(function(req, res) {
  router.home(req,res);
  router.user(req,res);
  // res.end('Hello World\n');
}).listen(1337,'127.0.0.1');
console.log('server running at http:127.0.0.1:1337/');

// 2. handle http route get and POST
//

// 4. function that handles reading of files and merge in value
