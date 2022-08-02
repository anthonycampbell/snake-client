const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.77',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', ()=> {
    console.log("Successfully connected to game server");
    conn.write('Name: ARC')
  });
  conn.on('data', (msg) => console.log(msg));
  console.log("Connecting ...");
  return conn;
};

module.exports = { connect };