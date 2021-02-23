
const db = require('./../data');
const _db = db.getDb();
async function test() {
  try {
    let i = 1;
    let data = 'empty';
    let data1 = await _db.collection('truth').findOne({ index: i });
    console.log(data1.statement);
    return data1.statement;
  } catch (error) {}
}
=======
module.exports = {
    name: "help",
    description: "Helps confused souls",
    execute(message, args) {
        message.channel.send("Hey Guys, New Bot for fun GAMES");
    },
};

