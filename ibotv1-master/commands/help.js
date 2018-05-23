var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const db = require('quick.db')
exports.run = (Discord, client, message, args) => {


        const embed = new Discord.RichEmbed()
		   .setColor("#a9d9db")
		   .setTitle("Bakiez Bot Commands:")
		   .setDescription("Below are the commands for Bakiez Bot. NOTE: These can only be used by users with the `[-] Perm` discord role.")
           .addField("Announce", "Announce #channel Department Description")
           .addField("Say", "Say Message")
           .addField("CreateGamenight", "Cg #channel Time(unit) Game Link")
		   .setFooter("Want your own custom bot? Head to ibot.space or contact TheReal#1781!")
		   .setTimestamp()
message.channel.send({embed})
        

}
