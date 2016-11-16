var cronjob = require('cron').CronJob;
var hangly = 5;
module.exports = function(robot) {
  robot.respond(/test/, function(msg){
    robot.send({room: 'bot'}, 'おどろけーっ');
  });
  new cronjob('0 * * * * ', () => {
    hangly--;
  });
  robot.respond(/🍸|🍡|🍩|🍉|🍕|🍍|🍙|🍽|🍎|🌭|🍧|🍲|🍺|🍅|☕|🍵|🍿|🍨|🍳|🍻|🍫|🌶|🌽|🍛|🍐|🍜|🍪|🍢|🍷|🍥|🍣|🍗|🍞|🍾|🍦|🍚|🍇|🍘|🍹|🍰|🍏|🍼|🍓|🍝|🍤|🎂|🍶|🍒|🍟|🍑|🍮|🍬|🍠|🍈|🍯|🍋|🍭|🍌|🍖|🧀|🍳|🍊|🍆|🍔|🌮|🌯|🍱/, function(msg){
    if(hangly < 3){
      msg.reply('ありがとう！いただきまーす');
      hangly++;
    }else if(hangly ===  10){
      msg.reply('もうたべきれない…');
    }else{
      msg.reply('ご飯ありがとう！');
      hangly++;
    }
  });
}
