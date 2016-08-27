
// Standalone WS server
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 4080 });

wss.on('connection', function (connection) {
  connection.on('message', function (message) {
    console.log('received: %s', message);

    wss.broadcast(message);
  });

  connection.send(
    JSON.stringify({
      username: 'Server',
      message: 'Hi. You are connected to the server.'
    }));
});

wss.broadcast = function (data) {
  this.clients.forEach(function (client) {
    client.send(data);
  });
};