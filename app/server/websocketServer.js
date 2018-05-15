import http from 'http';
import socket_io from 'socket.io';

const PORT = 8080;

Meteor.startup(() => {
  // Server
  const server = http.createServer();
  const io = socket_io(server);

  io.set('transports', ['websocket']);

  let counter = 0;

  // New client
  io.on('connection', function(socket) {
    console.log('new socket client');
    socket.on('getMarket', function (token, user) {
      console.log('Server received get market request.');
      console.log(JSON.stringify(token));
      console.log(JSON.stringify(user));
      socket.emit('market', 'The market');
    });
  });

  // Start server
  try {
    server.listen(PORT);
  } catch (e) {
    console.error(e);
  }
});
