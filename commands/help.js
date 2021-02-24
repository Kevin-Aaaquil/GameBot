const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Helps confused souls',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#FF1414')
      .setFooter('Made with bhasad by Kaabil and Kingslayer')
      .setTitle('Satya, the TruthOrDare Bot.')
      .setURL('https://github.com/Kevin-Aaaquil/TruthDare')
      .setThumbnail('https://cdn.discordapp.com/attachments/768427821755793428/814136487305543690/Trust.jpg')
      .setDescription(
        'Hi! I am a truthordare bot and use (dare) or (truth) to play the game. But be warned, it is not for the weak of heart. Go nuts!',
      )
      .setFooter('Created with lob by Kevin and Shawshank');
    message.channel.send(embed);
  },
};
