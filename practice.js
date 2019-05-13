var http = require('http');
var url = require('url');
console.log('server running...');

http.createServer(function (req, res) {
	console.log('one request received')

  	var q = url.parse(req.url, true);	//req.url = localhost:8080/?year=2017&month=february	
  	
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	
  	console.log(q.host); //returns 'localhost:8080'
	console.log(q.pathname); //returns '/default.htm'
	console.log(q.search); //returns '?year=2017&month=february'
	
	var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	console.log(qdata.month); //returns 'february'

  	res.end();
}).listen(8080);