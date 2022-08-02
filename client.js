const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', ()=> {
    console.log("Successfully connected to game server");
    conn.write('Name: ARC');
    //setInterval(()=>conn.write('Move: up'), 50);
  });
  conn.on('data', (msg) => console.log(msg));
  console.log("Connecting ...");
  return conn;
};

module.exports = { connect };