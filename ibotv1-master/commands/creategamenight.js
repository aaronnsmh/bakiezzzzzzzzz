const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.mentions.channels.first()
    if (!staffc) return message.channel.send("I can not find the gamenight channel!");
    let allowedRole = message.guild.roles.find("name", "[-] Perm");
	if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")
    
    let icon = "https://media.discordapp.net/attachments/448221913978896387/448515840606863370/reg.png";
    let mutetime = args[1];
    let game = args[2];
    let host = message.author;
    let link = args [3];
    if (!mutetime) return message.reply("You didn't specify a time! Please specify how many ms from now you would like the gamenight!");

    var emebedannounce = new Discord.RichEmbed()
        
    .setFooter("Bakiez Gamenight | Copyright 2018")
    .setTitle("Bakiez Gamenight Announcement")
    .setThumbnail(icon)
    .setDescription("Bakiez is having a gamenight! Check back here before it starts for a link!")
    .addField("Game:", game)
    .addField("Time (from now):", ms(mutetime))
    .addField("Host:", host)
    .setColour(a9d9db)

    staffc.send(emebedannounce);
    message.reply("Gamenight has been created for: " + ms(mutetime) + "ms from now! Announcement should be pushed out.");
    let announcetwo = mutetime-300000
    setTimeout(function() {
        var emebedbefore = new Discord.RichEmbed()
        
.setFooter("Bakiez Gamenight | Copyright 2018")
.setTitle("Bakiez Gamenight Announcement")
.setThumbnail(icon)
.setDescription("The gamenight is due to be hosted in 5 minutes! Keep an eye out!")
.addField("Host:", host)
.addField("Game:", game)
.addField("Link:", link)
.setColour(a9d9db)

        message.channel.send(emebedbefore);
    }, ms(announcetwo));
    
    setTimeout(function() {
        var emebedstart = new Discord.RichEmbed()
        
.setFooter("Bakiez Gamenight | Copyright 2018")
.setTitle("Bakiez Gamenight Announcement")
.setThumbnail(icon)
.setDescription("The gamenight is now starting!")
.addField("Join Here:", link)
.setColour(a9d9db)

message.channel.send(emebedstart);
        
    }, ms(mutetime));

}
