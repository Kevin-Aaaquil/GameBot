// Made With Love By Kevin and Shawshank

const db = require('./../data');
const _db = db.getDb();
const Discord = require('discord.js');
async function test() {
  try {
    let index = await _db.collection('dare').countDocuments();
    let i = Math.floor(Math.random() * index); //use a random operator here
    let data = await _db.collection('dare').findOne({ index: i });
    return data.statement;
  } catch (error) { }
}

module.exports = {
  name: 'dare',
  description: 'dare',
  execute(message, args) {
    test().then(data => {
      const embed = new Discord.MessageEmbed()
        .setColor('#14FFFF')
        .setTitle('You Think You Are Strong Enough? Lets See.')
        .setDescription(data)
        .setTimestamp()
        .setThumbnail(
          'https://cdn.discordapp.com/attachments/768427821755793428/814147050639851560/1_9QwZkXU_gfk5FJotW-dCnA.jpeg',
        )
        .setFooter('created with lob by Kevin and Shawshank');
      message.channel.send(embed);
    });
    // message.channel.send();
  },
};
