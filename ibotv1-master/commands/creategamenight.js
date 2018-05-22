const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.mentions.channels.first()
    if (!staffc) return message.channel.send("I can not find the gamenight channel!");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
    

    let mutetime = args[1];
    let game = args[2];
    let host = message.author;
    let link = args [3];
    if (!mutetime) return message.reply("You didn't specify a time! Please specify how many ms from now you would like the gamenight!");
    await (staffc.send("**A gamenight has been scheduled!**\n \nGame: " + game + "\n Host: " + host + "\n Time From Now: " + ms(mutetime) + "ms"));
    message.reply("Gamenight has been created for: " + ms(mutetime) + "ms from now!");
    let announcetwo = mutetime-600000
    setTimeout(function() {
        message.channel.send(`@here\n A gamenight is starting in 10 mins! Details:\n **Game:** ` + game + "\n Link: " + link + "\n Host:" + host);
    }, ms(announcetwo));
    
    setTimeout(function() {
        message.channel.send(`The gamenight is now starting! Join here: ` + link);
    }, ms(mutetime));

}
