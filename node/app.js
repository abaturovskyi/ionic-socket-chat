
// Standalone WS server
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 4080 });

wss.on('connection', function (connection) {

  var clientIp = connection._socket.address().address;
  console.log('connected: ' + clientIp); // Logging clientIp

  connection.on('message', function (message) {
    console.log('received: %s', message);

    wss.broadcast(message);
  });

  connection.send( // Hello message
    JSON.stringify({
      t: 'm',
      u: 'Server',
      m: 'Hi. You are connected to the server.'
    }));
});

wss.broadcast = function (data) {
  this.clients.forEach(function (client) {
    client.send(data);
  });
};