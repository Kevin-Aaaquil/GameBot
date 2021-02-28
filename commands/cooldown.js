// Made With Love By Kevin and Shawshank

const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
  name: 'cooldown',
  description: 'sends a cooldown message reply',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#FF1414')
      .setFooter('Made with bhasad by Kaabil and Kingslayer')
      .setTitle('Ruko zara, sabar karo')
      .setURL('https://github.com/Kevin-Aaaquil/TruthDare')
      .setThumbnail('https://cdn.discordapp.com/attachments/768427821755793428/814136487305543690/Trust.jpg')
      .setDescription('Going a little too fast there bud. Slowdown.')
      .setFooter('Created with lob by Kevin and Shawshank')
      .setImage('https://cdn.discordapp.com/attachments/768427821755793428/815550862284816384/rukozara.jpg');
    message.reply(embed);
  },
};
