var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filebuf = fs.readFileSync('index.html');
  var contents = filebuf.toString();
  response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
