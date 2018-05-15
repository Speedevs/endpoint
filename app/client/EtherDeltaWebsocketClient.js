var io = require('socket.io-client');

var socket = io.connect('https://socket.etherdelta.com', {
  transports: ['websocket'],
});

socket.emit('getMarket', {
  token: '0x000',
  user: void 0,
});
socket.once('market', function(
  result
){
  console.log(result);
});
