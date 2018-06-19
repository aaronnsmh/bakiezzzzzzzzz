exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You must be an `ADMINISTRATOR` to use the `sayembed` command in the " + message.guild.name + " server!")
let message2 = args.slice(1).join(" ");
let link = args[0]
const embed = new Discord.RichEmbed()
            .setColor("#a9d9db")
            .setDescription(message2)
            .setThumbnail(link)
        message.channel.send({embed});
}
