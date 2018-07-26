exports.run = (Discord, client, message, args) => {
	let allowedRole = message.guild.roles.find("name", "[-] Perm");
	if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")
		   let channel1 = message.mentions.channels.first()
		   let title = args[1];
		   if (title == "mod"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448514229780086785/mod.png";
			var color = "#857574";
			   var text = args.slice(2).join(" ");
		   } else if (title == "corp"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515837394026497/corporate.png";
			var color = "#b8dee0";
			   var text = args.slice(2).join(" ");
		   } else if (title == "manag"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515839239389184/management.png";
			var color = "#c59989";
			   var text = args.slice(2).join(" ");
		   } else if (title == "studios"){
			var icon = "https://cdn.discordapp.com/attachments/421833835114922006/472112160793952256/21c0ebb659623eb8bf7ed264dd6f4884.png";
			var color = "#efefef";
			   var text = args.slice(2).join(" ");
		   } else if (title == "operation"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515840154009622/operations.png";
			var color = "#c1b6b4";
			   var text = args.slice(2).join(" ");
		   } else if (title == "com"){
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515835997454346/communications.png";
			var color = "#887776";
			   var text = args.slice(2).join(" ");
		   } else{
			var icon = "https://media.discordapp.net/attachments/448221913978896387/448515840606863370/reg.png";
			var color = "6d6e6f";
			var text = args.slice(1).join(" ");
		   }
		   const author = message.author;
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(color)
		   .setThumbnail(icon)
		   .setTitle(":mega: Announcement: ")
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
		   message.delete(10)
		   channel1.send("@here")
		   channel1.send({embed})
	   
}
