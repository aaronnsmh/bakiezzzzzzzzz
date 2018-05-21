exports.run = (Discord, client, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
		   const color = args[0]
		   let channelsend = args[0]
		   let title = args[1];
		   const text = args.slice(2).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(client.user.avatarURL)
		   .setTitle(":mega: Announcement: " + title)
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
		   client.channels.get(channelsend).send({embed});
	   
}
