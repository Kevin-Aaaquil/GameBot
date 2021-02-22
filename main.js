const discord = require('discord.js');
const config = require('./config.json');
const data = require('./data');
const db = require('./data');
let count = 10;
db.connectToServer(function (err) {
  if (err) console.log(err);
  console.log('................DATABASE CONNECTED');

  const client = new discord.Client();

  const prefix = '*'; //comment start

  const fs = require('fs');

  client.commands = new discord.Collection();

  const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
  } //comment end

  client.once('ready', err => {
    console.log('..................DISCORD CONNECTED!');
  });

  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
      //Help
      let data = 'truth and dare add karo bkl';
      // async function helpdata() {
      //   try {
      //     data = await db.getDb().collection('truth').countDocuments();
      //     return data;
      //     console.log(data);
      //   } catch (error) {
      //     console.log('error');
      //   }
      // }
      // helpdata().then(data => {
      client.commands.get('help').execute(message, args, data);
      // });
    } else message.channel.send('Message Barbaad Behenchod'); // To test the working of prefix during introduction of new commands
  });

  client.login(config.token);
});
