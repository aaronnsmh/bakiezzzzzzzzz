exports.run = async (Discord, client, message, args) => {
    if (message.author.id !== '178350684922576896' && message.author.id !== '281060171730649089' && message.author.id !== '272712813934411796') return message.channel.send("You have invalid permissions");
    message.channel.send('Restarting, please wait 30 seconds before running next command.')
    setInterval(function(){ process.exit(); }, 3000);
      
    

      
}
