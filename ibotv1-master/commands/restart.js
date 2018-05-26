const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if(message.author.id === '178350684922576896') {
      message.channel.send('Restarted!');
      
      setInterval(function(){ process.exit(); }, 3000);
      
    

  } else {
      
      return;
      
}             
  
