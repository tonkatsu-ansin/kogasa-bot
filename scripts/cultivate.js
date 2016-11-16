var cronjob = require('cron').CronJob;
var hangly = 5;
module.exports = function(robot) {
  robot.respond(/test/, function(msg){
    robot.send({room: '#bot'}, 'おどろけーっ');
  });
  new cron('0 * * * * ', () => {
    hangly--;
    if(hangly < 5) {
      robot.send({room: '#bot'}, 'お腹すいたわー');
    }else if(hangly < 2) {
      robot.send({room: '#bot'}, 'ひもじい…');
    }else if(hangly === 0){
      robot.send({room: '#bot'}, 'うらめしやー！！！');
    }
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
