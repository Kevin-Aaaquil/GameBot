const { TextChannel } = require('discord.js');
const db = require('./../data');
const _db = db.getDb();
async function test() {
  try {
    let i = 1;
    let data = await _db.collection('truth').findOne({ index: i });
    console.log(data.name);
    return data.statement;
  } catch (error) {}
}
module.exports = {
  name: 'help',
  description: 'Helps confused souls',
  execute(message, args) {
    test().then(data => {
      message.channel.send(data);
    });
    message.channel.send('Hey Guys, New Bot for fun GAMES');
  },
};
