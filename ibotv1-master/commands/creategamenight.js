const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.guild.channels.find("name", "gamenight")
    if (!staffc) return message.channel.send("I can not find the log channel. For logs, get the sever admin to make a channel called `logs`.");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
    

    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time! Please specify how many ms from now you would like the gamenight!");

    await (tomute.addRole(muterole.id));
    message.reply(`Gamenight has been created forfor ${ms(ms(mutetime))} from now!`);
      const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Mute\n**Target:** ${tomute.tag}\n**Moderator:** ${message.author.tag}\n**Length:** ${ms(ms(mutetime))}`);
        staffc.send({embed});
        message.tomute.send(`You have been muted for **${ms(ms(mutetime))}** by ${message.author.tag}`);
    
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

}
