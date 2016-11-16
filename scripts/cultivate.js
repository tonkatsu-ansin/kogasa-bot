module.exports = function(robot) {
  robot.respond(/^(ping)/, function(msg){
    msg.reply('おどろけー');
  });
  robot.respond(/:hamburger:|:meat_on_bone:|:fork_and_knife:|:hot_pepper:|:oden:|:eggplant:|:stew:|:fried_shrimp:|:beers:|:green_apple:|:spaghetti:|:egg:|:cooking:|:melon:|:peach:|:rice_ball:|:corn:|:taco:|:wine_glass:|:icecream:|:apple:|:dango:|:ramen:|:fries:|:bread:|:rice:|:hotdog:|:pineapple:|:lollipop:|:candy:|:bento:|:sake:|:lemon:|:coffee:|:doughnut:|:pear:|:champagne:|:grapes:|:shaved_ice:|:popcorn:|:banana:|:chocolate_bar:|:watermelon:|:cheese:|:cookie:|:tropical_drink:|:custard:|:burrito:|:cake:|:ice_cream:|:fork_knife_plate:|:curry:|:tomato:|:honey_pot:|:tangerine:|:pizza:|:rice_cracker:|:tea:|:sweet_potato:|:birthday:|:fish_cake:|:cocktail:|:cherries:|:baby_bottle:|:poultry_leg:|:beer:|:sushi:|:strawberry:/, function(msg){
    msg.reply('ありがとう！');
  });
}
