var io = require('socket.io-client');

var socket = io.connect('https://socket.etherdelta.com', {
  transports: ['websocket'],
});

socket.emit('getMarket', {
  token: '0xB561fEF0d624C0826ff869946f6076B7c4f2ba42',
  user: '0x9343938289b0673ffC6DDb905316F52FFE24eB94',
});
socket.once('market', function(
  result
){
  console.log(result);
});
