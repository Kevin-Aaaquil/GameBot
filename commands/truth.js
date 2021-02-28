// Made With Love By Kevin and Shawshank

const db = require('./../data');
const _db = db.getDb();
const Discord = require('discord.js');
async function test() {
  try {
    let index = await _db.collection('truth').countDocuments();
    let i = Math.floor(Math.random() * index); //use a random operator here
    let data = await _db.collection('truth').findOne({ index: i });
    console.log(data.name);
    return data;
  } catch (error) {}
}

module.exports = {
  name: 'truth',
  description: 'truth',
  execute(message, args) {
    test().then(data => {
      const embed = new Discord.MessageEmbed()
        .setColor('#FF1414')
        .setTitle('Truth? very brave of you my child.')
        .setDescription(data.statement)
        .setTimestamp()
        .setFooter('created with love by Kevin and Shawshank')
        .setThumbnail('https://cdn.discordapp.com/attachments/768427821755793428/814141761210679316/unknown.png');
      message.channel.send(embed);
    });
    // message.channel.send();
  },
};
