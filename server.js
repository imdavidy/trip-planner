
var http = require('http');
const server = http.createServer();
server.on('request', require('./app'));

server.listen(3000, function() {
  console.log('listening on port 3000');
});
