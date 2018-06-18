exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You must be an `ADMINISTRATOR` to use the `sayembed` command in the " + message.guild.name + " server!")
let message2 = args.slice(0).join(" ");
const embed = new Discord.RichEmbed()
            .setColor("#6d6e6f")
            .setDescription(message2);
        message.channel.send({embed});
}
