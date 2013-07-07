var express = require('express');

var fs = require('fs');
var i = fs.readFileSync('index.html').toString('utf8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(i);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
