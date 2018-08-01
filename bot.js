const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "y";
client.on('ready', () => {
    console.log('I am ready!');
});
client.user.setGame(`Just Be Your Self :)`,"http://twitch.tv/S-F")
client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});



client.login(process.env.BOT_TOKEN);  

