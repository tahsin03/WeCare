var http = require('http');

var server = http.createServer((req, res) => {
//  console.log(req.method + " " + req.url + " " + req.httpVersion);

  res.writeHead(200, {"Content-Type": "text/html"});

  res.write("<h1> Hello </h1>");
  res.end();
});

server.listen(8000);