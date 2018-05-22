const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.guild.channels.find("name", "gamenight")
    if (!staffc) return message.channel.send("I can not find the gamenight channel!");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
    

    let mutetime = args[0];
    if (!mutetime) return message.reply("You didn't specify a time! Please specify how many ms from now you would like the gamenight!");

    await (staffc.send("A gamenight has been scheduled!\n Game: Example Game\n Host: Example Host\n Time From Now: " + ms(mutetime) + "ms"));
    message.reply("Gamenight has been created for: " + ms(mutetime) + "ms from now!");
    let announcetwo = mutetime-600000
    setTimeout(function() {
        message.channel.send(`announce 2`);
    }, ms(announcetwo));
    
    setTimeout(function() {
        message.channel.send(`event start!`);
    }, ms(mutetime));

}
