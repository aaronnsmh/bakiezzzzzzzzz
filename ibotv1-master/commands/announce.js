exports.run = (Discord, client, message, args) => {
	let allowedRole = message.guild.roles.find("name", "[-] Perm");
	if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")
		   let channel1 = message.mentions.channels.first()
		   let title = args[1];
		   if (title == "mod"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448514229780086785/mod.png";
			var color = "#857574";
		   } else if (title == "corp"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515837394026497/corporate.png";
			var color = "#b8dee0";
		   } else if (title == "manag"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515839239389184/management.png";
			var color = "#c59989";
		   } else if (title == "operation"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515840154009622/operations.png";
			var color = "#c1b6b4";
		   } else if (title == "com"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515835997454346/communications.png";
			var color = "#887776";
		   } else{
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515840606863370/reg.png";
			var color = "6d6e6f";
		   }
		   const text = args.slice(2).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(color)
		   .setThumbnail(icon)
		   .setTitle(":mega: Announcement: ")
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
		   message.delete(10)
		   channel1.send({embed})
	   
}
