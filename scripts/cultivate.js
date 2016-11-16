module.exports = function(robot) {
  robot.respond(/^(ping)/, function(msg){
    msg.reply('おどろけー');
  });
  robot.respond(/🍸|🍡|🍩|🍉|🍕|🍍|🍙|🍽|🍎|🌭|🍧|🍲|🍺|🍅|☕|🍵|🍿|🍨|🍴|🍳|🍻|🍫|🌶|🌽|🍛|🍐|🍜|🍪|🍢|🍷|🍥|🍣|🍗|🍞|🍾|🍦|🍚|🍇|🍘|🍹|🍰|🍏|🍼|🍓|🍝|🍤|🎂|🍶|🍒|🍟|🍑|🍮|🍬|🍠|🍈|🍯|🍋|🍭|🍌|🍖|🧀|🍳|🍊|🍆|🍔|🌮|🌯|🍱/, function(msg){
    msg.reply('ありがとう！');
  });
}
