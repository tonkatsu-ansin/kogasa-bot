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
    var results = [];
    for(let i of range(0, trials)){
      results.push(Math.floor(xorshift.random() * diceCount) +1);
    }
    msg.reply(`${msg.match[0]} -> ${results} = ${results.reduce((prev, current) => prev + current)}`);
  })
}
