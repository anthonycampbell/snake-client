const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.77',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (msg) => console.log(msg));
  return conn;
};

console.log("Connecting ...");
connect();