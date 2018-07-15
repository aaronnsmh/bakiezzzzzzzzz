exports.run = (Discord, client, message, args) => {
      message.channel.send('Restarted!');
      client.user.setStatus("idle");
      client.user.setActivity('Restarting', { type: 'PLAYING' });
      setInterval(function(){ process.exit(); }, 3000);
      
    

      
}   
