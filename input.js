const handleUserInput = function (key) {
  if (key === '\u0003') process.exit();
  /*if (key === '\u001b[A') conn.write('Move: up');
  if (key === '\u001b[B') conn.write('Move: down');
  if (key === '\u001b[C') conn.write('Move: right');
  if (key === '\u001b[D') conn.write('Move: left');*/

};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
module.exports = {
  setupInput
}