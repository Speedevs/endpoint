import http from 'http';
import socket_io from 'socket.io';

const PORT = 8080;

// { tokenAddr: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
//   quoteVolume: 1000.1,
//   baseVolume: 212.3,
//   last: 0.245,
//   percentChange: 0.0047,
//   bid: 0.243,
//   ask: 0.246 },
function ReturnTickerItem(_tokenAddr, _quoteVolume, _baseVolume, _last, _percentChange, _bid, _ask){
  this.tokenAddr = _tokenAddr;
  this.quoteVolume = _quoteVolume;
  this.baseVolume = _baseVolume;
  this.last = _last;
  this.percentChange = _percentChange;
  this.bid = _bid;
  this.ask = _ask;
}
function aReturnTickerItem(name, _tokenAddr, _quoteVolume, _baseVolume, _last, _percentChange, _bid, _ask){
  this['ETH_'+name] = new ReturnTickerItem(_tokenAddr, _quoteVolume, _baseVolume, _last, _percentChange, _bid, _ask);
}
function Market(_returnTicker, _orders, _trades, _myOrders, _myTrades, _myFunds) {
  this.returnTicker = _returnTicker;
  this.orders = _orders;
  this.trades = _trades;
  this.myOrders = _myOrders;
  this.myTrades = _myTrades;
  this.myFunds = _myFunds;
}

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
      socket.emit('market', new Market(new aReturnTickerItem('VIRI', '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374', 1000.1, 212.3, 0.245, 0.0047, 0.243, 0.246)));
    });
  });

  // Start server
  try {
    server.listen(PORT);
  } catch (e) {
    console.error(e);
  }
});
