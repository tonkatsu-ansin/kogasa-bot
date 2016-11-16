var xorshift = require('xorshift');
function* range (begin, end, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}
module.exports = function(robot){
  robot.hear(/([1-9][0-9]*)d([1-9][0-9]*)/, function(msg){
    const trials = parseInt(msg.match[1], 10);
    const diceCount = parseInt(msg.match[2], 10);
    const result =
      [Math.floor(xorshift.random() * 6) + 1 for x in range(0, trials)];
    msg.reply(`${msg.match[0]} -> ${result} = ${result.reduce((prev, current) => prev + current;)}`)
  });
}
