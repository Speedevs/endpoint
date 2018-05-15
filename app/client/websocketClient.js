// Hack https://github.com/socketio/socket.io-client/issues/961
import Response from 'http-browserify/lib/response';
if (!Response.prototype.setEncoding) {
  Response.prototype.setEncoding = function(encoding) {
    // do nothing
  }
}

// Socket io client
const PORT = 8080;
let socket = require('socket.io-client')(`http://localhost:${PORT}`);

socket.on('connect', function() {
  console.log('Client connected');
  socket.emit('ferret', 'tobi', function (data) {
    console.log(data); // data will be 'woot'
  });
});
socket.on('disconnect', function() {
  console.log('Client disconnected');
});
