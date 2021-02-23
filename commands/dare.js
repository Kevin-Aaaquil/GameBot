const db = require('./../data');
const _db = db.getDb();
async function test() {
  try {
    let i = 1; //use a random operator here
    let data = await _db.collection('dare').findOne({ index: i });
    return data.statement;
  } catch (error) {}
}

module.exports = {
  name: 'dare',
  description: 'dare',
  execute(message, args) {
    test().then(data => {
      message.channel.send(data);
    });
    // message.channel.send();
    message.channel.send('something is not something. dare edition');
  },
};
