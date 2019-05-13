var http = require('http');
var fs = require('fs');
console.log('Server listening on the port 8080...');

http.createServer(function (req, res) {
	console.log('one request received')
  	
	fs.readFile('index.html', (err, data)=>{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log('...Incoming Request: ' + req.url);
  		res.end();
	})


}).listen(8080);