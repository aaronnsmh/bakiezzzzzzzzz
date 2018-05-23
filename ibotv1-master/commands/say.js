exports.run = (Discord, client, message, args) => {

let sender = message.author;

let sendchannel = message.channel;

       let allowedRole = message.guild.roles.find("name", "[-] Perm");
if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")

        const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
       let reason = args.slice(0).join(" ");
       let staffc = message.guild.channels.find("name", "logs")
        
        if (!staffc) 
            return message.reply('I cannot find a logs channel');

        if (reason.length < 1) 
            return message.reply('You must supply something to say.');


        const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Say\n**User:** ${message.author.tag}\n**They said:** ${reason}\n**In Channel:** ${sendchannel}`);
        staffc.send({embed});

        
        
}
